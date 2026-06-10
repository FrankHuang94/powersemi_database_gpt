# Power Module and System Vendors
> **Last Updated:** 2026-06-10
> **Status:** Draft
> **Tags:** vendors, modules, power-shelves, UPS, Vicor, Delta, Vertiv

## Overview
Module and system vendors turn semiconductor, magnetic, capacitor, firmware, mechanical, and
thermal components into qualified power products. They capture value through integration,
certification, custom engineering, and hyperscaler supply relationships.

Vendor boundaries overlap: Vicor and Murata sell board modules, Delta and Flex build shelves,
and Vertiv/Eaton span facility infrastructure. Contract ODM revenue can be large while product
visibility and customer attribution remain limited.

## Key Findings / Highlights
- [CONFIRMED] Vicor's architecture combines BCM/PRM/VTM families and ChiP packaging.
- [CONFIRMED] Delta spans components, PSUs, shelves, UPS, and thermal systems.
- [CONFIRMED] Vertiv and Eaton participate from facility power into rack-level infrastructure.
- [CONFIRMED] Flex, Lite-On, and Acbel are important custom manufacturing/JDM suppliers.
- [TO VERIFY] Specific NVIDIA/Vicor GB200 content should be tied to public platform evidence, not inference.

## Detailed Content
### Vendor Matrix

| Company | Ticker | Products | Range | Input/output | Customers | Notes |
|---|---|---|---|---|---|---|
| Vicor | VICR | BCM, PRM, VTM, ChiP | board kW-class | 48 V to POL/intermediate | OEMs | Premium factorized architecture |
| Murata | 6981.T | DC/DC modules, POL, power | W-kW | broad | OEMs | Components + modules |
| Bel Fuse/Bel Power | BELFA/BELFB | PSU/modules | W-kW | AC/DC, DC/DC | OEMs | Power Solutions portfolio |
| Flex | FLEX | custom PSUs/shelves | kW-rack | AC to 48/12 V | hyperscalers | ODM/JDM |
| Delta Electronics | 2308.TW | PSU, shelf, UPS, PDU, thermal | W-MW | full chain | cloud/OEM | Broadest vertical system stack |
| Vertiv | VRT | UPS, PDU, busway, thermal | kW-MW | facility/rack | DC operators | High AI infrastructure exposure |
| Eaton | ETN | switchgear, UPS, busway/shelves | kW-MW | facility/rack | DC operators | Electrical distribution scale |
| Advanced Energy | AEIS | server PSUs/rectifiers | W-kW | AC/DC | OEMs | Artesyn heritage |
| Lite-On | 2301.TW | server PSUs/shelves | kW | AC-48/12 V | OEM/cloud | ODM scale |
| Acbel | 6282.TW | server power | kW | AC-48/12 V | OEM/cloud | Taiwan ODM |
| Great Wall Power | private/state-linked | PSU | kW | AC/DC | China cloud/OEM | Domestic ecosystem |

### Integration Layers

| Layer | Margin driver | Main risk |
|---|---|---|
| Board module | IP, density, qualification | Sole source and ASP pressure |
| Server PSU | Volume, efficiency, reliability | ODM competition |
| Rack shelf | Custom engineering, standards | Customer concentration |
| UPS/PDU | Installed base and service | Project cycles |
| Full infrastructure | Bundling and lifecycle service | Capital/project execution |

Related: [Master Index](README.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| ORv3 bus served | 48 V | OCP/vendor products | 2025 |
| Vertiv 2024 revenue | ~$8.0B [CONFIRMED] | Vertiv 10-K | FY2024 |
| Vicor packaging | ChiP | Vicor | 2025 |
| Delta scope | PSU through UPS/thermal | Delta | 2025 |
| Advanced Energy heritage | Artesyn Embedded Power acquired 2019 | AE | 2019 |

## Open Questions / Gaps
- Build SKU-level power shelf tracker with efficiency curves and OCP accepted-product status.
- Validate hyperscaler customer relationships using public filings or teardowns.
- Separate product revenue from contract manufacturing pass-through.

## References
- Vicor | https://www.vicorpower.com/ | Accessed 2026-06-10
- Delta datacenter solutions | https://www.deltaww.com/en-US/solutions/Data-Center/ALL/ | Accessed 2026-06-10
- Vertiv investor relations | https://investors.vertiv.com/ | Accessed 2026-06-10
- Eaton datacenters | https://www.eaton.com/us/en-us/markets/data-centers.html | Accessed 2026-06-10
- Advanced Energy | https://www.advancedenergy.com/ | Accessed 2026-06-10
