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

## Inference

Griot-MT is released as a shared model with one language-specific LoRA adapter per African language.

The example below runs **French → Baatonou (`bba`)** using only artifacts published in `bivariant/griot-mt`.

### Install

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

### French → Baatonou

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
        forced_bos_token_id=tokenizer.convert_tokens_to_ids("bba_Latn"),
    )

print("FR :", TEXT)
print("BBA:", tokenizer.decode(output[0], skip_special_tokens=True))
```

To use another Griot-MT language, replace the adapter path and language token with the corresponding released language configuration.

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
