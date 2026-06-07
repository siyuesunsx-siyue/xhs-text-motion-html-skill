# xhs-text-motion-html-skill

一个用于生成小红书 9:16 HTML 文字动效页面的 Codex Skill。

关键词：

```text
xhs-text-motion-html-skill
Xiaohongshu
小红书
9:16 HTML
text motion
文字动效
Codex skill
HTML 动画
内容创作
```

## 这个 Skill 能做什么

它可以生成和我之前做的小红书文字动效视频类似的 HTML 页面：

- 固定 1080 x 1920 画布
- 每组默认 10 页
- 每页展示 1 种文字动效
- 每页包含英文动效名、中文名、效果描述、适用场景
- 版式、字体、字号、页面结构、时间节奏都已固化
- 支持自定义底板颜色
- 支持自定义 10 个文字动效配置
- 生成 HTML 后，可继续用脚本渲染成 MP4

## 快速生成 HTML

```powershell
node scripts/create-text-motion-html.mjs --out output/index.html
```

生成后，用浏览器打开：

```text
output/index.html
```

## 自定义底板颜色

```powershell
node scripts/create-text-motion-html.mjs --out output/index.html --primary "#5C6B73" --accent "#9D3D3F"
```

## 渲染成 MP4

生成 HTML 后，在 PowerShell 中执行：

```powershell
node scripts/render-html-to-mp4.mjs --html output/index.html --out output/motion-effects.mp4
```

注意：渲染需要本机安装 Chrome 或 Edge，并且需要 `ffmpeg` 可用。

## 自定义 10 个文字动效

可以准备一个 JSON 文件：

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

然后执行：

```powershell
node scripts/create-text-motion-html.mjs --effects my-effects.json --out output/index.html
```

## 已包含内容

```text
SKILL.md
agents/openai.yaml
assets/default-effects.json
references/effect-contract.md
references/fixed-style.md
references/motion-effects-registry.md
scripts/create-text-motion-html.mjs
scripts/render-html-to-mp4.mjs
```

其中 `references/motion-effects-registry.md` 记录了前 5 组已经做过的 50 个文字动效，用来避免后续重复。

## 关于我

我是一个 all in 在 AI 学习和应用方向的爱好者，主要方向在个人工作提效、内容创作领域等。

现在建立了一个 99 元的年度社群，有兴趣就加入一起探索！

微信号：

```text
sx18652268625
```


