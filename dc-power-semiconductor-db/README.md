# Datacenter Power Semiconductor Database
> **Last Updated:** 2026-07-28
> **Status:** Draft
> **Tags:** index, datacenter, power-semiconductors, AI-infrastructure

## Overview
This repository is an indexed research database covering semiconductor devices, conversion
topologies, rack architectures, suppliers, markets, standards, and investment signals for
datacenter power. The primary lens is AI/HPC infrastructure; EV, telecom, renewable-energy,
and industrial evidence is included only where it informs datacenter technology or supply.

The initial release is a sourced research baseline, not a finished market model. Public
disclosures often combine automotive, industrial, consumer, and datacenter revenue, so
datacenter-specific values are marked [ESTIMATED] and confidence-rated rather than presented
as audited facts.

## Key Findings / Highlights
- [CONFIRMED] The database contains 26 numbered research sections plus this master index.
- [CONFIRMED, 2026] All files use common status, citation, confidence, and refresh conventions.
- [CONFIRMED] Vendor coverage spans devices, controllers, modules, systems, substrates, and ODMs.
- [ESTIMATED, MED confidence, 2025] AI racks are moving from 30-50 kW toward 100-140 kW configurations.
- [CONFIRMED, 2024] OCP Open Rack v3 establishes a 48 V rack bus architecture.
- [CONFIRMED, 2026] NVIDIA now positions 800 VDC as the distribution architecture for
  MW-scale AI racks, with production deployment beginning with Kyber systems in 2027.
- [CONFIRMED, 2026] July updates include Infineon's Dresden Smart Power Fab opening,
  Infineon/LS ELECTRIC DC-infrastructure collaboration, and new GaN/SiC litigation milestones.

## Detailed Content
### Quick Access

| Section | File | Status | Last Updated |
|---|---|---:|---:|
| Executive summary | [00](00_executive_summary.md) | Draft | 2026-07-28 |
| Technology overview and glossary | [01](01_technology_overview.md) | Draft | 2026-06-30 |
| Architecture roadmap | [02](02_power_architecture_roadmap.md) | Draft | 2026-07-28 |
| Wide-bandgap overview | [03](03_wide_bandgap_semiconductors.md) | Draft | 2026-06-30 |
| GaN technology | [04](04_gan_technology.md) | Draft | 2026-07-28 |
| SiC technology | [05](05_sic_technology.md) | Draft | 2026-07-28 |
| Silicon devices | [06](06_silicon_power_devices.md) | Draft | 2026-06-30 |
| Conversion topology | [07](07_power_conversion_topology.md) | Draft | 2026-06-30 |
| VRM and PMIC | [08](08_vrm_and_pmic.md) | Draft | 2026-06-30 |
| Digital power | [09](09_digital_power_management.md) | Draft | 2026-06-30 |
| Distribution architecture | [10](10_power_distribution_architecture.md) | Draft | 2026-07-28 |
| Integrated vendors | [11](11_vendors_integrated.md) | Draft | 2026-07-28 |
| Discrete vendors | [12](12_vendors_discrete.md) | Draft | 2026-07-28 |
| Module/system vendors | [13](13_vendors_modules_and_systems.md) | Draft | 2026-07-28 |
| Startup watchlist | [14](14_startups_watchlist.md) | Draft | 2026-07-28 |
| Hyperscaler strategies | [15](15_hyperscaler_power_strategy.md) | Draft | 2026-07-28 |
| Patents and IP | [16](16_patents_ip_landscape.md) | Draft | 2026-07-28 |
| Research papers | [17](17_key_research_papers.md) | Draft | 2026-06-30 |
| Supply chain | [18](18_production_ramp_supply_chain.md) | Draft | 2026-07-28 |
| Competition | [19](19_competitive_landscape.md) | Draft | 2026-07-28 |
| Market sizing | [20](20_market_sizing.md) | Draft | 2026-07-28 |
| Thermal management | [21](21_thermal_management.md) | Draft | 2026-06-30 |
| Power integrity | [22](22_power_integrity_and_signal.md) | Draft | 2026-06-30 |
| Standards | [23](23_standards_and_regulatory.md) | Draft | 2026-07-28 |
| Sustainability | [24](24_sustainability_and_efficiency.md) | Draft | 2026-06-30 |
| Investment/M&A | [25](25_investment_and_ma_tracker.md) | Draft | 2026-07-28 |

