# Production Ramp and Supply Chain
> **Last Updated:** 2026-07-28
> **Status:** Draft
> **Tags:** supply-chain, substrates, foundry, packaging, capacity

## Overview
Datacenter power supply chains combine specialty materials with mature analog foundries and
high-volume assembly. SiC substrates remain a strategic bottleneck, while GaN power devices
rely on epi quality, foundry process control, and advanced low-inductance packaging.

Capacity claims are difficult to compare because suppliers report wafers, wafer starts, revenue
capacity, floor area, or 150 mm equivalents. This database avoids false precision until units
and yields are normalized.

## Key Findings / Highlights
- [CONFIRMED] SiC boule growth has longer cycles and greater defect sensitivity than silicon.
- [CONFIRMED] 200 mm SiC device production is ramping, while much substrate supply remains 150 mm.
- [CONFIRMED] GaN power production spans 150, 200, and announced 300 mm lines.
- [CORRECTION] SK Siltron is an SK Group company.
- [CONFIRMED] TSMC, GlobalFoundries, Tower, X-Fab, and SSMC serve analog/power IC ecosystems.
- [CONFIRMED, 2026-07-02] Infineon opened its €5B Dresden Smart Power Fab ahead of schedule,
  doubling Dresden capacity for power and analog/mixed-signal products and adding 1,000 jobs.
- [CONFIRMED, 2026] onsemi is developing 650 V lateral GaN products on GlobalFoundries'
  200 mm e-mode GaN-on-Si process and is separately sampling 700/1,200 V vertical GaN.
- [CONFIRMED, 2026] Wolfspeed reported demonstrating 300 mm SiC wafer capability; its volume
  device baseline remains the 200 mm Mohawk Valley ramp.

## Visual Guide
```mermaid
flowchart LR
  MAT["Substrate / wafer / foundry"] --> FAB["Device fabrication"]
  FAB --> PROBE["Wafer probe"]
  PROBE --> PKG["Packaging and module assembly"]
  PKG --> TEST["Burn-in, electrical, thermal, reliability test"]
  TEST --> QUAL["Customer qualification"]
  QUAL --> HVM["High-volume manufacturing"]
```

```mermaid
flowchart TB
  BOT["Ramp bottlenecks"] --> SIC["SiC substrates and epi defects"]
  BOT --> GAN["GaN epi and qualified foundry capacity"]
  BOT --> PKG["Low-inductance / high-voltage packaging"]
  BOT --> MAG["Magnetics and thermal materials"]
  BOT --> TEST["High-power test time"]
  BOT --> QUAL["Datacenter qualification cycles"]
```

## Detailed Content
### End-to-End Map

Epitaxial wafer -> device fab -> wafer probe -> packaging/test -> module/shelf assembly ->
OEM/ODM qualification -> hyperscaler deployment.

### SiC Substrates

| Company | Diameter | Capacity disclosure | 2026 direction | Customers | Notes |
|---|---:|---|---|---|---|
| Wolfspeed | 150/200 mm | Non-comparable public metrics | 200 mm ramp | internal/merchant | Restructured 2025 |
| Coherent | 150/200 mm | [TO NORMALIZE] | 200 mm ramp | merchant | II-VI heritage |
| SiCrystal/ROHM | 150/200 mm path | [TO NORMALIZE] | vertical | ROHM/merchant | Germany |
| SK Siltron CSS | 150/200 mm path | [TO NORMALIZE] | expansion | merchant | SK Group |
| SICC | 150/200 mm | [TO NORMALIZE] | expansion | China/merchant | Public China supplier |
| TanKeBlue | 150/200 mm | [TO NORMALIZE] | expansion | China | Domestic ecosystem |

### GaN Epi / Platform Supply

| Company | Platform | Diameter | Role | Customers |
|---|---|---:|---|---|
| IQE | GaN-on-Si/SiC | 150/200 mm class | epi foundry | multiple |
| Enkris | GaN-on-Si | 150/200 mm | epi wafers | power/RF |
| DOWA | GaN substrates/epi | product-specific | materials | multiple |
| NTT-AT | GaN substrates/materials | product-specific | specialty | R&D/device |
| Wolfspeed | GaN-on-SiC | 150 mm class | RF materials | RF ecosystem |

