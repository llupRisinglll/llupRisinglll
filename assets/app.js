"use strict";

const ROUTES = [
  { id: "homepage", label: "homepage.md" },
  { id: "experience", label: "experience/" },
  { id: "affiliation", label: "affiliation.md" },
  { id: "blog", label: "blog/" },
  { id: "skills", label: "skills.yaml" },
  { id: "contact", label: "contact.sh" },
];

const IDX = Object.fromEntries(ROUTES.map((route, index) => [route.id, String(index + 1).padStart(2, "0")]));

const HOME_STACK = [
  { name: "TypeScript", tone: "blue" },
  { name: "React", tone: "cyan" },
  { name: "Node.js", tone: "green" },
  { name: "Python", tone: "violet" },
  { name: "AWS", tone: "orange" },
  { name: "LLM Harness", tone: "rose" },
  { name: "Web Scraping / Data Mining", tone: "cyan" },
  { name: "Team Leadership", tone: "rose" },
];

const HOME_LINKS = [
  {
    title: "Nano Collective",
    type: "open-source affiliation",
    detail: "Contributor to open-source AI tooling and engineering workflows.",
    url: "https://nanocollective.org/contributors",
    label: "nanocollective.org",
  },
  {
    title: "Kahitsan",
    type: "technical director · coworking space",
    detail: "Naga City coworking space with flexible work areas, community, and digital-services expansion.",
    url: "https://kahitsan.com",
    label: "kahitsan.com",
  },
  {
    title: "Hilinga",
    type: "workspace saas",
    detail: "ERP-level workspace platform for individuals and businesses managing operations in one place.",
    url: "https://hilinga.com",
    label: "hilinga.com",
  },
];

const ACCOUNT_LINKS = [
  { label: "GitHub", url: "https://github.com/llupRisinglll" },
  { label: "LinkedIn", url: "https://linkedin.com/in/lluprisingll" },
  { label: "Medium", url: "https://medium.com/@llupRisingll" },
];

const EXPERIENCE = [
  {
    role: "Senior Software Engineer & Team Lead",
    company: "Parallel Distribution, Agents Team",
    location: "Remote",
    dates: "Mar 2026 - May 2026",
    note: "Independent Consultant",
    current: true,
    teaser: "Rebuilt a slow third-party data tool in-house, cutting processing time from minutes to under a second.",
    detail: "Owned sprint planning and the team's two-week cadence across 4 production repos, mentored a new engineer through onboarding, and rolled out an AI-assisted workflow (Claude + Linear GraphQL) for ticket lifecycle and retro synthesis that other engineers adopted too.",
    stack: ["Node.js", "Puppeteer", "JWT", "Linear GraphQL", "Claude API"],
  },
  {
    role: "Software Engineer, Senior",
    company: "Arch Global Services / Thimble Insurance",
    location: "New York / Manila / Remote",
    dates: "Feb 2025 - Feb 2026",
    current: false,
    teaser: "Closed a phishing loophole protecting 50,000+ policyholders, and cleaned up production data errors affecting real customer bills.",
    detail: "Built email tracking and archival across 4 microservices on AWS S3, authored MongoDB migration scripts that restored premium and coverage accuracy for edge cases, and led the IVANS carrier-connectivity integration from scoping to implementation.",
    stack: ["React", "Koa", "MongoDB", "AWS S3", "API Blueprint"],
  },
  {
    role: "(Cybersecurity Compliance) Developer",
    company: "Apptega",
    location: "Atlanta, GA / Remote",
    dates: "Apr 2023 - Jan 2025",
    current: false,
    teaser: "Built an AI assistant that cut compliance paperwork time by 60% for enterprise clients.",
    detail: "Also built a microservice connector framework on fine-tuned AWS Bedrock models for automated cloud security assessments, shipped a live-preview white-labeling system for 200+ customers, and cut new-developer onboarding from 2 days to 4 hours.",
    stack: ["OpenAI API", "AWS Bedrock", "Docker", "OpenAPI"],
  },
  {
    role: "Senior Developer (de facto Team Lead)",
    company: "FastJobs",
    location: "Singapore",
    dates: "Nov 2019 - Apr 2023",
    current: false,
    teaser: "Led a 5-person team building a job marketplace used by 100,000+ people daily across Southeast Asia.",
    detail: "Partnered with the Delivery Manager on hiring, resolved 200+ critical production issues at under 2 hours average resolution, and introduced weekly technical-refinement sessions that cut sprint scope changes by 60%.",
    stack: ["React Native", "Node.js", "Puppeteer"],
  },
];

