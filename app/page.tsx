/* eslint-disable @next/next/no-img-element */

import { FaFilePdf, FaGithub } from "react-icons/fa6";
import { SiArxiv } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";

type Language = {
  code: string;
  name: string;
  regions: string[];
};

type MTBenchmark = {
  model: string;
  access: "Ouvert" | "API";
  bleu: number;
  chrf: number;
  note?: string;
  highlight?: boolean;
};

type ASRBenchmark = {
  model: string;
  access: "Ouvert" | "API";
  wer: number;
  cer: number;
  note?: string;
  highlight?: boolean;
};

const languages: Language[] = [
  { code: "bba", name: "Baatonou", regions: ["Bénin", "Nigeria"] },
  { code: "bci", name: "Baoulé", regions: ["Côte d’Ivoire"] },
  { code: "dyu", name: "Dioula", regions: ["Côte d’Ivoire", "Burkina Faso", "Mali"] },
  { code: "ewe", name: "Ewé", regions: ["Togo", "Ghana"] },
  { code: "ewo", name: "Ewondo", regions: ["Cameroun"] },
  { code: "fon", name: "Fon", regions: ["Bénin", "Togo"] },
  {
    code: "fub",
    name: "Fulfulde",
    regions: ["Cameroun", "Nigeria", "Niger", "Guinée", "Mali", "Sénégal"],
  },
  {
    code: "hau",
    name: "Hausa",
    regions: ["Nigeria", "Niger", "Ghana", "Cameroun", "Tchad"],
  },
  {
    code: "lin",
    name: "Lingala",
    regions: ["RDC", "République du Congo", "Angola", "République centrafricaine"],
  },
  { code: "lug", name: "Luganda", regions: ["Ouganda"] },
  { code: "mos", name: "Mooré", regions: ["Burkina Faso"] },
  { code: "mwm", name: "Sar", regions: ["Tchad"] },
  { code: "orm", name: "Oromo", regions: ["Éthiopie", "Kenya"] },
  { code: "sag", name: "Sango", regions: ["République centrafricaine"] },
  { code: "sna", name: "Shona", regions: ["Zimbabwe", "Mozambique"] },
  { code: "som", name: "Somali", regions: ["Somalie", "Éthiopie", "Kenya", "Djibouti"] },
  {
    code: "swh",
    name: "Swahili",
    regions: ["Tanzanie", "Kenya", "RDC", "Ouganda", "Rwanda", "Burundi"],
  },
  { code: "wol", name: "Wolof", regions: ["Sénégal", "Gambie"] },
];

const representativeCountries = [
  "Bénin",
  "Burkina Faso",
  "Cameroun",
  "République centrafricaine",
  "Tchad",
  "Côte d’Ivoire",
  "RDC",
  "Djibouti",
  "Éthiopie",
  "Ghana",
  "Guinée",
  "Kenya",
  "Mali",
  "Mozambique",
  "Niger",
  "Nigeria",
  "République du Congo",
  "Rwanda",
  "Sénégal",
  "Somalie",
  "Tanzanie",
  "Gambie",
  "Togo",
  "Ouganda",
  "Zimbabwe",
];

/*
  IMPORTANT :
  Ces valeurs de benchmark sont uniquement des données synthétiques de présentation.
  Remplacez chaque valeur par des résultats d’évaluation reproductibles avant publication.
*/
const mtBenchmark: MTBenchmark[] = [
  {
    model: "Griot-MT",
    access: "Ouvert",
    bleu: 29.8,
    chrf: 54.7,
    highlight: true,
    note: "Aperçu synthétique",
  },
  { model: "Google Translate", access: "API", bleu: 26.9, chrf: 51.2 },
  { model: "Gemini", access: "API", bleu: 26.1, chrf: 50.8 },
  { model: "NLLB-200 3.3B", access: "Ouvert", bleu: 24.7, chrf: 48.9 },
  { model: "MADLAD-400 10B", access: "Ouvert", bleu: 23.8, chrf: 47.6 },
  { model: "SeamlessM4T-v2 Large", access: "Ouvert", bleu: 22.9, chrf: 46.4 },
];

