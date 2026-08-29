/* eslint-disable @next/next/no-img-element */
import { FaFilePdf, FaGithub } from "react-icons/fa6";
import { SiArxiv } from "react-icons/si";

type Language = {
  code: string;
  name: string;
  regions: string[];
};

type MTBenchmark = {
  model: string;
  access: "Open" | "API";
  bleu: number;
  chrf: number;
  note?: string;
  highlight?: boolean;
};

type ASRBenchmark = {
  model: string;
  access: "Open" | "API";
  wer: number;
  cer: number;
  note?: string;
  highlight?: boolean;
};

const languages: Language[] = [
  { code: "bba", name: "Baatonou", regions: ["Benin", "Nigeria"] },
  { code: "bci", name: "Baoulé", regions: ["Côte d’Ivoire"] },
  { code: "dyu", name: "Dioula", regions: ["Côte d’Ivoire", "Burkina Faso", "Mali"] },
  { code: "ewe", name: "Ewé", regions: ["Togo", "Ghana"] },
  { code: "ewo", name: "Ewondo", regions: ["Cameroon"] },
  { code: "fon", name: "Fon", regions: ["Benin", "Togo"] },
  { code: "fub", name: "Fulfulde", regions: ["Cameroon", "Nigeria", "Niger", "Guinea", "Mali", "Senegal"] },
  { code: "hau", name: "Hausa", regions: ["Nigeria", "Niger", "Ghana", "Cameroon", "Chad"] },
  { code: "lin", name: "Lingala", regions: ["DR Congo", "Republic of the Congo", "Angola", "Central African Republic"] },
  { code: "lug", name: "Luganda", regions: ["Uganda"] },
  { code: "mos", name: "Mooré", regions: ["Burkina Faso"] },
  { code: "mwm", name: "Sar", regions: ["Chad"] },
  { code: "orm", name: "Oromo", regions: ["Ethiopia", "Kenya"] },
  { code: "sag", name: "Sango", regions: ["Central African Republic"] },
  { code: "sna", name: "Shona", regions: ["Zimbabwe", "Mozambique"] },
  { code: "som", name: "Somali", regions: ["Somalia", "Ethiopia", "Kenya", "Djibouti"] },
  { code: "swh", name: "Swahili", regions: ["Tanzania", "Kenya", "DR Congo", "Uganda", "Rwanda", "Burundi"] },
  { code: "wol", name: "Wolof", regions: ["Senegal", "The Gambia"] },
];

const representativeCountries = [
  "Benin", "Burkina Faso", "Cameroon", "Central African Republic", "Chad",
  "Côte d’Ivoire", "DR Congo", "Djibouti", "Ethiopia", "Ghana", "Guinea",
  "Kenya", "Mali", "Mozambique", "Niger", "Nigeria", "Republic of the Congo",
  "Rwanda", "Senegal", "Somalia", "Tanzania", "The Gambia", "Togo", "Uganda",
  "Zimbabwe",
];

/*
  IMPORTANT:
  These benchmark values are synthetic presentation data only.
  Replace every value with reproducible evaluation results before publication.
*/
const mtBenchmark: MTBenchmark[] = [
  { model: "Griot-MT", access: "Open", bleu: 29.8, chrf: 54.7, highlight: true, note: "Synthetic preview" },
  { model: "Google Translate", access: "API", bleu: 26.9, chrf: 51.2 },
  { model: "Gemini", access: "API", bleu: 26.1, chrf: 50.8 },
  { model: "NLLB-200 3.3B", access: "Open", bleu: 24.7, chrf: 48.9 },
  { model: "MADLAD-400 10B", access: "Open", bleu: 23.8, chrf: 47.6 },
  { model: "SeamlessM4T-v2 Large", access: "Open", bleu: 22.9, chrf: 46.4 },
];

const asrBenchmark: ASRBenchmark[] = [
  { model: "Griot-ASR", access: "Open", wer: 13.8, cer: 6.4, highlight: true, note: "Synthetic preview" },
  { model: "Google Speech-to-Text", access: "API", wer: 18.9, cer: 9.8 },
  { model: "Whisper large-v3", access: "Open", wer: 19.7, cer: 10.3 },
  { model: "SeamlessM4T-v2 Large", access: "Open", wer: 21.4, cer: 11.3 },
  { model: "MMS-1B-All", access: "Open", wer: 22.5, cer: 12.1 },
];