const SKILL_GROUPS = [
  { key: "languages", items: ["TypeScript", "JavaScript", "Python", "PHP"] },
  { key: "frontend", items: ["React", "Next.js", "Angular", "Redux", "Tailwind CSS"] },
  { key: "backend", items: ["Node.js", "Koa", "Express", "Microservices", "REST APIs"] },
  { key: "data_and_cloud", items: ["AWS (S3, SQS, SNS)", "MongoDB", "Postgres / Supabase", "Redis", "Docker"] },
  { key: "automation_and_ai", items: ["LLM Harness", "Claude (Bedrock)", "OpenAI API", "Linear GraphQL API", "Web Scraping / Data Mining"] },
  { key: "leadership", items: ["Technical Leadership", "Hiring & Interviewing", "Sprint Planning", "Mentorship"] },
];

const TESTIMONIALS = [
  { name: "Aditya Tapshalkar", role: "AI Platform @ Finastra", quote: "Immensely resourceful, highly skilled, and extremely resilient, a powerhouse on any team." },
  { name: "Rahman Wahyudi", role: "Web Developer", quote: "A highly skilled senior developer and effective team leader, an invaluable asset to any organization." },
  { name: "Wooi Liang Chua", role: "Senior Technical Lead, DevOps", quote: "The outstanding engineer on the team, with deep technical knowledge and exceptional efficiency and quality." },
  { name: "Heinrich Soriano", role: "Full Stack Developer", quote: "Consistently demonstrated exceptional skills, a true team player, reliable and hardworking." },
  { name: "Kim Jay Luta", role: "Software QA Engineer", quote: "Demonstrated expertise across a wide range of languages and tools, reliable, proactive, and always meets deadlines." },
  { name: "Harvey Panganiban", role: "Motion Designer", quote: "A brilliant programmer, always eager to learn and quick to grasp complex concepts." },
  { name: "Jessica Abaya", role: "Designer x Developer", quote: "Particularly impressed by his eagerness to always improve, a fast learner who strives for efficiency." },
  { name: "Dexter Rio Lacanaria", role: "Software / Automation Engineer", quote: "Always strives to do what's best for the team, a great asset to any company." },
  { name: "Lucky Angelo Hernandez", role: "Fullstack Developer", quote: "A very good team lead who shares great practices, glad I got to work with him." },
];

const BLOG_POSTS = [
  { title: "Beyond Git Worktrees: Isolated Playgrounds for Your LLM Coding Agents", date: "Jan 20, 2026", blurb: "Running multiple LLM coding agents on one machine without them clobbering each other's work.", source: "Medium", url: "https://medium.com/@llupRisingll/the-quest-for-true-development-environment-isolation-on-linux-71dffbf23aad" },
  { title: "How to Use Supabase CLI with Your Self-Hosted Instance (It Actually Works!)", date: "Nov 2, 2025", blurb: "Troubleshooting the Supabase CLI against a self-hosted instance until it finally worked.", source: "Medium", url: "https://medium.com/@llupRisingll/how-to-use-supabase-cli-with-your-self-hosted-instance-it-actually-works-cb5e835de675" },
  { title: "Stop Manually Navigating to GitHub: One Git Command to Open Them All", date: "Nov 1, 2025", blurb: "A simple git alias that ends the copy-paste cycle between terminal and browser.", source: "Medium", url: "https://medium.com/@llupRisingll/stop-manually-navigating-to-github-one-git-command-to-open-them-all-590b59730058" },
  { title: "I Spent an Evening Over-Engineering a USB Sandbox. Then I Found the Obvious Answer.", date: "Oct 27, 2025", blurb: "Finding a safer way to plug sketchy USB drives into a Linux box.", source: "Medium", url: "https://medium.com/@llupRisingll/i-spent-an-evening-over-engineering-a-usb-sandbox-then-i-found-the-obvious-answer-cb6a03a89ad3" },
  { title: "The Quest to Make My HP Laptop's Fingerprint Reader Work on Arch Linux", date: "Oct 23, 2025", blurb: "Wrestling proprietary drivers and PAM config to unlock a laptop with a touch.", source: "Medium", url: "https://medium.com/@llupRisingll/the-quest-to-make-my-hp-laptops-fingerprint-reader-work-on-arch-linux-4d8c123bc494" },
  { title: "Using JSX Syntax without ReactJS", date: "Apr 9, 2023", blurb: "JSX doesn't need React: how the syntax works on its own.", source: "Medium", url: "https://medium.com/@llupRisingll/using-jsx-syntax-without-reactjs-45eea3f5bf01" },
  { title: "Agile Sprint Planning: The Essential Checklist", date: "Feb 17, 2023", blurb: "A practical checklist for laying the groundwork before a sprint starts.", source: "Medium", url: "https://medium.com/@llupRisingll/agile-sprint-planning-the-essential-checklist-8a5a6ba8690b" },
  { title: "Stay Motivated Throughout Software Engineering Career", date: "Oct 16, 2022", blurb: "Notes on staying motivated across a decade in software development.", source: "Medium", url: "https://medium.com/@llupRisingll/stay-motivated-throughout-software-engineering-career-ab20d83d7428" },
  { title: "HackerRank: Day of the Programmer; Solving Using PHP", date: "Oct 15, 2022", blurb: "Working through a HackerRank coding challenge step by step in PHP.", source: "Medium", url: "https://medium.com/@llupRisingll/hackerrank-day-of-the-programmer-solving-using-php-ee91483d6159" },
  { title: "Getting Started in Web Development", date: "Oct 1, 2022", blurb: "A starting guide for anyone considering a career in web development.", source: "Medium", url: "https://medium.com/@llupRisingll/getting-started-in-web-development-f8bd642242a" },
];

