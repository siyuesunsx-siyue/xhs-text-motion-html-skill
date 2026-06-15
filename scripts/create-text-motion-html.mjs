#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(__dirname, "..");

const args = new Map();
for (let i = 2; i < process.argv.length; i += 1) {
  const key = process.argv[i];
  if (!key.startsWith("--")) continue;
  const next = process.argv[i + 1];
  if (!next || next.startsWith("--")) {
    args.set(key.slice(2), "true");
  } else {
    args.set(key.slice(2), next);
    i += 1;
  }
}

const outPath = path.resolve(process.cwd(), args.get("out") || "motion-effects/index.html");
const effectsPath = args.get("effects")
  ? path.resolve(process.cwd(), args.get("effects"))
  : path.join(skillRoot, "assets", "default-effects.json");

const effects = JSON.parse(fs.readFileSync(effectsPath, "utf8"));
const requestedCount = Number(args.get("count") || effects.length || 12);
if (!Array.isArray(effects) || effects.length !== requestedCount) {
  throw new Error(`Effects file must be an array of exactly ${requestedCount} effects.`);
}

const colorsArg = args.get("colors");
const colors = colorsArg
  ? colorsArg.split(",").map((item) => item.trim()).filter(Boolean)
  : [];
const primary = colors[0] || args.get("primary") || "#DDE7E3";
const accent = colors[1] || args.get("accent") || "#2F6F7E";
const third = colors[2] || args.get("third") || "#D8A45F";
const series = args.get("series") || "Text Motion Library";
const volume = args.get("volume") || "Vol.1";
const duration = Number(args.get("page-duration") || 2.2);
const totalDuration = Number((effects.length * duration).toFixed(2));

const esc = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const sceneClass = (effect, index) => {
  const plate = index % 3 === 1 ? "accent-plate" : (index % 3 === 2 ? "third-plate" : "");
  return ["scene", plate, `s-${index + 1}`, `fx-${effect.type || "fade"}`].filter(Boolean).join(" ");
};

const sizeClass = (word) => {
  const length = [...String(word)].length;
  if (length <= 5) return "short";
  if (length >= 10) return "long";
  return "";
};

const sections = effects.map((effect, index) => {
  const no = String(index + 1).padStart(2, "0");
  const usage = (effect.usage || []).slice(0, 3).map((item) => `<span>${esc(item)}</span>`).join("");
  return `
      <section class="${sceneClass(effect, index)}" data-type="${esc(effect.type || "fade")}">
        <div class="topline"><span>${esc(series)} ${esc(volume)}</span><span>${no} / ${String(effects.length).padStart(2, "0")}</span></div>
        <div class="scene-inner">
          <div class="effect-tag">${esc(effect.english)}</div>
          <div class="word ${sizeClass(effect.word)}" data-word="${esc(effect.word || effect.english)}"></div>
          <div class="cn-name">${esc(effect.chinese)}</div>
          <div class="desc">视觉效果：${esc(effect.description)}</div>
          <div class="usage">${usage}</div>
        </div>
        <div class="footline"><span>${esc(effect.english)}</span><span>${esc(effect.mechanism || effect.type || "text motion")}</span></div>
      </section>`;
}).join("\n");

const sceneDefs = effects.map((effect, index) => {
  return `{ selector: ".s-${index + 1}", start: ${Number((index * duration).toFixed(2))}, dur: ${duration}, type: "${effect.type || "fade"}" }`;
}).join(",\n          ");

