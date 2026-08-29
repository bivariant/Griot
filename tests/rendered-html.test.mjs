import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports a branded static GitHub Pages site", async () => {
  const html = await readFile(new URL("site/index.html", root), "utf8");
  assert.match(html, /Griot — Open Multilingual Intelligence for African Languages/);
  assert.match(html, /Open Multilingual Intelligence/);
  assert.match(html, /Griot-MT/);
  assert.match(html, /Griot-ASR/);
  assert.match(html, /Griot against widely used multilingual baselines/);
  assert.match(html, /Google Translate/);
  assert.match(html, /NLLB-200/);
  assert.match(html, /Google Speech-to-Text/);
  assert.match(html, /Luc Alapini/);
  assert.match(html, /Lucien TITO/);
  assert.match(html, /2X-yx50xLF8/);
  assert.match(html, /Bivariant/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
  assert.doesNotMatch(html, /<script\b/i);
});

test("keeps GitHub Pages asset paths under the Griot base", async () => {
  const html = await readFile(new URL("site/index.html", root), "utf8");
  assert.match(html, /href="\/Griot\/_next\/static\/css\//);
  assert.match(html, /src="\.\/images\/griot-logo\.png"/);
  assert.match(html, /https:\/\/bivariant\.github\.io\/Griot\//);
});
