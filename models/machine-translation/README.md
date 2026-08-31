<p align="center">
  <img src="https://raw.githubusercontent.com/bivariant/Griot/main/public/images/griot-logo.png" alt="Griot by Bivariant" width="420" />
</p>

<h1 align="center">Griot: Open Multilingual Intelligence for African Languages</h1>

<p align="center">
  Open-weight machine translation models for 18 African languages.
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

**Griot** is Bivariant's open-weight family of language models for African languages.

The first public machine translation release is:

- **Griot-MT** — machine translation between French and 18 African languages, in both directions.

Griot-MT is released as a shared multilingual model with one dedicated **LoRA adapter per African language**. All 18 language adapters are available in the public Hugging Face repository.

> The public runtime, released model artifacts, required adapter configuration, inference examples and benchmark outputs are documented with the release. Bivariant's training recipe, data-processing pipeline, internal datasets and optimization methodology remain proprietary.

## Highlights

| Indicator | Griot-MT |
|---|---:|
| African languages | **18** |
| Translation directions | **36** |
| Potential speaker coverage | **420M+** |
| Representative countries | **25+** |
| Released language adapters | **18 / 18** |
| Translation-direction coverage | **36 / 36 — 100%** |
| Global BLEU, coverage-aware | **38.1061** |
| Global chrF++, coverage-aware | **58.0000** |
| African → French BLEU | **48.0136** |
| French → African BLEU | **28.1986** |

---

## Coverage

Griot targets linguistic communities representing **more than 420 million speakers** across **more than 25 African countries**.

| # | Code | Language | Model token | Representative regions |
|---:|:---:|---|:---:|---|
| 01 | `bba` | Baatonou | `bba_Latn` | Benin, Nigeria |
| 02 | `bci` | Baoulé | `bci_Latn` | Côte d’Ivoire |
| 03 | `dyu` | Dioula | `dyu_Latn` | Côte d’Ivoire, Burkina Faso, Mali |
| 04 | `ewe` | Ewé | `ewe_Latn` | Togo, Ghana |
| 05 | `ewo` | Ewondo | `ewo_Latn` | Cameroon |
| 06 | `fon` | Fon | `fon_Latn` | Benin, Togo |
| 07 | `fub` | Fulfulde | `fub_Latn` | Cameroon, Nigeria, Niger, Guinea, Mali, Senegal |
| 08 | `hau` | Hausa | `hau_Latn` | Nigeria, Niger, Ghana, Cameroon, Chad |
| 09 | `lin` | Lingala | `lin_Latn` | DR Congo, Republic of the Congo, Angola, Central African Republic |
| 10 | `lug` | Luganda | `lug_Latn` | Uganda |
| 11 | `mos` | Mooré | `mos_Latn` | Burkina Faso |
| 12 | `mwm` | Sar | `mwm_Latn` | Chad |
| 13 | `orm` | Oromo | `gaz_Latn` | Ethiopia, Kenya |
| 14 | `sag` | Sango | `sag_Latn` | Central African Republic |
| 15 | `sna` | Shona | `sna_Latn` | Zimbabwe, Mozambique |
| 16 | `som` | Somali | `som_Latn` | Somalia, Ethiopia, Kenya, Djibouti |
| 17 | `swh` | Swahili | `swh_Latn` | Tanzania, Kenya, DR Congo, Uganda, Rwanda, Burundi |
| 18 | `wol` | Wolof | `wol_Latn` | Senegal, The Gambia |

French uses the token `fra_Latn`.

Country references indicate representative speech communities, not an exhaustive linguistic map.

---

## Model family

| Model | Task | Coverage | Packaging | Primary metrics |
|---|---|---|---|---|
| **Griot-MT** | Machine Translation | 18 languages / 36 FR ↔ African-language directions | Shared multilingual model + LoRA adapter per language | BLEU, chrF++ |

### Griot-MT

Release documentation:

