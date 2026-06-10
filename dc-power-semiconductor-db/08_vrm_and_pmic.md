# VRM and PMIC
> **Last Updated:** 2026-06-10
> **Status:** Draft
> **Tags:** VRM, PMIC, DrMOS, GPU, CPU, POL

## Overview
VRMs translate board or rack intermediate rails into tightly regulated processor, memory, and
auxiliary voltages. AI accelerators combine high average power with abrupt load transients,
making current density, telemetry, control bandwidth, decoupling, and thermal design central.

Most high-current rails use multiphase controllers with integrated DrMOS or smart power stages.
Proprietary modules and direct 48 V approaches compete where board area, copper loss, or vertical
placement justify a different architecture.

## Key Findings / Highlights
- [CONFIRMED] H100 SXM has a configurable TDP up to 700 W [Source: NVIDIA, 2023].
- [CORRECTION] H200 SXM is generally a 700 W-class product, not a universally confirmed 1,000 W device.
- [CORRECTION] B200 SXM is up to roughly 1,000 W; 1,200 W figures are configuration/product-generation dependent.
- [ESTIMATED] A sub-1 V, 1 kW rail implies more than 1,000 A before conversion and distribution margins.
- [CONFIRMED] DrMOS integrates driver plus high/low-side MOSFETs to reduce parasitics and area.

## Detailed Content
### VRM Evolution

| Generation | Period | Input | Output | Current | Phases | Technology | Example |
|---|---:|---:|---:|---:|---:|---|---|
| ATX12V/VR11 | 2000s | 12 V | ~1 V | <150 A | 3-6 | discrete FET | CPUs |
| VR12/13 | 2010s | 12 V | sub-1.5 V | 100-300 A | 4-10 | DrMOS | Xeon/accelerators |
| VR14 era | 2020s | 12 V | sub-1 V | 300-800 A | 8-16 | smart stages | CPU/GPU |
| 48 V board input | 2020s | 48 V | 12 V/intermediate/POL | 500-1,000+ A load | multi-stage | GaN/modules | AI boards |
| Direct/vertical delivery | emerging | 48 V/intermediate | sub-1 V | 1,000 A+ | distributed | package-adjacent | Roadmap |

### Accelerator Power Snapshot

| Processor | Published power | Core voltage | Current implication | Notes |
|---|---:|---:|---:|---|
| NVIDIA H100 SXM | up to 700 W | [TO VERIFY rail] | hundreds of A | Product configurable |
| NVIDIA H200 SXM | up to 700 W class | [TO VERIFY rail] | hundreds of A | Memory increase |
| NVIDIA B200 SXM | up to ~1,000 W | [TO VERIFY rail] | ~1,000 A class at core | Liquid-cooled systems |
| AMD MI300X | 750 W class | [TO VERIFY rail] | hundreds of A | OAM |
| Intel Xeon 8592+ | 350 W base | multiple rails | hundreds of A aggregate | CPU |

> ⚠️ Note: TDP is not equal to a single VCC rail. Maximum rail current and required phase count
are platform design values generally not disclosed in public product briefs.

### Vendor Matrix

| Company | Families | Input range | Control | Position |
|---|---|---|---|---|
| Renesas | RAA/ISL | 5-48 V class | digital/multiphase | Strong server VR |
| MPS | MP/MPQ | broad | digital/analog | Integrated power stages/modules |
| Infineon | XDPE/TDA/IR stages | broad | digital/multiphase | Controllers + FETs |
| TI | TPS/LM/UCD | broad | analog/digital | Breadth and telemetry |
| AOS | AOZ/stages | low voltage | multiphase stages | Server/notebook power |
| Richtek/Silergy | controller/stage families | low voltage | mixed | ODM/value segments |

### Architecture Tradeoff

Separate controller/driver/FET designs maximize component choice and thermal spreading.
Integrated power stages reduce loop inductance and design effort. Full modules reduce time to
market and area but add vendor concentration and may limit repair/customization.

Related: [Master Index](README.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| H100 SXM TDP | Up to 700 W | NVIDIA | 2023 |
| H200 SXM TDP | 700 W class | NVIDIA | 2024 |
| B200 SXM TDP | Up to ~1,000 W | NVIDIA | 2024 |
| MI300X power | 750 W class | AMD | 2023 |
| High-current VRM phases | [ESTIMATED] 8-20+ | Board designs | 2025 |

## Open Questions / Gaps
- Obtain platform design guides for exact rail currents, load lines, and phase requirements.
- Estimate datacenter-only VR controller and smart-power-stage market shares.
- Map GPU ODM sockets to controller, stage, inductor, and capacitor suppliers.

## References
- NVIDIA H100 datasheet | https://resources.nvidia.com/en-us-tensor-core | Accessed 2026-06-10
- NVIDIA Blackwell platform | https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/ | Accessed 2026-06-10
- AMD Instinct MI300X | https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html | Accessed 2026-06-10
- Renesas multiphase controllers | https://www.renesas.com/en/products/power-power-management/multiphase-controllers | Accessed 2026-06-10
- Infineon digital multiphase controllers | https://www.infineon.com/cms/en/product/power/dc-dc-converters/digital-multiphase-controllers/ | Accessed 2026-06-10
