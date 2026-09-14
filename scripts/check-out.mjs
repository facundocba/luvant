import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = "out";
const problems = [];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });
}

function exists(href) {
  const path = href.split(/[?#]/)[0].replace(/\/$/, "");
  if (path === "" || path === "/") return true;
  return (
    existsSync(join(root, path)) ||
    existsSync(join(root, `${path}.html`)) ||
    existsSync(join(root, path, "index.html"))
  );
}

for (const file of walk(root)) {
  const html = readFileSync(file, "utf8");
  const page = relative(root, file);
  if (page === "404.html") continue;
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) problems.push(`${page}: ${h1} h1`);
  if (!/<title>[^<]+<\/title>/.test(html)) problems.push(`${page}: sin title`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) problems.push(`${page}: sin description`);
  if (!/<link rel="canonical" href="https:\/\/luvant\.com\.ar/.test(html)) problems.push(`${page}: sin canonical`);
  if (/hreflang=/.test(html)) problems.push(`${page}: hreflang`);
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    if (m[1].startsWith("/_next/") || m[1].startsWith("/api/")) continue;
    if (!exists(m[1])) problems.push(`${page}: enlace roto ${m[1]}`);
  }
  for (const m of html.matchAll(/(?:src|content)="(\/og\/[^"]+|\/icon\.png|\/apple-icon\.png|\/favicon-32\.png)"/g)) {
    if (!exists(m[1])) problems.push(`${page}: imagen faltante ${m[1]}`);
  }
  if (/digesto/i.test(html) && !page.startsWith("blog")) problems.push(`${page}: dice "digesto"`);
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("out/ ok");
