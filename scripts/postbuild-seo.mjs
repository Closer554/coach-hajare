import { existsSync } from "node:fs";
import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const distDir = resolve("dist");
const indexPath = resolve(distDir, "index.html");
const serverDir = resolve(distDir, "server");
const serverEntry = resolve(serverDir, "entry-server.js");

if (!existsSync(indexPath) || !existsSync(serverEntry)) {
  throw new Error("Missing Vite client or SSR build output.");
}

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();
const html = await readFile(indexPath, "utf8");

await writeFile(indexPath, html.replace("<!--app-html-->", appHtml), "utf8");
await rm(serverDir, { recursive: true, force: true });
