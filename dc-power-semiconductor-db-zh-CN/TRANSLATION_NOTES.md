# 翻译说明与术语对照
> **最后更新：** 2026-11-12
> **状态：** 参考译本
> **标签：** 翻译说明, 术语表, 简体中文

## 概述
本文件夹是英文数据库 [`dc-power-semiconductor-db/`](../dc-power-semiconductor-db/README.md) 的
**简体中文参考译本**，仅供阅读参考。英文原版为唯一权威版本；若中英文内容存在任何差异、
歧义或遗漏，一律以英文原版为准。译本与英文原版同步至 2026-11-12 版本，后续英文更新不会
自动反映到本译本中。

翻译遵循以下原则：

1. 文件名、目录结构、章节结构、表格结构与英文原版一一对应，便于中英对照。
2. 数字、单位、日期、货币、财年口径、专利号、产品型号与 URL 保持原样，不做换算。
3. 公司名称首次出现时采用“中文通用名（English）”格式；无通行中文名的公司保留英文。
4. 产品家族、商标与系列名称（如 CoolGaN、GaNFast、EliteSiC、ChiP）保留英文。
5. 引用格式 `[Source: Name, YYYY-MM-DD]` 译为 `[来源：名称，YYYY-MM-DD]`；参考文献条目中的
   英文标题保留原文，仅将“Accessed”译为“访问日期”，将“Indexed”译为“检索日期”。
   （“Indexed”表示 2026-11 更新时该来源经搜索引擎索引核对，但更新环境未能直接打开原网页，
   使用前建议对照原文复核。）
6. Mermaid 图表中的节点文字译为中文，图表结构与英文原版保持一致。

## 状态标签对照

| 英文标签 | 中文标签 | 含义 |
|---|---|---|
| [CONFIRMED] | [已确认] | 可追溯至一手资料、监管文件或标准来源 |
| [ESTIMATED] | [估计] | 分析师推算；预测须附 高/中/低 置信度 |
| [RUMORED] | [传闻] | 未经证实的行业报道，不可作为采购或投资依据 |
| [TO VERIFY] | [待核实] | 需要一手来源进一步确认 |
| [DEPRECATED] | [已过时] | 已被新证据取代，保留作历史记录 |
| [CORRECTION] | [更正] | 对种子数据或早期版本错误的更正 |
| [VENDOR ROADMAP] | [厂商路线图] | 厂商规划，非已量产事实 |
| [VENDOR SPEC] / [VENDOR CLAIM] | [厂商规格] / [厂商宣称] | 厂商自报参数，尚无独立验证 |
| [COMPANY TARGET] | [公司目标] | 公司前瞻性目标 |
| [COMPANY DISCLOSURE] | [公司披露] | 公司自行披露的数据 |
| [ALLEGATION] / [ALLEGATION ONLY] | [指控] / [仅为指控] | 诉讼主张，尚无法院裁决 |
| [OWNER-REPORTED] | [权利人自报] | 专利权人自行报告的数据 |
| [PARTIALLY CONFIRMED] | [部分确认] | 部分内容有公开证据 |
| [REFRESH] | [待更新] | 需按最新数据刷新 |
| [UPCOMING] | [即将举行] | 截至更新日期尚未发生的事件 |
| [SUPERSEDED] | [已被取代] | 被更新数据取代的旧值，保留作历史记录 |
| HIGH / MED / LOW confidence | 高 / 中 / 低 置信度 | 预测可信度等级 |
| > ⚠️ Note: | > ⚠️ 注意： | 定义争议、可比性弱或重要警示 |
| > 🔄 Refresh Needed: | > 🔄 需要更新： | 未解决、快速变化或缺失的信息 |

## 固定章节标题对照

| 英文 | 中文 |
|---|---|
| Overview | 概述 |
| Key Findings / Highlights | 关键发现 / 要点 |
| Visual Guide | 图解 |
| Detailed Content | 详细内容 |
| Data Tables (where applicable) | 数据表（如适用） |
| Open Questions / Gaps | 待解决问题 / 数据缺口 |
| References | 参考文献 |
| Refresh Log | 更新日志 |
| Official Visual References | 官方图示参考 |
| Last Updated / Status / Tags | 最后更新 / 状态 / 标签 |
| Draft | 草稿 |
| Related: [Master Index] | 相关：[主索引] |

## 术语对照表

### 架构与配电