**[`models/machine-translation/`](**https://github.com/bivariant/Griot/tree/main/models/machine-translation/**)**

Model repository:

**[Hugging Face: `bivariant/griot-mt`](**https://huggingface.co/bivariant/griot-mt**)**

---

# Benchmark

## Evaluation setup

Griot-MT was evaluated against two widely used translation baselines:

- **NLLB-200 1.3B**
- **Google Cloud Translation**

The same held-out test pairs are used for every system for each language and direction.

The benchmark covers:

- **18 African languages**
- **2 directions per language**
- **36 translation directions**
- **108 evaluated model-language-direction units** across the three final systems

Metrics:

- **BLEU** — SacreBLEU, tokenizer `13a`
- **chrF++** — SacreBLEU with `word_order=2`

### Coverage-aware scoring

For the global coverage-aware benchmark, an unsupported language/direction receives:

- **BLEU = 0**
- **chrF++ = 0**

This makes the global score measure both **translation quality and practical language coverage**.

### Matched-support scoring

A second evaluation compares Griot-MT and each baseline **only on the exact directions supported by that baseline**. This isolates translation quality from coverage.

For **Google Cloud Translation**, language support was validated by direct live translation-pair calls to the **Cloud Translation v2 API**. The final evaluated endpoint supports **28 / 36 directions (14 / 18 languages)** in this benchmark. Baatonou, Ewondo, Mooré and Sar are unsupported by that endpoint and therefore receive zero in the coverage-aware view.

> These results are measured on Bivariant's held-out evaluation split. They should be interpreted as results for this benchmark protocol, not as universal claims across every domain, dialect or external dataset.

---

## Global benchmark — all 36 directions

| Model | BLEU | chrF++ | Supported directions | Coverage |
|---|---:|---:|---:|---:|
| **Griot-MT** | **38.1061** | **58.0000** | **36 / 36** | **100.00%** |
| NLLB-200 1.3B | 16.1319 | 33.5317 | 26 / 36 | 72.22% |
| Google Cloud Translation | 15.0325 | 33.9702 | 28 / 36 | 77.78% |

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/01_global/global_bleu_macro36.png" alt="Global BLEU benchmark across 36 directions" width="860" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/01_global/global_chrfpp_macro36.png" alt="Global chrF++ benchmark across 36 directions" width="860" />
</p>

### Translation-direction coverage

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/01_global/coverage.png" alt="Translation direction coverage" width="860" />
</p>

Griot-MT covers **all 36 translation directions** in the release. NLLB-200 1.3B covers 26 of the 36 evaluated directions, while Google Cloud Translation covers 28.

---

## Benchmark by direction

| Model | Direction | BLEU | chrF++ | Supported languages |
|---|---|---:|---:|---:|
| **Griot-MT** | African → French | **48.0136** | **64.1988** | **18 / 18** |
| **Griot-MT** | French → African | **28.1986** | **51.8012** | **18 / 18** |
| NLLB-200 1.3B | African → French | 17.3772 | 33.9561 | 13 / 18 |
| NLLB-200 1.3B | French → African | 14.8865 | 33.1073 | 13 / 18 |
| Google Cloud Translation | African → French | 18.2769 | 36.0616 | 14 / 18 |
| Google Cloud Translation | French → African | 11.7881 | 31.8788 | 14 / 18 |

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/02_directions/bleu_by_direction.png" alt="BLEU by translation direction" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/02_directions/chrfpp_by_direction.png" alt="chrF++ by translation direction" width="900" />
</p>

---

## Quality on supported directions only

This view removes the zero-score penalty for unsupported directions and averages each system only over the directions it actually supports.

| Model | BLEU on supported directions | chrF++ on supported directions | Directions |
|---|---:|---:|---:|
| **Griot-MT** | **38.1061** | **58.0000** | 36 |
| NLLB-200 1.3B | 22.3364 | 46.4285 | 26 |
| Google Cloud Translation | 19.3275 | 43.6760 | 28 |

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/03_supported_only/supported_only_bleu.png" alt="BLEU on supported directions only" width="860" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/03_supported_only/supported_only_chrfpp.png" alt="chrF++ on supported directions only" width="860" />
</p>

---

## Matched-support comparison — Griot-MT vs NLLB-200 1.3B

The comparison below uses **exactly the same 26 directions supported by NLLB-200 1.3B**.

| Model | BLEU | chrF++ | Directions |
|---|---:|---:|---:|
| **Griot-MT** | **40.6303** | **60.4069** | 26 |
| NLLB-200 1.3B | 22.3364 | 46.4285 | 26 |

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/04_matched_support/griot_vs_nllb_bleu.png" alt="Griot-MT vs NLLB matched-support BLEU" width="820" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/04_matched_support/griot_vs_nllb_chrfpp.png" alt="Griot-MT vs NLLB matched-support chrF++" width="820" />
</p>

---

## Matched-support comparison — Griot-MT vs Google Cloud Translation

The comparison below uses **exactly the same 28 directions supported by Google Cloud Translation**.

| Model | BLEU | chrF++ | Directions |
|---|---:|---:|---:|
| **Griot-MT** | **39.5908** | **59.5832** | 28 |
| Google Cloud Translation | 19.3275 | 43.6760 | 28 |

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/04_matched_support/griot_vs_google_bleu.png" alt="Griot-MT vs Google Cloud Translation matched-support BLEU" width="820" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/04_matched_support/griot_vs_google_chrfpp.png" alt="Griot-MT vs Google Cloud Translation matched-support chrF++" width="820" />
</p>

The matched-support results show that the global Griot-MT advantage is **not explained only by broader language coverage**: Griot-MT also achieves higher aggregate BLEU and chrF++ when evaluated on the exact same supported directions as each baseline.

---

## All-language comparison

### BLEU

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/07_language_comparison/all_languages_bleu.png" alt="BLEU comparison across all Griot-MT languages" width="1000" />
</p>

### chrF++

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/07_language_comparison/all_languages_chrfpp.png" alt="chrF++ comparison across all Griot-MT languages" width="1000" />
</p>

---

## Per-language benchmark

Each language below includes the two benchmark views:

- **BLEU**
- **chrF++**

The plots dynamically reflect the persisted benchmark results used for the release.

<details>

<summary><strong>01 · Baatonou (`bba`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/bba/bba_bleu.png" alt="Baatonou BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/bba/bba_chrfpp.png" alt="Baatonou chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>02 · Baoulé (`bci`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/bci/bci_bleu.png" alt="Baoulé BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/bci/bci_chrfpp.png" alt="Baoulé chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>03 · Dioula (`dyu`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/dyu/dyu_bleu.png" alt="Dioula BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/dyu/dyu_chrfpp.png" alt="Dioula chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>04 · Ewé (`ewe`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/ewe/ewe_bleu.png" alt="Ewé BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/ewe/ewe_chrfpp.png" alt="Ewé chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>05 · Ewondo (`ewo`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/ewo/ewo_bleu.png" alt="Ewondo BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/ewo/ewo_chrfpp.png" alt="Ewondo chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>06 · Fon (`fon`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/fon/fon_bleu.png" alt="Fon BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/fon/fon_chrfpp.png" alt="Fon chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>07 · Fulfulde (`fub`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/fub/fub_bleu.png" alt="Fulfulde BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/fub/fub_chrfpp.png" alt="Fulfulde chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>08 · Hausa (`hau`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/hau/hau_bleu.png" alt="Hausa BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/hau/hau_chrfpp.png" alt="Hausa chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>09 · Lingala (`lin`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/lin/lin_bleu.png" alt="Lingala BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/lin/lin_chrfpp.png" alt="Lingala chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>10 · Luganda (`lug`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/lug/lug_bleu.png" alt="Luganda BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/lug/lug_chrfpp.png" alt="Luganda chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>11 · Mooré (`mos`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/mos/mos_bleu.png" alt="Mooré BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/mos/mos_chrfpp.png" alt="Mooré chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>12 · Sar (`mwm`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/mwm/mwm_bleu.png" alt="Sar BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/mwm/mwm_chrfpp.png" alt="Sar chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>13 · Oromo (`orm`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/orm/orm_bleu.png" alt="Oromo BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/orm/orm_chrfpp.png" alt="Oromo chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>14 · Sango (`sag`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/sag/sag_bleu.png" alt="Sango BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/sag/sag_chrfpp.png" alt="Sango chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>15 · Shona (`sna`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/sna/sna_bleu.png" alt="Shona BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/sna/sna_chrfpp.png" alt="Shona chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>16 · Somali (`som`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/som/som_bleu.png" alt="Somali BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/som/som_chrfpp.png" alt="Somali chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>17 · Swahili (`swh`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/swh/swh_bleu.png" alt="Swahili BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/swh/swh_chrfpp.png" alt="Swahili chrF++ benchmark" width="900" />
</p>

</details>

<details>

<summary><strong>18 · Wolof (`wol`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/wol/wol_bleu.png" alt="Wolof BLEU benchmark" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/wol/wol_chrfpp.png" alt="Wolof chrF++ benchmark" width="900" />
</p>

</details>

---

## Benchmark heatmaps

<details>

<summary><strong>Griot-MT heatmaps</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/griot-mt_bleu.png" alt="Griot-MT BLEU heatmap" width="820" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/griot-mt_chrfpp.png" alt="Griot-MT chrF++ heatmap" width="820" />
</p>

</details>

<details>

<summary><strong>NLLB-200 1.3B heatmaps</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/nllb-200-1.3b_bleu.png" alt="NLLB-200 BLEU heatmap" width="820" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/nllb-200-1.3b_chrfpp.png" alt="NLLB-200 chrF++ heatmap" width="820" />
</p>

</details>

<details>

<summary><strong>Google Cloud Translation heatmaps</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/google-translate-v2-real_bleu.png" alt="Google Cloud Translation BLEU heatmap" width="820" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/google-translate-v2-real_chrfpp.png" alt="Google Cloud Translation chrF++ heatmap" width="820" />
</p>

</details>

---

## Griot-MT advantage on shared supported directions

These plots show the mean score difference:

**Δ = Griot-MT − baseline**

Positive values indicate an advantage for Griot-MT.

### Against NLLB-200 1.3B

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/08_delta/griot_vs_nllb-200-1.3b_bleu_delta.png" alt="Griot-MT BLEU advantage over NLLB" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/08_delta/griot_vs_nllb-200-1.3b_chrfpp_delta.png" alt="Griot-MT chrF++ advantage over NLLB" width="900" />
</p>

### Against Google Cloud Translation

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/08_delta/griot_vs_google-translate-v2-real_bleu_delta.png" alt="Griot-MT BLEU advantage over Google Cloud Translation" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/08_delta/griot_vs_google-translate-v2-real_chrfpp_delta.png" alt="Griot-MT chrF++ advantage over Google Cloud Translation" width="900" />
</p>

---

## Benchmark artifacts

The figure bundle also contains the CSV data used to generate the visualizations:

- [`metrics_used_for_figures.csv`](./griot_mt_benchmark_visualizations/data/metrics_used_for_figures.csv)
- [`global_leaderboard.csv`](./griot_mt_benchmark_visualizations/data/global_leaderboard.csv)
- [`supported_only_scores.csv`](./griot_mt_benchmark_visualizations/data/supported_only_scores.csv)
- [`language_macro_scores.csv`](./griot_mt_benchmark_visualizations/data/language_macro_scores.csv)
- [`direction_scores.csv`](./griot_mt_benchmark_visualizations/data/direction_scores.csv)
- [`griot_vs_nllb_matched_support.csv`](./griot_mt_benchmark_visualizations/data/griot_vs_nllb_matched_support.csv)
- [`griot_vs_google_matched_support.csv`](./griot_mt_benchmark_visualizations/data/griot_vs_google_matched_support.csv)

Expected local repository layout:

```text
README.md
griot_mt_benchmark_visualizations/
├── 01_global/
├── 02_directions/
├── 03_supported_only/
├── 04_matched_support/
├── 05_languages/
├── 06_heatmaps/
├── 07_language_comparison/
├── 08_delta/
└── data/
```

If your extracted folder has another name, either rename it to `griot_mt_benchmark_visualizations` or update the relative image paths in this README.

---

# Inference

Griot-MT is released as a shared model with one language-specific LoRA adapter per African language.

The example below runs **French → Baatonou (`bba`)** using only artifacts published in `bivariant/griot-mt`.

## Install

```bash
pip uninstall -y torchao
pip install -q \
  "transformers==5.16.1" \
  "peft==0.20.0" \
  "accelerate==1.14.0" \
  "sentencepiece==0.2.2" \
  "safetensors>=0.4.3" \
  "huggingface_hub>=0.34.0"
```

## French → Baatonou

```python
from pathlib import Path
import torch
from huggingface_hub import snapshot_download
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
from peft import PeftModel
REPO = "bivariant/griot-mt"
TEXT = "Bonjour, comment allez-vous aujourd'hui ?"
path = snapshot_download(
    REPO,
    allow_patterns=[
        "config.json",
        "generation_config.json",
        "model.safetensors",
        "tokenizer.json",
        "tokenizer_config.json",
        "adapters/bba/adapter_config.json",
        "adapters/bba/adapter_model.safetensors",
    ],
)
device = (
    "cuda"
    if torch.cuda.is_available()
    else "mps"
    if torch.backends.mps.is_available()
    else "cpu"
)
dtype = torch.float16 if device != "cpu" else torch.float32
tokenizer = AutoTokenizer.from_pretrained(
    path,
    local_files_only=True,
)
tokenizer.src_lang = "fra_Latn"
base = AutoModelForSeq2SeqLM.from_pretrained(
    path,
    local_files_only=True,
    dtype=dtype,
    low_cpu_mem_usage=True,
)
model = PeftModel.from_pretrained(
    base,
    Path(path) / "adapters" / "bba",
    is_trainable=False,
).to(device).eval()
inputs = tokenizer(
    TEXT,
    return_tensors="pt",
).to(device)
with torch.inference_mode():
    output = model.generate(
        **inputs,
        forced_bos_token_id=tokenizer.convert_tokens_to_ids(
            "bba_Latn"
        ),
    )
print("FR :", TEXT)
print(
    "BBA:",
    tokenizer.decode(
        output[0],
        skip_special_tokens=True,
    ),
)
```

To use another Griot-MT language, replace:

- `adapters/bba/` with the corresponding adapter;
- `fra_Latn` with the source language token when translating toward French;
- `bba_Latn` with the desired target language token.

For Oromo, the released model token is `gaz_Latn`.

### Colab

[Open the Griot-MT inference notebook in Google Colab](https://colab.research.google.com/drive/1pYcj0G53zT_cURW6mFkD-62pwJJZcVWR?usp=sharing)

---

## Intended use

Griot-MT is intended for:

- research on African-language machine translation;
- multilingual NLP experimentation;
- prototyping language-access applications;
- evaluation of French ↔ African-language translation;
- community-driven development for underrepresented languages.

Users should evaluate outputs for their target dialect, domain and deployment context before relying on translations in high-stakes settings.

---

## Limitations

Griot-MT performance may vary across:

- dialects and regional varieties;
- specialized technical domains;
- code-switching;
- spelling conventions and orthographic variation;
- named entities;
- very long or structurally unusual inputs;
- text substantially outside the distributions represented in the evaluation and development data.

Benchmark results in this README are tied to the documented held-out evaluation protocol and should not be interpreted as a guarantee of equivalent performance on unrelated datasets or domains.

---

## Release structure

```text
bivariant/griot-mt/
├── README.md
├── config.json
├── generation_config.json
├── model.safetensors
├── tokenizer.json
├── tokenizer_config.json
├── adapters/
│   ├── bba/
│   ├── bci/
│   ├── dyu/
│   ├── ewe/
│   ├── ewo/
│   ├── fon/
│   ├── fub/
│   ├── hau/
│   ├── lin/
│   ├── lug/
│   ├── mos/
│   ├── mwm/
│   ├── orm/
│   ├── sag/
│   ├── sna/
│   ├── som/
│   ├── swh/
│   └── wol/
└── ...
```

---

## GitHub Pages

The scientific release page is deployed at:

**https://bivariant.github.io/Griot/**

This repository is configured as a static Next.js export for GitHub Pages.

---

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

---

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

---

## Citation

```bibtex
@misc{griot2026,
  title  = {Griot: Open Multilingual Intelligence for African Languages},
  author = {Alapini Luc, Arnauld Adjovi, Dave Dassi, Johaness Hounton, Lucien Tito,
            Ahmed Adjibade, Joel Gnansounou, Marius Sègbè, Gloria Gado},
  year   = {2026},
  url    = {https://bivariant.github.io/Griot/},
  note   = {Bivariant open-weight African language model initiative}
}
```

---

<p align="center">
  <strong>Bivariant</strong><br/>
  Building foundational language technology for Africa's linguistic diversity.
</p>
