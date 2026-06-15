# Effect Contract

Use this content contract for every page.

## Page Structure

| Part | Position | Purpose | Motion rule |
|---|---|---|---|
| Top info bar | top edge | series name and page number | visible with page fade; low opacity |
| English effect tag | above main word | names the effect type | subtle fade-up |
| Main English word | center | demonstrates the effect | only element with core animation |
| Chinese name | below main word | maps English to Chinese | subtle fade-up after the main word starts |
| Visual description | below Chinese name | one short sentence beginning with `视觉效果：` | subtle fade-up |
| Usage tags | below description | 3 short suitable scenes | final subtle fade-up or tiny stagger |
| Bottom info bar | bottom edge | English effect name and compact mechanism phrase | visible with page fade; low opacity |

Do not use the old labels `中文名：` or `效果：`. The visible copy should be:

```text
中文动效名
视觉效果：……
标签 / 标签 / 标签
```

## Timing

Default page duration: about `2.2s`.

| Time | Content |
|---|---|
| 0.00s - 0.20s | page fades in; top and bottom info bars visible |
| 0.10s - 0.60s | English effect tag fade-up |
| 0.15s - 1.05s | main English word performs the core motion |
| 0.90s - 1.30s | Chinese name fade-up |
| 1.05s - 1.55s | visual description fade-up |
| 1.20s - 1.75s | usage tags fade-up |
| final 0.30s | page fades out |

## Main Principle

Only the main English word demonstrates the core effect.

Supporting text must stay readable and restrained. Do not animate every text block with the same heavy effect.

## Description Line Breaks

Keep the visual description short. Prefer one line. If it must wrap, split at a phrase boundary and do not break a complete word or phrase awkwardly.