const html = `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(series)} ${esc(volume)}</title>
    <style>
      :root {
        --w: 1080px;
        --h: 1920px;
        --primary: ${primary};
        --accent: ${accent};
        --third: ${third};
        --accent-on: #f8eee9;
        --third-on: #243038;
        --ink: #10181b;
        --muted: rgba(16, 24, 27, .66);
        --line: rgba(16, 24, 27, .24);
        --dot: rgba(16, 24, 27, .16);
        --dot-size: 2.2px;
        --font-ui: "Microsoft YaHei UI", "PingFang SC", "Noto Sans SC", sans-serif;
        --font-serif: "Times New Roman", Georgia, serif;
        --font-mono: "IBM Plex Mono", "JetBrains Mono", Consolas, monospace;
      }

      * { box-sizing: border-box; }
      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
        background: #000;
        font-family: var(--font-ui);
      }

      #video {
        position: relative;
        width: var(--w);
        height: var(--h);
        overflow: hidden;
        color: var(--ink);
        background: var(--primary);
      }

      .scene {
        position: absolute;
        inset: 0;
        padding: 72px 68px 84px;
        display: grid;
        grid-template-rows: auto 1fr auto;
        opacity: 0;
        pointer-events: none;
      }

      .scene::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--primary);
        background-image: radial-gradient(circle, var(--dot) var(--dot-size), transparent calc(var(--dot-size) + 0.2px));
        background-size: 48px 48px;
      }

      .scene::after {
        content: "";
        position: absolute;
        inset: 32px;
        border: 1px solid var(--line);
      }

      .scene.accent-plate {
        color: var(--accent-on);
      }

      .scene.accent-plate::before {
        background-color: var(--accent);
        background-image: radial-gradient(circle, rgba(255, 255, 255, .2) var(--dot-size), transparent calc(var(--dot-size) + 0.2px));
        background-size: 48px 48px;
      }

      .scene.accent-plate::after { border-color: rgba(255,255,255,.26); }

      .scene.third-plate {
        color: var(--third-on);
      }

      .scene.third-plate::before {
        background-color: var(--third);
        background-image: radial-gradient(circle, rgba(36, 48, 56, .16) var(--dot-size), transparent calc(var(--dot-size) + 0.2px));
        background-size: 48px 48px;
      }

      .topline, .footline {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: var(--font-mono);
        font-size: 20px;
        letter-spacing: .22em;
        text-transform: uppercase;
        color: var(--muted);
      }

      .accent-plate .topline,
      .accent-plate .footline,
      .accent-plate .effect-tag {
        color: rgba(255,255,255,.68);
      }

      .third-plate .topline,
      .third-plate .footline,
      .third-plate .effect-tag {
        color: rgba(36,48,56,.62);
      }

      .footline { font-size: 19px; }

      .scene-inner {
        position: relative;
        z-index: 2;
        display: grid;
        place-items: center;
        align-content: center;
        gap: 30px;
      }

      .effect-tag {
        font-family: var(--font-mono);
        font-size: 17px;
        letter-spacing: .28em;
        text-transform: uppercase;
        color: var(--muted);
      }

      .word {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: min(900px, 100%);
        min-height: 180px;
        font-family: var(--font-serif);
        font-size: 126px;
        font-weight: 700;
        line-height: .92;
        letter-spacing: .025em;
        text-align: center;
        perspective: 900px;
      }

      .word.short { font-size: 158px; }
      .word.long { font-size: 92px; letter-spacing: .012em; }
      .char { display: inline-block; will-change: transform, opacity, filter, clip-path; transform-origin: center center; }

      .slice-layer {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        pointer-events: none;
      }
      .slice-layer.top .char { clip-path: inset(0 0 50% 0); }
      .slice-layer.bottom .char { clip-path: inset(50% 0 0 0); }
      .slice-base {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .cn-name {
        font-size: 36px;
        font-weight: 800;
        letter-spacing: .04em;
      }

      .desc {
        max-width: 740px;
        text-align: center;
        font-size: 32px;
        line-height: 1.52;
        color: rgba(16,24,27,.76);
        text-wrap: balance;
      }

      .accent-plate .desc { color: rgba(255,255,255,.82); }
      .third-plate .desc { color: rgba(36,48,56,.74); }

      .usage {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 14px;
        max-width: 760px;
      }

      .usage span {
        padding: 10px 18px;
        border: 1px solid rgba(16,24,27,.16);
        background: rgba(255,255,255,.2);
        font-size: 21px;
        color: rgba(16,24,27,.78);
      }

      .accent-plate .usage span {
        border-color: rgba(255,255,255,.24);
        background: rgba(255,255,255,.1);
        color: rgba(255,255,255,.86);
      }

      .third-plate .usage span {
        border-color: rgba(36,48,56,.18);
        background: rgba(255,255,255,.12);
        color: rgba(36,48,56,.78);
      }

      html.render-frame .scene,
      html.render-frame .scene * { animation: none !important; }
    </style>
  </head>
  <body>
    <div
      id="video"
      data-composition-id="${esc((series + "-" + volume).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "xhs-text-motion")}"
      data-start="0"
      data-duration="${totalDuration}"
      data-width="1080"
      data-height="1920"
      data-layout-id="S01_STEP_BREAKDOWN"
      data-system="Swiss"
      data-components="title,step,tag"
    >
${sections}
    </div>

    <script>
      (() => {
        const scenes = [
          ${sceneDefs}
        ];
        const totalDuration = ${totalDuration};
        const params = new URLSearchParams(location.search);
        const fixedMs = params.get("renderMs");
        const clamp = (v, min = 0, max = 1) => Math.max(min, Math.min(max, v));
        const ease = (v) => 1 - Math.pow(1 - clamp(v), 3);
        const show = (el, p, y = 16) => {
          if (!el) return;
          const k = ease(p);
          el.style.opacity = String(k);
          el.style.transform = \`translateY(\${(1 - k) * y}px)\`;
        };
        if (fixedMs !== null) document.documentElement.classList.add("render-frame");

        document.querySelectorAll(".word[data-word]").forEach((word) => {
          const text = word.dataset.word;
          const isSlice = word.closest(".fx-slice");
          word.textContent = "";
          const makeChar = (ch) => {
            const span = document.createElement("span");
            span.className = "char";
            span.textContent = ch === " " ? "\\u00a0" : ch;
            return span;
          };
          if (isSlice) {
            ["top", "bottom"].forEach((layerName) => {
              const layer = document.createElement("span");
              layer.className = \`slice-layer \${layerName}\`;
              [...text].forEach((ch) => layer.appendChild(makeChar(ch)));
              word.appendChild(layer);
            });
            const base = document.createElement("span");
            base.className = "slice-base";
            [...text].forEach((ch) => base.appendChild(makeChar(ch)));
            word.appendChild(base);
          } else {
            [...text].forEach((ch) => word.appendChild(makeChar(ch)));
          }
        });

        const reset = (scene) => {
          scene.style.opacity = "0";
          scene.querySelectorAll(".word").forEach((el) => {
            el.style.transform = "none";
            el.style.letterSpacing = "";
            el.style.textShadow = "";
          });
          scene.querySelectorAll(".effect-tag,.cn-name,.desc,.usage,.char").forEach((el) => {
            el.style.opacity = "0";
            el.style.transform = "none";
            el.style.filter = "none";
            el.style.clipPath = "";
            el.style.color = "";
            el.style.display = "";
            el.style.textShadow = "";
          });
        };

        const animate = (type, scene, letters, local, dur) => {
          if (type === "fade") {
            letters.forEach((el, i) => {
              const p = ease((local - .16 - i * .025) / .7);
              el.style.opacity = String(p);
            });
          }
          if (type === "rise") {
            letters.forEach((el, i) => {
              const p = ease((local - .14 - i * .035) / .72);
              el.style.opacity = String(p);
              el.style.transform = \`translateY(\${(1 - p) * 60}px)\`;
            });
          }
          if (type === "slide") {
            letters.forEach((el, i) => {
              const p = ease((local - .14 - i * .03) / .72);
              el.style.opacity = String(p);
              el.style.transform = \`translateX(\${(1 - p) * -72}px)\`;
            });
          }
          if (type === "scale") {
            const p = ease((local - .12) / .82);
            const word = scene.querySelector(".word");
            if (word) word.style.transform = \`scale(\${.82 + p * .18})\`;
            letters.forEach((el, i) => {
              const k = ease((local - .16 - i * .025) / .62);
              el.style.opacity = String(k);
            });
          }
          if (type === "rotate") {
            letters.forEach((el, i) => {
              const p = ease((local - .12 - i * .035) / .76);
              el.style.opacity = String(p);
              el.style.transform = \`rotate(\${(1 - p) * -90}deg) translateY(\${(1 - p) * 40}px)\`;
            });
          }
          if (type === "blur") {
            letters.forEach((el, i) => {
              const p = ease((local - .12 - i * .025) / .78);
              el.style.opacity = String(p);
              el.style.filter = \`blur(\${(1 - p) * 12}px)\`;
            });
          }
          if (type === "echo") {
            letters.forEach((el, i) => {
              const p = ease((local - .1 - i * .03) / .72);
              el.style.opacity = String(p);
              el.style.transform = \`translateX(\${(1 - p) * -72}px)\`;
              el.style.filter = \`blur(\${(1 - p) * 6}px)\`;
              el.style.textShadow = \`\${(1 - p) * 34}px 0 0 rgba(248,238,233,.2), \${(1 - p) * 68}px 0 0 rgba(157,61,63,.18)\`;
            });
          }
          if (type === "radial") {
            letters.forEach((el, i) => {
              const p = ease((local - .12 - i * .045) / .78);
              const angle = (i / Math.max(1, letters.length - 1)) * Math.PI * 2;
              const r = (1 - p) * 220;
              el.style.opacity = String(p);
              el.style.transform = \`translate(\${Math.cos(angle) * r}px, \${Math.sin(angle) * r}px) rotate(\${(1 - p) * 220}deg)\`;
            });
          }
          if (type === "wave") {
            letters.forEach((el, i) => {
              const p = ease((local - .12 - i * .045) / .72);
              const wave = Math.sin((local * 5.4) + i * .75) * (1 - p) * 48;
              el.style.opacity = String(p);
              el.style.transform = \`translateY(\${wave}px) rotateX(\${(1 - p) * 88}deg)\`;
            });
          }
          if (type === "slice") {
            const top = [...scene.querySelectorAll(".slice-layer.top .char")];
            const bottom = [...scene.querySelectorAll(".slice-layer.bottom .char")];
            const base = [...scene.querySelectorAll(".slice-base .char")];
            top.forEach((el, i) => {
              const p = ease((local - .1 - i * .03) / .66);
              el.style.opacity = String(clamp(p * 1.2));
              el.style.transform = \`translate(\${(1 - p) * -82}px, \${(1 - p) * -20}px)\`;
            });
            bottom.forEach((el, i) => {
              const p = ease((local - .14 - i * .03) / .66);
              el.style.opacity = String(clamp(p * 1.2));
              el.style.transform = \`translate(\${(1 - p) * 82}px, \${(1 - p) * 20}px)\`;
            });
            base.forEach((el, i) => {
              const p = ease((local - .64 - i * .018) / .42);
              el.style.opacity = String(p);
              el.style.transform = \`translateY(\${(1 - p) * 8}px)\`;
            });
          }
          if (type === "glow") {
            const word = scene.querySelector(".word");
            const p = ease((local - .12) / .85);
            const pulse = .55 + Math.sin(local * 7) * .25;
            if (word) {
              word.style.textShadow = \`0 0 \${18 + pulse * 38}px rgba(157,61,63,.62), 0 0 \${46 + pulse * 54}px rgba(248,238,233,.3)\`;
              word.style.transform = \`scale(\${.94 + p * .06})\`;
            }
            letters.forEach((el, i) => {
              const k = ease((local - .14 - i * .025) / .62);
              el.style.opacity = String(k);
            });
          }
          if (type === "shadow") {
            letters.forEach((el, i) => {
              const p = ease((local - .14 - i * .035) / .72);
              el.style.opacity = String(p);
              el.style.transform = \`translateX(\${(1 - p) * -18}px)\`;
              el.style.textShadow = \`\${(1 - p) * 34}px \${(1 - p) * 18}px 0 rgba(248,238,233,.32), \${-(1 - p) * 22}px \${-(1 - p) * 12}px 0 rgba(16,24,27,.22)\`;
            });
          }
          if (type === "gravity") {
            letters.forEach((el, i) => {
              const p = ease((local - .1 - i * .045) / .72);
              const bounce = Math.sin(p * Math.PI) * 18;
              el.style.opacity = String(p);
              el.style.transform = \`translateY(\${(1 - p) * -210 + bounce}px) scaleY(\${1 + (1 - p) * .28})\`;
            });
          }
          if (type === "pixel") {
            letters.forEach((el, i) => {
              const p = ease((local - .12 - i * .035) / .7);
              const dx = (((i * 37) % 9) - 4) * 18 * (1 - p);
              const dy = (((i * 19) % 7) - 3) * 18 * (1 - p);
              el.style.opacity = String(p);
              el.style.filter = \`blur(\${(1 - p) * 10}px) contrast(\${1 + (1 - p) * 2})\`;
              el.style.transform = \`translate(\${dx}px, \${dy}px) scale(\${.55 + p * .45})\`;
            });
          }
          if (type === "mirror") {
            letters.forEach((el, i) => {
              const p = ease((local - .14 - i * .045) / .78);
              el.style.opacity = String(p);
              el.style.transform = \`scaleX(\${-.9 + p * 1.9}) rotateY(\${(1 - p) * 180}deg)\`;
            });
          }
          if (type === "rubber") {
            letters.forEach((el, i) => {
              const p = ease((local - .12 - i * .035) / .72);
              const wobble = Math.sin(p * Math.PI * 3) * (1 - p);
              el.style.opacity = String(p);
              el.style.transform = \`scale(\${1 + wobble * .36}, \${1 - wobble * .28}) translateY(\${(1 - p) * 46}px)\`;
            });
          }
          if (type === "scan") {
            letters.forEach((el, i) => {
              const p = ease((local - .14 - i * .03) / .72);
              el.style.opacity = String(p);
              el.style.filter = \`blur(\${(1 - p) * 9}px)\`;
              el.style.clipPath = \`inset(0 \${100 - p * 100}% 0 0)\`;
            });
          }
          if (type === "crop") {
            letters.forEach((el, i) => {
              const p = ease((local - .12 - i * .035) / .68);
              el.style.opacity = "1";
              el.style.clipPath = \`inset(0 \${100 - p * 100}% 0 0)\`;
              el.style.transform = \`translateX(\${(1 - p) * -34}px)\`;
            });
          }
          if (type === "counter") {
            const p = ease((local - .1) / 1.05);
            const value = Math.round(p * 99).toString().padStart(2, "0");
            const txt = \`COUNT \${value}\`;
            letters.forEach((el, i) => {
              el.textContent = txt[i] === " " ? "\\u00a0" : (txt[i] || "");
              el.style.opacity = String(ease((local - .12 - i * .03) / .35));
              el.style.transform = \`translateY(\${(1 - p) * 22}px)\`;
            });
          }
          if (type === "page") {
            letters.forEach((el, i) => {
              const p = ease((local - .16 - i * .05) / .78);
              el.style.opacity = String(p);
              el.style.transform = \`rotateY(\${(1 - p) * -100}deg) translateX(\${(1 - p) * -22}px)\`;
            });
          }
          if (type === "underline") {
            const pLine = ease((local - .1) / .7);
            const word = scene.querySelector(".word");
            if (word) {
              word.style.textShadow = \`0 \${70 * pLine}px 0 rgba(248,238,233,\${.5 * pLine})\`;
            }
            letters.forEach((el, i) => {
              const p = ease((local - .36 - i * .035) / .6);
              el.style.opacity = String(p);
              el.style.transform = \`translateY(\${(1 - p) * -20}px)\`;
            });
          }
          if (type === "cursor") {
            const sweep = ease((local - .16) / 1.22);
            letters.forEach((el, i) => {
              const lock = ease((sweep * (letters.length + 1) - i) / 1.1);
              el.style.opacity = String(.22 + lock * .78);
              el.style.filter = \`blur(\${(1 - lock) * 7}px)\`;
              el.style.transform = \`translateY(\${(1 - lock) * 12}px)\`;
            });
          }
          if (!["fade","rise","slide","scale","rotate","blur","echo","radial","wave","slice","glow","shadow","gravity","pixel","mirror","rubber","scan","crop","counter","page","underline","cursor"].includes(type)) {
            animate("fade", scene, letters, local, dur);
          }
        };

        const update = (timeSec) => {
          const t = ((timeSec % totalDuration) + totalDuration) % totalDuration;
          document.querySelectorAll(".scene").forEach(reset);
          scenes.forEach((def) => {
            const scene = document.querySelector(def.selector);
            if (!scene) return;
            const local = t - def.start;
            if (local < 0 || local > def.dur) return;
            scene.style.opacity = String(Math.min(clamp(local / .2), clamp((def.dur - local) / .28)));
            show(scene.querySelector(".effect-tag"), (local - .08) / .5, 12);
            const letters = [...scene.querySelectorAll(".word > .char, .slice-base .char, .slice-layer .char")];
            animate(def.type, scene, letters, local, def.dur);
            scene.querySelectorAll(".cn-name,.desc,.usage").forEach((el, i) => show(el, (local - (.9 + i * .12)) / .7));
          });
        };

        if (fixedMs !== null) {
          update(Number(fixedMs) / 1000);
          return;
        }
        const started = performance.now();
        const tick = () => {
          update((performance.now() - started) / 1000);
          requestAnimationFrame(tick);
        };
        tick();
      })();
    </script>
  </body>
</html>
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, html, "utf8");
console.log(`Generated ${outPath}`);