const asrBenchmark: ASRBenchmark[] = [
  {
    model: "Griot-ASR",
    access: "Ouvert",
    wer: 13.8,
    cer: 6.4,
    highlight: true,
    note: "Aperçu synthétique",
  },
  { model: "Google Speech-to-Text", access: "API", wer: 18.9, cer: 9.8 },
  { model: "Whisper large-v3", access: "Ouvert", wer: 19.7, cer: 10.3 },
  { model: "SeamlessM4T-v2 Large", access: "Ouvert", wer: 21.4, cer: 11.3 },
  { model: "MMS-1B-All", access: "Ouvert", wer: 22.5, cer: 12.1 },
];

const publicBenchmarks = [
  {
    name: "FLORES-200",
    task: "Traduction automatique",
    description:
      "Données publiques d’évaluation multilingue permettant de comparer les performances de traduction entre plusieurs langues.",
    href: "https://huggingface.co/datasets/facebook/flores",
    metrics: "BLEU · chrF++",
  },
  {
    name: "FLEURS",
    task: "Reconnaissance automatique de la parole",
    description:
      "Benchmark public multilingue de parole, utile pour l’évaluation ASR entre plusieurs langues.",
    href: "https://huggingface.co/datasets/google/fleurs",
    metrics: "WER · CER",
  },
  {
    name: "Mozilla Common Voice",
    task: "Reconnaissance automatique de la parole",
    description:
      "Données vocales ouvertes et contributives. La disponibilité varie selon la langue et la version publiée.",
    href: "https://commonvoice.mozilla.org/en/datasets",
    metrics: "WER · CER",
  },
  {
    name: "OPUS / JW300",
    task: "Traduction automatique",
    description:
      "Corpus parallèles publics pouvant servir à une évaluation tenue à l’écart lorsque les langues cibles sont disponibles.",
    href: "https://opus.nlpl.eu/JW300.php",
    metrics: "BLEU · chrF++",
  },
  {
    name: "Masakhane MT",
    task: "Traduction automatique",
    description:
      "Écosystème de recherche et ressources d’évaluation dédiés à la traduction automatique des langues africaines.",
    href: "https://github.com/masakhane-io/masakhane-mt",
    metrics: "BLEU · chrF++",
  },
];

const mtBaselines = [
  "Google Translate",
  "Gemini",
  "NLLB-200 3.3B",
  "MADLAD-400 10B",
  "SeamlessM4T-v2 Large",
];

const asrBaselines = [
  "Whisper large-v3",
  "MMS-1B-All",
  "SeamlessM4T-v2 Large",
  "Google Speech-to-Text",
];

const ResourceButton = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
  >
    {icon}
    {children}
  </a>
);

const MetricArrow = ({ direction }: { direction: "up" | "down" }) => (
  <span
    aria-label={
      direction === "up"
        ? "une valeur plus élevée est meilleure"
        : "une valeur plus faible est meilleure"
    }
  >
    {direction === "up" ? "↑" : "↓"}
  </span>
);

