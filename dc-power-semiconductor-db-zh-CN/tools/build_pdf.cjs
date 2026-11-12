#!/usr/bin/env node
/*
 * Build a print-ready A4 PDF of the Simplified Chinese reference translation.
 *
 * Pipeline: Markdown (pandoc, GFM) -> one HTML book -> Mermaid diagrams rendered in
 * Chromium -> Paged.js pagination (running headers, page numbers, TOC page refs) ->
 * Chromium PDF with an outline (bookmarks).
 *
 * Requirements: pandoc >= 2.x on PATH, Noto Serif/Sans CJK SC fonts installed
 * (e.g. `apt-get install fonts-noto-cjk fonts-noto-color-emoji`), and `npm install`
 * in this folder (mermaid, pagedjs, playwright). Run with `npm run build`.
 *
 * Options:
 *   --deps <dir>   directory whose node_modules holds mermaid and pagedjs (default: here)
 *   --out <file>   output PDF path (default: ../dc-power-semiconductor-db-zh-CN.pdf)
 *   --keep-html    keep the intermediate HTML in the build directory
 */
'use strict';

const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ZH_ROOT = path.resolve(__dirname, '..');
const REPO_URL = 'https://github.com/FrankHuang94/powersemi_database_gpt';
const EN_DIR_URL = `${REPO_URL}/tree/main/dc-power-semiconductor-db`;

function arg(name) {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : undefined;
}
const DEPS = path.resolve(arg('--deps') || __dirname);
const OUT_PDF = path.resolve(arg('--out') || path.join(ZH_ROOT, 'dc-power-semiconductor-db-zh-CN.pdf'));
const KEEP_HTML = process.argv.includes('--keep-html');

function requireFrom(mod) {
  try {
    return require(require.resolve(mod, { paths: [DEPS, __dirname] }));
  } catch (e) {
    return require(mod); // fall back to a globally installed module
  }
}
const { chromium } = requireFrom('playwright');

function depFile(rel) {
  const p = path.join(DEPS, 'node_modules', rel);
  if (!fs.existsSync(p)) throw new Error(`Missing dependency file: ${p} (run npm install)`);
  return p;
}

// ---------------------------------------------------------------------------
// Book structure
// ---------------------------------------------------------------------------
const chapterFiles = fs
  .readdirSync(ZH_ROOT)
  .filter((f) => /^\d\d_.*\.md$/.test(f))
  .sort();