### Visual Navigation
Every numbered section now includes a `Visual Guide` with GitHub-rendered Mermaid diagrams. The diagrams are self-authored summaries of the conversion chain, roadmap, device choices, vendor ecosystem, and investment logic, so they can be reviewed and versioned as text.

| Visual Theme | Sections |
|---|---|
| System overview and roadmap | [00](00_executive_summary.md), [01](01_technology_overview.md), [02](02_power_architecture_roadmap.md) |
| Device technologies | [03](03_wide_bandgap_semiconductors.md), [04](04_gan_technology.md), [05](05_sic_technology.md), [06](06_silicon_power_devices.md) |
| Conversion, control, and distribution | [07](07_power_conversion_topology.md), [08](08_vrm_and_pmic.md), [09](09_digital_power_management.md), [10](10_power_distribution_architecture.md), [22](22_power_integrity_and_signal.md) |
| Vendor and buyer ecosystem | [11](11_vendors_integrated.md), [12](12_vendors_discrete.md), [13](13_vendors_modules_and_systems.md), [14](14_startups_watchlist.md), [15](15_hyperscaler_power_strategy.md), [19](19_competitive_landscape.md) |
| Evidence, operations, and compliance | [16](16_patents_ip_landscape.md), [17](17_key_research_papers.md), [18](18_production_ramp_supply_chain.md), [21](21_thermal_management.md), [23](23_standards_and_regulatory.md), [24](24_sustainability_and_efficiency.md) |
| Market and investment model | [20](20_market_sizing.md), [25](25_investment_and_ma_tracker.md) |

### Official Visual Source Register
Vendor diagrams, product photos, reference designs, investor-presentation figures, and architecture graphics should be linked to official pages rather than copied into the repository unless reuse rights are clear.

| Organization | Official Visual / Content Source | Best-Fit Sections |
|---|---|---|
| Open Compute Project | ORv3, HPR, power shelf, rack busbar, and hardware specifications: https://www.opencompute.org/wiki/Open_Rack/SpecsAndDesigns | [02](02_power_architecture_roadmap.md), [10](10_power_distribution_architecture.md), [15](15_hyperscaler_power_strategy.md), [23](23_standards_and_regulatory.md) |
| NVIDIA | GB200 NVL72 and AI rack system visuals: https://www.nvidia.com/en-us/data-center/gb200-nvl72/ | [02](02_power_architecture_roadmap.md), [08](08_vrm_and_pmic.md), [15](15_hyperscaler_power_strategy.md), [20](20_market_sizing.md) |
| Vicor | 48 V AI and factorized power architecture diagrams: https://www.vicorpower.com/ | [02](02_power_architecture_roadmap.md), [08](08_vrm_and_pmic.md), [13](13_vendors_modules_and_systems.md) |
| Delta Electronics | datacenter power shelf, rack, and infrastructure visuals: https://www.deltaww.com/en-US/solutions/Data-Center | [10](10_power_distribution_architecture.md), [13](13_vendors_modules_and_systems.md), [21](21_thermal_management.md) |
| Vertiv | high-density AI power and cooling diagrams: https://www.vertiv.com/en-us/solutions/high-density-ai/ | [10](10_power_distribution_architecture.md), [13](13_vendors_modules_and_systems.md), [21](21_thermal_management.md) |
| Infineon | datacenter power, GaN, MOSFET, and controller visuals: https://www.infineon.com/cms/en/applications/computing/data-center-and-servers/ | [04](04_gan_technology.md), [08](08_vrm_and_pmic.md), [11](11_vendors_integrated.md) |
| Texas Instruments | datacenter/server power and multiphase control visuals: https://www.ti.com/applications/enterprise-systems/data-center-enterprise-computing/overview.html | [08](08_vrm_and_pmic.md), [09](09_digital_power_management.md), [11](11_vendors_integrated.md) |
| Analog Devices | data center power and digital power management visuals: https://www.analog.com/en/solutions/data-center.html | [08](08_vrm_and_pmic.md), [09](09_digital_power_management.md), [11](11_vendors_integrated.md) |
| Renesas | data center power and multiphase/GaN visuals: https://www.renesas.com/en/applications/data-center-computing | [04](04_gan_technology.md), [08](08_vrm_and_pmic.md), [11](11_vendors_integrated.md) |
| Monolithic Power Systems | datacenter power module and VRM visuals: https://www.monolithicpower.com/en/applications/data-center.html | [08](08_vrm_and_pmic.md), [11](11_vendors_integrated.md), [13](13_vendors_modules_and_systems.md) |
| Navitas | GaNFast, GaNSafe, GeneSiC, and AI power visuals: https://navitassemi.com/ | [04](04_gan_technology.md), [12](12_vendors_discrete.md), [25](25_investment_and_ma_tracker.md) |
| Wolfspeed | SiC substrate, wafer, device, and manufacturing visuals: https://www.wolfspeed.com/ | [05](05_sic_technology.md), [12](12_vendors_discrete.md), [18](18_production_ramp_supply_chain.md) |
| EPC | eGaN device, package, and application visuals: https://epc-co.com/epc/products/gan-fets-and-ics | [04](04_gan_technology.md), [12](12_vendors_discrete.md), [16](16_patents_ip_landscape.md) |
| onsemi | EliteSiC and cloud power application visuals: https://www.onsemi.com/applications/industrial-cloud-power/cloud-power | [05](05_sic_technology.md), [11](11_vendors_integrated.md), [18](18_production_ramp_supply_chain.md) |
| ROHM | SiC and power device application visuals: https://www.rohm.com/products/sic-power-devices | [05](05_sic_technology.md), [11](11_vendors_integrated.md), [12](12_vendors_discrete.md) |

