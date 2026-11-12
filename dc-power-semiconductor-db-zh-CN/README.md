# 数据中心功率半导体数据库（简体中文参考译本）
> **最后更新：** 2026-11-12
> **状态：** 草稿
> **标签：** 索引, 数据中心, 功率半导体, AI 基础设施

> ⚠️ 注意：本文件夹是英文数据库 [dc-power-semiconductor-db](../dc-power-semiconductor-db/README.md) 的简体中文参考译本，仅供参考，同步至 2026-11-12 版本。英文原版为唯一权威版本；如中英文存在差异，以英文原版为准。可打印的 A4 版 PDF 见 [dc-power-semiconductor-db-zh-CN.pdf](dc-power-semiconductor-db-zh-CN.pdf)，术语与标签对照见 [翻译说明与术语对照](TRANSLATION_NOTES.md)。

## 概述
本仓库是一个带索引的研究数据库，涵盖数据中心电源领域的半导体器件、转换拓扑、机架架构、供应商、市场、标准及投资信号。主要视角为 AI/HPC 基础设施；电动汽车（EV）、电信、可再生能源及工业领域的证据，仅在其有助于理解数据中心技术或供应时才予以收录。

首个版本是一份附有来源的研究基线，而非成型的市场模型。公开披露的数据常将汽车、工业、消费电子和数据中心营收合并列报，因此数据中心专属数值均标注为 [估计] 并附置信度评级，而不作为经审计的事实呈现。

## 关键发现 / 要点
- [已确认] 本数据库包含 26 个编号研究章节以及本主索引。
- [已确认，2026] 所有文件均采用统一的状态、引用、置信度和更新规范。
- [已确认] 厂商覆盖范围涵盖器件、控制器、模块、系统、衬底以及 ODM（原始设计制造商）。
- [估计，中置信度，2025] AI 机架正从 30-50 kW 向 100-140 kW 配置演进。
- [已确认，2024] 开放计算项目（OCP）Open Rack v3 确立了 48 V 机架母线架构。
- [已确认，2026] 英伟达（NVIDIA）目前将 800 VDC 定位为 MW 级 AI 机架的配电架构，量产部署将于 2027 年从 Kyber 系统开始。
- [已确认，2026] 7 月更新内容包括：英飞凌（Infineon）德累斯顿智能功率晶圆厂（Smart Power Fab）启用、英飞凌/LS ELECTRIC 直流基础设施合作，以及 GaN/SiC 诉讼的新进展。
- [已确认，2026-11] 11 月更新内容：OCP Mt. Diablo v1.0.0（±400 VDC）及 OCP 固态变压器（SST）规范；英伟达分阶段推出 800 VDC（侧柜式机架 2H 2026，行级电源中心 2027）；Vera Rubin NVL72 开始出货；英飞凌 FY2026 数据中心电源营收（~€2.2B）及 FY2027 业绩指引（~€4B）；处理器供电领域的并购潮（Empower、Claros、C2i、Ferric）；Vicor 向美国国际贸易委员会（ITC）提起的 337-TA-1526 案；以及修订后的市场模型（~$9B 2026E，取代 ~$4B）。
- [已确认，2026-11] 简体中文参考译本及可打印的 PDF 即本文件夹 [`dc-power-semiconductor-db-zh-CN/`](README.md)。

## 详细内容
### 快速访问

