# GaN Technology
> **Last Updated:** 2026-07-28
> **Status:** Draft
> **Tags:** GaN, HEMT, substrates, PFC, reliability

## Overview
Power GaN uses a high-electron-mobility transistor formed around a two-dimensional electron gas
at an AlGaN/GaN interface. Enhancement-mode devices dominate new power designs; cascode devices
combine a normally-on GaN transistor with a silicon MOSFET to produce normally-off behavior.

GaN's low charge and output capacitance enable high-frequency operation, but package/layout
parasitics, dynamic RDS(on), reverse-conduction loss, gate-voltage margin, and EMI require
disciplined design. Datacenter revenue is concentrated in AC/DC PFC and high-density DC/DC.

## Key Findings / Highlights
- [CONFIRMED, 2024] Infineon announced 300 mm (12-inch), not 8-inch, GaN wafer production development.
- [CONFIRMED] GaN-on-Si is the cost/scale platform for most power GaN; GaN-on-SiC is common in RF.
- [CONFIRMED] 650 V enhancement-mode and cascode products are commercially available.
- [CONFIRMED] Totem-pole PFC prototypes/products can exceed 99% peak efficiency under specified conditions.
- [CORRECTION] Navitas GeneSiC is a SiC product brand, not a fully integrated GaN driver/controller.
- [CONFIRMED, 2023-2024] Infineon acquired GaN Systems; Renesas acquired Transphorm.
- [CONFIRMED, 2026] onsemi is sampling 700 V/1,200 V vertical GaN to early-access customers
  and targets volume production in late 2026; the company also plans 650 V lateral GaN on
  GlobalFoundries' 200 mm e-mode GaN-on-Si process [Source: onsemi, 2026].
- [CONFIRMED, 2026-07] The US ITC import/sales remedies against infringing Innoscience
  products became final after Presidential Review, while German courts issued additional
  infringement rulings in Infineon's favor [Source: Infineon, 2026-07-07].

## Visual Guide
```mermaid
flowchart LR
  SUB["Silicon or SiC substrate"] --> EPI["GaN epi stack"]
  EPI --> HEMT["Lateral HEMT channel"]
  HEMT --> GATE["Gate / driver integration"]
  GATE --> PKG["Low-inductance package"]
  PKG --> APP["48 V DC-DC, PFC, adapters, AI power"]
```

```mermaid
flowchart TB
  LADDER["GaN integration ladder"] --> DISC["Discrete FET"]
  DISC --> DRIVER["FET plus driver"]
  DRIVER --> IC["GaN power IC"]
  IC --> MODULE["Power module or system-in-package"]
  MODULE --> BOARD["Reference design / qualified power stage"]
```

### Official Visual References
| Vendor | Visual Material to Review | Official Source |
|---|---|---|
| Navitas | GaNFast, GaNSafe, and AI datacenter power architecture visuals | https://navitassemi.com/ |
| Infineon | GaN Systems / CoolGaN product and application diagrams | https://www.infineon.com/cms/en/product/power/gallium-nitride-gan/ |
| EPC | eGaN device, package, and application diagrams | https://epc-co.com/epc/products/gan-fets-and-ics |
| Renesas | Transphorm GaN product-line and application visuals | https://www.renesas.com/en/products/power-power-management/gan-fets |

## Detailed Content
### Device Structures

| Structure | Normally off? | Strength | Limitation |
|---|---|---|---|
| E-mode lateral HEMT | Yes | Low charge, monolithic integration | Tight gate margin |
| Cascode GaN | Yes at terminals | Familiar gate drive | Added silicon/device parasitics |
| D-mode HEMT | No | Strong native channel | Fail-safe complexity |
| Vertical GaN | Potentially | Higher voltage/current density | Early manufacturing |

### Substrates

| Platform | Cost | Thermal | Wafer scale | Power use | Representative ecosystem |
|---|---|---|---|---|---|
| GaN-on-Si | Lowest GaN path | Limited by Si | 150/200/300 mm | Dominant power platform | Infineon, Navitas partners, EPC |
| GaN-on-SiC | High | Excellent | 100/150 mm | Mostly RF/specialty | Wolfspeed/RF ecosystem |
| GaN-on-GaN | Very high | Good | Small | Vertical/specialty | Odyssey-class R&D |
| GaN-on-sapphire | Medium | Poor-moderate | 150/200 mm | LED/R&D, some devices | Asian epi ecosystem |

### Datacenter Product Families

