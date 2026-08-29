# Griot-MT

**Griot-MT** is the machine translation branch of the Griot model family by Bivariant.

It targets **18 African languages** in both directions with French, for a total of **36 translation directions**.

## Release design

Griot-MT is structured around:

- a shared multilingual translation backbone;
- one **LoRA adapter per language**;
- versioned adapter checkpoints;
- language-specific model cards;
- a shared inference interface;
- public evaluation scripts;
- per-language and per-direction benchmark reporting.

> Exact backbone, LoRA rank, target modules, tokenizer configuration, training schedule and adapter merge strategy will be documented with the first model release.

## Languages

| Code | Language | Directions |
|:---:|---|---|
| `bba` | Baatonou | FR ↔ Baatonou |
| `bci` | Baoulé | FR ↔ Baoulé |
| `dyu` | Dioula | FR ↔ Dioula |
| `ewe` | Ewé | FR ↔ Ewé |
| `ewo` | Ewondo | FR ↔ Ewondo |
| `fon` | Fon | FR ↔ Fon |
| `fub` | Fulfulde | FR ↔ Fulfulde |
| `hau` | Hausa | FR ↔ Hausa |
| `lin` | Lingala | FR ↔ Lingala |
| `lug` | Luganda | FR ↔ Luganda |
| `mos` | Mooré | FR ↔ Mooré |
| `mwm` | Sar | FR ↔ Sar |
| `orm` | Oromo | FR ↔ Oromo |
| `sag` | Sango | FR ↔ Sango |
| `sna` | Shona | FR ↔ Shona |
| `som` | Somali | FR ↔ Somali |
| `swh` | Swahili | FR ↔ Swahili |
| `wol` | Wolof | FR ↔ Wolof |

## Adapter layout

```text
models/machine-translation/
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

- **BLEU ↑**
- **chrF++ ↑**

Recommended external baselines:

- Google Translate
- Gemini
- NLLB-200 3.3B
- MADLAD-400 10B
- SeamlessM4T-v2 Large

Public evaluation resources should include FLORES-200, OPUS/JW300 and Masakhane resources wherever language coverage permits.

## Reporting standard

For every language:

- report FR → language;
- report language → FR;
- report benchmark dataset and version;
- publish SacreBLEU signature;
- publish decoding settings;
- report any normalization;
- document benchmark contamination checks.

## Status

Repository structure prepared. Model architecture, adapter configuration, weights, inference code and final benchmark results will be documented in the model-release phase.
