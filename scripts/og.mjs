import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const edge = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
].find(existsSync);
const html = pathToFileURL(resolve("scripts/og.html")).href;
const pages = JSON.parse(readFileSync("scripts/og-pages.json", "utf8"));
mkdirSync("public/og", { recursive: true });

function shoot(out, size, params) {
  const url = `${html}?${new URLSearchParams(params)}`;
  execFileSync(edge, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--window-size=${size}`,
    "--virtual-time-budget=4000",
    `--screenshot=${resolve(out)}`,
    url,
  ]);
  console.log(out);
}

for (const p of pages) {
  const { slug, ...params } = p;
  shoot(`public/og/${slug}.png`, "1200,630", params);
}
shoot("public/icon.png", "512,512", { icon: "512" });
shoot("public/apple-icon.png", "180,180", { icon: "180" });
shoot("public/favicon-32.png", "32,32", { icon: "32" });
