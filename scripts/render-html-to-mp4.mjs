#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";

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

const htmlArg = args.get("html");
if (!htmlArg) {
  throw new Error("Missing --html path/to/index.html");
}

const htmlPath = path.resolve(process.cwd(), htmlArg);
const outPath = path.resolve(process.cwd(), args.get("out") || "output/motion-effects.mp4");
const fps = Number(args.get("fps") || 10);
const duration = Number(args.get("duration") || 22.5);
const width = Number(args.get("width") || 1080);
const height = Number(args.get("height") || 1920);
const quality = Number(args.get("quality") || 92);
const totalFrames = Math.ceil(duration * fps);

if (!fs.existsSync(htmlPath)) {
  throw new Error(`HTML not found: ${htmlPath}`);
}

const chromeCandidates = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
];
const chromePath = args.get("chrome") || chromeCandidates.find((candidate) => fs.existsSync(candidate));
if (!chromePath) {
  throw new Error("Chrome or Edge executable not found. Pass --chrome C:\\path\\to\\chrome.exe");
}

const outDir = path.dirname(outPath);
const framesDir = path.join(outDir, "frames-render");
fs.mkdirSync(framesDir, { recursive: true });

const htmlUrl = `file:///${htmlPath.replaceAll("\\", "/").replaceAll(" ", "%20")}`;
console.log(`Capturing ${totalFrames} frames with ${chromePath}`);

for (let i = 0; i < totalFrames; i += 1) {
  const tMs = Math.max(1, Math.round((i / fps) * 1000));
  const framePath = path.join(framesDir, `frame-${String(i).padStart(4, "0")}.jpg`);
  const frameUrl = `${htmlUrl}?renderMs=${tMs}`;
  const result = spawnSync(chromePath, [
    "--headless",
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-background-networking",
    "--disable-component-update",
    "--disable-gpu",
    "--disable-gpu-sandbox",
    "--disable-gpu-compositing",
    "--hide-scrollbars",
    "--mute-audio",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=1000",
    `--window-size=${width},${height}`,
    `--screenshot=${framePath}`,
    frameUrl,
  ], {
    stdio: "pipe",
    windowsHide: true,
  });

  if (result.status !== 0 || !fs.existsSync(framePath)) {
    const stderr = result.stderr ? result.stderr.toString() : "";
    throw new Error(`Frame capture failed at ${i} (${tMs}ms): ${stderr}`);
  }
  if (i % 20 === 0) console.log(`Captured ${i + 1}/${totalFrames}`);
}

console.log("Encoding MP4 with ffmpeg...");
const ffmpeg = spawnSync("ffmpeg", [
  "-y",
  "-framerate", String(fps),
  "-i", path.join(framesDir, "frame-%04d.jpg"),
  "-c:v", "libx264",
  "-pix_fmt", "yuv420p",
  "-crf", "18",
  "-movflags", "+faststart",
  outPath,
], {
  stdio: "inherit",
  windowsHide: true,
});

if (ffmpeg.status !== 0) {
  throw new Error(`ffmpeg failed with exit code ${ffmpeg.status}. Make sure ffmpeg is installed and available in PATH.`);
}

console.log(`Done: ${outPath}`);