### How to Use This Database

1. Treat `[CONFIRMED]` as traceable to a cited primary or standards source.
2. Treat `[ESTIMATED]` as an analyst calculation; forecasts also carry HIGH/MED/LOW confidence.
3. Treat `[RUMORED]` as unverified industry reporting, never as a purchasing or investment fact.
4. Preserve the statistic's year/quarter and currency basis when editing.
5. Add a dated reference and update the file header for every material revision.

### Reusable Database Refresh Prompt

Use the following prompt for a full database refresh. Replace the bracketed variables before
running it. To update only selected sections, list their filenames in `REFRESH_SCOPE`.

```text
You are a senior research analyst and software engineer specializing in power semiconductors,
AI/HPC datacenter infrastructure, power conversion, and semiconductor markets.

Your task is to refresh the existing datacenter power semiconductor knowledge database in this
repository.

REFRESH_DATE: [YYYY-MM-DD]
REFRESH_SCOPE: [ALL FILES or comma-separated filenames]
RESEARCH_CUTOFF: [latest available information as of YYYY-MM-DD]
OUTPUT_BRANCH: [branch name, if applicable]

Repository rules:
1. Read README.md and every file in REFRESH_SCOPE before making changes.
2. Preserve the existing directory structure, universal file template, tables, and relative links.
3. Research current information through RESEARCH_CUTOFF. Prefer primary sources:
   - Regulatory filings, annual reports, earnings releases, and investor presentations
   - Company product pages, datasheets, qualification reports, and press releases
   - Standards bodies including OCP, IEEE, IEC, JEDEC, DMTF, PMBus, PCI-SIG, and government agencies
   - Peer-reviewed papers and official conference proceedings
4. Use reputable secondary research only when primary data is unavailable. Identify analyst
   estimates explicitly and never present vendor marketing claims as independent facts.
5. Source every material claim using [Source: Name, YYYY-MM-DD] and add the full URL under
   References with the access date.
6. Apply status labels consistently:
   [CONFIRMED] [RUMORED] [ESTIMATED] [DEPRECATED] [TO VERIFY: reason]
7. Date every statistic by year or quarter. Forecasts must include HIGH, MED, or LOW confidence.
8. For financial data, state fiscal period, LTM or FY basis, currency, and market-data as-of date.
9. Separate datacenter-specific revenue from total company, power, automotive, industrial, or
   consumer revenue. Do not infer customer relationships without public evidence.
10. Distinguish rack nameplate power, typical operating load, IT load, and facility input power.
11. Normalize technology descriptions by process/substrate, voltage class, package, and year.
12. Resolve acquisitions, renamed products, bankruptcies, restructurings, and obsolete standards.
13. Preserve historical data when useful; mark superseded claims [DEPRECATED] rather than silently
    deleting them.
14. Use tables instead of prose wherever the information is structured.
15. Add or repair cross-references when updated evidence affects another section.
16. Use > ⚠️ Note: for disputed definitions, weak comparability, or important caveats.
17. Use > 🔄 Refresh Needed: for unresolved, rapidly changing, or missing information.
18. Do not fabricate precise market shares, customer names, capacity, pricing, patent counts,
    performance data, or financial values. Leave a labeled gap when evidence is insufficient.

Required refresh workflow:
1. Audit each scoped file for stale dates, dead links, unsupported claims, ownership changes,
   inconsistent units, and unresolved [TO VERIFY] items.
2. Build a source checklist before editing and compare at least two sources for material forecasts
   or disputed market claims.
3. Update content, tables, inline citations, References, Last Updated, and Status.
4. Recalculate derived metrics such as CAGR, content per kW, efficiency savings, and valuation
   multiples; show assumptions and avoid double-counting overlapping market segments.
5. Validate all Markdown files for required headings, table integrity, metadata, and working
   relative links.
6. Review the final diff for accidental certainty, duplicated data, contradictory figures, and
   unrelated changes.

At completion, provide:
- Files refreshed and material changes by file
- New sources added and inaccessible/paywalled sources encountered
- Claims upgraded to [CONFIRMED], downgraded, corrected, or deprecated
- Remaining top 10 data gaps ranked by importance
- Estimated completeness percentage for each refreshed file
- Recommended next refresh date and cadence
- Validation results, including broken-link and required-heading checks
- Commit hash or pull-request link, if repository write access is available
```

