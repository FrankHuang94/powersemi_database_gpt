# Hyperscaler Power Strategy
> **Last Updated:** 2026-06-10
> **Status:** Draft
> **Tags:** hyperscalers, NVIDIA, Google, Meta, Microsoft, AWS

## Overview
Hyperscalers influence power semiconductors through rack specifications, custom accelerators,
fleet telemetry, qualification, and procurement scale. Public evidence is strongest for open
rack/shelf designs and system-level sustainability; custom VRM ASIC and merchant supplier
relationships are often confidential.

The strategic pattern is selective vertical integration: operators define architectures and
sometimes custom control silicon while continuing to buy power stages, discretes, magnetics,
shelves, and facility equipment from merchant suppliers.

## Key Findings / Highlights
- [CONFIRMED] Meta is a primary contributor to ORv3 48 V rack and BBU specifications.
- [CONFIRMED] Google has published 48 V and switched-tank converter research.
- [PARTIALLY CONFIRMED] Microsoft publishes custom Maia infrastructure but detailed power silicon is limited.
- [RUMORED] AWS custom power-management silicon and supplier attribution lack sufficient public evidence.
- [CONFIRMED] GB200 NVL72 integrates 72 Blackwell GPUs in a liquid-cooled rack-scale system.

## Detailed Content
### Strategy Matrix

| Organization | Architecture | Voltage target | Public suppliers | Custom silicon evidence | Programs |
|---|---|---|---|---|---|
| Google | 48 V, STC research | 48 V | Murata research collaboration | [TO VERIFY custom VRM ASIC] | TPU, fleet optimization |
| Meta | ORv3 rack/shelf/BBU | 48 V | OCP ecosystem | Shelf/system design confirmed | Open Rack |
| Microsoft | OCP/HVDC research | 48/400 V concepts | Eaton/OCP ecosystem [verify SKU] | Maia power details limited | Maia/Azure |
| AWS | custom server/accelerator | undisclosed | undisclosed | [RUMORED] | Trainium, Inferentia, Graviton |
| NVIDIA | rack-scale GPU | 48 V ecosystem | ODM/module ecosystem | Platform specifications | GB200/GB300 |
| AMD | OAM/rack platforms | 12/48 V ecosystem | OEM ecosystem | Platform specifications | Instinct |
| Intel | server/accelerator | 12/48 V ecosystem | VRM ecosystem | VR specifications | Xeon/Gaudi |
| Alibaba/Baidu/ByteDance | China cloud/AI | 48 V/domestic trend | [TO VERIFY] | [TO VERIFY] | Domestic substitution |

### Evidence Levels

| Claim | Status | Rationale |
|---|---|---|
| Meta custom power shelf | [CONFIRMED] | OCP specifications/contributions |
| Google STC collaboration | [CONFIRMED] | Published research/presentations |
| Google custom VRM ASIC | [TO VERIFY] | Need primary publication/patent-to-product link |
| Microsoft Maia custom power delivery | [PARTIALLY CONFIRMED] | Platform public; circuit suppliers private |
| AWS custom PMIC | [RUMORED] | Insufficient primary disclosure |

### Supplier Implications

- Open specifications expand the qualified ecosystem but intensify price competition.
- Custom controllers can reduce merchant control-IC content without eliminating power stages.
- High rack power favors suppliers that can co-design electrical, thermal, mechanical, and firmware.
- China cloud operators may accelerate domestic device/controller qualification.

Related: [Master Index](README.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| GB200 NVL72 GPU count | 72 | NVIDIA | 2024 |
| GB200 NVL72 CPU count | 36 Grace CPUs | NVIDIA | 2024 |
| ORv3 nominal bus | 48 V | OCP | 2024 |
| Meta HPR public target | 92 kW+ ecosystem | OCP | 2024 |
| Google 24/7 CFE target | 2030 | Google | 2020/current |

## Open Questions / Gaps
- Verify merchant power-semiconductor BOMs through teardowns and supplier disclosures.
- Separate operator-authored standards from actual fleet deployment percentages.
- Find primary evidence for custom VRM ASIC claims.
- Add GB300 and next-generation rack electrical specifications when public.

## References
- Meta/OCP Open Rack | https://www.opencompute.org/wiki/Open_Rack/SpecsAndDesigns | Accessed 2026-06-10
- NVIDIA GB200 NVL72 | https://www.nvidia.com/en-us/data-center/gb200-nvl72/ | Accessed 2026-06-10
- Google data center efficiency | https://datacenters.google/efficiency/ | Accessed 2026-06-10
- Microsoft Maia | https://azure.microsoft.com/en-us/blog/azure-maia-for-the-era-of-ai-from-silicon-to-software-to-systems/ | Accessed 2026-06-10
- AWS Trainium | https://aws.amazon.com/machine-learning/trainium/ | Accessed 2026-06-10