| Company | Family | Voltage class | Integration/package | Target |
|---|---|---:|---|---|
| Navitas | GaNFast / GaNSafe | 650 V | IC/discrete variants | PFC/LLC |
| EPC | eGaN FET/IC | 30-350 V common | Chip-scale/LGA | 48 V conversion |
| Infineon | CoolGaN / GaN Systems legacy | 100-700 V | Discrete/IC/module | PFC/DC-DC |
| TI | LMG | 100/600-650 V | Driver-integrated stages | PFC/DC-DC |
| Renesas | Transphorm SuperGaN | 650 V | Cascode/discrete | PFC/industrial |
| STMicroelectronics | MasterGaN | 600-650 V | Half bridge + drivers | PSU/industrial |
| onsemi | GaNEXUS lateral/vertical GaN | 650 V lateral; 700/1,200 V vertical roadmap | discrete/integrated roadmap | AI PSU/800 V conversion |

> ⚠️ Note: Price is channel-, volume-, package-, and date-dependent; distributor spot prices
are not a valid proxy for hyperscaler/OEM contract ASP.

### Integration Ladder

1. Discrete GaN FET plus external driver/controller.
2. GaN FET plus optimized driver in one package or IC platform.
3. Half-bridge/power-stage integration with sensing/protection.
4. Converter module including magnetics, capacitors, and control.

### Wafer Roadmap

| Diameter | Status | Significance |
|---:|---|---|
| 150 mm / 6-inch | Mainstream legacy capacity | Established epi/process |
| 200 mm / 8-inch | Scaling | Better tool/foundry compatibility |
| 300 mm / 12-inch | Announced by Infineon in 2024 | Potential die-cost/productivity step |

onsemi's vertical GaN program is GaN-on-GaN rather than the mainstream lateral GaN-on-Si
platform. Early-access sampling and a late-2026 volume target should not be treated as
qualified mass deployment until production and field data are disclosed.

### IP and Qualification

JEDEC JEP173 provides dynamic on-resistance measurement guidance. AEC-Q101 is used by some
vendors as an automotive reliability benchmark but is not a datacenter-specific qualification.
Key IP clusters include e-mode process/field plates, monolithic driver integration, protection,
and low-inductance packaging. Infineon reported about 450 GaN patent families in July 2026,
but that owner-reported figure still requires independent normalization by legal status and
jurisdiction [See: 16_patents_ip_landscape.md].

Related: [Master Index](README.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| Main high-voltage class | 650 V | Vendor portfolios | 2025 |
| Infineon wafer milestone | 300 mm GaN development | Infineon | 2024 |
| GaN Systems acquisition | $830M announced transaction value | Infineon | 2023 |
| Transphorm owner | Renesas | Renesas | 2024 |
| onsemi vertical GaN roadmap | 700/1,200 V sampling; late-2026 volume target | onsemi | 2026 |
| Infineon reported GaN portfolio | ~450 patent families [OWNER-REPORTED] | Infineon | 2026-07 |
| Peak PFC efficiency | >99% under design-specific conditions | Vendor reference designs | 2024-2025 |

## Open Questions / Gaps
- Add current product-level RDS(on), Qg, Coss, package, qualification, and volume ASP snapshots.
- Verify Navitas patent-family count rather than repeating marketing patent counts.
- Track actual 300 mm yield, products, and customer qualification after Infineon's announcement.
- Obtain comparable dynamic RDS(on) and field-failure data.

## References
- Infineon 300 mm GaN | https://www.infineon.com/cms/en/about-infineon/press/press-releases/2024/INFXX202409-158.html | Accessed 2026-06-10
- Renesas completes Transphorm acquisition | https://www.renesas.com/en/about/press-room/renesas-completes-acquisition-transphorm | Accessed 2026-06-10
- ST MasterGaN | https://www.st.com/en/power-management/mastergan.html | Accessed 2026-06-10
- TI GaN | https://www.ti.com/power-management/gallium-nitride/overview.html | Accessed 2026-06-10
- EPC products | https://epc-co.com/epc/products/gan-fets-and-ics | Accessed 2026-06-10
- onsemi/GF 200 mm lateral GaN collaboration | https://investor.onsemi.com/news-releases/news-release-details/onsemi-develop-next-generation-gan-power-devices-globalfoundries | Accessed 2026-07-28
- onsemi Q1 2026 investor presentation | https://investor.onsemi.com/static-files/47c2ca2d-07d7-4d18-aa0b-87cc657b1ef4 | Accessed 2026-07-28
- Infineon US ITC final determination | https://www.infineon.com/press-release/2026/ifxpr202607-118 | Accessed 2026-07-28
- Infineon German infringement ruling | https://www.infineon.com/press-release/2026/infxx202606-115 | Accessed 2026-07-28