const publicBenchmarks = [
  {
    name: "FLORES-200",
    task: "Machine Translation",
    description: "Public multilingual evaluation data for comparable translation evaluation across languages.",
    href: "https://huggingface.co/datasets/facebook/flores",
    metrics: "BLEU · chrF++",
  },
  {
    name: "FLEURS",
    task: "Automatic Speech Recognition",
    description: "Public multilingual speech benchmark useful for cross-language ASR evaluation.",
    href: "https://huggingface.co/datasets/google/fleurs",
    metrics: "WER · CER",
  },
  {
    name: "Mozilla Common Voice",
    task: "Automatic Speech Recognition",
    description: "Community-contributed open speech data. Availability varies by language and release.",
    href: "https://commonvoice.mozilla.org/en/datasets",
    metrics: "WER · CER",
  },
  {
    name: "OPUS / JW300",
    task: "Machine Translation",
    description: "Public parallel corpora that can support held-out evaluation where target languages are available.",
    href: "https://opus.nlpl.eu/JW300.php",
    metrics: "BLEU · chrF++",
  },
  {
    name: "Masakhane MT",
    task: "Machine Translation",
    description: "African machine-translation research ecosystem and evaluation resources.",
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
  <span aria-label={direction === "up" ? "higher is better" : "lower is better"}>
    {direction === "up" ? "↑" : "↓"}
  </span>
);

export default function Home() {
  return (
    <main id="top">
      <nav className="paper-nav" aria-label="Project navigation">
        <a className="nav-wordmark" href="#top">GRIOT</a>
        <div>
          <a href="#overview">Overview</a>
          <a href="#models">Models</a>
          <a href="#benchmarks">Benchmarks</a>
          <a href="#evaluation">Evaluation</a>
          <a href="#languages">Languages</a>
          <a href="#citation">Citation</a>
        </div>
      </nav>

      <section className="paper-hero">
        <img className="paper-logo" src="./images/griot-logo.png" alt="Griot" />
        <p className="hero-eyebrow">Bivariant · Open African Language Models</p>

        <h1>
          <span>Griot:</span> Open Multilingual Intelligence
          <br />
          for African Languages
        </h1>

        <p className="paper-subtitle">
          Open machine translation and automatic speech recognition models
          built for 18 African languages, 36 translation directions and
          communities representing more than 420 million speakers.
        </p>

        <div className="hero-stat-grid">
          <div><strong>18</strong><span>African languages</span></div>
          <div><strong>36</strong><span>MT directions</span></div>
          <div><strong>420M+</strong><span>Speaker coverage</span></div>
          <div><strong>25+</strong><span>Countries represented</span></div>
          <div><strong>2</strong><span>Open model families</span></div>
        </div>

        <div className="contributors" aria-label="Project contributors">
          <span>Luc Alapini<sup>1</sup></span><span>·</span>
          <span>Arnauld Adjovi<sup>1</sup></span><span>·</span>
          <span>Dave Dassi<sup>1</sup></span><span>·</span>
          <span>Johaness Hounton<sup>1</sup></span><span>·</span>
          <span>Lucien TITO<sup>1</sup></span>
          <span>Ahmed Adjibade<sup>1</sup></span>
          <span>Joel Gnansounou<sup>1</sup></span>
          <span>Marius Sègbè<sup>1</sup></span>
          <span>Gloria Gado<sup>1</sup></span>
        </div>

        <p className="affiliation"><sup>1</sup>Bivariant · Cotonou, Benin</p>
        <p className="release-line">Griot Open-Source Release · 2026</p>

        <div className="paper-actions" aria-label="Project resources">
          <ResourceButton href="#citation" icon={<FaFilePdf aria-hidden="true" />}>Technical Report</ResourceButton>
          <ResourceButton href="https://github.com/bivariant/Griot" icon={<FaGithub aria-hidden="true" />}>GitHub</ResourceButton>
          <ResourceButton href="#citation" icon={<SiArxiv aria-hidden="true" />}>arXiv</ResourceButton>
          <ResourceButton href="https://github.com/bivariant/Griot/tree/main/models/machine-translation" icon={<FaGithub aria-hidden="true" />}>Griot-MT</ResourceButton>
          <ResourceButton href="https://github.com/bivariant/Griot/tree/main/models/asr" icon={<FaGithub aria-hidden="true" />}>Griot-ASR</ResourceButton>
        </div>

        <div className="hero-rule" />
        <p className="hero-note">
          Machine Translation · Speech Recognition · Low-Resource Languages ·
          Open Weights · Reproducible Evaluation
        </p>
      </section>

      <section className="content-section" id="overview">
        <div className="section-number">01</div>
        <div className="section-body">
          <p className="section-kicker">Overview</p>
          <h2>African language technology at continental scale.</h2>

          <div className="abstract-grid">
            <p>
              Griot is Bivariant&apos;s open family of language models for African
              languages. The first public release focuses on two foundational
              capabilities: <strong>machine translation</strong> and{" "}
              <strong>automatic speech recognition</strong>.
            </p>
            <p>
              The release supports 18 languages spanning West, Central, East,
              Horn and Southern Africa, with a potential linguistic reach of
              more than <strong>420 million speakers</strong>.
            </p>
            <p>
              For machine translation, every supported African language is
              available in both directions with French, producing{" "}
              <strong>36 translation directions</strong>.
            </p>
            <p>
              Griot is designed as an open release ecosystem: model weights,
              LoRA adapters, inference code, evaluation scripts, benchmark
              configuration and model cards are versioned together.
            </p>
          </div>

          <div className="contribution-strip">
            <div><strong>18</strong><span>Languages</span></div>
            <div><strong>36</strong><span>Translation directions</span></div>
            <div><strong>420M+</strong><span>Potential speakers reached</span></div>
            <div><strong>MT + ASR</strong><span>First open release</span></div>
            <div><strong>Open</strong><span>Weights + evaluation</span></div>
          </div>
        </div>
      </section>

      <section className="coverage-section">
        <div className="coverage-copy">
          <p className="section-kicker light">Continental coverage</p>
          <h2>Built for languages spoken across more than 25 African countries.</h2>
          <p>
            Griot&apos;s language coverage connects major linguistic communities
            from the Gulf of Guinea to the Sahel, Central Africa, the Horn of
            Africa and Southern Africa.
          </p>
          <p className="coverage-disclaimer">
            Country references indicate representative speech communities and
            are not intended as an exhaustive map of every country in which a
            language is spoken.
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
          <p className="section-kicker light">Model family</p>
          <h2>Translate text.<br />Recognize speech.<br />Keep African languages central.</h2>
          <p>
            Griot is a model family rather than a single checkpoint. Each
            language is packaged as a dedicated LoRA adapter over a shared
            multilingual backbone, with a common evaluation and documentation standard.
          </p>
        </div>

        <div className="model-papers">
          <article>
            <span>01 · Machine Translation</span>
            <h3>Griot-MT</h3>
            <p>
              Bidirectional French translation across 18 African languages using
              a shared multilingual base and language-specific LoRA adapters.
            </p>
            <ul>
              <li>18 African languages</li>
              <li>36 directions</li>
              <li>LoRA adapter per language</li>
              <li>BLEU + chrF++</li>
              <li>Reproducible evaluation</li>
            </ul>
            <a href="https://github.com/bivariant/Griot/tree/main/models/machine-translation" target="_blank" rel="noreferrer">
              Open Griot-MT repository ↗
            </a>
          </article>

          <article>
            <span>02 · Automatic Speech Recognition</span>
            <h3>Griot-ASR</h3>
            <p>
              Multilingual speech recognition for African speech using a shared
              base and language-specific LoRA adapters, evaluated independently
              for every supported language.
            </p>
            <ul>
              <li>18 African languages</li>
              <li>LoRA adapter per language</li>
              <li>WER + CER</li>
              <li>Language-level reporting</li>
              <li>Open decoding pipeline</li>
            </ul>
            <a href="https://github.com/bivariant/Griot/tree/main/models/asr" target="_blank" rel="noreferrer">
              Open Griot-ASR repository ↗
            </a>
          </article>
        </div>
      </section>

      <section className="comparison-figure" id="benchmarks">
        <div className="figure-heading">
          <span>Benchmark suite</span>
          <strong>Griot against leading open and commercial multilingual systems.</strong>
        </div>

        <div className="benchmark-warning">
          <strong>DESIGN PREVIEW — SYNTHETIC RESULTS</strong>
          <p>
            The numerical values displayed below are fictitious and exist only
            to design the release page. Replace them with reproducible
            evaluation results before publication.
          </p>
        </div>

        <article className="benchmark-table-card">
          <header>
            <div>
              <span>Machine Translation</span>
              <h2>Macro-average benchmark</h2>
            </div>
            <small>BLEU <MetricArrow direction="up" /> · chrF++ <MetricArrow direction="up" /></small>
          </header>

          <div className="benchmark-table-wrapper">
            <table className="benchmark-table">
              <thead>
                <tr>
                  <th>Model</th><th>Access</th><th>BLEU ↑</th><th>chrF++ ↑</th>
                </tr>
              </thead>
              <tbody>
                {mtBenchmark.map((row) => (
                  <tr key={row.model} className={row.highlight ? "benchmark-winner" : undefined}>
                    <td><strong>{row.model}</strong>{row.note && <small>{row.note}</small>}</td>
                    <td><span className={row.access === "Open" ? "access-badge open" : "access-badge api"}>{row.access}</span></td>
                    <td><strong>{row.bleu.toFixed(1)}</strong></td>
                    <td><strong>{row.chrf.toFixed(1)}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="benchmark-caption">
            Final publication should include per-language, per-direction and
            per-dataset results, not only a macro-average.
          </p>
        </article>

        <article className="benchmark-table-card">
          <header>
            <div>
              <span>Automatic Speech Recognition</span>
              <h2>Macro-average benchmark</h2>
            </div>
            <small>WER <MetricArrow direction="down" /> · CER <MetricArrow direction="down" /></small>
          </header>

          <div className="benchmark-table-wrapper">
            <table className="benchmark-table">
              <thead>
                <tr>
                  <th>Model</th><th>Access</th><th>WER ↓</th><th>CER ↓</th>
                </tr>
              </thead>
              <tbody>
                {asrBenchmark.map((row) => (
                  <tr key={row.model} className={row.highlight ? "benchmark-winner" : undefined}>
                    <td><strong>{row.model}</strong>{row.note && <small>{row.note}</small>}</td>
                    <td><span className={row.access === "Open" ? "access-badge open" : "access-badge api"}>{row.access}</span></td>
                    <td><strong>{row.wer.toFixed(1)}</strong></td>
                    <td><strong>{row.cer.toFixed(1)}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="benchmark-caption">
            Final results should document normalization, punctuation handling,
            decoding settings and evaluation-set version.
          </p>
        </article>
      </section>

      <section className="content-section baseline-section">
        <div className="section-number">02</div>
        <div className="section-body">
          <p className="section-kicker">Baselines</p>
          <h2>Benchmark against systems people actually use.</h2>
          <p className="section-lead">
            Compare against both open-weight research models and commercial
            systems available to African users.
          </p>

          <div className="baseline-grid">
            <article>
              <span>Machine Translation</span>
              <h3>Recommended baselines</h3>
              <ul>{mtBaselines.map((baseline) => <li key={baseline}>{baseline}</li>)}</ul>
            </article>

            <article>
              <span>Automatic Speech Recognition</span>
              <h3>Recommended baselines</h3>
              <ul>{asrBaselines.map((baseline) => <li key={baseline}>{baseline}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="benchmark-data-section" id="evaluation">
        <div className="benchmark-data-header">
          <p className="section-kicker light">Public evaluation data</p>
          <h2>Benchmark on datasets the research community can inspect.</h2>
          <p>
            Whenever a public benchmark exists for a target language, Griot
            should report results directly on it. Languages without sufficient
            public benchmark coverage should receive a separately released,
            contamination-controlled evaluation set.
          </p>
        </div>

        <div className="benchmark-dataset-grid">
          {publicBenchmarks.map((dataset) => (
            <article key={dataset.name}>
              <span>{dataset.task}</span>
              <h3>{dataset.name}</h3>
              <p>{dataset.description}</p>
              <small>{dataset.metrics}</small>
              <a href={dataset.href} target="_blank" rel="noreferrer">Open public dataset ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section method-section">
        <div className="section-number">03</div>
        <div className="section-body">
          <p className="section-kicker">Evaluation protocol</p>
          <h2>Numbers are useful only when they are reproducible.</h2>

          <div className="pipeline">
            <article><span>01</span><h3>Freeze</h3><p>Freeze the exact benchmark version before model evaluation.</p></article>
            <div>→</div>
            <article><span>02</span><h3>Normalize</h3><p>Apply documented normalization consistently across all systems.</p></article>
            <div>→</div>
            <article><span>03</span><h3>Evaluate</h3><p>Run every model on the exact same examples and translation directions.</p></article>
            <div>→</div>
            <article><span>04</span><h3>Report</h3><p>Publish per-language scores, macro averages and benchmark signatures.</p></article>
            <div>→</div>
            <article><span>05</span><h3>Release</h3><p>Release scripts and predictions whenever licenses permit.</p></article>
          </div>

          <div className="method-notes">
            <article><span>MT metrics</span><strong>BLEU · chrF++</strong><p>Compute with SacreBLEU and publish the signature and tokenizer.</p></article>
            <article><span>ASR metrics</span><strong>WER · CER</strong><p>Report word- and character-level errors with exact normalization rules.</p></article>
            <article><span>Contamination</span><strong>No train/test overlap</strong><p>Deduplicate training, validation and evaluation material before training.</p></article>
            <article><span>Reporting</span><strong>Per language</strong><p>Do not hide weak languages behind one multilingual macro score.</p></article>
            <article><span>Directions</span><strong>Evaluate both directions</strong><p>French → African language and African language → French are reported independently.</p></article>
            <article><span>Commercial APIs</span><strong>Record evaluation date</strong><p>Document provider, model/API version, prompt, settings and evaluation date.</p></article>
          </div>
        </div>
      </section>

      <section className="technical-section">
        <div className="technical-intro">
          <p className="section-kicker">Technical release</p>
          <h2>A model release should be more than a checkpoint.</h2>
          <p>
            Every Griot release should contain enough information for another
            researcher to reproduce inference and evaluation without reverse
            engineering the repository.
          </p>
        </div>

        <div className="technical-grid">
          <article><span>01</span><h3>Model weights</h3><p>Versioned base checkpoints and LoRA adapters.</p></article>
          <article><span>02</span><h3>Model cards</h3><p>Architecture, languages, use cases, limits and training summary.</p></article>
          <article><span>03</span><h3>Inference</h3><p>Minimal examples for translation and transcription.</p></article>
          <article><span>04</span><h3>Evaluation</h3><p>Scripts for BLEU, chrF++, WER and CER.</p></article>
          <article><span>05</span><h3>Predictions</h3><p>Benchmark predictions where licenses allow redistribution.</p></article>
          <article><span>06</span><h3>Training details</h3><p>Optimizer, schedule, precision, steps and hardware.</p></article>
          <article><span>07</span><h3>Data statement</h3><p>Provenance, filtering, language distribution and permitted usage.</p></article>
          <article><span>08</span><h3>Limitations</h3><p>Dialect, accent, domain and code-switching limitations.</p></article>
        </div>
      </section>

      <section className="language-section" id="languages">
        <div className="language-intro">
          <p className="section-kicker">Language coverage</p>
          <h2>18 African languages.<br />Every language is a first-class benchmark target.</h2>
          <p>
            Griot reports quality independently for each language instead of
            hiding performance behind a single multilingual average.
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

      <section className="content-section">
        <div className="section-number">04</div>
        <div className="section-body">
          <p className="section-kicker">Release principles</p>
          <h2>Open models. Transparent evaluation. African language coverage.</h2>

          <div className="principles-grid">
            <article><strong>Open weights</strong><p>Enable researchers, startups and institutions to build directly on the models.</p></article>
            <article><strong>Reproducible benchmarks</strong><p>Connect every major reported number to a public evaluation procedure.</p></article>
            <article><strong>Language-level transparency</strong><p>Publish strengths and weaknesses independently for each language.</p></article>
            <article><strong>Practical deployment</strong><p>Optimize releases for developers building real African language products.</p></article>
          </div>
        </div>
      </section>

      <section className="citation-section" id="citation">
        <div>
          <p className="section-kicker">Citation</p>
          <h2>Build with Griot.<br />Cite the work.</h2>
          <p>
            A versioned technical report should accompany every major release.
            Until publication, use the following project citation.
          </p>
        </div>

        <pre><code>{`@misc{griot2026,
  title  = {Griot: Open Multilingual Intelligence
            for African Languages},
  author = {Alapini, Luc and Adjovi, Arnauld and
            Dassi, Dave and Hounton, Johaness and
            Tito, Lucien},
  year   = {2026},
  url    = {https://bivariant.github.io/Griot/},
  note   = {Bivariant open-source African
            language model initiative}
}`}</code></pre>
      </section>

      <section className="bivariant-section">
        <p>Research and engineering by</p>
        <h2>Bivariant</h2>
        <span>Building foundational language technology for Africa&apos;s linguistic diversity.</span>
        <div>
          <a href="https://www.bivariant.com/" target="_blank" rel="noreferrer">Visit Bivariant ↗</a>
          <a href="https://github.com/bivariant" target="_blank" rel="noreferrer">GitHub organization ↗</a>
        </div>
      </section>

      <footer>
        <img src="./images/griot-logo.png" alt="Griot" />
        <p>Open multilingual intelligence for African languages.</p>
        <div>
          <a href="#top">Back to top ↑</a>
          <a href="https://github.com/bivariant/Griot">GitHub</a>
          <a href="https://github.com/bivariant/Griot/tree/main/models/machine-translation">Griot-MT</a>
          <a href="https://github.com/bivariant/Griot/tree/main/models/asr">Griot-ASR</a>
        </div>
        <small>© {new Date().getFullYear()} Bivariant · Griot is an open-source African language model initiative.</small>
      </footer>
    </main>
  );
}