| 章节 | 文件 | 状态 | 最后更新 |
|---|---|---:|---:|
| 执行摘要 | [00](00_executive_summary.md) | 草稿 | 2026-11-12 |
| 技术概述与术语表 | [01](01_technology_overview.md) | 草稿 | 2026-06-30 |
| 架构路线图 | [02](02_power_architecture_roadmap.md) | 草稿 | 2026-11-12 |
| 宽禁带概述 | [03](03_wide_bandgap_semiconductors.md) | 草稿 | 2026-11-12 |
| GaN 技术 | [04](04_gan_technology.md) | 草稿 | 2026-11-12 |
| SiC 技术 | [05](05_sic_technology.md) | 草稿 | 2026-11-12 |
| 硅器件 | [06](06_silicon_power_devices.md) | 草稿 | 2026-11-12 |
| 转换拓扑 | [07](07_power_conversion_topology.md) | 草稿 | 2026-11-12 |
| VRM 与 PMIC | [08](08_vrm_and_pmic.md) | 草稿 | 2026-11-12 |
| 数字电源 | [09](09_digital_power_management.md) | 草稿 | 2026-11-12 |
| 配电架构 | [10](10_power_distribution_architecture.md) | 草稿 | 2026-11-12 |
| 综合型厂商 | [11](11_vendors_integrated.md) | 草稿 | 2026-11-12 |
| 分立器件厂商 | [12](12_vendors_discrete.md) | 草稿 | 2026-11-12 |
| 模块/系统厂商 | [13](13_vendors_modules_and_systems.md) | 草稿 | 2026-11-12 |
| 初创企业观察名单 | [14](14_startups_watchlist.md) | 草稿 | 2026-11-12 |
| 超大规模云厂商战略 | [15](15_hyperscaler_power_strategy.md) | 草稿 | 2026-11-12 |
| 专利与知识产权 | [16](16_patents_ip_landscape.md) | 草稿 | 2026-11-12 |
| 研究论文 | [17](17_key_research_papers.md) | 草稿 | 2026-11-12 |
| 供应链 | [18](18_production_ramp_supply_chain.md) | 草稿 | 2026-11-12 |
| 竞争格局 | [19](19_competitive_landscape.md) | 草稿 | 2026-11-12 |
| 市场规模测算 | [20](20_market_sizing.md) | 草稿 | 2026-11-12 |
| 热管理 | [21](21_thermal_management.md) | 草稿 | 2026-11-12 |
| 电源完整性 | [22](22_power_integrity_and_signal.md) | 草稿 | 2026-11-12 |
| 标准 | [23](23_standards_and_regulatory.md) | 草稿 | 2026-11-12 |
| 可持续性 | [24](24_sustainability_and_efficiency.md) | 草稿 | 2026-11-12 |
| 投资/并购 | [25](25_investment_and_ma_tracker.md) | 草稿 | 2026-11-12 |

### 图解导航
每个编号章节现均包含一个“图解”（`Visual Guide`）小节，内含可由 GitHub 渲染的 Mermaid 图表。这些图表为自行绘制的摘要，概括了转换链、路线图、器件选择、厂商生态系统及投资逻辑，因此可以作为文本进行审阅和版本管理。

| 图解主题 | 章节 |
|---|---|
| 系统概览与路线图 | [00](00_executive_summary.md), [01](01_technology_overview.md), [02](02_power_architecture_roadmap.md) |
| 器件技术 | [03](03_wide_bandgap_semiconductors.md), [04](04_gan_technology.md), [05](05_sic_technology.md), [06](06_silicon_power_devices.md) |
| 转换、控制与配电 | [07](07_power_conversion_topology.md), [08](08_vrm_and_pmic.md), [09](09_digital_power_management.md), [10](10_power_distribution_architecture.md), [22](22_power_integrity_and_signal.md) |
| 厂商与买方生态系统 | [11](11_vendors_integrated.md), [12](12_vendors_discrete.md), [13](13_vendors_modules_and_systems.md), [14](14_startups_watchlist.md), [15](15_hyperscaler_power_strategy.md), [19](19_competitive_landscape.md) |
| 证据、运营与合规 | [16](16_patents_ip_landscape.md), [17](17_key_research_papers.md), [18](18_production_ramp_supply_chain.md), [21](21_thermal_management.md), [23](23_standards_and_regulatory.md), [24](24_sustainability_and_efficiency.md) |
| 市场与投资模型 | [20](20_market_sizing.md), [25](25_investment_and_ma_tracker.md) |

### 官方图示来源登记表
厂商图示、产品照片、参考设计、投资者演示材料中的图表以及架构图应链接至官方页面；除非再使用权限明确，否则不应复制到本仓库中。

