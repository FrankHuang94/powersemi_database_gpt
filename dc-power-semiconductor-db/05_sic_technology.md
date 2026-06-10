# Silicon Carbide Technology
> **Last Updated:** 2026-06-10
> **Status:** Draft
> **Tags:** SiC, MOSFET, substrates, capacity, reliability

## Overview
4H-SiC combines high critical electric field and thermal conductivity, making it attractive for
high-voltage, high-power conversion. Datacenter applications center on UPS, PFC, HVDC, and
rack-level converters rather than sub-100 V point-of-load regulation.

The SiC value chain starts with slow, defect-sensitive crystal growth, followed by wafering,
epitaxy, device fabrication, and power packaging. EV-led capacity investment created pricing
and utilization pressure in 2024-2026, potentially lowering device cost for infrastructure
applications while stressing highly leveraged suppliers.

## Key Findings / Highlights
- [CONFIRMED] 4H-SiC is the dominant power-electronics polytype.
- [CONFIRMED] Gate oxide/interface traps remain a central MOSFET reliability concern.
- [CONFIRMED, 2025] Wolfspeed filed Chapter 11 in June 2025 and completed financial restructuring later in 2025.
- [CORRECTION] SK Siltron is part of SK Group, not a Samsung subsidiary.
- [CORRECTION] ST and Soitec have a SmartSiC supply relationship; ST's China SiC JV is with Sanan.
- [ESTIMATED, 2025-2026] EV demand/capacity mismatch increased SiC pricing pressure and datacenter availability.

## Detailed Content
### Device Physics and Reliability

| Topic | Engineering significance |
|---|---|
| 4H polytype | Best-established field/mobility/material balance |
| SiO2/SiC interface | Trap density affects mobility and threshold stability |
| Body diode | Higher forward drop; dead-time and external diode choices matter |
| Bipolar degradation | Basal-plane defects can degrade bipolar conduction |
| Avalanche/short circuit | Must be tested at mission-profile temperature and bus voltage |

### Supply Chain

| Step | Bottleneck | Leaders/examples |
|---|---|---|
| Boule growth | Defects, cycle time, diameter | Wolfspeed, Coherent, SiCrystal, SICC, TanKeBlue, SK Siltron |
| Wafering | Kerf loss, bow, surface | Integrated and specialist wafer firms |
| Epitaxy | Thickness/doping uniformity | IDMs and epi suppliers |
| Device fab | Oxide/interface, yield | Infineon, ST, onsemi, ROHM, Wolfspeed |
| Packaging | Inductance and thermal cycling | IDMs/module specialists |

### Device Families

| Company | Family | Voltage class | Package direction | DC target |
|---|---|---:|---|---|
| Wolfspeed | C3M/E3M | 650-1,700 V | TO/D2PAK/modules | PFC/UPS |
| Infineon | CoolSiC | 650-2,000 V class | discrete/modules | PFC/UPS/HVDC |
| onsemi | EliteSiC | 650-1,200 V | discrete/modules | PFC/energy |
| STMicroelectronics | STPOWER SiC | 650-1,200 V | discrete/modules | PFC/industrial |
| ROHM | SCT/BH series | 650-1,200 V | discrete/modules | PFC/UPS |
| Microchip | mSiC | 700-3,300 V | die/discrete/modules | high-reliability power |

### Capacity Tracker

| Company/site | Substrate/device | Diameter | 2026 status | Investment/status |
|---|---|---:|---|---|
| Wolfspeed Mohawk Valley | Devices | 200 mm | Ramping | Restructured balance sheet |
| Wolfspeed JP manufacturing center | Materials | 200 mm target | Ramp/qualification | Multi-billion program |
| Coherent | Substrates | 150/200 mm | Commercial/ramping | Merchant supplier |
| SiCrystal/ROHM | Substrates | 150/200 mm path | Integrated | European base |
| ST/Sanan JV | Devices | 200 mm plan | Ramp plan | China manufacturing |
| SICC/TanKeBlue | Substrates | 150/200 mm path | Expanding | China localization |

> ⚠️ Note: Public "capacity" is reported as wafers, revenue capacity, floor space, or
equivalent wafer starts. These units are not directly comparable; unsupported mm2/month
estimates are intentionally omitted.

### Packaging Roadmap

TO-247/D2PAK remain common. Four-lead Kelvin-source and low-inductance surface-mount packages
improve switching behavior. Half-bridge and multi-switch modules using DBC/AMB substrates are
preferred as power and voltage rise. See [21_thermal_management.md](21_thermal_management.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| Dominant polytype | 4H-SiC | Industry consensus | 2025 |
| Common DC voltage classes | 650/1,200 V | Vendor portfolios | 2025 |
| Mohawk Valley wafer diameter | 200 mm | Wolfspeed | 2025 |
| Wolfspeed Chapter 11 filing | June 30, 2025 | Wolfspeed/court disclosures | 2025 |
| ST China SiC partner | Sanan | STMicroelectronics | 2023 |

## Open Questions / Gaps
- Normalize wafer capacity to 150 mm-equivalent good wafers per month.
- Add post-restructuring Wolfspeed utilization, capex, and customer commitments.
- Quantify datacenter-specific SiC shipments separately from EV/industrial.
- Add China substrate defect-density and qualification comparisons.

## References
- Wolfspeed restructuring | https://investor.wolfspeed.com/ | Accessed 2026-06-10
- ST and Sanan SiC JV | https://newsroom.st.com/media-center/press-item.html/c3184.html | Accessed 2026-06-10
- Soitec SmartSiC | https://www.soitec.com/en/products/smartcut/smartsic | Accessed 2026-06-10
- ROHM SiC | https://www.rohm.com/sic | Accessed 2026-06-10
- Microchip SiC | https://www.microchip.com/en-us/products/power-management/silicon-carbide | Accessed 2026-06-10