| 英文 | 中文 |
|---|---|
| datacenter / data center | 数据中心 |
| AI factory | AI 工厂 |
| rack / rack-scale | 机架 / 机架级 |
| power shelf | 电源架 |
| busbar | 母排 |
| intermediate bus converter (IBC) | 中间总线转换器（IBC） |
| point of load (POL) | 负载点（POL） |
| voltage regulator module (VRM) | 电压调节模块（VRM） |
| power-management IC (PMIC) | 电源管理芯片（PMIC） |
| high-voltage DC (HVDC) | 高压直流（HVDC） |
| medium voltage (MV) | 中压（MV） |
| solid-state transformer (SST) | 固态变压器（SST） |
| solid-state circuit breaker (SSCB) | 固态断路器（SSCB） |
| battery backup unit (BBU) | 电池备份单元（BBU） |
| uninterruptible power supply (UPS) | 不间断电源（UPS） |
| power distribution unit (PDU) | 配电单元（PDU） |
| power supply unit (PSU) | 电源供应器（PSU） |
| switchgear | 开关柜 |
| sidecar (power rack) | 侧柜（电源柜） |
| nameplate power | 铭牌功率 |
| IT load / facility input power | IT 负载 / 设施输入功率 |
| brownfield / greenfield | 存量改造 / 新建 |
| hyperscaler | 超大规模云厂商 |
| ODM / OEM | ODM（原始设计制造商）/ OEM（原始设备制造商） |
| power integrity (PI) | 电源完整性（PI） |
| power delivery network (PDN) | 供电网络（PDN） |
| target impedance | 目标阻抗 |
| vertical power delivery | 垂直供电 |
| decoupling capacitor | 去耦电容 |
| telemetry | 遥测 |
| power capping | 功率封顶 |

### 器件与工艺

| 英文 | 中文 |
|---|---|
| power semiconductor | 功率半导体 |
| wide-bandgap (WBG) | 宽禁带（WBG） |
| gallium nitride (GaN) | 氮化镓（GaN） |
| silicon carbide (SiC) | 碳化硅（SiC） |
| gallium oxide (Ga2O3) | 氧化镓（Ga2O3） |
| HEMT | 高电子迁移率晶体管（HEMT） |
| enhancement-mode / depletion-mode | 增强型 / 耗尽型 |
| cascode | 共源共栅（Cascode） |
| lateral / vertical GaN | 横向 / 垂直 GaN |
| superjunction MOSFET | 超结 MOSFET |
| trench MOSFET | 沟槽 MOSFET |
| IGBT | 绝缘栅双极型晶体管（IGBT） |
| Schottky diode | 肖特基二极管 |
| smart power stage / DrMOS | 智能功率级 / DrMOS |
| gate driver | 栅极驱动器 |
| dynamic RDS(on) | 动态导通电阻（RDS(on)） |
| gate oxide | 栅氧化层 |
| threshold-voltage shift | 阈值电压漂移 |
| breakdown voltage | 击穿电压 |
| figure of merit (FOM) | 品质因数（FOM） |
| substrate / epitaxy / boule | 衬底 / 外延 / 晶锭 |
| wafer (150/200/300 mm) | 晶圆（150/200/300 mm，即 6/8/12 英寸） |
| foundry | 晶圆代工厂 |
| IDM | 垂直整合制造商（IDM） |
| fabless / fab-lite | 无晶圆厂 / 轻晶圆厂 |
| packaging / module | 封装 / 模块 |
| qualification | 认证（可靠性验证） |
| yield / utilization | 良率 / 产能利用率 |
| high-volume manufacturing (HVM) | 大规模量产（HVM） |
| sampling | 送样 |

### 拓扑与控制

| 英文 | 中文 |
|---|---|
| power factor correction (PFC) | 功率因数校正（PFC） |
| totem-pole PFC | 图腾柱 PFC |
| LLC / CLLC resonant converter | LLC / CLLC 谐振变换器 |
| dual active bridge (DAB) | 双有源桥（DAB） |
| phase-shift full bridge (PSFB) | 移相全桥（PSFB） |
| multiphase buck | 多相降压（Buck） |
| switched-capacitor / switched-tank | 开关电容 / 开关谐振腔（STC） |
| factorized power architecture | 分比式电源架构（FPA） |
| zero-voltage / zero-current switching | 零电压 / 零电流开关（ZVS/ZCS） |
| multiphase controller | 多相控制器 |
| digital power | 数字电源 |
| firmware | 固件 |

### 商业与知识产权

| 英文 | 中文 |
|---|---|
| total addressable market (TAM) | 总可寻址市场（TAM） |
| serviceable available market (SAM) | 可服务市场（SAM） |
| CAGR | 复合年增长率（CAGR） |
| content per rack / per kW | 单机架 / 每千瓦半导体价值量 |
| design win | 设计导入（设计定点） |
| gross margin | 毛利率 |
| enterprise value (EV) | 企业价值（EV） |
| LTM / FY / CY | 过去十二个月（LTM）/ 财年（FY）/ 日历年（CY） |
| guidance | 业绩指引 |
| backlog / book-to-bill | 订单积压 / 订单出货比 |
| restructuring / Chapter 11 | 重组 / 美国破产法第 11 章 |
| patent family | 专利族 |
| freedom to operate (FTO) | 自由实施（FTO） |
| International Trade Commission (ITC) | 美国国际贸易委员会（ITC） |
| exclusion order | 排除令 |
| infringement | 侵权 |

