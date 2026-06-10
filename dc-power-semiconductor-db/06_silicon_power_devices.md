# Silicon Power Devices
> **Last Updated:** 2026-06-10
> **Status:** Draft
> **Tags:** silicon, MOSFET, IGBT, diode, DrMOS

## Overview
Silicon remains the economic and volume foundation of datacenter power. Low-voltage trench
MOSFETs and integrated DrMOS stages dominate processor VRMs, while super-junction MOSFETs,
rectifiers, and IGBTs retain positions in PSUs and UPS systems.

WBG displaces silicon where higher frequency, voltage, temperature, or density creates enough
system savings to offset device cost. Silicon continues to improve through cell geometry,
thin wafers, copper clip packaging, source-down layouts, and integration.

## Key Findings / Highlights
- [ESTIMATED, MED confidence, 2025] Silicon represents more than 80% of DC power-device unit volume.
- [CONFIRMED] Sub-100 V POL is silicon's strongest datacenter position.
- [CONFIRMED] Super-junction MOSFETs remain competitive in 600-700 V server PSUs.
- [CONFIRMED] IGBTs remain used in high-power, lower-frequency UPS/inverter stages.
- [ESTIMATED] Silicon remains cost-competitive at 12/48 V below roughly 300-500 kHz, design-dependent.

## Detailed Content
### Device Map

| Device | Voltage | Vendors | Best DC application | WBG threat |
|---|---:|---|---|---|
| Trench MOSFET | 20-200 V | Infineon, Vishay, AOS, onsemi, TI | VRM/intermediate bus | GaN growing |
| Super-junction MOSFET | 500-900 V | Infineon, ST, onsemi, Vishay | PFC/LLC | GaN/SiC current |
| Planar MOSFET | broad/legacy | Many | Cost/legacy | Gradual internal replacement |
| IGBT | 600 V-6.5 kV | Infineon, Mitsubishi, Fuji, onsemi | UPS/inverter | SiC at high duty/frequency |
| Schottky/ultrafast diode | 20-1,200 V | Vishay, ST, Infineon, ROHM | Rectification/clamp | SiC SBD at HV |

### Representative Families

| Company | Family | Technology | Datacenter relevance |
|---|---|---|---|
| Infineon | CoolMOS | HV super-junction | PFC/LLC |
| Infineon | OptiMOS | LV trench MOSFET | 48 V/VRM |
| STMicroelectronics | MDmesh | HV super-junction | PSU |
| Vishay | TrenchFET/EF/EF2 class | LV/HV MOSFET | VRM/PSU |
| AOS | AlphaMOS/DrMOS portfolio | LV MOSFET/stage | Server boards |

### Performance per Dollar

| Region | Silicon | GaN | SiC | Likely choice |
|---|---|---|---|---|
| <100 V, <300 kHz | Excellent | Improving | Poor | Silicon |
| 100-200 V, 0.3-2 MHz | Good | Excellent | Poor | GaN/design-specific |
| 400-650 V, high frequency | Good | Excellent | Good | GaN/Si SJ/SiC |
| 650-1,700 V, high power | Limited | Limited | Excellent | SiC |

See [08_vrm_and_pmic.md](08_vrm_and_pmic.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| POL voltage zone | <100 V input devices | Vendor portfolios | 2025 |
| SJ-MOSFET zone | 500-900 V | Vendor portfolios | 2025 |
| IGBT UPS zone | [ESTIMATED] >100 kW systems | Industry designs | 2025 |
| Silicon unit share | [ESTIMATED] >80% | Analyst assessment | 2025 |
| Si cost leadership | [CONFIRMED] mature high-volume fabs | Vendor disclosures | 2025 |

## Open Questions / Gaps
- Source datacenter-only MOSFET shipment and revenue shares.
- Compare package-level FOM and thermal resistance for source-down silicon versus GaN.
- Quantify IGBT-to-SiC crossover by UPS duty cycle and electricity price.

## References
- Infineon CoolMOS | https://www.infineon.com/cms/en/product/power/mosfet/high-voltage-mosfets/coolmos/ | Accessed 2026-06-10
- ST MDmesh | https://www.st.com/en/power-transistors/mdmesh-mosfets.html | Accessed 2026-06-10
- Vishay MOSFETs | https://www.vishay.com/en/mosfets/ | Accessed 2026-06-10
- onsemi IGBTs | https://www.onsemi.com/products/discrete-power-modules/igbts | Accessed 2026-06-10
