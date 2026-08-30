<p align="center">

  <img src="https://raw.githubusercontent.com/bivariant/Griot/main/public/images/griot-logo.png" alt="Griot by Bivariant" width="420" />

</p>

<h1 align="center">Griot : Open Multilingual Intelligence for African Languages</h1>

<p align="center">

  Open machine translation models for 18 African languages.

</p>

<p align="center">

  <strong>18 languages</strong> ·
  <strong>36 MT directions</strong> ·
  <strong>420M+ potential speaker coverage</strong> ·
  <strong>25+ countries represented</strong>

</p>

<p align="center">

  <a href="https://bivariant.github.io/Griot/">Project page</a> ·
  <a href="https://github.com/bivariant/Griot">GitHub</a> ·
  <a href="https://huggingface.co/bivariant/griot-mt">Hugging Face</a> ·
  <a href="https://www.bivariant.com/">Bivariant</a>

</p>

---

## Griot

**Griot** is Bivariant's open family of language models for African languages.

The first public machine translation release is:

- **Griot-MT** : machine translation between French and 18 African languages, in both directions.

The project is structured as an open model family rather than a single checkpoint. Each language is released as a dedicated **LoRA adapter** over a shared multilingual backbone, with common model cards, evaluation scripts and versioned reporting.

> The public runtime, required adapter configuration and packaging are documented with the model release. Bivariant's training recipe, data-processing pipeline and internal optimization methodology remain proprietary.

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

### Griot-MT

Open the machine translation release documentation:

**[`models/machine-translation/`](https://github.com/bivariant/Griot/tree/main/models/machine-translation/)**

Open the model repository:

**[Hugging Face : `bivariant/griot-mt`](https://huggingface.co/bivariant/griot-mt)**

## Benchmark philosophy

Griot-MT is intended to be evaluated against both **open-weight multilingual models** and **commercial systems people actually use**.

### Machine Translation baselines

- Google Translate
- Gemini
- NLLB-200 3.3B
- MADLAD-400 10B
- SeamlessM4T-v2 Large

## Public evaluation resources

Where target-language coverage exists, evaluation should rely on public, inspectable datasets.

| Dataset / ecosystem | Task | Metrics |
|---|---|---|
| FLORES-200 | MT | BLEU, chrF++ |
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
6. Report both translation directions independently.
7. For commercial APIs, record provider, model/version, decoding/prompt settings and evaluation date.
8. Release evaluation scripts and predictions where licenses permit.

### Metrics

**Machine Translation**

- BLEU
- chrF++
- SacreBLEU signature

## Repository structure

```text
Griot/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── models/
│   └── machine-translation/
│       ├── README.md
│       └── adapters/
├── public/
│   ├── images/
│   │   └── griot-logo.png
│   └── .nojekyll
├── .github/
│   └── workflows/
│       ├── deploy-pages.yml
│       └── sync-griot-mt-hf.yml
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
- Ahmed Adjibade
- Joel Gnansounou
- Marius Sègbè
- Gloria Gado

Bivariant · Paris, France

## Citation

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

---

<p align="center">

  <strong>Bivariant</strong><br/>
  Building foundational language technology for Africa's linguistic diversity.

</p>
