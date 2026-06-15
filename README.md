# xhs-text-motion-html-skill

一个用于制作小红书 9:16 HTML 文字动效视频的 Codex / AI Agent Skill。

它沉淀的是一套固定方法：Swiss 极简版式、中心文字主视觉、每页一个文字动效、底板色彩轮播、HTML 预览、视频渲染命令、配乐与封面发布建议。

## 适用场景

- 做一组 10 个或 12 个文字动效
- 制作小红书 / 抖音 / Reels 竖屏文字动效视频
- 用 HTML + CSS/JS/GSAP 生成可渲染的 9:16 动画页面
- 让 AI agent 按固定结构继续制作新的 Vol.

## 标准流程

1. 设定动效数量  
   默认推荐 `12` 个，也可以指定 `10` 个或任意数量。

2. 设定背景板色彩  
   用户可以直接提供色号，也可以让 agent 根据主题推荐 2-3 个色号，并说明这组颜色的创意主题。

3. 制作 HTML  
   每页只让中间的英文主视觉大字展示核心文字动效，其余文字只做克制辅助入场。

4. 输出交付内容  
   - HTML 预览地址或本地路径
   - 本组文字动效简介表
   - 终端渲染视频命令
   - 剪映搜索背景音乐关键词
   - 封面制作建议
   - 社交媒体发布提醒

## 页面结构

每一页固定包含：

1. 顶部信息栏
2. 英文动效分类名
3. 主视觉英文大字
4. 中文名
5. `视觉效果：...`
6. 3 个适用场景标签
7. 底部信息栏

最重要的原则：只有主视觉英文大字负责展示核心动效。

## 可选脚本

仓库包含一个轻量生成器：

```powershell
node scripts/create-text-motion-html.mjs --effects effects.json --count 12 --out output/index.html --primary "#DDE7E3" --accent "#2F6F7E" --third "#D8A45F" --series "Guizang Motion" --volume "Vol.13"
```

也可以渲染成 MP4：

```powershell
node scripts/render-html-to-mp4.mjs --html output/index.html --out output/motion-effects.mp4 --duration 26.4 --fps 30
```

渲染需要本机安装 Chrome 或 Edge，并且 `ffmpeg` 在 PATH 中可用。

## 包含文件

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

`references/motion-effects-registry.md` 用来记录已经做过的文字动效，后续制作新组时要先读取它，避免重复。