const THEMES = {
  tokyonight: { name: "Tokyo Night", bg: "#1a1b26", panel: "#1f2335", border: "#292e42", ink: "#c0caf5", muted: "#565f89", accent: "#7aa2f7", accentRgb: "122,162,247", accentInk: "#16161e", rust: "#f7768e" },
  "tokyonight-light": { name: "Tokyo Night Light", bg: "#e1e2e7", panel: "#d5d6db", border: "#c4c8da", ink: "#343b58", muted: "#9699a3", accent: "#34548a", accentRgb: "52,84,138", accentInk: "#e1e2e7", rust: "#8c4351" },
  opencode: { name: "OpenCode", bg: "#201d1d", panel: "#2a2626", border: "#3d3737", ink: "#fdfcfc", muted: "#9c9291", accent: "#e8935f", accentRgb: "232,147,95", accentInk: "#201d1d", rust: "#e0673e" },
  gruvbox: { name: "Gruvbox", bg: "#282828", panel: "#32302f", border: "#3c3836", ink: "#ebdbb2", muted: "#a89984", accent: "#fe8019", accentRgb: "254,128,25", accentInk: "#282828", rust: "#fb4934" },
  nord: { name: "Nord", bg: "#2e3440", panel: "#3b4252", border: "#434c5e", ink: "#d8dee9", muted: "#7b88a1", accent: "#88c0d0", accentRgb: "136,192,208", accentInk: "#2e3440", rust: "#bf616a" },
  catppuccin: { name: "Catppuccin", bg: "#1e1e2e", panel: "#232336", border: "#313244", ink: "#cdd6f4", muted: "#7f849c", accent: "#89b4fa", accentRgb: "137,180,250", accentInk: "#1e1e2e", rust: "#f38ba8" },
  everforest: { name: "Everforest", bg: "#2d353b", panel: "#343f44", border: "#3d484d", ink: "#d3c6aa", muted: "#859289", accent: "#a7c080", accentRgb: "167,192,128", accentInk: "#2d353b", rust: "#e67e80" },
  ayu: { name: "Ayu Dark", bg: "#0a0e14", panel: "#0d1219", border: "#1b2d24", ink: "#b8c8bd", muted: "#63746b", accent: "#8ccf7e", accentRgb: "140,207,126", accentInk: "#0a0e14", rust: "#6bbf89" },
  kanagawa: { name: "Kanagawa", bg: "#1f1f28", panel: "#252530", border: "#2a2a37", ink: "#dcd7ba", muted: "#727169", accent: "#7e9cd8", accentRgb: "126,156,216", accentInk: "#1f1f28", rust: "#e46876" },
  matrix: { name: "Matrix", bg: "#000000", panel: "#050805", border: "#0e3b0e", ink: "#33ff66", muted: "#1f8a35", accent: "#00ff41", accentRgb: "0,255,65", accentInk: "#000000", rust: "#3dff8f" },
  onedark: { name: "One Dark", bg: "#282c34", panel: "#2f333d", border: "#3e4451", ink: "#abb2bf", muted: "#6c7280", accent: "#61afef", accentRgb: "97,175,239", accentInk: "#282c34", rust: "#e06c75" },
};