| 组织 | 官方图示/内容来源 | 最适用章节 |
|---|---|---|
| 开放计算项目 | ORv3、HPR、电源架、机架母排及硬件规范： https://www.opencompute.org/wiki/Open_Rack/SpecsAndDesigns | [02](02_power_architecture_roadmap.md), [10](10_power_distribution_architecture.md), [15](15_hyperscaler_power_strategy.md), [23](23_standards_and_regulatory.md) |
| 英伟达 | GB200 NVL72 及 AI 机架系统图示： https://www.nvidia.com/en-us/data-center/gb200-nvl72/ | [02](02_power_architecture_roadmap.md), [08](08_vrm_and_pmic.md), [15](15_hyperscaler_power_strategy.md), [20](20_market_sizing.md) |
| Vicor | 48 V AI 供电及分比式电源架构图： https://www.vicorpower.com/ | [02](02_power_architecture_roadmap.md), [08](08_vrm_and_pmic.md), [13](13_vendors_modules_and_systems.md) |
| 台达电子（Delta Electronics） | 数据中心电源架、机架及基础设施图示： https://www.deltaww.com/en-US/solutions/Data-Center | [10](10_power_distribution_architecture.md), [13](13_vendors_modules_and_systems.md), [21](21_thermal_management.md) |
| 维谛技术（Vertiv） | 高密度 AI 供电与冷却示意图： https://www.vertiv.com/en-us/solutions/high-density-ai/ | [10](10_power_distribution_architecture.md), [13](13_vendors_modules_and_systems.md), [21](21_thermal_management.md) |
| 英飞凌 | 数据中心电源、GaN、MOSFET 及控制器图示： https://www.infineon.com/cms/en/applications/computing/data-center-and-servers/ | [04](04_gan_technology.md), [08](08_vrm_and_pmic.md), [11](11_vendors_integrated.md) |
| 德州仪器（Texas Instruments） | 数据中心/服务器电源及多相控制图示： https://www.ti.com/applications/enterprise-systems/data-center-enterprise-computing/overview.html | [08](08_vrm_and_pmic.md), [09](09_digital_power_management.md), [11](11_vendors_integrated.md) |
| 亚德诺（Analog Devices） | 数据中心电源及数字电源管理图示： https://www.analog.com/en/solutions/data-center.html | [08](08_vrm_and_pmic.md), [09](09_digital_power_management.md), [11](11_vendors_integrated.md) |
| 瑞萨电子（Renesas） | 数据中心电源及多相/GaN 图示： https://www.renesas.com/en/applications/data-center-computing | [04](04_gan_technology.md), [08](08_vrm_and_pmic.md), [11](11_vendors_integrated.md) |
| 芯源系统（Monolithic Power Systems） | 数据中心电源模块及 VRM 图示： https://www.monolithicpower.com/en/applications/data-center.html | [08](08_vrm_and_pmic.md), [11](11_vendors_integrated.md), [13](13_vendors_modules_and_systems.md) |
| 纳微半导体（Navitas） | GaNFast、GaNSafe、GeneSiC 及 AI 电源图示： https://navitassemi.com/ | [04](04_gan_technology.md), [12](12_vendors_discrete.md), [25](25_investment_and_ma_tracker.md) |
| Wolfspeed | SiC 衬底、晶圆、器件及制造图示： https://www.wolfspeed.com/ | [05](05_sic_technology.md), [12](12_vendors_discrete.md), [18](18_production_ramp_supply_chain.md) |
| 宜普电源转换（EPC） | eGaN 器件、封装及应用图示： https://epc-co.com/epc/products/gan-fets-and-ics | [04](04_gan_technology.md), [12](12_vendors_discrete.md), [16](16_patents_ip_landscape.md) |
| 安森美（onsemi） | EliteSiC 及云电源应用图示： https://www.onsemi.com/applications/industrial-cloud-power/cloud-power | [05](05_sic_technology.md), [11](11_vendors_integrated.md), [18](18_production_ramp_supply_chain.md) |
| 罗姆（ROHM） | SiC 及功率器件应用图示： https://www.rohm.com/products/sic-power-devices | [05](05_sic_technology.md), [11](11_vendors_integrated.md), [12](12_vendors_discrete.md) |

