---
name: xhs-text-motion-html
description: Create Xiaohongshu-ready 9:16 HTML text-motion videos: fixed Swiss layout, 10/12/custom pages, user-provided or agent-suggested background colors, one text effect per page, HTML preview, render command, music-search keywords, cover guidance, and social-posting copy support. Use when the user asks for HTML文字动效, 小红书文字动效, 9:16 text motion, or a new group/volume of text-motion effects.
---

# xhs-text-motion-html

Create a single-file `1080x1920` HTML text-motion deck for Xiaohongshu-style videos.

The style is fixed: Swiss, minimal, centered, text-first. The large English word is the only element that demonstrates the motion. Everything else is supporting information.

## Workflow

1. Set effect count.
   - Default to `12` if the user says “新一组”.
   - Use `10`, `12`, or any user-specified count.
   - Keep one effect per page.

2. Set background colors.
   - If the user provides colors, use them directly.
   - If not, suggest a coherent set, preferably 3 colors.
   - Explain the creative theme in plain Chinese, e.g. “海雾浅白 / 海峡蓝绿 / 航标金：来自海雾散开、航道恢复、航标亮起”.
   - Pair text colors for contrast. For light plates use dark ink; for dark plates use off-white ink.

3. Propose or create effects.
   - Read `references/motion-effects-registry.md` when making a continuation, and avoid repeated names, mechanisms, and near-identical visual impressions.
   - Each effect needs: sequence number, English name, Chinese name, main word, visual mechanism, 3 usage scenes, compact English mechanism phrase.
   - If the user asks you to “直接制作”, proceed without waiting for approval.

4. Make the HTML.
   - One HTML file is enough unless the user asks for a full project.
   - Use the fixed content contract in `references/effect-contract.md`.
   - Use the fixed visual contract in `references/fixed-style.md`.
   - The root composition must include:
     - `data-composition-id`
     - `data-duration`
     - `data-width="1080"`
     - `data-height="1920"`
   - Register deterministic timeline data if using HyperFrames: `window.__timelines[compositionId] = tl`.
   - Avoid `performance.now()` and `requestAnimationFrame()` in render-target compositions. Use timeline time, `?t=`, or `?renderMs=` frame seeking.

5. Validate and preview.
   - Confirm scene count equals the requested effect count.
   - Confirm every scene has the same structure.
   - Confirm no old volume names, old composition ids, or stale output paths remain.
   - Provide a browser preview path or URL.

## Fixed Page Structure

Every page uses the same structure:

1. Top info bar: left series name, right page number.
2. English effect tag above the main word.
3. Main English word in the center, largest text, demonstrating the core effect.
4. Chinese name below the word.
5. One-sentence description beginning with `视觉效果：`.
6. Three short usage tags.
7. Bottom info bar: left English effect name, right compact mechanism phrase.

Do not add extra stickers, icons, cards, diagrams, ships, arrows, or explanatory graphics. The page should feel quiet and centered.

## Motion Rules

- Only the main English word performs the core animation.
- Chinese name, description, tags, top bar, and bottom bar use restrained fade-up or page fade.
- Page duration: about `2.2s`.
- Timing:
  - `0.00s-0.20s`: page fade in
  - `0.10s-0.60s`: English effect tag fade-up
  - `0.15s-1.05s`: main English word performs the effect
  - `0.90s-1.30s`: Chinese name fade-up
  - `1.05s-1.55s`: description fade-up
  - `1.20s-1.75s`: usage tags fade-up
  - final `0.30s`: page fade out

## Visual Rules

- Canvas: `1080x1920`.
- Layout: centered Swiss composition with top and bottom metadata bars.
- Background: use 2 or 3 solid plates, cycling by page.
- Background texture: subtle dot grid, not a heavy line grid.
- Text: high contrast, usually dark gray/black on light plates and off-white on dark plates.
- Main word size: around `104px-126px`; increase when user asks for a stronger central word.
- Avoid scattered elements. Keep the visual energy concentrated in the center.
- Avoid in-app instructional copy. The HTML itself is the artifact, not a tutorial page.

## Optional Generator

This repository includes a lightweight generator:

```powershell
node scripts/create-text-motion-html.mjs --effects effects.json --count 12 --out output/index.html --primary "#DDE7E3" --accent "#2F6F7E" --third "#D8A45F" --series "Guizang Motion" --volume "Vol.13"
```

`effects.json` is an array whose length matches `--count`:

```json
[
  {
    "english": "Strait Open",
    "chinese": "海峡打开",
    "word": "STRAIT",
    "description": "字符从狭窄中缓缓展开，像航道重新露出通行宽度。",
    "usage": ["局势开场", "通道主题", "希望提示"],
    "type": "scale",
    "mechanism": "clear opening"
  }
]
```

Render helper:

```powershell
node scripts/render-html-to-mp4.mjs --html output/index.html --out output/motion-effects.mp4 --duration 26.4 --fps 30
```

You may also write the HTML manually when custom motion quality matters more than generator coverage.

## Final Response Checklist

When finished, output:

1. HTML preview address or absolute local path.
2. The effect table:
   - sequence number
   - English name
   - Chinese name
   - visual mechanism
   - usage scenes
3. Next actions for the user:
   - Terminal render command to turn the HTML into video.
   - Background-music search keywords based on the color theme, and tell the user to search in Jianying/CapCut, combine, and export.
   - Cover-image guidance: recommend using ChatGPT or another image tool to create the cover from the color theme and series topic.
   - Social-posting reminder: include the effect table or a shortened version of it in the post body.

Keep the final response concise and practical.
