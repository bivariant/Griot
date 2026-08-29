/* eslint-disable @next/next/no-img-element */

const languages = [
  ["bba", "Baatonou"], ["bci", "Baoulé"], ["dyu", "Dioula"], ["ewe", "Ewé"],
  ["ewo", "Ewondo"], ["fon", "Fon"], ["fub", "Fulfulde"], ["hau", "Hausa"],
  ["lin", "Lingala"], ["lug", "Luganda"], ["mos", "Mooré"], ["mwm", "Sar"],
  ["orm", "Oromo"], ["sag", "Sango"], ["sna", "Shona"], ["som", "Somali"],
  ["swh", "Swahili"], ["wol", "Wolof"],
];

const mtBenchmark = [
  { label: "Fon ↔ FR", values: [12.4, 15.1, 22.8] },
  { label: "Lingala ↔ FR", values: [18.2, 21.7, 27.6] },
  { label: "Wolof ↔ FR", values: [16.8, 19.5, 25.4] },
];

const asrBenchmark = [
  { label: "Fon", values: [28.2, 24.8, 18.6] },
  { label: "Lingala", values: [24.7, 20.1, 15.9] },
  { label: "Wolof", values: [27.4, 22.6, 17.2] },
];

const ResourceButton = ({ href, icon, children }: { href: string; icon: string; children: React.ReactNode }) => (
  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
    <span aria-hidden="true">{icon}</span>{children}
  </a>
);

