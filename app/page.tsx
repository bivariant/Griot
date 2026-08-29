/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Griot — Open Language Intelligence for Africa",
  description:
    "Open multilingual technologies for translation and speech recognition across 18 African languages, built by Bivariant.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const languages = [
  ["bba", "Baatonou"], ["bci", "Baoulé"], ["dyu", "Dioula"],
  ["ewe", "Ewé"], ["ewo", "Ewondo"], ["fon", "Fon"],
  ["fub", "Fulfulde"], ["hau", "Hausa"], ["lin", "Lingala"],
  ["lug", "Luganda"], ["mos", "Mooré"], ["mwm", "Sar"],
  ["orm", "Oromo"], ["sag", "Sango"], ["sna", "Shona"],
  ["som", "Somali"], ["swh", "Swahili"], ["wol", "Wolof"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Griot home">
          <img src="./images/griot-logo.png" alt="Griot" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#models">Models</a>
          <a href="#languages">Languages</a>
          <a href="#research">Research</a>
          <a href="#roadmap">Roadmap</a>
        </nav>
        <a
          className="header-cta"
          href="https://github.com/bivariant/Griot"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> An open-source initiative by Bivariant</p>
          <h1>Open language intelligence for Africa.</h1>
          <p className="hero-lead">
            Translation and speech recognition built for 18 African languages —
            engineered with rigor, released with communities.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#models">
              Explore Griot <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-ghost"
              href="https://youtu.be/2X-yx50xLF8"
              target="_blank"
              rel="noreferrer"
            >
              Watch the story <Arrow />
            </a>
          </div>
        </div>

        <div className="hero-signal" aria-hidden="true">
          <div className="signal-mark">
            <span className="signal-dot signal-dot-a" />
            <span className="signal-dot signal-dot-b" />
            <span className="signal-dot signal-dot-c" />
            <span className="signal-line signal-line-a" />
            <span className="signal-line signal-line-b" />
            <span className="signal-line signal-line-c" />
            <span className="signal-core">G</span>
          </div>
        </div>

        <div className="hero-stats" aria-label="Griot at a glance">
          <div><strong>18</strong><span>African languages</span></div>
          <div><strong>2</strong><span>Open model families</span></div>
          <div><strong>1M+</strong><span>Bidirectional MT examples</span></div>
          <div><strong>∞</strong><span>Community possibilities</span></div>
        </div>
      </section>

      <section className="model-intro" id="models">
        <div className="section-heading">
          <p className="eyebrow eyebrow-dark"><span /> The Griot model family</p>
          <h2>One vision. Multiple ways to understand and be understood.</h2>
        </div>
        <div className="model-grid">
          <article className="model-card model-card-dark">
            <div className="card-top"><span>01</span><span className="status">Pilot training</span></div>
            <div>
              <p className="card-kicker">Machine translation</p>
              <h3>Griot-MT</h3>
              <p>Bidirectional translation between French and 18 African languages through a shared multilingual foundation.</p>
            </div>
            <a href="https://huggingface.co/bivariant/griot-mt" target="_blank" rel="noreferrer">
              Explore the MT model <Arrow />
            </a>
          </article>
          <article className="model-card model-card-light">
            <div className="card-top"><span>02</span><span className="status status-outline">In development</span></div>
            <div>
              <p className="card-kicker">Automatic speech recognition</p>
              <h3>Griot-ASR</h3>
              <p>Speech recognition designed to make African voices searchable, accessible and usable in digital products.</p>
            </div>
            <span className="coming-link">Release information coming soon</span>
          </article>
        </div>
      </section>

      <section className="story-section" id="research">
        <div className="story-copy">
          <p className="eyebrow"><span /> Why this matters</p>
          <h2>Language access is becoming infrastructure.</h2>
          <p>
            AI-powered subtitles in Lingala and Kiswahili are already expanding
            access to television. Griot is built for the next chapter: open,
            auditable language technology across the continent.
          </p>
          <a
            className="text-link"
            href="https://youtu.be/2X-yx50xLF8"
            target="_blank"
            rel="noreferrer"
          >
            Watch the TV5MONDE story <Arrow />
          </a>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/2X-yx50xLF8?rel=0"
            title="TV5MONDE: AI subtitles in Lingala and Kiswahili"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="video-caption">
            <span>TV5MONDE Info</span>
            <span>08:07</span>
          </div>
        </div>
      </section>

      <section className="languages-section" id="languages">
        <div className="section-heading languages-heading">
          <p className="eyebrow eyebrow-dark"><span /> Language coverage</p>
          <div>
            <h2>18 languages. One growing open ecosystem.</h2>
            <p>
              Griot-MT and Griot-ASR share a common commitment: build language
              technology that can evolve with speakers, researchers and developers.
            </p>
          </div>
        </div>
        <div className="language-table" role="table" aria-label="Griot language coverage">
          <div className="language-row language-header" role="row">
            <span role="columnheader">Language</span>
            <span role="columnheader">MT</span>
            <span role="columnheader">ASR</span>
            <span role="columnheader">TTS</span>
          </div>
          {languages.map(([code, name], index) => (
            <div className="language-row" role="row" key={code}>
              <span className="language-name" role="cell">
                <small>{String(index + 1).padStart(2, "0")}</small>
                <strong>{name}</strong>
                <code>{code}</code>
              </span>
              <span role="cell" className={code === "bba" ? "state state-active" : "state"}>
                {code === "bba" ? "Pilot" : "Planned"}
              </span>
              <span role="cell" className="state state-progress">In development</span>
              <span role="cell" className="state state-future">Roadmap</span>
            </div>
          ))}
        </div>
      </section>

      <section className="quality-section">
        <div className="quality-lead">
          <p className="eyebrow"><span /> Built with evidence</p>
          <h2>Open models deserve measurable foundations.</h2>
          <p>
            Griot releases are documented with versioned evaluations, language-level
            reporting and explicit limitations. Progress is published when it is ready,
            not before.
          </p>
        </div>
        <div className="quality-grid">
          <article><strong>530,057</strong><span>validated MT pairs</span><p>Audited and separated into reproducible train, validation and test sets.</p></article>
          <article><strong>0</strong><span>split overlap</span><p>Evaluation boundaries are protected throughout model development.</p></article>
          <article><strong>2-way</strong><span>MT evaluation</span><p>BLEU and chrF++ are reported independently in both translation directions.</p></article>
          <article><strong>WER + CER</strong><span>ASR evaluation</span><p>Speech recognition reporting will be released per language and test condition.</p></article>
        </div>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="roadmap-title">
          <p className="eyebrow eyebrow-dark"><span /> What comes next</p>
          <h2>Griot is bigger than one model.</h2>
        </div>
        <div className="roadmap-list">
          <article className="roadmap-current">
            <span>Now</span><h3>Translate</h3><p>Release Griot-MT adapters progressively across 18 languages.</p>
          </article>
          <article className="roadmap-current">
            <span>Now</span><h3>Recognize</h3><p>Open Griot-ASR models and language-level speech benchmarks.</p>
          </article>
          <article>
            <span>Future</span><h3>Speak</h3><p>Extend the ecosystem toward responsible text-to-speech technology.</p>
          </article>
        </div>
      </section>

      <section className="bivariant-section" id="about">
        <p className="bivariant-label">Built and maintained by</p>
        <h2>Bivariant</h2>
        <p>
          An African AI company building practical language technologies for the
          continent&apos;s linguistic diversity. Griot brings that work into the open —
          with engineering rigor and community participation.
        </p>
        <div className="bivariant-actions">
          <a className="button button-primary" href="https://www.bivariant.com/" target="_blank" rel="noreferrer">Discover Bivariant <Arrow /></a>
          <a className="button button-ghost" href="https://github.com/bivariant" target="_blank" rel="noreferrer">Bivariant on GitHub <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top"><img src="./images/griot-logo.png" alt="Griot" /></a>
        <p>Open language intelligence for Africa.</p>
        <div>
          <a href="https://github.com/bivariant/Griot" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://huggingface.co/bivariant/griot-mt" target="_blank" rel="noreferrer">Hugging Face</a>
          <a href="https://www.bivariant.com/" target="_blank" rel="noreferrer">Bivariant</a>
        </div>
        <small>© {new Date().getFullYear()} Bivariant. Griot is an open-source initiative.</small>
      </footer>
    </main>
  );
}
