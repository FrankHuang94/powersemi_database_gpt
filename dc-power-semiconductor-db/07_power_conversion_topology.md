# Power Conversion Topology
> **Last Updated:** 2026-06-10
> **Status:** Draft
> **Tags:** topology, PFC, LLC, DAB, multiphase, switched-capacitor

## Overview
Converter topology determines voltage ratio, isolation, switch stress, magnetic requirements,
control complexity, and the ability to exploit a semiconductor's speed. Device comparisons
that ignore topology and operating mode are usually misleading.

Datacenter front ends increasingly use bridgeless/totem-pole PFC and resonant DC/DC, while
processor rails use multiphase bucks or proprietary factorized/switched-capacitor approaches.
Bidirectional CLLC and DAB stages support BBUs, UPS, and future HVDC architectures.

## Key Findings / Highlights
- [CONFIRMED] Totem-pole PFC removes the diode-bridge loss but increases control/commutation demands.
- [CONFIRMED] LLC uses resonant soft switching and is common in isolated server power conversion.
- [CONFIRMED] Multiphase operation shares current and cancels ripple at the output.
- [CONFIRMED] DAB provides isolated bidirectional power using two active bridges.
- [ESTIMATED] Hybrid switched-capacitor/inductor designs gain value as conversion ratios rise.

## Detailed Content
### Topology Matrix

| Topology | Type | Voltage/power | Efficiency potential | Complexity | DC use | WBG fit |
|---|---|---|---|---|---|---|
| Buck/boost/buck-boost | Non-isolated | LV-MV | High | Low-medium | POL/bus | Yes |
| SEPIC/flyback | Isolated optional | Low-medium power | Medium | Low | Aux rails | Yes |
| LLC/CLLC | Isolated resonant | 100 W-100 kW class | Very high | Medium-high | PSU/BBU | Strong |
| DAB | Isolated bidirectional | kW-MW class | High | High | HVDC/BBU | Strong |
| Totem-pole PFC | AC/DC | 1-100+ kW | >99% peak demonstrated | High | Front end | Strong |
| Vienna rectifier | 3-phase AC/DC | high power | High | High | UPS/front end | SiC fit |
| PSFB | Isolated | kW class | High | Medium | Bus converter | Yes |
| Multiphase buck | Non-isolated | 100-1,000+ A | High | High | CPU/GPU VRM | Si/GaN |
| Switched capacitor | Non-isolated | fixed ratios | High | Medium | 48-12 V | GaN/Si |
| Factorized/SAC | Proprietary resonant | high ratio | High | High | 48 V-POL | Module-specific |

### Multiphase Ripple

For N equally spaced phases, each phase is shifted by 360/N degrees. At favorable duty ratios,
the summed inductor ripple partially cancels, permitting smaller output capacitance and faster
transients. Real gains depend on current sharing, dead time, package/plane parasitics, and
controller bandwidth.

### Emerging 800 V Options

| Topology | Role | Key issue |
|---|---|---|
| SiC DAB | 800 V to isolated bus | Transformer/leakage optimization |
| CLLC | Bidirectional resonant conversion | Wide-gain control |
| Partial-power processing | Process only voltage difference | Protection/fault paths |
| Modular multilevel | Scale voltage with cells | Cost/control complexity |

Related: [Master Index](README.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| Typical VRM phases | 6-20+ | Controller/product designs | 2025 |
| Totem-pole peak efficiency | >99% demonstrated | Reference designs | 2024-2025 |
| Phase spacing | 360/N degrees | Topology identity | 2026 |
| DAB directionality | Bidirectional | Power-electronics literature | 2025 |
| LLC switching | ZVS/ZCS over designed range | Power-electronics literature | 2025 |

## Open Questions / Gaps
- Add apples-to-apples 5 kW and 30 kW loss models across PFC/LLC variants.
- Map proprietary Vicor claims to independently measured efficiency and transient data.
- Track OCP high-power shelf reference topologies.

## References
- IEEE Transactions on Power Electronics | https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=63 | Accessed 2026-06-10
- TI totem-pole PFC resources | https://www.ti.com/power-management/acdc-isolated-dcdc-switching-regulators/power-factor-correction-pfc/overview.html | Accessed 2026-06-10
- Vicor Factorized Power | https://www.vicorpower.com/technology/factorized-power-architecture | Accessed 2026-06-10
