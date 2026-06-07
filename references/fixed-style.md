# Fixed Style

The generated HTML must use this fixed visual system.

## Canvas

```css
--w: 1080px;
--h: 1920px;
```

## Default Colors

The generator defaults to a silk-like pair:

```css
--primary: #5C6B73;
--accent: #9D3D3F;
--accent-on: #F8EEE9;
--ink: #10181B;
--muted: rgba(16, 24, 27, .66);
```

Users may override:

- `--primary`
- `--accent`

Do not introduce more than two background plates in one deck.

## Typography

Use:

```css
--font-ui: "Microsoft YaHei UI", "PingFang SC", "Noto Sans SC", sans-serif;
--font-serif: "Times New Roman", Georgia, serif;
--font-mono: "IBM Plex Mono", "JetBrains Mono", Consolas, monospace;
```

Fixed sizes:

| Element | Size |
|---|---:|
| topline / footline | 19-21px |
| effect tag | 17px |
| main word | 126px |
| long main word | 92px |
| short main word | 158px |
| Chinese name | 36px |
| description | 32px |
| usage tag | 21px |

## Layout

Use a centered 3-row grid:

- top metadata row
- center content group
- bottom metadata row

Main content gap:

```css
gap: 30px;
```

Page padding:

```css
padding: 72px 68px 84px;
```

Frame:

```css
inset: 32px;
border: 1px solid current line token;
```