### 公司与组织常用译名

| 英文 | 中文 |
|---|---|
| Infineon | 英飞凌 |
| Texas Instruments (TI) | 德州仪器（TI） |
| Analog Devices (ADI) | 亚德诺（ADI） |
| Renesas | 瑞萨电子 |
| STMicroelectronics (ST) | 意法半导体（ST） |
| onsemi | 安森美 |
| ROHM | 罗姆 |
| Monolithic Power Systems (MPS) | 芯源系统（MPS） |
| Microchip | 微芯科技 |
| Vishay | 威世 |
| NXP | 恩智浦 |
| Toshiba | 东芝 |
| Alpha and Omega Semiconductor (AOS) | 万国半导体（AOS） |
| Power Integrations | 帕沃英蒂格盛（Power Integrations） |
| Wolfspeed | Wolfspeed（原 Cree） |
| Navitas | 纳微半导体（Navitas） |
| Efficient Power Conversion (EPC) | 宜普电源转换（EPC） |
| Innoscience | 英诺赛科 |
| Coherent | Coherent（原 II-VI） |
| SICC / TanKeBlue | 天岳先进 / 天科合达 |
| Sanan | 三安光电 |
| SK Siltron | SK 矽德荣（SK Siltron） |
| TSMC / GlobalFoundries | 台积电 / 格芯 |
| Vicor | Vicor |
| Delta Electronics | 台达电子 |
| Lite-On / Acbel | 光宝科技 / 康舒科技 |
| Vertiv | 维谛技术（Vertiv） |
| Eaton | 伊顿 |
| Schneider Electric | 施耐德电气 |
| ABB / Siemens | ABB / 西门子 |
| Murata / TDK | 村田制作所 / TDK |
| Flex | 伟创力（Flex） |
| Advanced Energy | 先进能源（Advanced Energy） |
| NVIDIA / AMD / Intel | 英伟达 / AMD / 英特尔 |
| Google / Meta / Microsoft / Amazon (AWS) | 谷歌 / Meta / 微软 / 亚马逊（AWS） |
| Open Compute Project (OCP) | 开放计算项目（OCP） |
| IEEE / IEC / UL / JEDEC | IEEE / IEC / UL / JEDEC（保留英文缩写） |

### 补充译名（2026-11 更新）

| 英文 | 中文 |
|---|---|
| sidecar power rack | 侧柜式电源柜 |
| row power center | 行级电源中心（row power center） |
| Disaggregated Power Rack | 分离式电源机架 |
| native 800 VDC | 原生 800 VDC |
| overhead busway | 顶置母线槽 |
| integrated voltage regulator (IVR) | 集成电压调节器（IVR） |
| fault ride-through | 故障穿越 |
| line-frequency transformer | 工频变压器 |
| hot-swap controller | 热插拔控制器 |
| coolant distribution unit (CDU) / in-row | 冷却液分配单元（CDU）/ 列间 |
| royalty | 特许权使用费 |
| earn-out / contingent payment | 业绩对赌付款 / 或有付款 |
| letter of intent (LOI) | 意向书（LOI） |
| trade secret | 商业秘密 |
| motion to dismiss / motion to stay | 驳回动议 / 中止诉讼动议 |
| reexamination | 再审查（reexamination） |
| Supermicro | 超微电脑（Supermicro） |
| Cisco | 思科 |
| Rittal | 威图（Rittal） |
| Megmeet | 麦格米特 |
| Celestica / Quanta / Luxshare | 天弘（Celestica）/ 广达（Quanta）/ 立讯精密（Luxshare） |
| Resonac / Sumitomo Metal Mining | 力森诺科（Resonac）/ 住友金属矿山（Sumitomo Metal Mining） |
| PSMC / TrendForce | 力积电（PSMC）/ 集邦咨询（TrendForce） |
| Reinhausen | 莱茵豪森（Reinhausen） |
| SOLUM | SOLUM（保留英文） |
| Heron Power / Amperesand / DG Matrix / Claros / Ferric / C2i Semiconductors | 保留英文 |
| [SUPERSEDED] | [已被取代] |
| [DISPUTED] | [存在争议] |
| [INVESTIGATION OPEN] | [调查进行中] |
| [LETTER OF INTENT] | [意向书] |

## 参考文献
- 英文原版主索引 | ../dc-power-semiconductor-db/README.md | 2026-11-12