### 本数据库使用方法

1. 将 `[CONFIRMED]`（`[已确认]`）视为可追溯至所引用的一手来源或标准来源的信息。
2. 将 `[ESTIMATED]`（`[估计]`）视为分析师推算；预测还须附 HIGH/MED/LOW（高/中/低）置信度。
3. 将 `[RUMORED]`（`[传闻]`）视为未经证实的行业报道，绝不可作为采购或投资依据。
4. 编辑时须保留统计数据的年份/季度及货币口径。
5. 每次实质性修订均须添加注明日期的参考文献，并更新文件头信息。
6. 标注“访问日期”（`Accessed`）的参考文献条目表示已于该日期直接打开原网页。标注“检索日期”（`Indexed`）的条目（2026-11-12 更新）则因更新环境无法直接获取网页，而通过搜索引擎索引定位并核对；用于投资或采购决策前，请抽查所链接的一手文件。

### 简体中文参考译本

本文件夹（[`dc-power-semiconductor-db-zh-CN/`](README.md)）即本数据库的完整简体中文译本，同步至 2026-11-12 版本，仅供参考。英文原版 [`../dc-power-semiconductor-db/`](../dc-power-semiconductor-db/README.md) 中的文件仍为权威版本。本文件夹还包含可打印的 A4 版 PDF（`dc-power-semiconductor-db-zh-CN.pdf`）、术语对照表（`TRANSLATION_NOTES.md`）以及 PDF 构建脚本（`tools/`）。

### 可复用的数据库更新提示词

全面更新数据库时请使用以下提示词。运行前请替换方括号中的变量。如只需更新部分章节，请在 `REFRESH_SCOPE` 中列出相应文件名。

以下提示词译文仅供理解；实际运行更新时请使用英文原版提示词。

```text
你是一名资深研究分析师兼软件工程师，专注于功率半导体、AI/HPC 数据中心基础设施、
功率转换及半导体市场。

你的任务是更新本仓库中现有的数据中心功率半导体知识数据库。

REFRESH_DATE: [YYYY-MM-DD]
REFRESH_SCOPE: [ALL FILES 或以逗号分隔的文件名]
RESEARCH_CUTOFF: [截至 YYYY-MM-DD 的最新可用信息]
OUTPUT_BRANCH: [分支名称（如适用）]

仓库规则：
1. 修改前，先阅读 README.md 以及 REFRESH_SCOPE 中的每个文件。
2. 保留现有目录结构、通用文件模板、表格及相对链接。
3. 研究截至 RESEARCH_CUTOFF 的最新信息。优先采用一手来源：
   - 监管文件、年度报告、财报新闻稿及投资者演示材料
   - 公司产品页面、数据手册、认证报告及新闻稿
   - 标准组织（包括 OCP、IEEE、IEC、JEDEC、DMTF、PMBus、PCI-SIG）以及政府机构
   - 同行评审论文及官方会议论文集
4. 仅在无法获得一手数据时，才使用信誉良好的二手研究。
   须明确标识分析师估计，切勿将厂商营销宣传表述为独立事实。
5. 每项实质性论断均须使用 [Source: Name, YYYY-MM-DD] 注明来源，
   并在 References 下添加完整 URL 及访问日期。
6. 统一使用以下状态标签：
   [CONFIRMED] [RUMORED] [ESTIMATED] [DEPRECATED] [TO VERIFY: reason]
7. 每项统计数据均须注明年份或季度。预测必须标注 HIGH、MED 或 LOW 置信度。
8. 财务数据须注明财务期间、LTM 或 FY 口径、币种以及市场数据的截止日期。
9. 将数据中心专属营收与公司总营收及电源、汽车、工业或消费电子营收区分开来。
   在没有公开证据的情况下，不得推断客户关系。
10. 区分机架铭牌功率、典型运行负载、IT 负载与设施输入功率。
11. 按工艺/衬底、电压等级、封装及年份对技术描述进行规范化。
12. 厘清收购、产品更名、破产、重组及过时标准等情况。
13. 有价值的历史数据应予保留；被取代的说法应标记为 [DEPRECATED]，
    而不是悄然删除。
14. 凡属结构化信息，尽量使用表格而非文字叙述。
15. 当更新的证据影响其他章节时，添加或修复交叉引用。
16. 对于存在争议的定义、可比性较弱的数据或重要警示，使用 > ⚠️ Note:。
17. 对于未解决、快速变化或缺失的信息，使用 > 🔄 Refresh Needed:。
18. 不得编造精确的市场份额、客户名称、产能、价格、专利数量、性能数据或财务数值。
    证据不足时，保留带标签的数据缺口。

必需的更新流程：
1. 审查范围内每个文件中的过期日期、失效链接、缺乏依据的论断、所有权变更、
   单位不一致以及未解决的 [TO VERIFY] 条目。
2. 编辑前先建立来源核对清单；
   对于实质性预测或存在争议的市场论断，至少比较两个来源。
3. 更新内容、表格、行内引用、References、Last Updated 及 Status。
4. 重新计算 CAGR、每千瓦价值量、能效节省及估值倍数等衍生指标；
   列明假设，避免对重叠的细分市场重复计算。
5. 校验所有 Markdown 文件的必需标题、表格完整性、元数据以及相对链接是否有效。
6. 审查最终 diff，排查不当的确定性表述、重复数据、相互矛盾的数字以及无关改动。

完成后请提供：
- 已更新的文件及各文件的实质性变更
- 新增来源，以及遇到的无法访问/付费墙来源
- 升级为 [CONFIRMED]、降级、更正或废弃的论断
- 按重要性排序的剩余前 10 项数据缺口
- 每个已更新文件的估计完整度百分比
- 建议的下次更新日期及更新频率
- 校验结果，包括失效链接及必需标题检查
- 提交哈希或拉取请求（PR）链接（如具备仓库写入权限）
```

