<p align="center">

  <img src="./public/images/griot-logo.png" alt="Griot par Bivariant" width="420" />

</p>

<h1 align="center">Griot : intelligence multilingue ouverte pour les langues africaines</h1>

<p align="center">

  Modèles ouverts de traduction automatique et de reconnaissance automatique de la parole pour 18 langues africaines.

</p>

<p align="center">

  <strong>18 langues</strong> ·

  <strong>36 directions de traduction</strong> ·

  <strong>420M+ locuteurs potentiels couverts</strong> ·

  <strong>25+ pays représentés</strong> ·

  <strong>MT + ASR</strong>

</p>

<p align="center">

  <a href="https://bivariant.github.io/Griot/">Page du projet</a> ·

  <a href="./models/machine-translation/">Griot-MT</a> ·

  <a href="./models/asr/">Griot-ASR</a> ·

  <a href="https://www.bivariant.com/">Bivariant</a>

</p>

---

## Griot

**Griot** est la famille ouverte de modèles de langage de Bivariant dédiée aux langues africaines.

La première release publique se concentre sur deux capacités fondamentales :

- **Griot-MT** : traduction automatique entre le français et 18 langues africaines, dans les deux sens.

- **Griot-ASR** : reconnaissance automatique de la parole pour le même écosystème de langues africaines.

Le projet est structuré comme une famille ouverte de modèles plutôt que comme un checkpoint unique. Chaque langue est publiée sous la forme d’un **adaptateur LoRA dédié** appliqué à un backbone multilingue partagé, avec des model cards communes, des scripts d’évaluation et un reporting versionné.

> Le backbone exact, le rang LoRA, les modules cibles, la recette d’entraînement et le packaging des adaptateurs seront documentés avec la release du modèle.

## Couverture

Griot cible des communautés linguistiques représentant **plus de 420 millions de locuteurs** dans **plus de 25 pays africains**.

| # | Code | Langue | Régions représentatives |
|---:|:---:|---|---|
| 01 | `bba` | Baatonou | Bénin, Nigeria |
| 02 | `bci` | Baoulé | Côte d’Ivoire |
| 03 | `dyu` | Dioula | Côte d’Ivoire, Burkina Faso, Mali |
| 04 | `ewe` | Ewé | Togo, Ghana |
| 05 | `ewo` | Ewondo | Cameroun |
| 06 | `fon` | Fon | Bénin, Togo |
| 07 | `fub` | Fulfulde | Cameroun, Nigeria, Niger, Guinée, Mali, Sénégal |
| 08 | `hau` | Hausa | Nigeria, Niger, Ghana, Cameroun, Tchad |
| 09 | `lin` | Lingala | RDC, République du Congo, Angola, République centrafricaine |
| 10 | `lug` | Luganda | Ouganda |
| 11 | `mos` | Mooré | Burkina Faso |
| 12 | `mwm` | Sar | Tchad |
| 13 | `orm` | Oromo | Éthiopie, Kenya |
| 14 | `sag` | Sango | République centrafricaine |
| 15 | `sna` | Shona | Zimbabwe, Mozambique |
| 16 | `som` | Somali | Somalie, Éthiopie, Kenya, Djibouti |
| 17 | `swh` | Swahili | Tanzanie, Kenya, RDC, Ouganda, Rwanda, Burundi |
| 18 | `wol` | Wolof | Sénégal, Gambie |

Les pays indiqués correspondent à des communautés linguistiques représentatives et ne constituent pas une cartographie linguistique exhaustive.

## Famille de modèles

| Modèle | Tâche | Couverture | Packaging | Métriques principales |
|---|---|---|---|---|
| **Griot-MT** | Traduction automatique | 18 langues / 36 directions FR ↔ langues africaines | Backbone multilingue partagé + adaptateur LoRA par langue | BLEU, chrF++ |
| **Griot-ASR** | Reconnaissance automatique de la parole | 18 langues africaines | Backbone partagé + adaptateur LoRA par langue | WER, CER |

### Griot-MT

Ouvrir la documentation de la release de traduction automatique :

**[`models/machine-translation/`](./models/machine-translation/)**

### Griot-ASR

Ouvrir la documentation de la release de reconnaissance automatique de la parole :

**[`models/asr/`](./models/asr/)**

## Philosophie de benchmark

Griot a vocation à être évalué à la fois face à des **modèles multilingues open-weight** et face à des **systèmes commerciaux réellement utilisés**.

### Baselines de traduction automatique

- Google Translate

- Gemini

- NLLB-200 3.3B

- MADLAD-400 10B

- SeamlessM4T-v2 Large

### Baselines ASR

- Whisper large-v3

- MMS-1B-All

- SeamlessM4T-v2 Large

- Google Speech-to-Text

## Ressources publiques d’évaluation

Lorsque la couverture de la langue cible existe, l’évaluation doit s’appuyer sur des jeux de données publics et inspectables.

| Dataset / écosystème | Tâche | Métriques |
|---|---|---|
| FLORES-200 | MT | BLEU, chrF++ |
| FLEURS | ASR | WER, CER |
| Mozilla Common Voice | ASR | WER, CER |
| OPUS / JW300 | MT | BLEU, chrF++ |
| Masakhane MT | MT | BLEU, chrF++ |

Pour les langues dont la couverture publique de benchmark est insuffisante, Bivariant prévoit d’utiliser des jeux d’évaluation publiés séparément et contrôlés contre la contamination.

## Règles d’évaluation

Tout score public doit être reproductible.

1. Figer le dataset exact et sa version avant l’évaluation.

2. Maintenir les données d’entraînement, de validation et de benchmark strictement disjointes.

3. Appliquer de manière cohérente la normalisation documentée à tous les systèmes.

4. Évaluer chaque modèle sur exactement les mêmes exemples.

5. Publier les résultats **par langue** en plus des moyennes macro.

6. Pour la traduction automatique, publier séparément les deux directions.

7. Pour les API commerciales, enregistrer le fournisseur, le modèle/la version, les paramètres de décodage ou de prompt et la date d’évaluation.

8. Publier les scripts d’évaluation et les prédictions lorsque les licences l’autorisent.

### Métriques

**Traduction automatique**

- BLEU

- chrF++

- Signature SacreBLEU

**Reconnaissance automatique de la parole**

- Word Error Rate (WER)

- Character Error Rate (CER)

## Structure du dépôt

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

La page scientifique de la release est déployée à l’adresse :

**https://bivariant.github.io/Griot/**

Ce dépôt est configuré pour un export statique Next.js vers GitHub Pages.

## Développement local

```bash
npm install

npm run dev
```

Pour construire le site statique :

```bash
npm run build
```

Le site exporté est généré dans `out/`.

## Contributeurs

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

  Construire les technologies linguistiques fondamentales pour la diversité linguistique de l’Afrique.

</p>