const LINKEDIN_RECS_URL = "https://www.linkedin.com/in/lluprisingll/details/recommendations/";
const SITE_BASE = normalizeBasePath(window.__SITE_BASE__ || "/");

const state = {
  route: currentRouteFromHash(),
  theme: localStorage.getItem("portfolio-theme") || "ayu",
  expanded: EXPERIENCE[0].role,
  testimonial: 0,
  paused: false,
  showAllTestimonials: false,
  testimonialTimer: 0,
  focusAfterRender: "__menu__",
  reduceMotion: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false,
};

const app = document.querySelector("#app");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function currentRouteFromHash() {
  const route = window.location.hash.replace(/^#\/?/, "");
  if (ROUTES.some((item) => item.id === route)) return route;
  const path = window.location.pathname.startsWith(SITE_BASE)
    ? window.location.pathname.slice(SITE_BASE.length)
    : window.location.pathname;
  const pathRoute = path.replace(/^\/+|\/+$/g, "");
  return ROUTES.some((item) => item.id === pathRoute) ? pathRoute : "homepage";
}

function normalizeBasePath(value) {
  if (!value || value === ".") return "/";
  return `/${String(value).replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/+/, "/");
}

function applyTheme() {
  const theme = THEMES[state.theme] || THEMES.ayu;
  const root = document.documentElement;
  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--panel", theme.panel);
  root.style.setProperty("--border", theme.border);
  root.style.setProperty("--ink", theme.ink);
  root.style.setProperty("--muted", theme.muted);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-rgb", theme.accentRgb);
  root.style.setProperty("--accent-ink", theme.accentInk);
  root.style.setProperty("--rust", theme.rust);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme.bg);
}

function isEditableTarget(target = document.activeElement) {
  return ["INPUT", "SELECT", "TEXTAREA"].includes(target?.tagName) || target?.isContentEditable;
}

function focusableItems(scope = document) {
  return Array.from(scope.querySelectorAll("a[href], button:not([disabled]), select:not([disabled])"))
    .filter((item) => item.offsetParent !== null);
}

function focusAfterRender(selector) {
  state.focusAfterRender = selector;
}

function restoreFocus() {
  if (!state.focusAfterRender) return;
  const selector = state.focusAfterRender;
  state.focusAfterRender = "";
  window.requestAnimationFrame(() => {
    let target = document.querySelector(selector);
    if (selector === "__content__") target = focusableItems(document.querySelector(".content"))[0];
    if (selector === "__menu__") target = document.querySelector(`[data-route="${state.route}"]`);
    target?.focus();
    target?.scrollIntoView({ block: "nearest", inline: "nearest" });
    updateRailIndicators();
    updateFocusMode();
  });
}

function focusFirstInContent() {
  const target = focusableItems(document.querySelector(".content"))[0];
  target?.focus();
  target?.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function focusActiveRoute() {
  const target = document.querySelector(`[data-route="${state.route}"]`);
  target?.focus();
  target?.scrollIntoView({ block: "nearest", inline: "center" });
  updateRailIndicators();
}

function activeFocusScope() {
  const active = document.activeElement;
  if (active?.closest?.(".rail")) return document.querySelector(".rail");
  return document.querySelector(".content");
}

function moveFocus(direction) {
  const scope = activeFocusScope();
  const items = focusableItems(scope);
  if (!items.length) return;
  const current = items.indexOf(document.activeElement);
  const nextIndex = current === -1
    ? (direction > 0 ? 0 : items.length - 1)
    : Math.max(0, Math.min(current + direction, items.length - 1));
  items[nextIndex]?.focus();
  items[nextIndex]?.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function cycleTheme(direction) {
  const ids = Object.keys(THEMES);
  const current = ids.indexOf(state.theme);
  state.theme = ids[(current + direction + ids.length) % ids.length];
  localStorage.setItem("portfolio-theme", state.theme);
  focusAfterRender(".theme-select");
  render();
}

function navigate(route, focusSelector = "__menu__") {
  if (!ROUTES.some((item) => item.id === route)) return;
  state.route = route;
  const path = route === "homepage" ? SITE_BASE : `${SITE_BASE}${route}/`;
  history.pushState({}, "", path);
  focusAfterRender(focusSelector);
  window.scrollTo({ top: 0, behavior: state.reduceMotion ? "auto" : "smooth" });
  render();
}

function navigateByOffset(offset) {
  const currentIndex = ROUTES.findIndex((route) => route.id === state.route);
  navigate(ROUTES[Math.max(0, Math.min(currentIndex + offset, ROUTES.length - 1))].id);
}

function setTestimonial(action, focusSelector = "") {
  if (action === "next") state.testimonial = (state.testimonial + 1) % TESTIMONIALS.length;
  if (action === "prev") state.testimonial = (state.testimonial - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
  if (action === "all") state.showAllTestimonials = true;
  if (action === "collapse") state.showAllTestimonials = false;
  if (focusSelector) focusAfterRender(focusSelector);
  render();
}

function renderShell(content) {
  const routeOptions = ROUTES.map((route) => `
    <li>
      <button class="${route.id === state.route ? "active" : ""}" data-route="${route.id}">
        ${escapeHtml(route.label)}
      </button>
    </li>
  `).join("");

  const themeOptions = Object.entries(THEMES).map(([id, theme]) => `
    <option value="${escapeHtml(id)}" ${id === state.theme ? "selected" : ""}>${escapeHtml(theme.name)}</option>
  `).join("");

  app.innerHTML = `
    <div class="tui-page">
      <div class="topbar">
        <span>luis@miranda<span class="dim">:</span><span class="path">~/${escapeHtml(state.route)}</span></span>
        <span class="topbar-right">
          <span class="clock" title="Luis's local timezone, Philippines (UTC+8)">--:--:-- PHT</span>
          <select class="theme-select" aria-label="color theme" data-focus="theme">${themeOptions}</select>
        </span>
      </div>
      <div class="layout">
        <nav class="rail" aria-label="Portfolio sections">
          <div class="rail-title">+ MENU +</div>
          <ul>${routeOptions}</ul>
          <div class="rail-foot">last updated: Jul 2026</div>
        </nav>
        <main class="content">
          <div class="panel anim">
            <span class="panel-tab"><span class="idx">${IDX[state.route]}</span> + ${escapeHtml(state.route.toUpperCase())} +</span>
            ${content}
          </div>
        </main>
      </div>
      <div class="statusbar">
        <span class="mode" data-focus-mode>NORMAL</span>
        <span class="hints" data-focus-hints>↑/↓ pages · Enter content · Esc menu</span>
        <span class="blink">█</span>
      </div>
    </div>
  `;

  bindShellEvents();
  tickClock();
  restoreFocus();
  syncRailViewport();
  updateFocusMode();
}

function renderHome() {
  const links = HOME_LINKS.map((item) => `
    <div class="link-card">
      <div>
        <div class="link-title">${escapeHtml(item.title)}</div>
        <div class="link-type">${escapeHtml(item.type)}</div>
      </div>
      <p class="link-detail">${escapeHtml(item.detail)}</p>
      <a class="link-out" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.label)} ↗</a>
    </div>
  `).join("");

  const tags = HOME_STACK
    .map((tag) => `<span class="tag tech-tag ${escapeHtml(tag.tone)}">${escapeHtml(tag.name)}</span>`)
    .join("");
  const accounts = ACCOUNT_LINKS
    .map((account) => `<a class="account-button" href="${escapeHtml(account.url)}" target="_blank" rel="noopener noreferrer">[${escapeHtml(account.label)}]</a>`)
    .join("");

  return `
    <div class="identity">
      <div class="identity-main">
        <div class="identity-kicker">based in the Philippines · technical leader</div>
        <h1 class="name">LUIS EDWARD MIRANDA</h1>
        <p class="subtitle">Software engineer building automation, AI agents, and production systems for teams that need both code and technical direction.</p>
        <div class="account-buttons" aria-label="Social accounts">${accounts}</div>
        <div class="tags">${tags}</div>
      </div>
    </div>
    <div class="link-grid">${links}</div>
    <p class="edu-line">MBA, Ateneo de Naga University (on leave) &middot; BS Computer Engineering, AMA Computer College, 2018</p>
    <div class="card" style="margin-top:28px">
      <div class="card-label">Testimonials <span class="card-label-sub">&middot; via LinkedIn</span></div>
      ${renderTestimonials()}
    </div>
  `;
}

function renderExperience() {
  const items = EXPERIENCE.map((job) => {
    const isOpen = state.expanded === job.role;
    const stack = job.stack.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
    return `
      <div class="exp-card">
        <button class="exp-row" data-expand="${escapeHtml(job.role)}" data-exp-index="${EXPERIENCE.indexOf(job)}" aria-expanded="${isOpen}">
          <span class="exp-head">
            <span class="exp-role"><span class="dot ${job.current ? "current" : ""}"></span>${escapeHtml(job.role)}</span>
            <span class="exp-meta">
              ${escapeHtml(job.company)}, ${escapeHtml(job.location)}
              ${job.note ? ` &middot; <span class="exp-note">${escapeHtml(job.note)}</span>` : ""}
            </span>
            <span class="exp-teaser">${escapeHtml(job.teaser)}</span>
            <span class="exp-toggle"><span class="exp-chevron">${isOpen ? "▾" : "▸"}</span>${isOpen ? "hide details" : "show details"}</span>
          </span>
          <span class="exp-dates">${escapeHtml(job.dates)}</span>
        </button>
        <div class="exp-body ${isOpen ? "open" : ""}">
          <p class="exp-detail">${escapeHtml(job.detail)}</p>
          <div class="exp-stack">${stack}</div>
        </div>
      </div>
    `;
  }).join("");

  return `
    <p class="prompt-line"><span class="prompt">$</span> ls -la experience/ <span style="opacity:.6">&nbsp;# click a role to expand</span></p>
    ${items}
  `;
}

function renderAffiliation() {
  return `
    <p class="prompt-line"><span class="prompt">$</span> curl nanocollective.org/contributors</p>
    <div class="os-card">
      <div class="os-avatar">LM</div>
      <div class="os-body">
        <div class="os-name">Luis Edward Miranda</div>
        <div class="os-desc">Works with startups across different industries.</div>
        <div class="tags" style="margin-top:10px">
          <span class="tag">STARTUPS</span>
          <span class="tag">ENGINEERING</span>
        </div>
        <div class="os-links">
          <a href="https://nanocollective.org/contributors" target="_blank" rel="noopener noreferrer">-> nanocollective.org/contributors</a>
          <a href="https://github.com/llupRisinglll" target="_blank" rel="noopener noreferrer">-> GitHub</a>
        </div>
      </div>
    </div>
    <p class="os-note">
      Nano Collective builds open-source AI tools for everyone. Contributing keeps Luis close
      to how AI tooling is actually built in the open, not just how it's used.
    </p>
  `;
}

function renderBlog() {
  const rows = BLOG_POSTS.map((post) => `
    <div class="blog-row">
      <div class="blog-main">
        <div class="blog-title">
          <a href="${escapeHtml(post.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(post.title)} ↗</a>
          <span class="blog-source">${escapeHtml(post.source)}</span>
        </div>
        <div class="blog-blurb">${escapeHtml(post.blurb)}</div>
      </div>
      <div class="blog-date">${escapeHtml(post.date)}</div>
    </div>
  `).join("");

  return `
    <p class="prompt-line"><span class="prompt">$</span> ls -la blog/ <span style="opacity:.6">&nbsp;# from medium.com/@llupRisingll</span></p>
    ${rows}
    <p class="blog-foot"><a href="https://medium.com/@llupRisingll" target="_blank" rel="noopener noreferrer">-> view full archive on medium.com</a></p>
  `;
}

function renderSkills() {
  return `
    <p class="prompt-line"><span class="prompt">$</span> cat skills.yaml</p>
    ${SKILL_GROUPS.map((group) => `
      <div class="yaml-block">
        <span class="yaml-key">${escapeHtml(group.key)}</span>
        <div class="yaml-list">${group.items.map((item) => `<span class="yaml-item">${escapeHtml(item)}</span>`).join("")}</div>
      </div>
    `).join("")}
  `;
}

function renderContact() {
  return `
    <p class="prompt-line"><span class="prompt">$</span> ./contact.sh</p>
    <p class="contact-line"><span class="cmd">echo $EMAIL -></span> <a href="mailto:luisedward.miranda+work@gmail.com">luisedward.miranda+work@gmail.com</a></p>
    <p class="contact-line"><span class="cmd">open -></span> <a href="https://github.com/llupRisinglll" target="_blank" rel="noopener noreferrer">github.com/llupRisinglll</a></p>
    <p class="contact-line"><span class="cmd">open -></span> <a href="https://linkedin.com/in/lluprisingll" target="_blank" rel="noopener noreferrer">linkedin.com/in/lluprisingll</a></p>
    <p class="contact-line"><span class="cmd">open -></span> <a href="https://medium.com/@llupRisingll" target="_blank" rel="noopener noreferrer">medium.com/@llupRisingll</a></p>
    <p class="contact-line"><span class="cmd">echo $PHONE -></span> +63 939 5852 545 <span class="contact-meta">(SMS / WhatsApp / Viber)</span></p>
    <p class="contact-foot"># character references available on request</p>
  `;
}

function renderTestimonials() {
  if (state.showAllTestimonials) {
    const cards = TESTIMONIALS.map((item) => `
      <div class="testi-grid-card">
        <p class="testi-quote">${escapeHtml(item.quote)}</p>
        <div class="testi-who">
          <div class="testi-avatar">${escapeHtml(initials(item.name))}</div>
          <div>
            <div class="testi-name">${escapeHtml(item.name)}</div>
            <div class="testi-role">${escapeHtml(item.role)}</div>
          </div>
        </div>
        <a class="testi-source-link" href="${LINKEDIN_RECS_URL}" target="_blank" rel="noopener noreferrer">view on LinkedIn ↗</a>
      </div>
    `).join("");

    return `
      <div class="testi-grid">
        ${cards}
        <button class="testi-viewall" data-testimonials="collapse">‹ back to highlights</button>
      </div>
    `;
  }

  const item = TESTIMONIALS[state.testimonial];
  const dots = TESTIMONIALS.map((testimonial, index) => `
    <button class="testi-dot ${index === state.testimonial ? "active" : ""}" data-testimonial-index="${index}" aria-label="go to testimonial ${index + 1}"></button>
  `).join("");

  return `
    <div class="testi-wrap">
      <div class="testi-card">
        <p class="testi-quote">${escapeHtml(item.quote)}</p>
        <div class="testi-who">
          <div class="testi-avatar">${escapeHtml(initials(item.name))}</div>
          <div>
            <div class="testi-name">${escapeHtml(item.name)}</div>
            <div class="testi-role">${escapeHtml(item.role)}</div>
          </div>
          <a class="testi-source-link" href="${LINKEDIN_RECS_URL}" target="_blank" rel="noopener noreferrer">view on LinkedIn ↗</a>
        </div>
      </div>
      <div class="testi-controls">
        <button class="testi-arrow" data-testimonials="prev" aria-label="previous">‹</button>
        <div class="testi-dots">${dots}</div>
        <button class="testi-arrow" data-testimonials="next" aria-label="next">›</button>
        <span class="testi-count">${state.testimonial + 1} / ${TESTIMONIALS.length}</span>
        <button class="testi-viewall" data-testimonials="all">view all ↗</button>
      </div>
    </div>
  `;
}

function render() {
  applyTheme();
  const content = {
    homepage: renderHome,
    experience: renderExperience,
    affiliation: renderAffiliation,
    blog: renderBlog,
    skills: renderSkills,
    contact: renderContact,
  }[state.route]();
  renderShell(content);
  updateTestimonialTimer();
}

function bindShellEvents() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.route, `[data-route="${button.dataset.route}"]`));
  });

  document.querySelector(".theme-select")?.addEventListener("change", (event) => {
    state.theme = event.target.value;
    localStorage.setItem("portfolio-theme", state.theme);
    render();
  });

  document.querySelectorAll("[data-expand]").forEach((button) => {
    button.addEventListener("click", () => {
      state.expanded = state.expanded === button.dataset.expand ? null : button.dataset.expand;
      focusAfterRender(`[data-expand="${CSS.escape(button.dataset.expand)}"]`);
      render();
    });
  });

  const wrap = document.querySelector(".testi-wrap");
  if (wrap) {
    wrap.addEventListener("mouseenter", () => {
      state.paused = true;
      updateTestimonialTimer();
    });
    wrap.addEventListener("mouseleave", () => {
      state.paused = false;
      updateTestimonialTimer();
    });
  }

  document.querySelectorAll("[data-testimonials]").forEach((button) => {
    button.addEventListener("click", () => {
      setTestimonial(button.dataset.testimonials, `[data-testimonials="${button.dataset.testimonials}"]`);
    });
  });

  document.querySelectorAll("[data-testimonial-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.testimonial = Number(button.dataset.testimonialIndex);
      focusAfterRender(`[data-testimonial-index="${button.dataset.testimonialIndex}"]`);
      render();
    });
  });

  const railList = document.querySelector(".rail ul");
  if (railList) railList.addEventListener("scroll", updateRailIndicators, { passive: true });
}

function updateTestimonialTimer() {
  window.clearInterval(state.testimonialTimer);
  state.testimonialTimer = 0;
}

function tickClock() {
  const clock = document.querySelector(".clock");
  if (!clock) return;
  clock.textContent = `${new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Manila",
    hour12: false,
  })} PHT`;
}

function updateRailIndicators() {
  const rail = document.querySelector(".rail");
  const list = document.querySelector(".rail ul");
  if (!rail || !list) return;
  const max = list.scrollWidth - list.clientWidth;
  rail.classList.toggle("has-left", list.scrollLeft > 1);
  rail.classList.toggle("has-right", list.scrollLeft < max - 1);
}

function syncRailViewport() {
  window.requestAnimationFrame(() => {
    document.querySelector(`[data-route="${state.route}"]`)?.scrollIntoView({ block: "nearest", inline: "center" });
    updateRailIndicators();
  });
}

function updateFocusMode() {
  const page = document.querySelector(".tui-page");
  const mode = document.querySelector("[data-focus-mode]");
  const hints = document.querySelector("[data-focus-hints]");
  const active = document.activeElement;
  if (!page || !mode || !hints) return;

  page.classList.remove("focus-menu", "focus-content", "focus-theme");

  if (active?.closest?.(".rail")) {
    page.classList.add("focus-menu");
    mode.textContent = "MENU";
    hints.textContent = "↑/↓ change page · Enter content · t theme";
    return;
  }

  if (active?.matches?.(".theme-select")) {
    page.classList.add("focus-theme");
    mode.textContent = "THEME";
    hints.textContent = "select theme · Esc blur · m menu · c content";
    return;
  }

  if (active?.closest?.(".content")) {
    page.classList.add("focus-content");
    mode.textContent = "CONTENT";
    hints.textContent = "↑/↓ select item · Enter open/toggle · Esc menu";
    return;
  }

  mode.textContent = "NORMAL";
  hints.textContent = "↑/↓ pages · Enter content · Esc menu";
}

window.addEventListener("hashchange", () => {
  state.route = currentRouteFromHash();
  render();
});

window.addEventListener("popstate", () => {
  state.route = currentRouteFromHash();
  render();
});

window.addEventListener("resize", syncRailViewport);

window.addEventListener("focusin", updateFocusMode);
window.addEventListener("focusout", () => window.setTimeout(updateFocusMode, 0));

window.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;

  if (event.key === "Escape") {
    event.preventDefault();
    focusActiveRoute();
    return;
  }

  if (isEditableTarget()) return;

  const number = Number(event.key);
  if (number >= 1 && number <= ROUTES.length) {
    event.preventDefault();
    navigate(ROUTES[number - 1].id);
    return;
  }

  if (document.activeElement?.closest?.(".rail") && event.key === "Enter") {
    event.preventDefault();
    focusFirstInContent();
    return;
  }

  if (document.activeElement?.closest?.(".rail") || !document.activeElement?.closest?.(".content")) {
    if (event.key === "j" || event.key === "ArrowDown" || event.key === "l" || event.key === "ArrowRight") {
      event.preventDefault();
      navigateByOffset(1);
      return;
    }
    if (event.key === "k" || event.key === "ArrowUp" || event.key === "h" || event.key === "ArrowLeft") {
      event.preventDefault();
      navigateByOffset(-1);
      return;
    }
  }

  if (event.key === "j" || event.key === "ArrowDown") {
    event.preventDefault();
    moveFocus(1);
    return;
  }
  if (event.key === "k" || event.key === "ArrowUp") {
    event.preventDefault();
    moveFocus(-1);
    return;
  }

  if (event.key === "m") {
    event.preventDefault();
    focusActiveRoute();
  }
  if (event.key === "c") {
    event.preventDefault();
    focusFirstInContent();
  }
  if (event.key === "t") {
    event.preventDefault();
    document.querySelector(".theme-select")?.focus();
  }
  if (event.key === "{" || event.key === "[") {
    event.preventDefault();
    cycleTheme(-1);
  }
  if (event.key === "}" || event.key === "]") {
    event.preventDefault();
    cycleTheme(1);
  }

  if (state.route === "experience" && event.key === "e") {
    event.preventDefault();
    document.querySelector("[data-exp-index]")?.focus();
  }

  if (state.route === "homepage" && event.key === "n") {
    event.preventDefault();
    setTestimonial("next", '[data-testimonials="next"]');
  }
  if (state.route === "homepage" && event.key === "p") {
    event.preventDefault();
    setTestimonial("prev", '[data-testimonials="prev"]');
  }
  if (state.route === "homepage" && event.key === "v") {
    event.preventDefault();
    setTestimonial(state.showAllTestimonials ? "collapse" : "all", ".testi-viewall");
  }

  if (event.key === "o" && document.activeElement?.matches?.("a, button")) {
    event.preventDefault();
    document.activeElement.click();
  }
});

window.setInterval(tickClock, 1000);

render();
