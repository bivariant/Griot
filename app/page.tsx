/* eslint-disable @next/next/no-img-element */

const languages = [
  ["bba", "Baatonou"], ["bci", "Baoulé"], ["dyu", "Dioula"], ["ewe", "Ewé"],
  ["ewo", "Ewondo"], ["fon", "Fon"], ["fub", "Fulfulde"], ["hau", "Hausa"],
  ["lin", "Lingala"], ["lug", "Luganda"], ["mos", "Mooré"], ["mwm", "Sar"],
  ["orm", "Oromo"], ["sag", "Sango"], ["sna", "Shona"], ["som", "Somali"],
  ["swh", "Swahili"], ["wol", "Wolof"],
];

const observedResults = [
  { label: "Baatonou → Français", baseline: 12, griot: 21.5, max: 25 },
  { label: "Français → Baatonou", baseline: 5, griot: 5.26, max: 25 },
];

const simulatedMt = [["Baatonou", 43.4], ["Fon", 39.8], ["Lingala", 44.1], ["Wolof", 41.2], ["Swahili", 47.6], ["Oromo", 40.7]];
const simulatedAsr = [["Baatonou", 18.9], ["Fon", 21.7], ["Lingala", 16.8], ["Wolof", 19.5], ["Swahili", 14.6], ["Oromo", 20.2]];

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
          <a href="https://www.bivariant.com/" target="_blank" rel="noreferrer">Lucien Tito<sup>1</sup></a><span>·</span>
          <a href="https://github.com/bivariant" target="_blank" rel="noreferrer">Griot Research &amp; Engineering Team<sup>1</sup></a>
        </div>
        <p className="affiliation"><sup>1</sup>Bivariant · Cotonou, Benin</p>
        <p className="release-line">Community Open-Source Release · 2026</p>
        <div className="paper-actions" aria-label="Project resources">
          <ResourceButton href="#abstract" icon="▤">Project brief</ResourceButton>
          <ResourceButton href="https://github.com/bivariant/Griot" icon="⌘">Code</ResourceButton>
          <ResourceButton href="https://huggingface.co/bivariant/griot-mt" icon="🤗">Models</ResourceButton>
          <ResourceButton href="#benchmarks" icon="▥">Results</ResourceButton>
          <ResourceButton href="https://youtu.be/2X-yx50xLF8" icon="▶">Video</ResourceButton>
        </div>
        <div className="hero-rule" /><p className="hero-note">Translation · Speech recognition · Reproducible evaluation · Community participation</p>
      </section>

      <section className="hero-figure" aria-labelledby="system-overview-title">
        <div className="figure-heading"><span>System overview</span><strong id="system-overview-title">One multilingual foundation. Two open model families.</strong></div>
        <div className="system-canvas">
          <div className="system-inputs"><div><span>Parallel text</span><small>French ↔ 18 languages</small></div><div><span>African speech</span><small>Audio + verified transcripts</small></div></div>
          <div className="system-arrow" aria-hidden="true">→</div>
          <div className="system-core"><span>GRIOT</span><small>Multilingual language intelligence</small></div>
          <div className="system-arrow" aria-hidden="true">→</div>
          <div className="system-outputs"><div><b>Griot-MT</b><small>Bidirectional translation</small></div><div><b>Griot-ASR</b><small>Speech transcription</small></div></div>
        </div>
        <p className="figure-caption"><b>Figure 1.</b> Griot connects curated African-language resources to reusable translation and speech models through a shared, auditable release framework.</p>
      </section>

      <section className="content-section" id="abstract">
        <div className="section-number">01</div><div className="section-body">
          <p className="section-kicker">Abstract</p><h2>Language technology should work where people already speak.</h2>
          <div className="abstract-grid"><p>Griot is Bivariant&apos;s open multilingual research initiative for African languages. It brings machine translation and automatic speech recognition into one coherent ecosystem: shared language coverage, reproducible data protocols, language-level evaluation and practical model releases.</p><p>The first release targets 18 languages spanning West, Central, East and Southern Africa. Griot-MT supports bidirectional translation with French; Griot-ASR extends the same language-first philosophy to speech. The project is designed for researchers, builders and communities who need transparent systems they can inspect, adapt and improve.</p></div>
          <div className="contribution-strip"><div><strong>18</strong><span>African languages</span></div><div><strong>530k+</strong><span>Validated MT pairs</span></div><div><strong>2-way</strong><span>Translation evaluation</span></div><div><strong>MT + ASR</strong><span>Open model families</span></div></div>
        </div>
      </section>

      <section className="benchmark-section" id="benchmarks">
        <div className="benchmark-head"><p className="section-kicker light">Benchmark preview</p><h2>Measured progress, shown in both directions.</h2><p>Observed pilot results are separated from visual simulations. Final release tables will remain versioned by model, language, direction and test set.</p></div>
        <article className="observed-card">
          <div className="result-title"><div><span>Observed pilot checkpoint</span><h3>Baatonou ↔ Français</h3></div><div className="metric-pill">BLEU · step 800</div></div>
          <div className="observed-chart">{observedResults.map((row) => <div className="observed-row" key={row.label}><strong>{row.label}</strong><div className="bar-group"><div className="bar-line"><span className="bar-label">Previous full fine-tune</span><i style={{ width:`${(row.baseline/row.max)*100}%` }} /><b>{row.baseline.toFixed(1)}</b></div><div className="bar-line current"><span className="bar-label">Griot LoRA pilot</span><i style={{ width:`${(row.griot/row.max)*100}%` }} /><b>{row.griot.toFixed(2)}</b></div></div></div>)}</div>
          <p className="result-note">Pilot checkpoint reported during training; not a final test-set claim. The Baatonou → French direction already exceeds the previous six-epoch baseline.</p>
        </article>
        <div className="simulation-label"><span>Visual simulation</span> The following cards demonstrate the intended final benchmark presentation. Non-Baatonou values are illustrative, not published results.</div>
        <div className="benchmark-grid">
          <article className="mini-benchmark"><header><div><span>Machine translation</span><h3>chrF++ ↑</h3></div><b>Higher is better</b></header><div className="mini-chart">{simulatedMt.map(([name,value]) => <div key={name as string}><span>{name}</span><i><em style={{width:`${Number(value)*1.65}%`}} /></i><b>{value}</b></div>)}</div></article>
          <article className="mini-benchmark"><header><div><span>Speech recognition</span><h3>WER ↓</h3></div><b>Lower is better</b></header><div className="mini-chart asr-chart">{simulatedAsr.map(([name,value]) => <div key={name as string}><span>{name}</span><i><em style={{width:`${Number(value)*3.2}%`}} /></i><b>{value}</b></div>)}</div></article>
        </div>
        <p className="figure-caption benchmark-caption"><b>Figure 2.</b> Proposed language-level benchmark format for the Griot model card. Scores will be accompanied by dataset versions, decoding settings and confidence notes.</p>
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
  author = {Tito, Lucien and
            Griot Research and Engineering Team},
  year   = {2026},
  url    = {https://bivariant.github.io/Griot/},
  note   = {Bivariant community open-source initiative}
}`}</code></pre></section>

      <section className="bivariant-section"><p>Research and engineering by</p><h2>Bivariant</h2><span>An African AI company building practical language technology for the continent&apos;s linguistic diversity.</span><div><a href="https://www.bivariant.com/" target="_blank" rel="noreferrer">Visit Bivariant ↗</a><a href="https://github.com/bivariant" target="_blank" rel="noreferrer">GitHub organization ↗</a></div></section>
      <footer><img src="./images/griot-logo.png" alt="Griot" /><p>Open multilingual intelligence for African languages.</p><div><a href="#top">Back to top ↑</a><a href="https://github.com/bivariant/Griot">GitHub</a><a href="https://huggingface.co/bivariant/griot-mt">Hugging Face</a></div><small>© {new Date().getFullYear()} Bivariant · Griot is a community open-source initiative.</small></footer>
    </main>
  );
}
