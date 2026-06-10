# Key Research Papers
> **Last Updated:** 2026-06-10
> **Status:** Draft
> **Tags:** papers, bibliography, IEEE, APEC, reliability

## Overview
This curated bibliography organizes foundational and applied literature by the engineering
questions in the database. Preference is given to peer-reviewed papers, standards, and
conference proceedings with reproducible measurements.

Bibliographic metadata and DOI links require periodic validation. Vendor white papers are useful
application evidence but should not replace independent reliability or efficiency studies.

## Key Findings / Highlights
- [CONFIRMED] APEC, ECCE, COMPEL, ISPSD, IEDM, TPEL, TED, JSSC, and PCIM are core venues.
- [CONFIRMED] Dynamic RDS(on) measurement is a central GaN literature theme.
- [CONFIRMED] SiC gate-oxide/interface reliability remains heavily researched.
- [CONFIRMED] 48 V-to-POL research includes switched-tank and hybrid converters.
- [CONFIRMED] HVDC studies must specify architecture boundaries to compare efficiency.

## Detailed Content
### Curated Starter Set

| Topic | Title / search anchor | Authors | Year | Venue | Key finding | DOI/link |
|---|---|---|---:|---|---|---|
| GaN reliability | Dynamic on-resistance in GaN HEMTs | Meneghini et al. and related | 2010s | IEEE TED/TDMR | Trapping raises transient resistance | https://ieeexplore.ieee.org/ |
| GaN qualification | JEP173 dynamic RON procedure | JEDEC | 2019+ | JEDEC | Standardized measurement guidance | https://www.jedec.org/standards-documents/docs/jep173 |
| SiC oxide | SiO2/SiC interface and MOS reliability reviews | Kimoto/coauthors | 2010s | IEEE TED | Interface traps limit channel mobility | https://ieeexplore.ieee.org/ |
| Totem-pole PFC | Bridgeless totem-pole PFC with GaN | multiple | 2010s-2020s | APEC/TPEL | High efficiency with fast commutation | https://ieeexplore.ieee.org/ |
| 48 V conversion | Switched-tank converter for data centers | Google/Murata researchers | 2010s | APEC/COMPEL | High-density fixed-ratio conversion | https://ieeexplore.ieee.org/ |
| VRM control | Multiphase buck current sharing/transients | multiple | 2000s-2020s | TPEL/APEC | Interleaving reduces ripple | https://ieeexplore.ieee.org/ |
| Digital power | Digital PWM/control quantization | multiple | 2000s-2020s | COMPEL/TPEL | Limit cycles and resolution matter | https://ieeexplore.ieee.org/ |
| Power integrity | Target impedance methodology | Smith/Bogatin lineages | 1990s-2020s | IEEE/industry | PDN impedance bounds droop | https://ieeexplore.ieee.org/ |
| Packaging | WBG parasitic-aware packaging reviews | multiple | 2015-2025 | CPMT/TPEL | Loop inductance limits switching benefit | https://ieeexplore.ieee.org/ |
| HVDC | DC distribution in data centers | multiple | 2010s | ECCE/TPEL | Gains depend on stage boundary/load | https://ieeexplore.ieee.org/ |
| AI optimization | Data center cooling/power ML control | Google/DeepMind | 2016+ | Applied reports | ML can optimize supervisory controls | https://deepmind.google/discover/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/ |
| Ga2O3 | Ultra-wide-bandgap beta-Ga2O3 reviews | Higashiwaki et al. | 2010s | APL/IEEE | High field, poor thermal conductivity | https://doi.org/10.1063/1.5059067 |

### Venue Watchlist

| Venue | Cadence | Best topics |
|---|---|---|
| APEC | Annual | Applied converters, power density |
| ECCE | Annual | Systems/topologies/control |
| COMPEL | Annual | Control/modeling |
| ISPSD | Annual | Power devices and reliability |
| IEDM | Annual | Leading device processes |
| IEEE TPEL | Continuous | Converter research |
| IEEE TED | Continuous | Device physics/reliability |
| PCIM Europe | Annual | Commercial devices/systems |

> 🔄 Refresh Needed: Add exact article titles, authors, DOI, and open-access links from a
bibliographic database; the current rows are search anchors where metadata is incomplete.

Related: [Master Index](README.md).

## Data Tables (where applicable)
| Field | Value | Source | Date |
|---|---|---|---|
| Topic sections | 12 | Project scope | 2026 |
| Core annual venues | 7+ | IEEE/PCIM | 2026 |
| Standard anchor | JEDEC JEP173 | JEDEC | 2019+ |
| Ga2O3 review DOI | 10.1063/1.5059067 | APL | 2018 |
| Refresh cadence | Annual after APEC/PCIM/ISPSD | Database policy | 2026 |

## Open Questions / Gaps
- Replace search anchors with complete BibTeX-quality metadata.
- Add independent efficiency measurements for commercial reference designs.
- Add open-access status and artifact/data availability.
- Rank papers by citation count and direct datacenter applicability.

## References
- IEEE Xplore | https://ieeexplore.ieee.org/ | Accessed 2026-06-10
- APEC | https://apec-conf.org/ | Accessed 2026-06-10
- ISPSD | https://ispsd2026.com/ | Accessed 2026-06-10
- PCIM Europe | https://pcim.mesago.com/ | Accessed 2026-06-10
- JEDEC JEP173 | https://www.jedec.org/standards-documents/docs/jep173 | Accessed 2026-06-10
