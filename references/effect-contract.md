# Effect Contract

This file defines the fixed page content and timing model.

## Page Structure

Every page must contain:

| Part | Position | Purpose | Motion rule |
|---|---|---|---|
| Topline | top edge | series name and page number | visible with page fade |
| Effect tag | above main word | English effect category | subtle fade-up |
| Main English word | center | demonstrates the effect | uses the page's core animation |
| Chinese name | below main word | maps English to Chinese | subtle fade-up after main word starts |
| Description | below Chinese name | one-sentence effect explanation | subtle fade-up |
| Usage tags | below description | 3 suitable scenes | final subtle fade-up |
| Footline | bottom edge | English name and mechanism | visible with page fade |

## Timing

Default page duration:

```text
2.25 seconds
```

Recommended timing:

| Time | Content |
|---|---|
| 0.00s - 0.20s | page fades in; topline and footline visible |
| 0.10s - 0.60s | effect tag fade-up |
| 0.15s - 1.05s | main English word performs the core motion |
| 0.90s - 1.30s | Chinese name fade-up |
| 1.05s - 1.55s | description fade-up |
| 1.20s - 1.75s | usage tags fade-up |
| 1.90s - 2.25s | page fades out |

## Main Principle

Only the main English word demonstrates the core effect.

Supporting text must stay restrained and readable. Do not animate every text block with the same heavy effect.

