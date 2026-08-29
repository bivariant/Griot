import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";

const output = new URL("../site/", import.meta.url);
const client = new URL("../dist/client/", import.meta.url);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(client, output, { recursive: true });

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", String(Date.now()));
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://bivariant.github.io/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static render failed: ${response.status}`);

let html = await response.text();
html = html
  .replace(/<link[^>]+rel="modulepreload"[^>]*>/g, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
  .replaceAll('href="/_next/', 'href="/Griot/_next/')
  .replaceAll('src="/_next/', 'src="/Griot/_next/');

await writeFile(new URL("index.html", output), html);
await writeFile(new URL("404.html", output), html);
await writeFile(new URL(".nojekyll", output), "");

const cssDirectory = new URL("_next/static/css/", output);
for (const file of await readdir(cssDirectory)) {
  if (!file.endsWith(".css")) continue;
  const target = new URL(file, cssDirectory);
  const css = (await readFile(target, "utf8")).replaceAll("url(/_next/", "url(/Griot/_next/");
  await writeFile(target, css);
}

console.log("GitHub Pages export ready in site/");