For a fast quarterly refresh, set `REFRESH_SCOPE` to:
`00_executive_summary.md, 04_gan_technology.md, 05_sic_technology.md,
08_vrm_and_pmic.md, 11_vendors_integrated.md, 12_vendors_discrete.md,
14_startups_watchlist.md, 18_production_ramp_supply_chain.md,
19_competitive_landscape.md, 20_market_sizing.md, 23_standards_and_regulatory.md,
25_investment_and_ma_tracker.md`.

### Scope and Glossary

Scope covers utility-to-chip conversion, distribution, management, and control. Start with
[the technology glossary](01_technology_overview.md#glossary). Architecture terms are mapped in
[02](02_power_architecture_roadmap.md), while market definitions are controlled in
[20](20_market_sizing.md).

### Vendor Coverage Map

| Vendor group | Primary files | Related files |
|---|---|---|
| Infineon, TI, ADI, Renesas, ST, onsemi, ROHM | [11](11_vendors_integrated.md) | 03-09, 16, 19, 20, 25 |
| Wolfspeed, Navitas, EPC, AOS, China discretes | [12](12_vendors_discrete.md) | 03-06, 16, 18-20, 25 |
| Vicor, Delta, Vertiv, Eaton, Murata, Flex | [13](13_vendors_modules_and_systems.md) | 07, 10, 15, 19, 20 |
| Hyperscalers and accelerator vendors | [15](15_hyperscaler_power_strategy.md) | 02, 08-10, 22, 24 |

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| Numbered sections | 26 | Repository count | 2026-06-10 |
| Primary focus | AI/HPC datacenter power | Project scope | 2026-06-10 |
| Default currency | USD | Database convention | 2026-06-10 |
| Forecast horizon | 2030 | Project scope | 2026-06-10 |

## Open Questions / Gaps
- Add machine-readable CSV/JSON mirrors for frequently refreshed market and financial tables.
- Add archived source snapshots where licensing permits.
- Reconcile vendor naming after acquisitions and divestitures on every quarterly refresh.

## Refresh Log

| Date | Scope | Material additions |
|---|---|---|
| 2026-07-28 | Quarterly high-change sections | NVIDIA 800 VDC/Kyber roadmap; July 2026 Infineon manufacturing, collaboration, and GaN-IP events; Wolfspeed/Navitas litigation; vendor FY2025/FY2026 financial baselines; onsemi GaN roadmap; SST startup coverage |

## References
- Open Compute Project | https://www.opencompute.org/ | Accessed 2026-06-10
- PMBus | https://pmbus.org/ | Accessed 2026-06-10
- IEEE Power Electronics Society | https://www.ieee-pels.org/ | Accessed 2026-06-10
- NVIDIA 800 VDC architecture | https://www.nvidia.com/en-us/data-center/technologies/800-vdc-architecture/ | Accessed 2026-07-28