### Controller/Driver Foundries

| Foundry | Nodes | Power IC relevance | Notes |
|---|---|---|---|
| TSMC | mature BCD/analog nodes | Fabless controller/driver ICs | Scale |
| GlobalFoundries | BCD/analog/RF | Power management | US/EU footprint |
| Tower | analog/BCD | Power ICs | Specialty focus |
| X-Fab | HV/BCD | Drivers/controllers | Auto/industrial |
| SSMC | specialty analog | Power/automotive | NXP-linked JV heritage |
| GlobalFoundries/onsemi | 200 mm e-mode GaN-on-Si | 650 V lateral GaN devices | Samples targeted H1 2026; volume status to verify |

### Packaging

| Package | Device | Benefit |
|---|---|---|
| TO-247-4L / Kelvin | SiC | Lower common-source inductance |
| D2PAK-7L/TOLL/TOLT | Si/SiC/GaN | Surface mount and low inductance |
| LGA/BGA/chip-scale | GaN/DrMOS | Small loop/area |
| DBC/AMB module | SiC/IGBT | Isolation and heat spreading |
| Vicor ChiP/EPC LGA | modules/GaN | Proprietary density |

### Lead-Time Baseline

| Component | 2025 range | Constraint | Direction |
|---|---|---|---|
| SiC MOSFET | [ESTIMATED] 12-30 weeks | qualification/utilization | Improving/volatile |
| GaN IC | [ESTIMATED] 12-26 weeks | foundry/package | Improving |
| Power module | [ESTIMATED] 16-40 weeks | custom materials/test | Mixed |
| Controller IC | [ESTIMATED] 8-24 weeks | mature-node allocation | Normalized |
| Gate driver | [ESTIMATED] 8-20 weeks | isolation/package | Normalized |

Related: [Master Index](README.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| SiC production transition | 150 to 200 mm | Supplier disclosures | 2025 |
| GaN announced maximum | 300 mm | Infineon | 2024 |
| Infineon Dresden Smart Power Fab | €5B investment; opened 2026-07-02; Dresden capacity doubled | Infineon | 2026 |
| onsemi vertical GaN | 700/1,200 V early-access sampling; late-2026 volume target | onsemi | 2026 |
| Wolfspeed 300 mm SiC | Wafer capability demonstrated; not HVM | Wolfspeed | 2026 |
| US SiC device site | Mohawk Valley, NY | Wolfspeed | 2025 |
| US SiC materials site | Siler City, NC | Wolfspeed | 2025 |
| CHIPS support relevance | WBG/domestic capacity eligible | US Commerce | 2024-2025 |

## Open Questions / Gaps
- Normalize capacity and yield by good-die-equivalent output.
- Add OSAT dependencies and package substrate/ceramic supplier map.
- Refresh lead times using distributor and direct OEM surveys.
- Track CHIPS award modifications after supplier restructurings.

## References
- US CHIPS for America | https://www.nist.gov/chips | Accessed 2026-06-10
- Wolfspeed manufacturing | https://www.wolfspeed.com/company/manufacturing/ | Accessed 2026-06-10
- GlobalFoundries power technologies | https://gf.com/technology-platforms/ | Accessed 2026-06-10
- X-Fab technologies | https://www.xfab.com/technology | Accessed 2026-06-10
- Infineon Dresden Smart Power Fab | https://www.infineon.com/press-release/2026/ifxpr202607-117 | Accessed 2026-07-28
- onsemi/GlobalFoundries GaN collaboration | https://investor.onsemi.com/news-releases/news-release-details/onsemi-develop-next-generation-gan-power-devices-globalfoundries | Accessed 2026-07-28
- onsemi Q1 2026 investor presentation | https://investor.onsemi.com/static-files/47c2ca2d-07d7-4d18-aa0b-87cc657b1ef4 | Accessed 2026-07-28
- Wolfspeed Q2 FY2026 results | https://assets.wolfspeed.com/uploads/2026/02/Wolfspeed_Q2_2026_Earnings_Release.pdf | Accessed 2026-07-28
