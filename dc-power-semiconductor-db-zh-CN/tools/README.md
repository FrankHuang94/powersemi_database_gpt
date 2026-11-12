# PDF build tooling / PDF 构建工具

Rebuilds `../dc-power-semiconductor-db-zh-CN.pdf` (A4, print-ready) from the translated Markdown files.
用于根据中文 Markdown 文件重新生成可打印的 A4 版 PDF。

```bash
sudo apt-get install -y pandoc fonts-noto-cjk fonts-noto-color-emoji
```

```bash
cd dc-power-semiconductor-db-zh-CN/tools && npm install && npx playwright install chromium
```

```bash
npm run build
```

Pipeline / 流程：pandoc (GFM → HTML) → Mermaid diagrams rendered in Chromium → Paged.js pagination
(cover, table of contents with page numbers, running headers, mirrored margins) → Chromium PDF with
bookmarks. Book order: `README.md` (overview), `00`–`25` chapters, then `TRANSLATION_NOTES.md` (appendix).
