# Datacenter Power Semiconductor Database
> **Last Updated:** 2026-06-10
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

## Detailed Content
### Quick Access

| Section | File | Status | Last Updated |
|---|---|---:|---:|
| Executive summary | [00](00_executive_summary.md) | Draft | 2026-06-10 |
| Technology overview and glossary | [01](01_technology_overview.md) | Draft | 2026-06-10 |
| Architecture roadmap | [02](02_power_architecture_roadmap.md) | Draft | 2026-06-10 |
| Wide-bandgap overview | [03](03_wide_bandgap_semiconductors.md) | Draft | 2026-06-10 |
| GaN technology | [04](04_gan_technology.md) | Draft | 2026-06-10 |
| SiC technology | [05](05_sic_technology.md) | Draft | 2026-06-10 |
| Silicon devices | [06](06_silicon_power_devices.md) | Draft | 2026-06-10 |
| Conversion topology | [07](07_power_conversion_topology.md) | Draft | 2026-06-10 |
| VRM and PMIC | [08](08_vrm_and_pmic.md) | Draft | 2026-06-10 |
| Digital power | [09](09_digital_power_management.md) | Draft | 2026-06-10 |
| Distribution architecture | [10](10_power_distribution_architecture.md) | Draft | 2026-06-10 |
| Integrated vendors | [11](11_vendors_integrated.md) | Draft | 2026-06-10 |
| Discrete vendors | [12](12_vendors_discrete.md) | Draft | 2026-06-10 |
| Module/system vendors | [13](13_vendors_modules_and_systems.md) | Draft | 2026-06-10 |
| Startup watchlist | [14](14_startups_watchlist.md) | Draft | 2026-06-10 |
| Hyperscaler strategies | [15](15_hyperscaler_power_strategy.md) | Draft | 2026-06-10 |
| Patents and IP | [16](16_patents_ip_landscape.md) | Draft | 2026-06-10 |
| Research papers | [17](17_key_research_papers.md) | Draft | 2026-06-10 |
| Supply chain | [18](18_production_ramp_supply_chain.md) | Draft | 2026-06-10 |
| Competition | [19](19_competitive_landscape.md) | Draft | 2026-06-10 |
| Market sizing | [20](20_market_sizing.md) | Draft | 2026-06-10 |
| Thermal management | [21](21_thermal_management.md) | Draft | 2026-06-10 |
| Power integrity | [22](22_power_integrity_and_signal.md) | Draft | 2026-06-10 |
| Standards | [23](23_standards_and_regulatory.md) | Draft | 2026-06-10 |
| Sustainability | [24](24_sustainability_and_efficiency.md) | Draft | 2026-06-10 |
| Investment/M&A | [25](25_investment_and_ma_tracker.md) | Draft | 2026-06-10 |

### How to Use This Database

1. Treat `[CONFIRMED]` as traceable to a cited primary or standards source.
2. Treat `[ESTIMATED]` as an analyst calculation; forecasts also carry HIGH/MED/LOW confidence.
3. Treat `[RUMORED]` as unverified industry reporting, never as a purchasing or investment fact.
4. Preserve the statistic's year/quarter and currency basis when editing.
5. Add a dated reference and update the file header for every material revision.

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

## References
- Open Compute Project | https://www.opencompute.org/ | Accessed 2026-06-10
- PMBus | https://pmbus.org/ | Accessed 2026-06-10
- IEEE Power Electronics Society | https://www.ieee-pels.org/ | Accessed 2026-06-10