export default function Home() {
  return (
    <main id="top">
      <nav className="paper-nav" aria-label="Navigation du projet">
        <a className="nav-wordmark" href="#top">
          GRIOT
        </a>

        <div>
          <a href="#overview">Présentation</a>
          <a href="#models">Modèles</a>
          <a href="#benchmarks">Benchmarks</a>
          <a href="#evaluation">Évaluation</a>
          <a href="#languages">Langues</a>
          <a href="#citation">Citation</a>
        </div>
      </nav>

      <section className="paper-hero">
        <img className="paper-logo" src="./images/griot-logo.png" alt="Griot" />

        <p className="hero-eyebrow">
          Bivariant · Modèles ouverts pour les langues africaines
        </p>

        <h1>
          <span>Griot :</span> Intelligence multilingue ouverte
          <br />
          pour les langues africaines
        </h1>

        <p className="paper-subtitle">
          Modèles ouverts de traduction automatique et de reconnaissance
          automatique de la parole conçus pour 18 langues africaines, 36
          directions de traduction et des communautés représentant plus de
          420 millions de locuteurs.
        </p>

        <div className="hero-stat-grid">
          <div>
            <strong>18</strong>
            <span>Langues africaines</span>
          </div>
          <div>
            <strong>36</strong>
            <span>Directions MT</span>
          </div>
          <div>
            <strong>420M+</strong>
            <span>Locuteurs potentiels couverts</span>
          </div>
          <div>
            <strong>25+</strong>
            <span>Pays représentés</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Familles de modèles ouvertes</span>
          </div>
        </div>

        <div className="contributors" aria-label="Contributeurs du projet">
          <span>
            Luc Alapini<sup>1</sup>
          </span>
          <span>·</span>
          <span>
            Arnauld Adjovi<sup>1</sup>
          </span>
          <span>·</span>
          <span>
            Dave Dassi<sup>1</sup>
          </span>
          <span>·</span>
          <span>
            Johaness Hounton<sup>1</sup>
          </span>
          <span>·</span>
          <span>
            Lucien TITO<sup>1</sup>
          </span>
          <span>
            Ahmed Adjibade<sup>1</sup>
          </span>
          <span>
            Joel Gnansounou<sup>1</sup>
          </span>
          <span>
            Marius Sègbè<sup>1</sup>
          </span>
          <span>
            Gloria Gado<sup>1</sup>
          </span>
        </div>

        <p className="affiliation">
          <sup>1</sup>Bivariant · Cotonou, Bénin
        </p>

        <p className="release-line">Release open source Griot · 2026</p>

        <div className="paper-actions" aria-label="Ressources du projet">
          <ResourceButton
            href="#citation"
            icon={<FaFilePdf aria-hidden="true" />}
          >
            Rapport technique
          </ResourceButton>

          <ResourceButton
            href="https://github.com/bivariant/Griot"
            icon={<FaGithub aria-hidden="true" />}
          >
            GitHub
          </ResourceButton>

          <ResourceButton
            href="https://huggingface.co/bivariant/griot-mt"
            icon={<SiHuggingface aria-hidden="true" />}
          >
            Griot-MT
          </ResourceButton>

          <ResourceButton
            href="https://huggingface.co/bivariant/griot-asr"
            icon={<SiHuggingface aria-hidden="true" />}
          >
            Griot-ASR
          </ResourceButton>
        </div>

        <div className="hero-rule" />

        <p className="hero-note">
          Traduction automatique · Reconnaissance de la parole · Langues à
          faibles ressources · Poids ouverts
        </p>
      </section>

      <section className="content-section" id="overview">
        <div className="section-number">01</div>

        <div className="section-body">
          <p className="section-kicker">Présentation</p>

          <h2>
            Des technologies linguistiques africaines à l’échelle du continent.
          </h2>

          <div className="abstract-grid">
            <p>
              Griot est la famille ouverte de modèles de langage de Bivariant
              pour les langues africaines. La première release publique se
              concentre sur deux capacités fondamentales :{" "}
              <strong>la traduction automatique</strong> et{" "}
              <strong>la reconnaissance automatique de la parole</strong>.
            </p>

            <p>
              La release couvre 18 langues réparties en Afrique de l’Ouest,
              centrale, de l’Est, dans la Corne de l’Afrique et en Afrique
              australe, avec une portée linguistique potentielle de plus de{" "}
              <strong>420 millions de locuteurs</strong>.
            </p>

            <p>
              Pour la traduction automatique, chaque langue africaine prise en
              charge est disponible dans les deux directions avec le français,
              soit <strong>36 directions de traduction</strong>.
            </p>

            <p>
              Griot est conçu comme un écosystème de release ouverte : poids des
              modèles, adaptateurs LoRA, code d’inférence, scripts d’évaluation,
              configuration des benchmarks et model cards sont versionnés
              ensemble.
            </p>
          </div>
        </div>
      </section>

      <section className="coverage-section">
        <div className="coverage-copy">
          <p className="section-kicker light">Couverture continentale</p>

          <h2>
            Conçu pour des langues parlées dans plus de 25 pays africains.
          </h2>

          <p>
            La couverture linguistique de Griot relie de grandes communautés,
            du golfe de Guinée au Sahel, en passant par l’Afrique centrale, la
            Corne de l’Afrique et l’Afrique australe.
          </p>

          <p className="coverage-disclaimer">
            Les pays indiqués correspondent à des communautés linguistiques
            représentatives et ne constituent pas une cartographie exhaustive
            de tous les pays dans lesquels une langue est parlée.
          </p>
        </div>

        <div className="country-cloud">
          {representativeCountries.map((country) => (
            <span key={country}>{country}</span>
          ))}
        </div>
      </section>

      <section className="models-section" id="models">
        <div className="models-copy">
          <p className="section-kicker light">Famille de modèles</p>

          <h2>
            Traduire le texte.
            <br />
            Reconnaître la parole.
            <br />
            Garder les langues africaines au centre.
          </h2>

          <p>
            Griot est une famille de modèles plutôt qu’un checkpoint unique.
            Chaque langue est distribuée sous la forme d’un adaptateur LoRA
            dédié appliqué à un backbone multilingue partagé, avec un standard
            commun d’évaluation et de documentation.
          </p>
        </div>

        <div className="model-papers">
          <article>
            <span>01 · Traduction automatique</span>

            <h3>Griot-MT</h3>

            <p>
              Traduction bidirectionnelle avec le français pour 18 langues
              africaines, à partir d’une base multilingue partagée et
              d’adaptateurs LoRA spécifiques à chaque langue.
            </p>

            <ul>
              <li>18 langues africaines</li>
              <li>36 directions</li>
              <li>Un adaptateur LoRA par langue</li>
              <li>BLEU + chrF++</li>
              <li>Évaluation reproductible</li>
            </ul>

            <a
              href="https://github.com/bivariant/Griot/tree/main/models/machine-translation"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir le dépôt Griot-MT ↗
            </a>
          </article>

          <article>
            <span>02 · Reconnaissance automatique de la parole</span>

            <h3>Griot-ASR</h3>

            <p>
              Reconnaissance multilingue de la parole africaine à partir d’une
              base partagée et d’adaptateurs LoRA spécifiques à chaque langue,
              avec une évaluation indépendante pour chaque langue prise en
              charge.
            </p>

            <ul>
              <li>18 langues africaines</li>
              <li>Un adaptateur LoRA par langue</li>
              <li>WER + CER</li>
              <li>Reporting par langue</li>
              <li>Pipeline de décodage ouvert</li>
            </ul>

            <a
              href="https://github.com/bivariant/Griot/tree/main/models/asr"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir le dépôt Griot-ASR ↗
            </a>
          </article>
        </div>
      </section>

      {/* <section className="comparison-figure" id="benchmarks">
        <div className="figure-heading">
          <span>Suite de benchmarks</span>
          <strong>
            Griot face aux principaux systèmes multilingues ouverts et commerciaux.
          </strong>
        </div>

        <div className="benchmark-warning">
          <strong>APERÇU DE CONCEPTION : RÉSULTATS SYNTHÉTIQUES</strong>
          <p>
            Les valeurs numériques affichées ci-dessous sont fictives et servent
            uniquement à concevoir la page de release. Remplacez-les par des
            résultats d’évaluation reproductibles avant publication.
          </p>
        </div>

        <article className="benchmark-table-card">
          <header>
            <div>
              <span>Traduction automatique</span>
              <h2>Benchmark en moyenne macro</h2>
            </div>
            <small>
              BLEU <MetricArrow direction="up" /> · chrF++{" "}
              <MetricArrow direction="up" />
            </small>
          </header>

          <div className="benchmark-table-wrapper">
            <table className="benchmark-table">
              <thead>
                <tr>
                  <th>Modèle</th>
                  <th>Accès</th>
                  <th>BLEU ↑</th>
                  <th>chrF++ ↑</th>
                </tr>
              </thead>

              <tbody>
                {mtBenchmark.map((row) => (
                  <tr
                    key={row.model}
                    className={row.highlight ? "benchmark-winner" : undefined}
                  >
                    <td>
                      <strong>{row.model}</strong>
                      {row.note && <small>{row.note}</small>}
                    </td>

                    <td>
                      <span
                        className={
                          row.access === "Ouvert"
                            ? "access-badge open"
                            : "access-badge api"
                        }
                      >
                        {row.access}
                      </span>
                    </td>

                    <td>
                      <strong>{row.bleu.toFixed(1)}</strong>
                    </td>

                    <td>
                      <strong>{row.chrf.toFixed(1)}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="benchmark-caption">
            La publication finale doit inclure des résultats par langue, par
            direction et par dataset, et pas uniquement une moyenne macro.
          </p>
        </article>

        <article className="benchmark-table-card">
          <header>
            <div>
              <span>Reconnaissance automatique de la parole</span>
              <h2>Benchmark en moyenne macro</h2>
            </div>
            <small>
              WER <MetricArrow direction="down" /> · CER{" "}
              <MetricArrow direction="down" />
            </small>
          </header>

          <div className="benchmark-table-wrapper">
            <table className="benchmark-table">
              <thead>
                <tr>
                  <th>Modèle</th>
                  <th>Accès</th>
                  <th>WER ↓</th>
                  <th>CER ↓</th>
                </tr>
              </thead>

              <tbody>
                {asrBenchmark.map((row) => (
                  <tr
                    key={row.model}
                    className={row.highlight ? "benchmark-winner" : undefined}
                  >
                    <td>
                      <strong>{row.model}</strong>
                      {row.note && <small>{row.note}</small>}
                    </td>

                    <td>
                      <span
                        className={
                          row.access === "Ouvert"
                            ? "access-badge open"
                            : "access-badge api"
                        }
                      >
                        {row.access}
                      </span>
                    </td>

                    <td>
                      <strong>{row.wer.toFixed(1)}</strong>
                    </td>

                    <td>
                      <strong>{row.cer.toFixed(1)}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="benchmark-caption">
            Les résultats finaux doivent documenter la normalisation, la gestion
            de la ponctuation, les paramètres de décodage et la version du jeu
            d’évaluation.
          </p>
        </article>
      </section> */}

      {/* <section className="content-section baseline-section">
        <div className="section-number">02</div>

        <div className="section-body">
          <p className="section-kicker">Baselines</p>

          <h2>Se comparer aux systèmes réellement utilisés.</h2>

          <p className="section-lead">
            Comparer Griot à la fois à des modèles de recherche open-weight et à
            des systèmes commerciaux accessibles aux utilisateurs africains.
          </p>

          <div className="baseline-grid">
            <article>
              <span>Traduction automatique</span>
              <h3>Baselines recommandées</h3>
              <ul>
                {mtBaselines.map((baseline) => (
                  <li key={baseline}>{baseline}</li>
                ))}
              </ul>
            </article>

            <article>
              <span>Reconnaissance automatique de la parole</span>
              <h3>Baselines recommandées</h3>
              <ul>
                {asrBaselines.map((baseline) => (
                  <li key={baseline}>{baseline}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section> */}

      {/* <section className="benchmark-data-section" id="evaluation">
        <div className="benchmark-data-header">
          <p className="section-kicker light">Données publiques d’évaluation</p>

          <h2>
            Évaluer sur des datasets que la communauté scientifique peut inspecter.
          </h2>

          <p>
            Lorsqu’un benchmark public existe pour une langue cible, Griot doit
            publier ses résultats directement dessus. Les langues ne disposant
            pas d’une couverture publique suffisante doivent recevoir un jeu
            d’évaluation publié séparément et contrôlé contre la contamination.
          </p>
        </div>

        <div className="benchmark-dataset-grid">
          {publicBenchmarks.map((dataset) => (
            <article key={dataset.name}>
              <span>{dataset.task}</span>
              <h3>{dataset.name}</h3>
              <p>{dataset.description}</p>
              <small>{dataset.metrics}</small>
              <a href={dataset.href} target="_blank" rel="noreferrer">
                Ouvrir le dataset public ↗
              </a>
            </article>
          ))}
        </div>
      </section> */}

      <section className="content-section method-section">
        <div className="section-number">03</div>

        <div className="section-body">
          <p className="section-kicker">Protocole d’évaluation</p>

          <h2>Les chiffres ne sont utiles que s’ils sont reproductibles.</h2>

          <div className="pipeline">
            <article>
              <span>01</span>
              <h3>Figer</h3>
              <p>
                Figer la version exacte du benchmark avant l’évaluation du
                modèle.
              </p>
            </article>

            <div>→</div>

            <article>
              <span>02</span>
              <h3>Normaliser</h3>
              <p>
                Appliquer la normalisation documentée de manière cohérente à
                tous les systèmes.
              </p>
            </article>

            <div>→</div>

            <article>
              <span>03</span>
              <h3>Évaluer</h3>
              <p>
                Exécuter chaque modèle sur exactement les mêmes exemples et les
                mêmes directions de traduction.
              </p>
            </article>

            <div>→</div>

            <article>
              <span>04</span>
              <h3>Publier les résultats</h3>
              <p>
                Publier les scores par langue, les moyennes macro et les
                signatures du benchmark.
              </p>
            </article>

            <div>→</div>

            <article>
              <span>05</span>
              <h3>Libérer</h3>
              <p>
                Publier les scripts et les prédictions lorsque les licences le
                permettent.
              </p>
            </article>
          </div>

          <div className="method-notes">
            <article>
              <span>Métriques MT</span>
              <strong>BLEU · chrF++</strong>
              <p>
                Calculer avec SacreBLEU et publier la signature ainsi que le
                tokenizer utilisé.
              </p>
            </article>

            <article>
              <span>Métriques ASR</span>
              <strong>WER · CER</strong>
              <p>
                Publier les erreurs au niveau des mots et des caractères avec
                les règles exactes de normalisation.
              </p>
            </article>

            <article>
              <span>Contamination</span>
              <strong>Aucun chevauchement train/test</strong>
              <p>
                Dédupliquer les données d’entraînement, de validation et
                d’évaluation avant l’entraînement.
              </p>
            </article>

            <article>
              <span>Reporting</span>
              <strong>Par langue</strong>
              <p>
                Ne pas masquer les langues faibles derrière un unique score
                macro multilingue.
              </p>
            </article>

            <article>
              <span>Directions</span>
              <strong>Évaluer les deux directions</strong>
              <p>
                Français → langue africaine et langue africaine → français sont
                rapportés indépendamment.
              </p>
            </article>

            <article>
              <span>API commerciales</span>
              <strong>Enregistrer la date d’évaluation</strong>
              <p>
                Documenter le fournisseur, le modèle/la version de l’API, le
                prompt, les paramètres et la date d’évaluation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="technical-section">
        <div className="technical-intro">
          <p className="section-kicker">Release open-weight</p>

          <h2>
            Poids ouverts, modèles documentés, évaluation reproductible.
          </h2>

          <p>
            Les releases Griot fournissent les artefacts des modèles et la
            documentation nécessaires pour exécuter l’inférence, inspecter les
            capacités supportées et reproduire les évaluations publiques. Les
            pipelines d’entraînement, les jeux de données internes et les
            recettes d’optimisation propriétaires restent dans la pile de
            recherche et d’ingénierie de Bivariant.
          </p>
        </div>

        <div className="technical-grid">
          <article>
            <span>01</span>
            <h3>Poids des modèles</h3>
            <p>
              Checkpoints versionnés et adaptateurs spécifiques aux langues,
              publiés sur Hugging Face.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Model cards</h3>
            <p>
              Architecture, langues supportées, usages prévus, limites connues
              et informations de release.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Inférence</h3>
            <p>
              Exemples de référence pour exécuter la traduction et la
              reconnaissance de la parole avec les modèles publiés.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Évaluation</h3>
            <p>
              Protocoles et métriques d’évaluation publics, notamment BLEU,
              chrF++, WER et CER selon les tâches.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>Benchmarks</h3>
            <p>
              Résultats comparables face à des baselines publiques pertinentes
              et sur des jeux d’évaluation lorsqu’ils sont disponibles.
            </p>
          </article>

          <article>
            <span>06</span>
            <h3>Provenance</h3>
            <p>
              Lignée du modèle, versions des artefacts publiés et informations
              nécessaires pour identifier chaque release publique.
            </p>
          </article>

          <article>
            <span>07</span>
            <h3>Conditions d’utilisation</h3>
            <p>
              Informations claires sur les usages autorisés, les dépendances et
              les conditions applicables aux artefacts publiés.
            </p>
          </article>

          <article>
            <span>08</span>
            <h3>Limites</h3>
            <p>
              Limites documentées selon les langues, dialectes, accents,
              domaines et scénarios de code-switching.
            </p>
          </article>
        </div>
      </section>

      <section className="language-section" id="languages">
        <div className="language-intro">
          <p className="section-kicker">Couverture linguistique</p>

          <h2>
            18 langues africaines.
            <br />
            Chaque langue est une cible de benchmark à part entière.
          </h2>

          <p>
            Griot publie la qualité indépendamment pour chaque langue, au lieu
            de masquer les performances derrière une moyenne multilingue unique.
          </p>
        </div>

        <div className="language-grid expanded-language-grid">
          {languages.map((language, index) => (
            <div key={language.code}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{language.name}</strong>
              <code>{language.code}</code>
              <p>{language.regions.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="content-section">
        <div className="section-number">04</div>

        <div className="section-body">
          <p className="section-kicker">Principes de release</p>

          <h2>
            Modèles ouverts. Évaluation transparente. Couverture des langues africaines.
          </h2>

          <div className="principles-grid">
            <article>
              <strong>Poids ouverts</strong>
              <p>
                Permettre aux chercheurs, startups et institutions de construire
                directement sur les modèles.
              </p>
            </article>

            <article>
              <strong>Benchmarks reproductibles</strong>
              <p>
                Relier chaque résultat majeur publié à une procédure
                d’évaluation publique.
              </p>
            </article>

            <article>
              <strong>Transparence par langue</strong>
              <p>
                Publier les forces et faiblesses indépendamment pour chaque
                langue.
              </p>
            </article>

            <article>
              <strong>Déploiement pratique</strong>
              <p>
                Optimiser les releases pour les développeurs construisant de
                vrais produits linguistiques africains.
              </p>
            </article>
          </div>
        </div>
      </section> */}

      {/* <section className="citation-section" id="citation">
        <div>
          <p className="section-kicker">Citation</p>

          <h2>
            Construisez avec Griot.
            <br />
            Citez le travail.
          </h2>

          <p>
            Un rapport technique versionné doit accompagner chaque release
            majeure. Jusqu’à sa publication, utilisez la citation de projet
            suivante.
          </p>
        </div>

        <pre>
          <code>{`@misc{griot2026,
  title  = {Griot: Open Multilingual Intelligence
            for African Languages},
  author = {Alapini, Luc and Adjovi, Arnauld and
            Dassi, Dave and Hounton, Johaness and
            Tito, Lucien},
  year   = {2026},
  url    = {https://bivariant.github.io/Griot/},
  note   = {Bivariant open-source African
            language model initiative}
}`}</code>
        </pre>
      </section> */}

      <section className="bivariant-section">
        <p>Recherche et ingénierie par</p>

        <h2>Bivariant</h2>

        <span>
          Construire les technologies linguistiques fondamentales pour la
          diversité linguistique de l’Afrique.
        </span>

        <div>
          <a
            href="https://www.bivariant.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visiter Bivariant ↗
          </a>

          <a
            href="https://github.com/bivariant"
            target="_blank"
            rel="noreferrer"
          >
            Organisation GitHub ↗
          </a>
        </div>
      </section>

      <footer>
        <img src="./images/griot-logo.png" alt="Griot" />

        <p>Intelligence multilingue ouverte pour les langues africaines.</p>

        <div>
          <a href="#top">Retour en haut ↑</a>
          <a href="https://github.com/bivariant/Griot">GitHub</a>
          <a href="https://github.com/bivariant/Griot/tree/main/models/machine-translation">
            Griot-MT
          </a>
          <a href="https://github.com/bivariant/Griot/tree/main/models/asr">
            Griot-ASR
          </a>
        </div>

        <small>
          © {new Date().getFullYear()} Bivariant · Griot est une initiative
          open source de modèles pour les langues africaines.
        </small>
      </footer>
    </main>
  );
}