const BOOK = [
  { file: 'README.md', id: 'ch-readme', label: '总览' },
  ...chapterFiles.map((f) => ({ file: f, id: `ch-${f.slice(0, 2)}`, label: f.slice(0, 2) })),
  { file: 'TRANSLATION_NOTES.md', id: 'ch-notes', label: '附录' },
];
const idByFile = Object.fromEntries(BOOK.map((c) => [c.file, c.id]));

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function readMeta(md) {
  const get = (re) => (md.match(re) || [])[1];
  return {
    title: (md.match(/^#\s+(.+)$/m) || [])[1] || '',
    updated: get(/最后更新[：:]\*\*\s*([0-9-]+)/) || get(/Last Updated:\*\*\s*([0-9-]+)/) || '',
  };
}

function mdToHtml(file, chapter) {
  const src = fs.readFileSync(path.join(ZH_ROOT, file), 'utf8');
  let html = execFileSync(
    'pandoc',
    ['-f', 'gfm', '-t', 'html5', '--wrap=none', `--id-prefix=${chapter.id}-`],
    { input: src, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }
  );

  // Mermaid: pandoc emits <pre class="mermaid"><code>…</code></pre>; Mermaid needs bare text.
  html = html.replace(
    /<pre class="mermaid"><code>([\s\S]*?)<\/code><\/pre>/g,
    (_, body) => `<figure class="diagram"><pre class="mermaid">${body}</pre></figure>`
  );

  // Rewrite links between translated files to in-book anchors.
  html = html.replace(/href="([^"]+)"/g, (m, href) => {
    if (/^(https?:|mailto:|#)/.test(href)) return m;
    const [p] = href.split('#');
    const base = path.basename(p);
    if (p.startsWith('../dc-power-semiconductor-db')) {
      const enFile = p.replace(/^\.\.\/dc-power-semiconductor-db\/?/, '');
      return `href="${EN_DIR_URL}${enFile ? '/' + enFile : ''}"`;
    }
    if (idByFile[base]) return `href="#${idByFile[base]}"`;
    return m;
  });

  // First blockquote after the H1 is the metadata block.
  html = html.replace(/(<h1[^>]*>[\s\S]*?<\/h1>\s*)<blockquote>/, '$1<blockquote class="meta">');
  // Notes and refresh call-outs.
  html = html.replace(/<blockquote>\s*<p>⚠️/g, '<blockquote class="note warn"><p>⚠️');
  html = html.replace(/<blockquote>\s*<p>🔄/g, '<blockquote class="note refresh"><p>🔄');

  // Chapter number badge in the H1.
  html = html.replace(/<h1([^>]*)>/, `<h1$1><span class="chap-no">${escapeHtml(chapter.label)}</span>`);
  return { html, meta: readMeta(src) };
}

function buildToc(chapters) {
  const items = chapters
    .map(
      (c) =>
        `<li class="toc-${c.id === 'ch-readme' || c.id === 'ch-notes' ? 'aux' : 'ch'}">` +
        `<a href="#${c.id}"><span class="toc-no">${escapeHtml(c.label)}</span>` +
        `<span class="toc-title">${escapeHtml(c.meta.title)}</span><span class="toc-dots"></span></a></li>`
    )
    .join('\n');
  return `<section class="toc" id="toc"><h2 class="toc-heading">目　录</h2><ol>${items}</ol></section>`;
}

function coverSvg() {
  // Simple, self-authored conversion-chain illustration for the cover.
  const nodes = ['电网 / UPS', '电源架', '800 VDC / 48 V 母排', '中间总线转换', 'VRM', 'GPU / 加速器'];
  const w = 158, gap = 20, h = 50, y = 20;
  const parts = nodes.map((n, i) => {
    const x = 10 + i * (w + gap);
    const arrow =
      i < nodes.length - 1
        ? `<line x1="${x + w}" y1="${y + h / 2}" x2="${x + w + gap - 4}" y2="${y + h / 2}" stroke="#9fc1e8" stroke-width="2" marker-end="url(#ah)"/>`
        : '';
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="rgba(255,255,255,0.08)" stroke="#9fc1e8" stroke-width="1.5"/>` +
      `<text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" font-size="17" fill="#ffffff" font-family="Noto Sans CJK SC">${n}</text>${arrow}`;
  });
  const total = 10 + nodes.length * (w + gap);
  return `<svg class="cover-chain" viewBox="0 0 ${total} 90" xmlns="http://www.w3.org/2000/svg">` +
    `<defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#9fc1e8"/></marker></defs>` +
    parts.join('') + '</svg>';
}

function buildHtml(buildDir) {
  const chapters = BOOK.map((c) => ({ ...c, ...mdToHtml(c.file, c) }));
  const readme = chapters[0];
  const dataDate = readme.meta.updated || new Date().toISOString().slice(0, 10);
  const css = fs.readFileSync(path.join(__dirname, 'print.css'), 'utf8');

  const cover = `
<section class="cover">
  <div class="cover-band">
    <div class="cover-kicker">AI / HPC 数据中心供电研究数据库</div>
    <h1 class="cover-title">数据中心功率半导体数据库</h1>
    <div class="cover-sub">Datacenter Power Semiconductor Database</div>
    <div class="cover-edition">简体中文参考译本</div>
    ${coverSvg()}
  </div>
  <div class="cover-body">
    <table class="cover-facts">
      <tr><th>数据截至</th><td>${escapeHtml(dataDate)}</td></tr>
      <tr><th>内容范围</th><td>器件技术（Si / GaN / SiC）、变换拓扑、机架与配电架构、VRM 与数字电源、供应商、初创企业、超大规模云厂商、专利、供应链、市场规模、标准法规、可持续性与投资并购</td></tr>
      <tr><th>章节</th><td>总览 + ${chapterFiles.length} 个编号章节 + 翻译说明附录</td></tr>
      <tr><th>原版</th><td>${REPO_URL}</td></tr>
    </table>
    <p class="cover-disclaimer">本译本仅供参考。英文原版为唯一权威版本；如有任何差异，以英文原版为准。
    文中所有数据、预测与状态标签均沿用英文原版，不构成投资、采购或法律意见。</p>
  </div>
</section>`;

  const notice = `
<section class="notice">
  <h2 class="notice-heading">阅读说明</h2>
  <p>本书由英文数据库逐章翻译排版而成，章节编号、表格结构与英文原版一一对应。每章均采用统一模板：
  概述、关键发现、图解、详细内容、数据表、待解决问题与参考文献。</p>
  <table class="legend">
    <thead><tr><th>标签</th><th>含义</th></tr></thead>
    <tbody>
      <tr><td>[已确认]</td><td>可追溯至一手资料、监管文件或标准来源（英文：CONFIRMED）</td></tr>
      <tr><td>[估计]</td><td>分析师推算；预测附 高/中/低 置信度（ESTIMATED）</td></tr>
      <tr><td>[传闻]</td><td>未经证实的行业报道（RUMORED）</td></tr>
      <tr><td>[待核实]</td><td>需要一手来源进一步确认（TO VERIFY）</td></tr>
      <tr><td>[厂商路线图] / [公司目标]</td><td>前瞻性规划，非已量产或已实现事实</td></tr>
      <tr><td>⚠️ 注意 / 🔄 需要更新</td><td>重要警示 / 快速变化或缺失的信息</td></tr>
    </tbody>
  </table>
  <p>完整的标签对照与术语表见书末附录“翻译说明与术语对照”。图解由 Mermaid 文本图自动渲染；
  参考文献中的网址保持英文原样，便于检索原始来源。</p>
</section>`;

  const body = chapters
    .map((c) => `<section class="chapter" id="${c.id}" data-label="${escapeHtml(c.label)}">\n${c.html}\n</section>`)
    .join('\n');

  const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>数据中心功率半导体数据库（简体中文参考译本）</title>
<meta name="author" content="powersemi_database_gpt">
<meta name="description" content="Simplified Chinese reference translation, data as of ${escapeHtml(dataDate)}">
<style>${css}</style>
<script>window.PagedConfig = { auto: false };</script>
<script src="mermaid.min.js"></script>
<script src="paged.polyfill.js"></script>
</head>
<body>
${cover}
${notice}
${buildToc(chapters)}
${body}
<script>
(async function () {
  try {
    await document.fonts.ready;
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'base',
      themeVariables: {
        fontFamily: '"Noto Sans CJK SC", "Noto Sans SC", sans-serif',
        fontSize: '14px',
        primaryColor: '#eaf2fb',
        primaryBorderColor: '#2f5f98',
        primaryTextColor: '#13263f',
        lineColor: '#56677d',
        secondaryColor: '#f3f6f9',
        tertiaryColor: '#ffffff',
        cScale0: '#2f5f98', cScale1: '#3f7cbf', cScale2: '#5b95cf', cScale3: '#7aaedb',
        cScale4: '#98c3e6', cScale5: '#b6d5ee', cScaleLabel0: '#ffffff', cScaleLabel1: '#ffffff'
      },
      flowchart: { useMaxWidth: false, htmlLabels: true, curve: 'basis', padding: 10 },
      timeline: { useMaxWidth: false }
    });
    // Keep the original Mermaid source so over-wide LR chains can be re-laid out top-to-bottom.
    document.querySelectorAll('pre.mermaid').forEach((el) => { el.dataset.src = el.textContent; });
    await mermaid.run({ querySelector: 'pre.mermaid' });
    const mmPx = 96 / 25.4;
    const tooWide = [];
    document.querySelectorAll('pre.mermaid').forEach((el) => {
      const svg = el.querySelector('svg');
      const vb = svg && svg.viewBox && svg.viewBox.baseVal;
      const src = el.dataset.src || '';
      if (vb && vb.width && (170 * mmPx) / vb.width < 0.75 && /^\s*(flowchart|graph)\s+LR/.test(src)) {
        el.removeAttribute('data-processed');
        el.innerHTML = '';
        el.textContent = src.replace(/^(\s*(?:flowchart|graph))\s+LR/, '$1 TB');
        tooWide.push(el);
      }
    });
    if (tooWide.length) await mermaid.run({ nodes: tooWide });

    // Fit each diagram into the text block without upscaling small diagrams.
    const mm = 96 / 25.4;
    const maxW = 170 * mm, maxH = 105 * mm;
    document.querySelectorAll('figure.diagram svg').forEach((svg) => {
      const vb = svg.viewBox && svg.viewBox.baseVal;
      if (!vb || !vb.width) return;
      const s = Math.min(maxW / vb.width, maxH / vb.height, 1);
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      svg.style.maxWidth = 'none';
      svg.style.width = (vb.width * s).toFixed(1) + 'px';
      svg.style.height = (vb.height * s).toFixed(1) + 'px';
    });

    // Classify wide tables so they can use a smaller type size.
    document.querySelectorAll('section.chapter table').forEach((t) => {
      const cols = t.querySelectorAll('thead th').length || (t.rows[0] ? t.rows[0].cells.length : 0);
      if (cols >= 11) t.classList.add('xwide');
      else if (cols >= 8) t.classList.add('wide');
    });

    await window.PagedPolyfill.preview();
    window.__BUILD_DONE = true;
  } catch (e) {
    window.__BUILD_ERROR = String(e && e.stack || e);
  }
})();
</script>
</body>
</html>`;
  fs.writeFileSync(path.join(buildDir, 'book.html'), html);
  fs.copyFileSync(depFile('mermaid/dist/mermaid.min.js'), path.join(buildDir, 'mermaid.min.js'));
  fs.copyFileSync(depFile('pagedjs/dist/paged.polyfill.js'), path.join(buildDir, 'paged.polyfill.js'));
  return { htmlPath: path.join(buildDir, 'book.html'), dataDate };
}

async function main() {
  const buildDir = fs.mkdtempSync(path.join(os.tmpdir(), 'zh-pdf-'));
  const { htmlPath, dataDate } = buildHtml(buildDir);
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    page.on('console', (m) => {
      if (m.type() === 'error') console.error('[browser]', m.text());
    });
    await page.goto('file://' + htmlPath, { waitUntil: 'load' });
    await page.waitForFunction(() => window.__BUILD_DONE || window.__BUILD_ERROR, null, { timeout: 600000 });
    const err = await page.evaluate(() => window.__BUILD_ERROR);
    if (err) throw new Error('In-page build failed: ' + err);
    const pages = await page.evaluate(() => document.querySelectorAll('.pagedjs_page').length);
    await page.pdf({
      path: OUT_PDF,
      preferCSSPageSize: true,
      printBackground: true,
      outline: true,
      tagged: true,
    });
    console.log(`Wrote ${OUT_PDF} (${pages} pages, data as of ${dataDate})`);
  } finally {
    await browser.close();
    if (KEEP_HTML) console.log('Intermediate HTML kept at', htmlPath);
    else fs.rmSync(buildDir, { recursive: true, force: true });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
