# Fixed Style

Use this visual system unless the user explicitly asks for a different one.

## Canvas

```css
--xhs-w: 1080px;
--xhs-h: 1920px;
```

Constrain `html`, `body`, and the root video element to `1080x1920` so local browser preview does not stretch to a wide desktop viewport.

## Background Plates

Use 2 or 3 solid background plates. Three-color loops are preferred for newer volumes.

Each plate needs:

- background color
- ink color
- muted text color
- subtle line/token color
- subtle dot-grid color

Use a dot grid, not a heavy line grid:

```css
.grid-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background-image: radial-gradient(circle, var(--dot) var(--dot-size), transparent calc(var(--dot-size) + 0.2px));
  background-size: 48px 48px;
}
```

Keep it visible but quiet. If it competes with text, reduce alpha before changing dot size.

## Typography

Use sans-serif for the main word and Chinese text:

```css
--xhs-sans: Inter, "Noto Sans Japanese", sans-serif;
--xhs-mono: "IBM Plex Mono", "JetBrains Mono", Consolas, monospace;
```

Recommended sizes:

| Element | Size |
|---|---:|
| top/bottom info bar | 20px |
| English effect tag | 18px |
| main word | 104px-126px |
| Chinese name | 34px |
| visual description | 30px |
| usage tag | 20px |

Use `letter-spacing: 0` on the main word. Do not scale font size with viewport width.

## Layout

Use one centered layout on every page:

```css
.scene {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 74px 72px 78px;
}

.center {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 28px;
  text-align: center;
}
```

No nested cards. No decorative frames unless the user specifically asks. Keep attention concentrated in the center.

## Render Safety

- Add `data-composition-id`, `data-duration`, `data-width`, and `data-height` to the root.
- If using HyperFrames, register `window.__timelines[compositionId]`.
- Do not use `performance.now()` or `requestAnimationFrame()` in the render-target composition.
- If a fallback preview loop is needed, ensure frame capture can seek with `?t=` or `?renderMs=`.