export default function Home() {
  return (
    <main id="top">
      <nav className="paper-nav" aria-label="Project navigation">
        <a className="nav-wordmark" href="#top">GRIOT</a>
        <div><a href="#abstract">Abstract</a><a href="#benchmarks">Benchmarks</a><a href="#method">Method</a><a href="#languages">Languages</a><a href="#citation">Citation</a></div>
      </nav>

      <section className="paper-hero">
        <img className="paper-logo" src="./images/griot-logo.png" alt="Griot" />
        <h1><span>Griot:</span> Open Multilingual Intelligence<br />for African Languages</h1>
        <p className="paper-subtitle">A community-oriented family of machine translation and speech recognition models for 18 African languages.</p>
        <div className="contributors" aria-label="Project contributors">
          <span>Luc Alapini<sup>1</sup></span><span>·</span>
          <span>Arnauld Adjovi<sup>1</sup></span><span>·</span>
          <span>Dave Dassi<sup>1</sup></span><span>·</span>
          <span>Johaness Hounton<sup>1</sup></span><span>·</span>
          <span>Lucien TITO<sup>1</sup></span>
        </div>
        <p className="affiliation"><sup>1</sup>Bivariant · Cotonou, Benin</p>
        <p className="release-line">Community Open-Source Release · 2026</p>
        <div className="paper-actions" aria-label="Project resources">
          <ResourceButton href="#citation" icon="▤">Paper</ResourceButton>
          <ResourceButton href="https://github.com/bivariant/Griot" icon="◉">Code</ResourceButton>
          <ResourceButton href="#citation" icon="╳">arXiv</ResourceButton>
          <ResourceButton href="https://huggingface.co/bivariant/griot-mt" icon="🤗">Models</ResourceButton>
        </div>
        <div className="hero-rule" /><p className="hero-note">Translation · Speech recognition · Reproducible evaluation · Community participation</p>
      </section>

      <section className="comparison-figure" id="benchmarks" aria-labelledby="benchmark-title">
        <div className="figure-heading"><span>Benchmark preview</span><strong id="benchmark-title">Griot against widely used multilingual baselines.</strong></div>
        <div className="comparison-panels">
          <article className="comparison-panel">
            <header><div><span>Machine translation</span><h2>BLEU ↑</h2></div><small>Higher is better</small></header>
            <div className="chart-legend"><span><i className="nllb" />NLLB-200</span><span><i className="google" />Google Translate</span><span><i className="griot" />Griot-MT</span></div>
            <div className="grouped-chart">
              <span className="axis-label">BLEU</span>
              {mtBenchmark.map((group) => <div className="chart-group" key={group.label}><div className="bar-cluster">{group.values.map((value,index) => <i className={`chart-bar bar-${index}`} style={{height:`${value*2.8}%`}} key={index}><b>{value}</b></i>)}</div><strong>{group.label}</strong></div>)}
            </div>
            <p className="panel-caption">French ↔ African language translation</p>
          </article>
          <article className="comparison-panel">
            <header><div><span>Automatic speech recognition</span><h2>WER ↓</h2></div><small>Lower is better</small></header>
            <div className="chart-legend"><span><i className="nllb" />Whisper large-v3</span><span><i className="google" />Google Speech-to-Text</span><span><i className="griot" />Griot-ASR</span></div>
            <div className="grouped-chart">
              <span className="axis-label">WER</span>
              {asrBenchmark.map((group) => <div className="chart-group" key={group.label}><div className="bar-cluster">{group.values.map((value,index) => <i className={`chart-bar bar-${index}`} style={{height:`${value*2.8}%`}} key={index}><b>{value}</b></i>)}</div><strong>{group.label}</strong></div>)}
            </div>
            <p className="panel-caption">African language speech transcription</p>
          </article>
        </div>
        <p className="figure-caption"><b>Figure 1.</b> Planned comparative reporting for Griot-MT and Griot-ASR. Values are simulated exclusively to validate the presentation and are not published model results.</p>
      </section>

      <section className="content-section" id="abstract">
        <div className="section-number">01</div><div className="section-body">
          <p className="section-kicker">Abstract</p><h2>Language technology should work where people already speak.</h2>
          <div className="abstract-grid"><p>Griot is Bivariant&apos;s open multilingual research initiative for African languages. It brings machine translation and automatic speech recognition into one coherent ecosystem: shared language coverage, reproducible data protocols, language-level evaluation and practical model releases.</p><p>The first release targets 18 languages spanning West, Central, East and Southern Africa. Griot-MT supports bidirectional translation with French; Griot-ASR extends the same language-first philosophy to speech. The project is designed for researchers, builders and communities who need transparent systems they can inspect, adapt and improve.</p></div>
          <div className="contribution-strip"><div><strong>18</strong><span>African languages</span></div><div><strong>530k+</strong><span>Validated MT pairs</span></div><div><strong>2-way</strong><span>Translation evaluation</span></div><div><strong>MT + ASR</strong><span>Open model families</span></div></div>
        </div>
      </section>

      <section className="content-section method-section" id="method">
        <div className="section-number">02</div><div className="section-body"><p className="section-kicker">Method</p><h2>A release pipeline built around data confidence.</h2>
          <div className="pipeline"><article><span>01</span><h3>Collect</h3><p>Gather language resources with source provenance and consistent identifiers.</p></article><div>→</div><article><span>02</span><h3>Align</h3><p>Create sentence and utterance pairs while preserving linguistic correspondence.</p></article><div>→</div><article><span>03</span><h3>Audit</h3><p>Reject incomplete, anomalous and overlapping examples before splitting.</p></article><div>→</div><article><span>04</span><h3>Adapt</h3><p>Train efficient language-specific adapters on the multilingual foundation.</p></article><div>→</div><article><span>05</span><h3>Evaluate</h3><p>Report translation direction and speech condition independently.</p></article></div>
          <div className="method-notes"><article><span>Data integrity</span><strong>Zero split overlap</strong><p>Train, validation and test boundaries are checked before training begins.</p></article><article><span>Efficient adaptation</span><strong>One LoRA per language</strong><p>A shared base model with modular adapters keeps releases compact and composable.</p></article><article><span>Transparent metrics</span><strong>BLEU · chrF++ · WER · CER</strong><p>Metrics are published with direction, test conditions and limitations.</p></article></div>
        </div>
      </section>

      <section className="models-section"><div className="models-copy"><p className="section-kicker light">Model family</p><h2>Translate text.<br />Recognize speech.<br />Keep language central.</h2><p>Griot is one research program, not one checkpoint. Each model family shares the same public language map and evaluation discipline.</p></div><div className="model-papers"><article><span>01 · Machine Translation</span><h3>Griot-MT</h3><p>Bidirectional French translation through a shared multilingual base and compact, language-specific LoRA adapters.</p><a href="https://huggingface.co/bivariant/griot-mt" target="_blank" rel="noreferrer">Open model repository ↗</a></article><article><span>02 · Automatic Speech Recognition</span><h3>Griot-ASR</h3><p>Language-aware speech recognition for African voices, evaluated per language with WER and CER reporting.</p><a href="#languages">Explore the shared coverage ↓</a></article></div></section>

      <section className="language-section" id="languages"><div className="language-intro"><p className="section-kicker">Language coverage</p><h2>18 languages across the continent.</h2><p>Each language is treated as a first-class evaluation target, with its own adapter, reporting line and community feedback path.</p></div><div className="language-grid">{languages.map(([code,name],index) => <div key={code}><small>{String(index+1).padStart(2,"0")}</small><strong>{name}</strong><code>{code}</code></div>)}</div></section>

      <section className="media-section"><div className="media-copy"><p className="section-kicker light">Griot in context</p><h2>African language AI is already changing access to information.</h2><p>See how AI-powered subtitles in Lingala and Kiswahili are making television more accessible—and why open African language systems matter.</p><a href="https://youtu.be/2X-yx50xLF8" target="_blank" rel="noreferrer">Watch the TV5MONDE feature ↗</a></div><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/2X-yx50xLF8?rel=0" title="TV5MONDE: AI subtitles in Lingala and Kiswahili" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></section>

      <section className="citation-section" id="citation"><div><p className="section-kicker">Citation</p><h2>Build with Griot.<br />Credit the community.</h2><p>A formal technical report and versioned citation will accompany the model release. Use this project citation for the public initiative.</p></div><pre><code>{`@misc{griot2026,
  title  = {Griot: Open Multilingual Intelligence
            for African Languages},
  author = {Alapini, Luc and Adjovi, Arnauld and
            Dassi, Dave and Hounton, Johaness and
            Tito, Lucien},
  year   = {2026},
  url    = {https://bivariant.github.io/Griot/},
  note   = {Bivariant community open-source initiative}
}`}</code></pre></section>

      <section className="bivariant-section"><p>Research and engineering by</p><h2>Bivariant</h2><span>An African AI company building practical language technology for the continent&apos;s linguistic diversity.</span><div><a href="https://www.bivariant.com/" target="_blank" rel="noreferrer">Visit Bivariant ↗</a><a href="https://github.com/bivariant" target="_blank" rel="noreferrer">GitHub organization ↗</a></div></section>
      <footer><img src="./images/griot-logo.png" alt="Griot" /><p>Open multilingual intelligence for African languages.</p><div><a href="#top">Back to top ↑</a><a href="https://github.com/bivariant/Griot">GitHub</a><a href="https://huggingface.co/bivariant/griot-mt">Hugging Face</a></div><small>© {new Date().getFullYear()} Bivariant · Griot is a community open-source initiative.</small></footer>
    </main>
  );
}
