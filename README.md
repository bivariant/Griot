# Griot

Official project site for **Griot**, Bivariant's open language intelligence
initiative for African languages.

The site presents:

- **Griot-MT** — bidirectional machine translation;
- **Griot-ASR** — automatic speech recognition;
- **Griot-TTS** — the future text-to-speech roadmap;
- coverage and release status across 18 African languages;
- public quality principles, results and community links.

Production URL: <https://bivariant.github.io/Griot/>

## Development

Node.js 22 or newer is required.

```bash
npm ci
npm run dev
```

## Verification

```bash
npm test
```

This builds the application, produces a static GitHub Pages export in `site/`
and validates the branded content and `/Griot/` asset paths.

## Deployment

Every push to `main` runs `.github/workflows/pages.yml`. The workflow builds the
static site and deploys it through GitHub Pages.

## Brand

The site follows Bivariant's official typography and palette:

- headings: BT Beau Sans;
- body and interface: Geist;
- primary navy: `#071c50`.

Brand assets are maintained by Bivariant and must not be reused as third-party
branding without permission.

## Links

- [Bivariant](https://www.bivariant.com/)
- [Griot-MT on Hugging Face](https://huggingface.co/bivariant/griot-mt)
- [Griot on GitHub](https://github.com/bivariant/Griot)
