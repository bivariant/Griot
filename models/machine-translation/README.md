<p align="center">
  <img src="./public/images/griot-logo.png" alt="Griot by Bivariant" width="420" />
</p>

<h1 align="center">Griot — Open Multilingual Intelligence for African Languages</h1>

<p align="center">
  Open machine translation and automatic speech recognition models for 18 African languages.
</p>

<p align="center">
  <strong>18 languages</strong> ·
  <strong>36 MT directions</strong> ·
  <strong>420M+ potential speaker coverage</strong> ·
  <strong>25+ countries represented</strong> ·
  <strong>MT + ASR</strong>
</p>

<p align="center">
  <a href="https://bivariant.github.io/Griot/">Project page</a> ·
  <a href="./models/machine-translation/">Griot-MT</a> ·
  <a href="./models/asr/">Griot-ASR</a> ·
  <a href="https://www.bivariant.com/">Bivariant</a>
</p>

---

## Griot

**Griot** is Bivariant's open family of language models for African languages.

The first public release focuses on two foundational capabilities:

- **Griot-MT** — machine translation between French and 18 African languages, in both directions.
- **Griot-ASR** — automatic speech recognition for the same African language ecosystem.

The project is structured as an open model family rather than a single checkpoint. Each language is released as a dedicated **LoRA adapter** over a shared multilingual backbone, with common model cards, evaluation scripts and versioned reporting.

> The exact backbone, LoRA rank, target modules, training recipe and adapter packaging will be documented with the model release.

## Coverage

Griot targets linguistic communities representing **more than 420 million speakers** across **more than 25 African countries**.

| # | Code | Language | Representative regions |
|---:|:---:|---|---|
| 01 | `bba` | Baatonou | Benin, Nigeria |
| 02 | `bci` | Baoulé | Côte d’Ivoire |
| 03 | `dyu` | Dioula | Côte d’Ivoire, Burkina Faso, Mali |
| 04 | `ewe` | Ewé | Togo, Ghana |
| 05 | `ewo` | Ewondo | Cameroon |
| 06 | `fon` | Fon | Benin, Togo |
| 07 | `fub` | Fulfulde | Cameroon, Nigeria, Niger, Guinea, Mali, Senegal |
| 08 | `hau` | Hausa | Nigeria, Niger, Ghana, Cameroon, Chad |
| 09 | `lin` | Lingala | DR Congo, Republic of the Congo, Angola, Central African Republic |
| 10 | `lug` | Luganda | Uganda |
| 11 | `mos` | Mooré | Burkina Faso |
| 12 | `mwm` | Sar | Chad |
| 13 | `orm` | Oromo | Ethiopia, Kenya |
| 14 | `sag` | Sango | Central African Republic |
| 15 | `sna` | Shona | Zimbabwe, Mozambique |
| 16 | `som` | Somali | Somalia, Ethiopia, Kenya, Djibouti |
| 17 | `swh` | Swahili | Tanzania, Kenya, DR Congo, Uganda, Rwanda, Burundi |
| 18 | `wol` | Wolof | Senegal, The Gambia |

Country references indicate representative speech communities, not an exhaustive linguistic map.

## Model family

| Model | Task | Coverage | Packaging | Primary metrics |
|---|---|---|---|---|
| **Griot-MT** | Machine Translation | 18 languages / 36 FR ↔ African-language directions | Shared multilingual backbone + LoRA adapter per language | BLEU, chrF++ |
| **Griot-ASR** | Automatic Speech Recognition | 18 African languages | Shared backbone + LoRA adapter per language | WER, CER |

### Griot-MT

Open the machine translation release documentation:

**[`models/machine-translation/`](./models/machine-translation/)**

### Griot-ASR

Open the speech recognition release documentation:

**[`models/asr/`](./models/asr/)**

## Benchmark philosophy

Griot is intended to be evaluated against both **open-weight multilingual models** and **commercial systems people actually use**.

### Machine Translation baselines

- Google Translate
- Gemini
- NLLB-200 3.3B
- MADLAD-400 10B
- SeamlessM4T-v2 Large

### ASR baselines

- Whisper large-v3
- MMS-1B-All
- SeamlessM4T-v2 Large
- Google Speech-to-Text

## Public evaluation resources

Where target-language coverage exists, evaluation should rely on public, inspectable datasets.

| Dataset / ecosystem | Task | Metrics |
|---|---|---|
| FLORES-200 | MT | BLEU, chrF++ |
| FLEURS | ASR | WER, CER |
| Mozilla Common Voice | ASR | WER, CER |
| OPUS / JW300 | MT | BLEU, chrF++ |
| Masakhane MT | MT | BLEU, chrF++ |

For languages with insufficient public benchmark coverage, Bivariant intends to use separately released, contamination-controlled evaluation sets.

## Evaluation rules

Every public score should be reproducible.

1. Freeze the exact dataset and version before evaluation.
2. Keep train, validation and benchmark data disjoint.
3. Apply documented normalization consistently across systems.
4. Evaluate every model on the same examples.
5. Report **per-language** results in addition to macro averages.
6. For MT, report both directions independently.
7. For commercial APIs, record provider, model/version, decoding/prompt settings and evaluation date.
8. Release evaluation scripts and predictions where licenses permit.

### Metrics

**Machine Translation**

- BLEU
- chrF++
- SacreBLEU signature

**Automatic Speech Recognition**

- Word Error Rate (WER)
- Character Error Rate (CER)

## Repository structure

```text
Griot/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── models/
│   ├── machine-translation/
│   │   ├── README.md
│   │   └── adapters/
│   └── asr/
│       ├── README.md
│       └── adapters/
├── public/
│   ├── images/
│   │   └── griot-logo.png
│   └── .nojekyll
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── next.config.ts
└── README.md
```

## GitHub Pages

The scientific release page is deployed at:

**https://bivariant.github.io/Griot/**

This repository is configured as a static Next.js export for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

The exported site is written to `out/`.

## Contributors

- Luc Alapini
- Arnauld Adjovi
- Dave Dassi
- Johaness Hounton
- Lucien TITO

Bivariant · Cotonou, Benin

## Citation

```bibtex
@misc{griot2026,
  title  = {Griot: Open Multilingual Intelligence for African Languages},
  author = {Alapini, Luc and Adjovi, Arnauld and Dassi, Dave and
            Hounton, Johaness and Tito, Lucien},
  year   = {2026},
  url    = {https://bivariant.github.io/Griot/},
  note   = {Bivariant open-source African language model initiative}
}
```

---

<p align="center">
  <strong>Bivariant</strong><br/>
  Building foundational language technology for Africa's linguistic diversity.
</p>
