<p align="center">
  <img src="https://raw.githubusercontent.com/bivariant/Griot/main/public/images/griot-logo.png" alt="Griot par Bivariant" width="420" />
</p>

<h1 align="center">Griot : intelligence multilingue ouverte pour les langues africaines</h1>

<p align="center">
  Modèles de traduction automatique open-weight pour 18 langues africaines.
</p>

<p align="center">
  <strong>18 langues</strong> ·
  <strong>36 directions de traduction</strong> ·
  <strong>420M+ locuteurs potentiels couverts</strong> ·
  <strong>25+ pays représentés</strong>
</p>

<p align="center">
  <a href="https://bivariant.github.io/Griot/">Page du projet</a> ·
  <a href="https://github.com/bivariant/Griot">GitHub</a> ·
  <a href="https://huggingface.co/bivariant/griot-mt">Hugging Face</a> ·
  <a href="https://www.bivariant.com/">Bivariant</a>
</p>

---

## Griot

**Griot** est la famille open-weight de modèles de langage de Bivariant dédiée aux langues africaines.

La première release publique de traduction automatique est :

- **Griot-MT** — traduction automatique entre le français et 18 langues africaines, dans les deux sens.

Griot-MT est distribué sous la forme d’un modèle multilingue partagé avec un **adaptateur LoRA dédié par langue africaine**. Les 18 adaptateurs sont disponibles publiquement sur Hugging Face.

> Le runtime public, les artefacts du modèle publiés, la configuration des adaptateurs, les exemples d’inférence et les résultats de benchmark sont documentés avec la release. La recette d’entraînement de Bivariant, les jeux de données internes, les mélanges de données privés et certaines optimisations restent propriétaires.

## Points clés

| Indicateur | Griot-MT |
|---|---:|
| Langues africaines | **18** |
| Directions de traduction | **36** |
| Couverture potentielle en locuteurs | **420M+** |
| Pays représentatifs | **25+** |
| Adaptateurs publiés | **18 / 18** |
| Couverture des directions | **36 / 36 — 100%** |
| BLEU global, coverage-aware | **38.1061** |
| chrF++ global, coverage-aware | **58.0000** |
| BLEU langues africaines → français | **48.0136** |
| BLEU français → langues africaines | **28.1986** |

---

## Couverture linguistique

Griot cible des communautés linguistiques représentant **plus de 420 millions de locuteurs potentiels** dans **plus de 25 pays africains**.

| # | Code | Langue | Token modèle | Régions représentatives |
|---:|:---:|---|:---:|---|
| 01 | `bba` | Baatonou | `bba_Latn` | Bénin, Nigeria |
| 02 | `bci` | Baoulé | `bci_Latn` | Côte d’Ivoire |
| 03 | `dyu` | Dioula | `dyu_Latn` | Côte d’Ivoire, Burkina Faso, Mali |
| 04 | `ewe` | Ewé | `ewe_Latn` | Togo, Ghana |
| 05 | `ewo` | Ewondo | `ewo_Latn` | Cameroun |
| 06 | `fon` | Fon | `fon_Latn` | Bénin, Togo |
| 07 | `fub` | Fulfulde | `fub_Latn` | Cameroun, Nigeria, Niger, Guinée, Mali, Sénégal |
| 08 | `hau` | Hausa | `hau_Latn` | Nigeria, Niger, Ghana, Cameroun, Tchad |
| 09 | `lin` | Lingala | `lin_Latn` | RDC, Congo, Angola, République centrafricaine |
| 10 | `lug` | Luganda | `lug_Latn` | Ouganda |
| 11 | `mos` | Mooré | `mos_Latn` | Burkina Faso |
| 12 | `mwm` | Sar | `mwm_Latn` | Tchad |
| 13 | `orm` | Oromo | `gaz_Latn` | Éthiopie, Kenya |
| 14 | `sag` | Sango | `sag_Latn` | République centrafricaine |
| 15 | `sna` | Shona | `sna_Latn` | Zimbabwe, Mozambique |
| 16 | `som` | Somali | `som_Latn` | Somalie, Éthiopie, Kenya, Djibouti |
| 17 | `swh` | Swahili | `swh_Latn` | Tanzanie, Kenya, RDC, Ouganda, Rwanda, Burundi |
| 18 | `wol` | Wolof | `wol_Latn` | Sénégal, Gambie |

Le français utilise le token `fra_Latn`.

> Pour l’Oromo, le token publié est `gaz_Latn`.

Les pays indiqués correspondent à des communautés linguistiques représentatives et ne constituent pas une cartographie exhaustive.

