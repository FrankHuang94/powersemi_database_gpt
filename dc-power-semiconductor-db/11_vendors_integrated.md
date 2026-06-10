# Integrated Power Semiconductor Vendors
> **Last Updated:** 2026-06-10
> **Status:** Draft
> **Tags:** vendors, IDM, financials, Infineon, TI, Renesas

## Overview
Integrated vendors combine analog/control ICs, power devices, packaging, manufacturing, and
application engineering. Their advantage is platform breadth and supply assurance; their
challenge is allocating capacity and R&D across automotive, industrial, consumer, and
datacenter markets with different cycles.

Datacenter-specific revenue is rarely disclosed. The database therefore separates reported
company revenue from [ESTIMATED] DC exposure and avoids treating total power revenue as AI
revenue.

## Key Findings / Highlights
- [CONFIRMED] Infineon spans silicon MOSFET, SiC, GaN, gate drivers, and digital controllers.
- [CONFIRMED] TI has GaN and broad power management but no commercial SiC device portfolio.
- [CONFIRMED] Renesas gained Intersil server power and acquired Transphorm GaN in 2024.
- [CONFIRMED] ST, onsemi, and ROHM are vertically invested in SiC.
- [TO VERIFY] Infineon "$12k-$15k content per 130 kW rack" requires a primary cited disclosure.

## Detailed Content
### Vendor Profiles

**Infineon Technologies (IFX.DE)**  
HQ: Germany | FY2025 revenue: [TO VERIFY] | DC exposure: [ESTIMATED, MED] meaningful  
Products: CoolMOS, OptiMOS, CoolSiC, CoolGaN, XDPE/XDP controllers. Manufacturing: IDM,
including Villach/Kulim and announced 300 mm GaN development. Strength: complete power chain.
Risk: industrial/auto cyclicality and capital intensity.

**Texas Instruments (TXN)**  
HQ: US | FY2025 revenue: [TO VERIFY] | DC exposure: [ESTIMATED, MED] meaningful analog share  
Products: TPS/LM/UCD controllers, LMG GaN, sensing/isolation. Manufacturing: IDM with expanding
300 mm analog capacity. Strength: catalog breadth and process cost. Weakness: no SiC devices.

**Analog Devices (ADI)**  
HQ: US | Products: LTC/MAX power, telemetry, isolation, signal chain. Manufacturing: hybrid
internal/foundry. Strength: high-performance control/sensing. Weakness: limited power discretes.

**Renesas Electronics (6723.T)**  
HQ: Japan | Products: RAA/ISL multiphase, smart stages, PMICs, Transphorm GaN. Acquisitions:
Intersil (2017), Dialog (2021), Transphorm (2024). Strength: server VR design history.

**STMicroelectronics (STM)**  
HQ: Switzerland | Products: MDmesh, MasterGaN, STPOWER SiC, controllers. SiC: internal devices,
Norstel substrate assets, Soitec supply, Sanan JV. [CORRECTION] No relevant "Masimo partnership"
was used because the seed claim lacks DC-power support.

**onsemi (ON)**  
HQ: US | Products: EliteSiC, silicon MOSFET/IGBT, drivers. Strength: automotive/industrial
manufacturing and modules. DC strategy: [ESTIMATED] cross-selling high-voltage portfolio.

**ROHM Semiconductor (6963.T)**  
HQ: Japan | Products: SiC MOSFET/SBD/modules, silicon power, drivers. SiCrystal supplies internal
substrate capability. Strength: vertical SiC and Japanese/European industrial relationships.

**Vishay Intertechnology (VSH)**  
HQ: US | Products: MOSFETs, diodes, resistors, inductors/current sensing. Strength: broad
passives/discretes. Weakness: limited proprietary WBG position.

**Microchip Technology (MCHP)**  
HQ: US | Products: dsPIC digital power, mSiC, timing/control. Microsemi acquisition closed 2018.
Strength: high-reliability control and SiC breadth; lower AI-VRM visibility.

### Comparative Table

| Company | Si | GaN | SiC | VRM/PMIC | Digital power | Manufacturing |
|---|---:|---:|---:|---:|---:|---|
| Infineon | High | High | High | High | High | IDM |
| TI | High | High | None | High | High | IDM |
| ADI | Low | Low | None | High | Medium | Hybrid |
| Renesas | Medium | High via Transphorm | Low | High | High | Hybrid/IDM |
| ST | High | High | High | Medium | Medium | IDM |
| onsemi | High | Developing | High | Medium | Medium | IDM |
| ROHM | High | Low | High | Medium | Medium | IDM |
| Vishay | High | Low | Low | Low | Low | IDM |
| Microchip | Medium | Low | Medium-high | Medium | High | Hybrid/IDM |

### Revenue Trajectory Schema

| Company | FY22 | FY23 | FY24 | FY25A/E | FY26E | DC share |
|---|---:|---:|---:|---:|---:|---|
| Each vendor | [TO VERIFY filings] | [TO VERIFY] | [TO VERIFY] | [TO VERIFY] | [ESTIMATED] | [ESTIMATED] |

> 🔄 Refresh Needed: High Priority. Financial values must be refreshed from the latest 10-K,
20-F, annual report, or earnings release and labeled by fiscal year and currency.

Related: [Master Index](README.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| Renesas/Intersil close | 2017 | Renesas | 2017 |
| Renesas/Dialog close | 2021 | Renesas | 2021 |
| Renesas/Transphorm close | 2024 | Renesas | 2024 |
| Microchip/Microsemi close | 2018 | Microchip | 2018 |
| Infineon/GaN Systems value | $830M announced | Infineon | 2023 |

## Open Questions / Gaps
- Populate FY2025/FY2026 financials from filings and reconcile currencies.
- Estimate DC revenue using product/customer evidence rather than total industrial revenue.
- Verify customer relationships; do not infer a hyperscaler customer from an OCP membership.
- Locate the primary Infineon rack-content statement.

## References
- Infineon investor relations | https://www.infineon.com/cms/en/about-infineon/investor/ | Accessed 2026-06-10
- TI investor relations | https://investor.ti.com/ | Accessed 2026-06-10
- Renesas acquisitions | https://www.renesas.com/en/about/company/mergers-acquisitions | Accessed 2026-06-10
- ST investor relations | https://investors.st.com/ | Accessed 2026-06-10
- onsemi investor relations | https://investor.onsemi.com/ | Accessed 2026-06-10
