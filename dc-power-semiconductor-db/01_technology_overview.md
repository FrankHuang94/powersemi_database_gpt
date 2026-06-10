# Technology Overview
> **Last Updated:** 2026-06-10
> **Status:** Draft
> **Tags:** fundamentals, glossary, device-physics, metrics

## Overview
Datacenter power electronics convert and regulate energy from utility voltage to sub-1 V,
kiloampere-class processor rails. Every conversion stage trades efficiency, isolation,
transient response, power density, EMI, thermal headroom, cost, and reliability.

Device material is only one design variable. Topology, magnetics, capacitors, packaging,
gate drive, control firmware, cooling, and the PDN determine system performance. This file
defines the vocabulary and metrics used throughout the database.

## Key Findings / Highlights
- [CONFIRMED] Power moves through facility AC, UPS/PDU, rack PSU, busbar, intermediate conversion, and VRM stages.
- [CONFIRMED] Processor core rails are commonly below 1 V and can require hundreds to more than 1,000 A transient current.
- [CONFIRMED] RDS(on) x Qg is a common switching/conduction tradeoff figure of merit, not a full system metric.
- [CONFIRMED] GaN favors high-frequency and low/medium-voltage switching; SiC favors high voltage and temperature.
- [CONFIRMED] Silicon retains the broadest maturity, lowest cost, and strongest low-voltage ecosystem.

## Detailed Content
### Conversion Chain

| Stage | Typical input | Typical output | Function |
|---|---:|---:|---|
| Facility service/UPS | 3-phase AC | AC or 380-400 V DC | Protection and backup |
| PDU/rack shelf | AC or HVDC | 48 V or 12 V DC | Distribution conversion |
| Intermediate bus | 48 V | 12 V/5 V | Board distribution |
| VRM/POL | 12/5/3.3 V | 0.5-1.8 V | Processor/memory rails |

### Key Metrics

| Metric | Definition | Why it matters | Typical values |
|---|---|---|---|
| Switching frequency | Switch cycles per second | Passive size and switching loss | 50 kHz-2+ MHz |
| RDS(on) | On-state channel resistance | Conduction loss | sub-mOhm to >1 Ohm by rating |
| Breakdown voltage | Blocking-voltage rating | Architecture/surge margin | 30 V-3.3 kV |
| RDS(on) x Qg | Resistance-gate-charge FOM | First-order device tradeoff | Device-specific |
| Efficiency | Pout/Pin | Energy/thermal cost | 90-99%+ per stage |
| Power density | Power per volume | Rack/board capacity | ~0.5-10+ kW/L system-dependent |
| Thermal resistance | Temperature rise per watt | Junction margin | <0.1 to tens C/W |
| EMI/EMC | Conducted/radiated emissions/immunity | Compliance and reliability | IEC/CISPR dependent |
| THD | Harmonic current distortion | Grid quality | application/standard dependent |
| Power factor | Real/apparent power | Facility utilization | typically >0.95 at rated load |

### Material Comparison

| Property | Si | 4H-SiC | GaN | beta-Ga2O3 | Diamond |
|---|---:|---:|---:|---:|---:|
| Bandgap (eV) | 1.12 | 3.26 | 3.4 | ~4.8 | 5.47 |
| Critical field (MV/cm) | ~0.3 | ~2.5-3 | ~3.3 | ~8 [research] | ~10 [research] |
| Electron mobility (cm2/Vs) | ~1,400 | ~900 | ~1,500-2,000 2DEG | ~100-300 | ~2,000 |
| Thermal conductivity (W/cm-K) | ~1.5 | ~3.7-4.9 | ~1.3-2.3 | ~0.1-0.3 | ~10-20 |
| Practical maturity | Mass production | Mass production | Mass production | R&D/pilot | R&D |
| Relative wafer cost | Low | High | Medium-high | Unknown | Extreme |

### Application Zones

- Below 100 V and moderate frequency: silicon MOSFET/DrMOS is usually the cost leader.
- 48 V high-density conversion: silicon and 100/200 V GaN compete.
- 400-650 V high-frequency PFC/LLC: GaN and silicon super-junction compete.
- 650-1,700 V high-power conversion: SiC has the strongest WBG position.

### Glossary

| Term | Definition |
|---|---|
| VRM / PMIC | Voltage regulator module / power-management IC |
| PFC / LLC | Power-factor correction / resonant converter family |
| Buck / boost | Step-down / step-up converter |
| Totem-pole | Bridgeless PFC topology using active half bridges |
| ZVS / ZCS | Zero-voltage / zero-current switching |
| CCM / DCM | Continuous / discontinuous conduction mode |
| PWM / DPWM | Analog / digitally generated pulse-width modulation |
| PSR | Primary-side regulation |
| PMBus | SMBus/I2C-derived digital power-management protocol |
| AVS / DVFS | Adaptive voltage scaling / dynamic voltage-frequency scaling |
| ORv3 / OCP | Open Rack v3 / Open Compute Project |
| BBU / UPS / PDU | Battery backup unit / uninterruptible supply / distribution unit |
| HVDC / BDC | High-voltage DC / bus or bidirectional DC converter |
| LDO | Low-dropout linear regulator |
| FET / HEMT / IGBT | Field-effect / high-electron-mobility / insulated-gate bipolar transistor |
| WBG / eGaN | Wide-bandgap / EPC enhancement-mode GaN trademark |
| SJ-MOSFET | Super-junction silicon MOSFET |
| SBD / JBS / BJT | Schottky barrier diode / junction-barrier Schottky / bipolar transistor |
| Gate driver IC | IC that sources/sinks switch-gate current |
| DrMOS | Integrated driver plus high/low-side MOSFET stage |
| CoT | Constant-on-time control |
| Hysteretic control | Regulation using comparator bands rather than fixed-frequency PWM |

Related: [Master Index](README.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| Silicon bandgap | 1.12 eV | Standard semiconductor references | 2025 |
| 4H-SiC bandgap | 3.26 eV | Standard semiconductor references | 2025 |
| GaN bandgap | ~3.4 eV | Standard semiconductor references | 2025 |
| Core-rail voltage | [ESTIMATED] 0.5-1.0 V | Processor VR practice | 2025 |
| POL current | [ESTIMATED] 100-1,000+ A | Accelerator board practice | 2025 |

## Open Questions / Gaps
- Normalize material properties to temperature, crystal orientation, and measurement method.
- Add package-level rather than die-only figures of merit for representative products.
- Add worked loss calculations for representative 48 V and 400 V converters.

## References
- IEEE Electron Device Society | https://eds.ieee.org/ | Accessed 2026-06-10
- PMBus specifications | https://pmbus.org/specification-archives/ | Accessed 2026-06-10
- OCP Rack and Power | https://www.opencompute.org/projects/rack-and-power | Accessed 2026-06-10