---

## Famille de modèles

| Modèle | Tâche | Couverture | Packaging | Métriques principales |
|---|---|---|---|---|
| **Griot-MT** | Traduction automatique | 18 langues / 36 directions FR ↔ langues africaines | Modèle multilingue partagé + adaptateur LoRA par langue | BLEU, chrF++ |

### Griot-MT

Documentation de la release :

**[`models/machine-translation/`](https://github.com/bivariant/Griot/tree/main/models/machine-translation/)**

Dépôt du modèle :

**[Hugging Face : `bivariant/griot-mt`](https://huggingface.co/bivariant/griot-mt)**

Collecte et alignement des données :

**[`bivariant/GriotMT-OpenSource`](https://github.com/bivariant/GriotMT-OpenSource)**

---

# Benchmark

## Protocole d’évaluation

Griot-MT est comparé à deux baselines de traduction largement utilisées :

- **NLLB-200 1.3B**
- **Google Cloud Translation**

Les mêmes paires de test tenues à l’écart sont utilisées pour chaque système, chaque langue et chaque direction.

Le benchmark couvre :

- **18 langues africaines**
- **2 directions par langue**
- **36 directions de traduction**
- **108 unités modèle-langue-direction** sur les trois systèmes finaux

Métriques :

- **BLEU** — SacreBLEU, tokenizer `13a`
- **chrF++** — SacreBLEU avec `word_order=2`

### Scoring coverage-aware

Dans le benchmark global coverage-aware, une langue/direction non supportée reçoit :

- **BLEU = 0**
- **chrF++ = 0**

Le score global mesure donc à la fois **la qualité de traduction et la couverture linguistique pratique**.

### Scoring matched-support

Une seconde évaluation compare Griot-MT à chaque baseline **uniquement sur les directions exactes supportées par cette baseline**. Cette lecture isole la qualité de traduction de la couverture.

Pour **Google Cloud Translation**, la couverture a été validée par des appels directs de traduction sur l’API **Cloud Translation v2** dans les deux directions. Dans cette évaluation, Google Cloud Translation supporte **28 / 36 directions (14 / 18 langues)**. Baatonou, Ewondo, Mooré et Sar ne sont pas supportés par l’endpoint évalué et reçoivent donc zéro dans la vue coverage-aware.

> Ces résultats sont mesurés sur le split d’évaluation tenu à l’écart de Bivariant. Ils doivent être interprétés dans le cadre de ce protocole précis et non comme une garantie universelle sur tous les domaines, dialectes ou jeux de données externes.

---

## Benchmark global — 36 directions

| Modèle | BLEU | chrF++ | Directions supportées | Couverture |
|---|---:|---:|---:|---:|
| **Griot-MT** | **38.1061** | **58.0000** | **36 / 36** | **100.00%** |
| NLLB-200 1.3B | 16.1319 | 33.5317 | 26 / 36 | 72.22% |
| Google Cloud Translation | 15.0325 | 33.9702 | 28 / 36 | 77.78% |

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/01_global/global_bleu_macro36.png" alt="Benchmark BLEU global sur 36 directions" width="860" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/01_global/global_chrfpp_macro36.png" alt="Benchmark chrF++ global sur 36 directions" width="860" />
</p>

### Couverture des directions

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/01_global/coverage.png" alt="Couverture des directions de traduction" width="860" />
</p>

Griot-MT couvre **les 36 directions de traduction**. NLLB-200 1.3B couvre 26 directions sur 36, tandis que Google Cloud Translation en couvre 28.

---

## Benchmark par direction

| Modèle | Direction | BLEU | chrF++ | Langues supportées |
|---|---|---:|---:|---:|
| **Griot-MT** | Langue africaine → Français | **48.0136** | **64.1988** | **18 / 18** |
| **Griot-MT** | Français → Langue africaine | **28.1986** | **51.8012** | **18 / 18** |
| NLLB-200 1.3B | Langue africaine → Français | 17.3772 | 33.9561 | 13 / 18 |
| NLLB-200 1.3B | Français → Langue africaine | 14.8865 | 33.1073 | 13 / 18 |
| Google Cloud Translation | Langue africaine → Français | 18.2769 | 36.0616 | 14 / 18 |
| Google Cloud Translation | Français → Langue africaine | 11.7881 | 31.8788 | 14 / 18 |

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/02_directions/bleu_by_direction.png" alt="BLEU par direction de traduction" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/02_directions/chrfpp_by_direction.png" alt="chrF++ par direction de traduction" width="900" />
</p>

---

## Qualité sur les directions supportées uniquement

Cette vue retire la pénalité de score nul pour les directions non supportées et calcule la moyenne de chaque système uniquement sur les directions qu’il supporte réellement.

| Modèle | BLEU sur directions supportées | chrF++ sur directions supportées | Directions |
|---|---:|---:|---:|
| **Griot-MT** | **38.1061** | **58.0000** | 36 |
| NLLB-200 1.3B | 22.3364 | 46.4285 | 26 |
| Google Cloud Translation | 19.3275 | 43.6760 | 28 |

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/03_supported_only/supported_only_bleu.png" alt="BLEU sur les directions supportées uniquement" width="860" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/03_supported_only/supported_only_chrfpp.png" alt="chrF++ sur les directions supportées uniquement" width="860" />
</p>

---

## Comparaison matched-support — Griot-MT vs NLLB-200 1.3B

La comparaison ci-dessous utilise **exactement les 26 directions supportées par NLLB-200 1.3B**.

| Modèle | BLEU | chrF++ | Directions |
|---|---:|---:|---:|
| **Griot-MT** | **40.6303** | **60.4069** | 26 |
| NLLB-200 1.3B | 22.3364 | 46.4285 | 26 |

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/04_matched_support/griot_vs_nllb_bleu.png" alt="BLEU matched-support Griot-MT vs NLLB" width="820" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/04_matched_support/griot_vs_nllb_chrfpp.png" alt="chrF++ matched-support Griot-MT vs NLLB" width="820" />
</p>

---

## Comparaison matched-support — Griot-MT vs Google Cloud Translation

La comparaison ci-dessous utilise **exactement les 28 directions supportées par Google Cloud Translation**.

| Modèle | BLEU | chrF++ | Directions |
|---|---:|---:|---:|
| **Griot-MT** | **39.5908** | **59.5832** | 28 |
| Google Cloud Translation | 19.3275 | 43.6760 | 28 |

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/04_matched_support/griot_vs_google_bleu.png" alt="BLEU matched-support Griot-MT vs Google Cloud Translation" width="820" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/04_matched_support/griot_vs_google_chrfpp.png" alt="chrF++ matched-support Griot-MT vs Google Cloud Translation" width="820" />
</p>

Les résultats matched-support montrent que l’avantage global de Griot-MT **ne s’explique pas uniquement par une couverture linguistique plus large** : Griot-MT obtient également des scores BLEU et chrF++ agrégés plus élevés lorsqu’il est évalué sur exactement les mêmes directions que chaque baseline.

---

## Comparaison sur l’ensemble des langues

### BLEU

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/07_language_comparison/all_languages_bleu.png" alt="Comparaison BLEU sur toutes les langues Griot-MT" width="1000" />
</p>

### chrF++

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/07_language_comparison/all_languages_chrfpp.png" alt="Comparaison chrF++ sur toutes les langues Griot-MT" width="1000" />
</p>

---

## Benchmark par langue

Chaque langue ci-dessous présente les deux vues :

- **BLEU**
- **chrF++**

Les graphiques reflètent les résultats persistés utilisés pour la release finale.

<details>
<summary><strong>01 · Baatonou (`bba`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/bba/bba_bleu.png" alt="Benchmark BLEU Baatonou" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/bba/bba_chrfpp.png" alt="Benchmark chrF++ Baatonou" width="900" />
</p>

</details>

<details>
<summary><strong>02 · Baoulé (`bci`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/bci/bci_bleu.png" alt="Benchmark BLEU Baoulé" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/bci/bci_chrfpp.png" alt="Benchmark chrF++ Baoulé" width="900" />
</p>

</details>

<details>
<summary><strong>03 · Dioula (`dyu`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/dyu/dyu_bleu.png" alt="Benchmark BLEU Dioula" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/dyu/dyu_chrfpp.png" alt="Benchmark chrF++ Dioula" width="900" />
</p>

</details>

<details>
<summary><strong>04 · Ewé (`ewe`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/ewe/ewe_bleu.png" alt="Benchmark BLEU Ewé" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/ewe/ewe_chrfpp.png" alt="Benchmark chrF++ Ewé" width="900" />
</p>

</details>

<details>
<summary><strong>05 · Ewondo (`ewo`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/ewo/ewo_bleu.png" alt="Benchmark BLEU Ewondo" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/ewo/ewo_chrfpp.png" alt="Benchmark chrF++ Ewondo" width="900" />
</p>

</details>

<details>
<summary><strong>06 · Fon (`fon`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/fon/fon_bleu.png" alt="Benchmark BLEU Fon" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/fon/fon_chrfpp.png" alt="Benchmark chrF++ Fon" width="900" />
</p>

</details>

<details>
<summary><strong>07 · Fulfulde (`fub`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/fub/fub_bleu.png" alt="Benchmark BLEU Fulfulde" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/fub/fub_chrfpp.png" alt="Benchmark chrF++ Fulfulde" width="900" />
</p>

</details>

<details>
<summary><strong>08 · Hausa (`hau`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/hau/hau_bleu.png" alt="Benchmark BLEU Hausa" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/hau/hau_chrfpp.png" alt="Benchmark chrF++ Hausa" width="900" />
</p>

</details>

<details>
<summary><strong>09 · Lingala (`lin`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/lin/lin_bleu.png" alt="Benchmark BLEU Lingala" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/lin/lin_chrfpp.png" alt="Benchmark chrF++ Lingala" width="900" />
</p>

</details>

<details>
<summary><strong>10 · Luganda (`lug`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/lug/lug_bleu.png" alt="Benchmark BLEU Luganda" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/lug/lug_chrfpp.png" alt="Benchmark chrF++ Luganda" width="900" />
</p>

</details>

<details>
<summary><strong>11 · Mooré (`mos`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/mos/mos_bleu.png" alt="Benchmark BLEU Mooré" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/mos/mos_chrfpp.png" alt="Benchmark chrF++ Mooré" width="900" />
</p>

</details>

<details>
<summary><strong>12 · Sar (`mwm`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/mwm/mwm_bleu.png" alt="Benchmark BLEU Sar" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/mwm/mwm_chrfpp.png" alt="Benchmark chrF++ Sar" width="900" />
</p>

</details>

<details>
<summary><strong>13 · Oromo (`orm`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/orm/orm_bleu.png" alt="Benchmark BLEU Oromo" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/orm/orm_chrfpp.png" alt="Benchmark chrF++ Oromo" width="900" />
</p>

</details>

<details>
<summary><strong>14 · Sango (`sag`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/sag/sag_bleu.png" alt="Benchmark BLEU Sango" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/sag/sag_chrfpp.png" alt="Benchmark chrF++ Sango" width="900" />
</p>

</details>

<details>
<summary><strong>15 · Shona (`sna`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/sna/sna_bleu.png" alt="Benchmark BLEU Shona" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/sna/sna_chrfpp.png" alt="Benchmark chrF++ Shona" width="900" />
</p>

</details>

<details>
<summary><strong>16 · Somali (`som`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/som/som_bleu.png" alt="Benchmark BLEU Somali" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/som/som_chrfpp.png" alt="Benchmark chrF++ Somali" width="900" />
</p>

</details>

<details>
<summary><strong>17 · Swahili (`swh`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/swh/swh_bleu.png" alt="Benchmark BLEU Swahili" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/swh/swh_chrfpp.png" alt="Benchmark chrF++ Swahili" width="900" />
</p>

</details>

<details>
<summary><strong>18 · Wolof (`wol`)</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/wol/wol_bleu.png" alt="Benchmark BLEU Wolof" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/05_languages/wol/wol_chrfpp.png" alt="Benchmark chrF++ Wolof" width="900" />
</p>

</details>

---

## Heatmaps du benchmark

<details>
<summary><strong>Heatmaps Griot-MT</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/griot-mt_bleu.png" alt="Heatmap BLEU Griot-MT" width="820" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/griot-mt_chrfpp.png" alt="Heatmap chrF++ Griot-MT" width="820" />
</p>

</details>

<details>
<summary><strong>Heatmaps NLLB-200 1.3B</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/nllb-200-1.3b_bleu.png" alt="Heatmap BLEU NLLB-200 1.3B" width="820" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/nllb-200-1.3b_chrfpp.png" alt="Heatmap chrF++ NLLB-200 1.3B" width="820" />
</p>

</details>

<details>
<summary><strong>Heatmaps Google Cloud Translation</strong></summary>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/google-translate-v2-real_bleu.png" alt="Heatmap BLEU Google Cloud Translation" width="820" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/06_heatmaps/google-translate-v2-real_chrfpp.png" alt="Heatmap chrF++ Google Cloud Translation" width="820" />
</p>

</details>

---

## Avantage de Griot-MT sur les directions supportées en commun

Ces graphiques montrent la différence moyenne :

**Δ = Griot-MT − baseline**

Une valeur positive indique un avantage pour Griot-MT.

### Face à NLLB-200 1.3B

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/08_delta/griot_vs_nllb-200-1.3b_bleu_delta.png" alt="Avantage BLEU de Griot-MT sur NLLB" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/08_delta/griot_vs_nllb-200-1.3b_chrfpp_delta.png" alt="Avantage chrF++ de Griot-MT sur NLLB" width="900" />
</p>

### Face à Google Cloud Translation

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/08_delta/griot_vs_google-translate-v2-real_bleu_delta.png" alt="Avantage BLEU de Griot-MT sur Google Cloud Translation" width="900" />
</p>

<p align="center">
  <img src="./griot_mt_benchmark_visualizations/08_delta/griot_vs_google-translate-v2-real_chrfpp_delta.png" alt="Avantage chrF++ de Griot-MT sur Google Cloud Translation" width="900" />
</p>

---

## Artefacts du benchmark

Le bundle de visualisations contient également les CSV utilisés pour générer les figures :

- [`metrics_used_for_figures.csv`](./griot_mt_benchmark_visualizations/data/metrics_used_for_figures.csv)
- [`global_leaderboard.csv`](./griot_mt_benchmark_visualizations/data/global_leaderboard.csv)
- [`supported_only_scores.csv`](./griot_mt_benchmark_visualizations/data/supported_only_scores.csv)
- [`language_macro_scores.csv`](./griot_mt_benchmark_visualizations/data/language_macro_scores.csv)
- [`direction_scores.csv`](./griot_mt_benchmark_visualizations/data/direction_scores.csv)
- [`griot_vs_nllb_matched_support.csv`](./griot_mt_benchmark_visualizations/data/griot_vs_nllb_matched_support.csv)
- [`griot_vs_google_matched_support.csv`](./griot_mt_benchmark_visualizations/data/griot_vs_google_matched_support.csv)

Arborescence locale attendue :

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

---

# Inférence

Griot-MT est distribué comme un modèle partagé accompagné d’un adaptateur LoRA spécifique à chaque langue africaine.

L’exemple ci-dessous exécute **Français → Baatonou (`bba`)** en utilisant uniquement les artefacts publiés dans `bivariant/griot-mt`.

## Installation

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

## Français → Baatonou

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

dtype = (
    torch.float16
    if device != "cpu"
    else torch.float32
)


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
        forced_bos_token_id=(
            tokenizer.convert_tokens_to_ids(
                "bba_Latn"
            )
        ),
        num_beams=4,
        max_length=257,
        repetition_penalty=1.3,
        no_repeat_ngram_size=3,
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

Pour utiliser une autre langue Griot-MT, remplacez :

- `adapters/bba/` par l’adaptateur correspondant ;
- `fra_Latn` par le token de la langue source lorsque vous traduisez vers le français ;
- `bba_Latn` par le token de la langue cible.

Pour l’Oromo, le token publié est `gaz_Latn`.

### Colab

[Ouvrir le notebook d’inférence Griot-MT dans Google Colab](https://colab.research.google.com/drive/1pYcj0G53zT_cURW6mFkD-62pwJJZcVWR?usp=sharing)

---

## Usages prévus

Griot-MT est destiné notamment à :

- la recherche sur la traduction automatique des langues africaines ;
- l’expérimentation en NLP multilingue ;
- le prototypage d’applications d’accès linguistique ;
- l’évaluation de la traduction français ↔ langues africaines ;
- le développement communautaire autour des langues sous-représentées.

Les utilisateurs doivent évaluer les sorties sur leur dialecte, leur domaine et leur contexte de déploiement avant toute utilisation dans un environnement à enjeux élevés.

---

## Limites

Les performances de Griot-MT peuvent varier selon :

- les dialectes et variantes régionales ;
- les domaines techniques spécialisés ;
- le code-switching ;
- les conventions orthographiques ;
- les entités nommées ;
- les entrées très longues ou structurellement inhabituelles ;
- les textes éloignés des distributions représentées dans les données de développement et d’évaluation.

Les résultats présentés dans ce README sont liés au protocole d’évaluation tenu à l’écart et ne doivent pas être interprétés comme une garantie de performances équivalentes sur des jeux de données ou domaines sans rapport.

---

## Structure de la release

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

La page scientifique de la release est déployée ici :

**https://bivariant.github.io/Griot/**

Ce dépôt est configuré comme export statique Next.js pour GitHub Pages.

---

## Développement local

```bash
npm install
npm run dev
```

Pour construire le site statique :

```bash
npm run build
```

Le site exporté est écrit dans `out/`.

---

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
  Construire les technologies linguistiques fondamentales pour la diversité linguistique de l’Afrique.
</p>