如需快速进行季度更新，请将 `REFRESH_SCOPE` 设置为：
`00_executive_summary.md, 04_gan_technology.md, 05_sic_technology.md,
08_vrm_and_pmic.md, 11_vendors_integrated.md, 12_vendors_discrete.md,
14_startups_watchlist.md, 18_production_ramp_supply_chain.md,
19_competitive_landscape.md, 20_market_sizing.md, 23_standards_and_regulatory.md,
25_investment_and_ma_tracker.md`。

### 范围与术语表

研究范围涵盖从电网到芯片的电能转换、配电、管理与控制。建议从[技术术语表](01_technology_overview.md#术语表)入手。架构术语的对应关系见 [02](02_power_architecture_roadmap.md)，市场定义则以 [20](20_market_sizing.md) 为准。

### 厂商覆盖图

| 厂商组 | 主要文件 | 相关文件 |
|---|---|---|
| 英飞凌、德州仪器（TI）、亚德诺（ADI）、瑞萨电子、意法半导体（ST）、安森美、罗姆 | [11](11_vendors_integrated.md) | 03-09, 16, 19, 20, 25 |
| Wolfspeed、纳微半导体、宜普电源转换、万国半导体（AOS）、中国分立器件厂商 | [12](12_vendors_discrete.md) | 03-06, 16, 18-20, 25 |
| Vicor、台达电子、维谛技术、伊顿（Eaton）、村田制作所（Murata）、伟创力（Flex） | [13](13_vendors_modules_and_systems.md) | 07, 10, 15, 19, 20 |
| 超大规模云厂商与加速器厂商 | [15](15_hyperscaler_power_strategy.md) | 02, 08-10, 22, 24 |

## 数据表（如适用）
| 字段 | 数值 | 来源 | 日期 |
|---|---|---|---|
| 编号章节数 | 26 | 仓库统计 | 2026-06-10 |
| 主要关注领域 | AI/HPC 数据中心电源 | 项目范围 | 2026-06-10 |
| 默认货币 | 美元（USD） | 数据库约定 | 2026-06-10 |
| 预测期 | 2030 | 项目范围 | 2026-06-10 |
| 最近更新 | 2026-11-12 | 更新日志 | 2026-11-12 |
| 译本 | 简体中文（仅供参考） | ../dc-power-semiconductor-db-zh-CN/ | 2026-11-12 |

## 待解决问题 / 数据缺口
- 为频繁更新的市场和财务表格添加机器可读的 CSV/JSON 镜像。
- 在许可允许的情况下，添加来源的存档快照。
- 每次季度更新时，核对收购和剥离后的厂商名称。
- 网络访问条件允许后，直接重新打开标注“检索日期”（`Indexed`）的来源，并据此升级或更正相关数据。
- 补充 2026-11 更新因搜索限制而跳过的内容：瑞萨电子、罗姆、微芯科技（Microchip）、恩智浦（NXP）、威世（Vishay）、伟创力、村田制作所、先进能源（Advanced Energy）、欧盟 EED 评级方案、中国 PUE 政策、美国大型负荷并网规则，以及 AWS/甲骨文（Oracle）/OpenAI/xAI 的电源架构。

## 更新日志

| 日期 | 范围 | 主要新增内容 |
|---|---|---|
| 2026-07-28 | 季度高变动章节 | 英伟达 800 VDC/Kyber 路线图；2026 年 7 月英飞凌的制造、合作及 GaN 知识产权事件；Wolfspeed/纳微半导体诉讼；厂商 FY2025/FY2026 财务基线；安森美 GaN 路线图；SST 初创企业覆盖 |
| 2026-11-12 | 除 01 以外的全部章节 | OCP Mt. Diablo v1.0.0、SST v0.3 及电网韧性（Grid Resilience）规范；英伟达 800 VDC 分阶段部署、Vera Rubin 出货、DSX POD；OCP 2026 上的 800 VDC 硬件（台达电子、光宝科技（LITEON）、维谛技术、施耐德电气（Schneider）、ABB、西门子（Siemens）/莱茵豪森（Reinhausen）、伊顿/英飞凌）；Q3 2026 / FY2026 业绩（英飞凌、德州仪器、亚德诺、意法半导体、安森美、芯源系统、Vicor、维谛技术、伊顿、台达电子、光宝科技、纳微半导体、Wolfspeed、帕沃英蒂格盛（Power Integrations）、英诺赛科（Innoscience）、天岳先进（SICC））；并购（亚德诺/Empower、纳微半导体/Claros、英飞凌/C2i、安森美/Ferric、维谛技术/UIG、伊顿/COL、伊顿/Boyd）；诉讼（Vicor ITC 337-TA-1526、瑞萨电子/纳微半导体、英诺赛科在华裁决、宜普电源转换/英诺赛科）；SiC 价格与 300 mm 样品；Wolfspeed OSC 贷款；初创企业融资（Heron、DG Matrix、Vertical Semiconductor）；Yole/Dell'Oro/TrendForce 预测；LBNL/IEA/谷歌（Google）能耗数据；市场模型修订为 ~$9B 2026E；新增简体中文译本与 PDF |

## 参考文献
- Open Compute Project | https://www.opencompute.org/ | 访问日期 2026-06-10
- PMBus | https://pmbus.org/ | 访问日期 2026-06-10
- IEEE Power Electronics Society | https://www.ieee-pels.org/ | 访问日期 2026-06-10
- NVIDIA 800 VDC architecture | https://www.nvidia.com/en-us/data-center/technologies/800-vdc-architecture/ | 访问日期 2026-07-28
- NVIDIA 800 VDC rollout blog | https://blogs.nvidia.com/blog/800-vdc-power-architecture-ai-factory/ | 检索日期 2026-11-12
- OCP Mt. Diablo v1.0.0 | https://www.opencompute.org/wp-content/uploads/2026/10/OCP-Specification-Mt.-Diablo-Disaggregated-Power-Rack-Specification-v1.0.0.pdf | 检索日期 2026-11-12
