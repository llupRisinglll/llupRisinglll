import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import CleanCSS from "clean-css";
import { minify as minifyHtmlSource } from "html-minifier-terser";
import { minify as minifyJsSource } from "terser";

const root = process.cwd();
const outDir = join(root, "dist");
const routes = ["homepage", "experience", "affiliation", "blog", "skills", "contact"];

function normalizeBasePath(value) {
  if (!value || value === ".") return "/";
  return `/${value.replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/+/, "/");
}

function defaultBasePath() {
  if (process.env.SITE_BASE_PATH) return normalizeBasePath(process.env.SITE_BASE_PATH);
  const repo = process.env.GITHUB_REPOSITORY?.split("/").pop();
  const owner = process.env.GITHUB_REPOSITORY_OWNER;
  if (repo && owner && repo.toLowerCase() !== `${owner.toLowerCase()}.github.io`) {
    return normalizeBasePath(repo);
  }
  return "/";
}

const basePath = defaultBasePath();

function pagePath(route) {
  return route === "homepage" ? "index.html" : `${route}/index.html`;
}

async function pageHtml(route, template) {
  const path = route === "homepage" ? basePath : `${basePath}${route}/`;
  const html = template
    .replace('href="assets/styles.css"', `href="${basePath}assets/styles.css"`)
    .replace('src="assets/app.js"', `src="${basePath}assets/app.js"`)
    .replace("</head>", `<script>window.__SITE_BASE__="${basePath}";history.replaceState({}, "", "${path}")</script></head>`);

  return minifyHtmlSource(html, {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
  });
}

await rm(outDir, { recursive: true, force: true });
await mkdir(join(outDir, "assets"), { recursive: true });

const [template, css, js] = await Promise.all([
  readFile(join(root, "index.html"), "utf8"),
  readFile(join(root, "assets/styles.css"), "utf8"),
  readFile(join(root, "assets/app.js"), "utf8"),
]);

const minifiedCss = new CleanCSS({ level: 2 }).minify(css);
if (minifiedCss.errors.length) throw new Error(minifiedCss.errors.join("\n"));

const minifiedJs = await minifyJsSource(js, {
  compress: true,
  mangle: true,
  format: { comments: false },
});
if (!minifiedJs.code) throw new Error("Terser returned empty JavaScript output");

await writeFile(join(outDir, "assets/styles.css"), minifiedCss.styles);
await writeFile(join(outDir, "assets/app.js"), minifiedJs.code);
await writeFile(join(outDir, ".nojekyll"), "");

for (const route of routes) {
  const target = join(outDir, pagePath(route));
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, await pageHtml(route, template));
}

console.log(`Built ${routes.length} static pages into dist/ with base path ${basePath}`);
