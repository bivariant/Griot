# Griot-ASR

**Griot-ASR** is the automatic speech recognition branch of the Griot model family by Bivariant.

It targets the same **18-language African language ecosystem** as Griot-MT.

## Release design

Griot-ASR is structured around:

- a shared multilingual speech backbone;
- one **LoRA adapter per language**;
- versioned adapter checkpoints;
- language-specific model cards;
- a shared transcription interface;
- public evaluation scripts;
- per-language WER and CER reporting.

> Exact backbone, LoRA rank, target modules, feature extraction, decoding configuration and training recipe will be documented with the first model release.

## Languages

`bba`, `bci`, `dyu`, `ewe`, `ewo`, `fon`, `fub`, `hau`, `lin`, `lug`, `mos`, `mwm`, `orm`, `sag`, `sna`, `som`, `swh`, `wol`

## Adapter layout

```text
models/asr/
├── README.md
└── adapters/
    ├── bba/
    ├── bci/
    ├── dyu/
    ├── ewe/
    ├── ewo/
    ├── fon/
    ├── fub/
    ├── hau/
    ├── lin/
    ├── lug/
    ├── mos/
    ├── mwm/
    ├── orm/
    ├── sag/
    ├── sna/
    ├── som/
    ├── swh/
    └── wol/
```

Each adapter directory should eventually contain the adapter weights, adapter config, language model card and release metadata.

## Evaluation

Primary metrics:

- **WER ↓**
- **CER ↓**

Recommended external baselines:

- Whisper large-v3
- MMS-1B-All
- SeamlessM4T-v2 Large
- Google Speech-to-Text

Public evaluation resources should include FLEURS and Mozilla Common Voice wherever language coverage permits.

## Reporting standard

For every language:

- publish WER and CER;
- publish evaluation-set version;
- document text normalization;
- document punctuation/casing policy;
- document decoding configuration;
- report any accent/domain limitations;
- document benchmark contamination checks.

## Status

Repository structure prepared. Model architecture, adapter configuration, weights, inference code and final benchmark results will be documented in the model-release phase.

```bibtex
@misc{griot2026,
  title  = {Griot: Open Multilingual Intelligence for African Languages},
  author = {Alapini Luc, Arnauld Adjovi, Dave Dassi, Johaness Hounton, Lucien Tito, 
            Ahmed Adjibade, Joel Gnansounou, Marius Sègbè, Gloria Gado},
  year   = {2026},
  url    = {https://bivariant.github.io/Griot/},
  note   = {Bivariant open-source African language model initiative}
}
```
