---
name: xhs-text-motion-html
description: Generate Xiaohongshu-ready 1080x1920 HTML text-motion demo videos in the same fixed layout, typography, timing, page structure, and motion-explanation format as the prior Codex-produced text effects series. Use when the user asks to create a 9:16 HTML text effects deck/video, a new group of 10 text motion effects, or a reusable motion-effects demo page.
---

# xhs-text-motion-html

Use this skill to create a single-file 1080x1920 HTML text-motion demo deck for Xiaohongshu videos.

The output must match the fixed system:

- 10 pages by default.
- 9:16 canvas: `1080 x 1920`.
- One effect per page.
- Same page structure on every page.
- Main English word demonstrates the effect itself.
- Chinese name, one-sentence effect description, and usage tags appear as supporting content.
- Fixed typography, sizing, layout rhythm, and timing.

## Fast Path

To generate a default demo immediately:

```bash
node scripts/create-text-motion-html.mjs --out output/index.html
```

Optional color overrides:

```bash
node scripts/create-text-motion-html.mjs --out output/index.html --primary "#5C6B73" --accent "#9D3D3F"
```

Optional custom effects file:

```bash
node scripts/create-text-motion-html.mjs --effects my-effects.json --out output/index.html
```

If the user only asks for "a new group", first produce a candidate table and wait for confirmation unless they explicitly ask to directly generate.

## Fixed Page Content Contract

Each page contains exactly these parts:

1. Topline: left series name, right page number.
2. Effect tag: English label above the main word.
3. Main English word: largest text, uses the page's core animation.
4. Chinese name: `中文名：...`.
5. Description: `效果：...`.
6. Usage tags: 3 short scene labels.
7. Footline: left English name, right compact mechanism phrase.

Read `references/effect-contract.md` for the exact content and timing contract.

## Fixed Visual Contract

Use the fixed layout and typography from `references/fixed-style.md`.

Do not:

- Change the page structure.
- Freely alter font sizes.
- Add decorative elements unrelated to the text effect.
- Use multiple layouts in one deck.
- Turn the page into a PPT explanation of this skill.

You may:

- Change the two background colors if the user asks.
- Change the 10 effects.
- Change series name / volume label.
- Keep the same fixed structure while implementing new motion mechanisms.

## Deduplication

When creating a continuation after the existing 5 groups, read:

```text
references/motion-effects-registry.md
```

Apply three-layer deduplication:

1. Names must not repeat.
2. Motion mechanisms must not repeat.
3. The final visual impression must not be highly similar.

If a proposed effect is close to an existing one, explain the difference before coding.

## Effects JSON Shape

Custom effect files must be an array of 10 objects:

```json
[
  {
    "english": "Echo Trail",
    "chinese": "回声拖影",
    "word": "ECHO TRAIL",
    "description": "文字带着残影滑入，像声音在画面里留下尾迹。",
    "usage": ["情绪开场", "音乐标题", "观点回放"],
    "type": "echo",
    "mechanism": "motion afterimage"
  }
]
```

Supported built-in `type` values:

```text
fade, rise, slide, scale, rotate, blur, echo, radial, wave, slice,
glow, shadow, gravity, pixel, mirror, rubber, scan, crop, counter,
page, underline, cursor
```

For unsupported types, implement a new branch in the generated HTML animation logic or map to the closest built-in type only after explaining the tradeoff.

## Delivery Requirements

When finished, provide:

- Path to the generated HTML.
- How to preview it in a browser.
- If rendering is needed, give a terminal command if a render script exists.
- Mention any effects that were mapped to built-in fallback types.

