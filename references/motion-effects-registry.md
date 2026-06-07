# Motion Effects Registry

本文件用于维护已经做过的 HTML 文字动效，作为后续新一组动效的去重依据。

使用方式：

1. 生成新一组前，先读取本 registry。
2. 按三层标准去重：名称、机制、观感。
3. 如果候选动效与已用动效相似，必须说明差异，否则不要使用。
4. 每完成一组新视频后，把 10 个动效追加到本 registry。

## 去重标准

| 层级 | 检查内容 | 判定方式 |
|---|---|---|
| 名称去重 | 英文名、中文名、data-word | 不能重复或近似改名 |
| 机制去重 | 入场方式、字符粒度、视觉处理 | 不能只是换名字复用旧机制 |
| 观感去重 | 最终视频画面 | 看起来不能和旧页高度相似 |

## 已用动效黑名单

| 期数 | 序号 | 英文名 | 中文名 | data-word / 主视觉词 | 机制关键词 | 适用场景 | 备注 |
|---|---:|---|---|---|---|---|---|
| Vol.1 | 1 | Slow Entry / Hero | 英雄式入场 | HERO | 大体量、慢落点、中心聚焦 | 封面、章节开场、关键问题页 | 避免再做“大字慢落中心” |
| Vol.1 | 2 | Sequential Reveal | 级联入场 | CASCADE | 逐字/逐元素顺序出现 | 列表、数据卡片、分组内容 | 与 stagger 类相近 |
| Vol.1 | 3 | Offset Timing / Stagger | 错峰入场 | STAGGER | 时间差、多层同词、错峰 | 标题回声、多层文案、节奏强化页 | 与 Echo/Shadow 类需区分 |
| Vol.1 | 4 | Directional | 定向入场 | DIRECTIONAL | 左右方向进入、对比切换 | Before/After、左右对比、观点切换 | 避免普通左右滑入 |
| Vol.1 | 5 | Slow Reveal | 慢揭示 | SLOW REVEAL | 按行缓慢展开 | 金句、结尾页、引用页 | 避免简单逐行淡入 |
| Vol.1 | 6 | Pulse | 脉冲入场 | PULSE | 放大、回落、短促强调 | KPI、按钮强调、数字亮相 | 与 Vol.5 Glow Pulse 名称/观感接近 |
| Vol.1 | 7 | Wave | 波浪入场 | WAVE | 波峰推进、连续滚动 | 短标题、品牌字标、轻量转场页 | 与 Wave Fold 相似，后续少用 wave |
| Vol.1 | 8 | Scale In / Zoom | 放大入场 | ZOOM | 缩放贴近、聚焦压迫 | 核心结论、章节标题、强提醒信息 | 避免基础 zoom in |
| Vol.1 | 9 | Mask Reveal | 遮罩揭示 | MASK REVEAL | 裁切边缘、遮罩显现 | 封面短句、产品名、品牌视觉页 | 与 Crop/Cut 类接近 |
| Vol.1 | 10 | Float | 漂浮入场 | FLOAT | 轻柔漂入、缓停 | 配图标题、情绪页、柔和转场 | 避免普通 float fade |
| Vol.2 | 1 | Live Input | 打字机入场 | TYPEWRITER | 逐字输入、生成感 | AI 生成、代码演示、观点开场 | 后续 cursor 类需避开逐字输出 |
| Vol.2 | 2 | Focus Pull | 模糊聚焦 | BLUR IN | 模糊到清晰、镜头对焦 | 悬念揭晓、概念提出、情绪开场 | 避免纯 blur-in |
| Vol.2 | 3 | Signal Break | 故障闪现 | GLITCH | 错位、抖动、色散恢复 | 科技感标题、AI 主题、反差观点 | 避免基础 glitch |
| Vol.2 | 4 | Decode Text | 乱码重组 | SCRAMBLE | 随机字符、解码重组 | 生成过程、信息解码、复杂概念理清 | 避免 scramble/decode |
| Vol.2 | 5 | Card Turn | 翻牌入场 | FLIP | 卡片翻面、切换感 | 观点反转、步骤切换、功能展示 | 与 mirror/page 需区分 |
| Vol.2 | 6 | Split Alignment | 切片错位 | - | 横向切片、错位滑入、重对齐 | 强冲击标题、转场页、视觉包装 | 与 Vol.5 Slice Shuffle 近似 |
| Vol.2 | 7 | Outline Draw | 描边书写 | STROKE | 轮廓描边、再填充 | 品牌字、设计标题、艺术页 | 避免 outline/stroke draw |
| Vol.2 | 8 | Marker Sweep | 高光扫过 | HIGHLIGHT | 色块扫过、重点点亮 | 关键词强调、金句、结论页 | 避免 marker/highlight sweep |
| Vol.2 | 9 | Spring Return | 弹性回弹 | ELASTIC | 拉伸、回弹、弹性节奏 | 轻松内容、活泼标题、短视频转场 | 与 Vol.5 Rubber Bounce 重复机制 |
| Vol.2 | 10 | Layered Space | 景深错层 | - | 多层不同速度、空间纵深 | 高级开场、个人网页、品牌页 | 避免 parallax/depth 层 |
| Vol.3 | 1 | Paper Fold | 折页入场 | FOLD | 纸页翻开、出版物质感 | 章节封面、作品集、演示转场 | 与 page/fold 类接近 |
| Vol.3 | 2 | Circular Entry | 螺旋入场 | SPIRAL | 旋转轨迹、聚拢中心 | 视觉开场、创意短片、品牌标题 | 与 radial/orbit 相似 |
| Vol.3 | 3 | Color Fill | 液态填充 | LIQUID | 色块漫过、液体填充 | 产品亮点、活动海报、重点强调 | 避免 liquid fill |
| Vol.3 | 4 | Editorial Mark | 印章落版 | STAMP | 印章压印、确认定稿 | 结论页、观点确认、发布声明 | 避免 stamp/press |
| Vol.3 | 5 | Running Line | 跑马字幕 | TICKER TICKER | 横向滚动、信息流 | 新闻感页面、提示条、动态信息 | 避免 marquee/ticker |
| Vol.3 | 6 | Around Center | 环绕聚合 | ORBIT | 围绕中心、收束成字 | 系统关系、中心概念、科技演示 | 与 Radial Spin 相似 |
| Vol.3 | 7 | Camera Blinds | 快门开合 | SHUTTER | 窄缝打开、快门揭示 | 摄影内容、画面揭晓、视觉转场 | 避免 shutter/blinds |
| Vol.3 | 8 | Explode / Assemble | 爆裂拼合 | BURST | 向外炸开、碎片拼回 | 冲击开场、转折瞬间、情绪爆点 | 避免 burst/explode/assemble |
| Vol.3 | 9 | After Image | 回声残影 | ECHO | 多层残影、声音回荡 | 情绪标题、音乐内容、观点余韵 | 与 Vol.5 Echo Trail 重复观感 |
| Vol.3 | 10 | Color Split | 棱镜分色 | PRISM | 彩色偏移、合成清晰 | 创意封面、潮流视觉、片尾收束 | 与 glitch/color split 接近 |
| Vol.4 | 1 | Optical Sweep | 扫描线入场 | SCANLINE | 扫描线、逐步照亮 | 科技标题、检索结果、信息识别 | 避免 scanline/sweep |
| Vol.4 | 2 | Crop Window | 裁切滑入 | CROP CUT | 裁切窗口、滑出 | 栏目标题、版式转场、产品名 | 与 mask/crop 类重复 |
| Vol.4 | 3 | Stair Rhythm | 阶梯上升 | STEP RISE | 阶梯高度、向上推进 | 增长数据、流程推进、路线图 | 避免 stair/step rise |
| Vol.4 | 4 | Width Expansion | 横向拉伸 | STRETCH | 压缩到横向展开 | 宽屏标题、空间释放、品牌字标 | 避免 stretch/expand |
| Vol.4 | 5 | Numeric Lock | 数字计数 | COUNT 10 | 数字滚动、目标值落定 | KPI、榜单排名、数据结论 | 避免 count-up/counter |
| Vol.4 | 6 | Page Turn | 翻页显现 | PAGE | 页面翻起、章节切换 | 章节切换、书摘内容、长文视频 | 与 fold/flip 需区分 |
| Vol.4 | 7 | Grid Snap | 网格锁定 | GRIDLOCK | 散落字母、吸附网格 | 系统说明、信息架构、工程感页面 | 避免 grid snap/lock |
| Vol.4 | 8 | Ink Spread | 墨迹扩散 | INK | 墨迹铺开、标题浮现 | 人文标题、书法感、杂志封面 | 避免 ink/brush spread |
| Vol.4 | 9 | Rule Emphasis | 下划线强调 | UNDERLINE | 线条定位、托出标题 | 重点观点、金句标注、标题强调 | 避免 underline/rule reveal |
| Vol.4 | 10 | Cursor Locate | 光标定位 | LOCATE | 光标横扫、字符锁定 | 系统检索、目标定位、技术开场 | 可用 cursor 但不能逐字输入 |
| Vol.5 | 1 | Echo Trail | 回声拖影 | ECHO TRAIL | 残影滑入、尾迹 | 情绪开场、音乐标题、观点回放 | 与 Vol.3 After Image 观感接近 |
| Vol.5 | 2 | Radial Spin | 放射旋入 | RADIAL | 圆周旋转、中心归位 | 主题揭晓、章节开场、焦点收束 | 与 spiral/orbit 接近 |
| Vol.5 | 3 | Wave Fold | 波浪折叠 | WAVE FOLD | 波浪、纸面翻折 | 情绪转场、生活方式、柔性标题 | 与 Vol.1 Wave 相似 |
| Vol.5 | 4 | Slice Shuffle | 切片重组 | SHUFFLE | 上下切片、错位归位 | 快节奏剪辑、信息重组、转场标题 | 与 Vol.2 Split Alignment 重复机制 |
| Vol.5 | 5 | Glow Pulse | 光晕脉冲 | PULSE | 暗亮呼吸、柔光强调 | 重点提示、品牌口号、夜景氛围 | 与 Vol.1 Pulse 名称接近 |
| Vol.5 | 6 | Shadow Split | 影分离 | SPLIT | 影子错位、合并 | 悬念标题、人物观点、冲突表达 | 与 stagger/echo 需区分 |
| Vol.5 | 7 | Gravity Drop | 重力坠落 | GRAVITY | 高处坠落、回弹 | 结论落点、强观点、节奏卡点 | 后续可扩展但避免同款下落 |
| Vol.5 | 8 | Pixel Dust | 像素聚散 | PIXEL DUST | 像素尘点、聚合稳定 | 数字内容、AI 生成、数据可视化 | 避免 pixel/dust assemble |
| Vol.5 | 9 | Mirror Flip | 镜像翻转 | MIRROR | 镜像状态、翻转校正 | 反转观点、对照内容、前后变化 | 与 flip/page 类相近 |
| Vol.5 | 10 | Rubber Bounce | 弹性回弹 | BOUNCE | 拉扯、快速回弹 | 轻松开场、互动提示、活泼标题 | 与 Vol.2 Spring Return 重复机制 |
| Vol.6 | 1 | Weight Gain | 字重渐强 | WEIGHT | 字重增加、透明度显现、英文主视觉展示核心动效 | 重点观点、标题强调、结论落点 | 避免再做字重从轻到重的同款英文大字动效 |
| Vol.6 | 2 | Italic Lean | 倾斜回正 | LEAN | 倾斜姿态、skew 回正、英文主视觉展示核心动效 | 观点转向、态度强调、标题修正 | 避免后续重复 skew to upright 倾斜回正 |
| Vol.6 | 3 | Case Switch | 大小写切换 | CASE | 大小写交替、最终锁定、英文主视觉展示核心动效 | 命名展示、概念切换、风格转场 | 避免后续重复 case alternation |
| Vol.6 | 4 | Space Tighten | 字距靠近 | CLOSER | 字距从松到紧、英文主视觉展示核心动效 | 关系靠近、节奏收束、关键词聚焦 | 与 stretch/zoom 不同，后续避免字距靠近机制 |
| Vol.6 | 5 | Vowel Rise | 元音上浮 | VOWELS | 元音选择性上浮、归位、英文主视觉展示核心动效 | 英文标题、节奏提示、轻量转场 | 避免后续重复 selective vowel lift |
| Vol.6 | 6 | Quiet Shiver | 轻微颤动 | SHIVER | 短促微颤、非故障、英文主视觉展示核心动效 | 提醒信息、情绪波动、短促强调 | 与 Glitch 不同，后续避免轻颤机制 |
| Vol.6 | 7 | Dot Rhythm | 标点节奏 | DOTS... | 句尾标点逐个亮起、英文主视觉展示核心动效 | 悬念停顿、轻提示、口语节奏 | 避免后续重复 punctuation beat |
| Vol.6 | 8 | Accent Hop | 重音跳点 | ACCENT | 字符逐个加重上跳、英文主视觉展示核心动效 | 节奏标题、重点巡游、口播卡点 | 避免后续重复 moving stress |
| Vol.6 | 9 | Erase Return | 擦除回返 | ERASE | 透明度退去再恢复、英文主视觉展示核心动效 | 观点反复、记忆感、内容转折 | 与 Mask/Crop 不同，后续避免擦除回返 |
| Vol.6 | 10 | Settle Down | 稳定落点 | SETTLE | 位移回正、透明度稳定、英文主视觉展示核心动效 | 片尾收束、结论页、最终落点 | 后续避免同款安静落稳收尾 |
| Vol.7 | 1 | Stem Lift | 笔画上提 | STEMS | 字母竖向笔画选择性上提再落稳、英文主视觉展示核心动效 | 理性标题、结构强调、工具说明 | 避免后续重复 vertical stroke lift |
| Vol.7 | 2 | Cap Line | 顶线归齐 | CAPS | 字母高度归到同一顶线、英文主视觉展示核心动效 | 品牌字标、栏目标题、秩序强调 | 与 baseline/space 不同，后续避免 cap height settle |
| Vol.7 | 3 | Quiet Tremolo | 细频轻振 | TREMOLO | 极小透明度与位置频闪、英文主视觉展示核心动效 | 音乐标题、情绪波动、细节提示 | 与 glitch 不同，不做错位色散，后续避免 micro oscillation |
| Vol.7 | 4 | Letter Press | 字面压印 | PRESS | 字重与暗部同步加深，像压进纸面、英文主视觉展示核心动效 | 定稿声明、质感标题、结论确认 | 与 stamp 不同，不做印章落版，后续避免 pressed type |
| Vol.7 | 5 | Soft Kern Out | 字距舒展 | OPEN | 字距从紧到松打开、英文主视觉展示核心动效 | 舒展转场、片尾呼吸、空间释放 | 与 Space Tighten 方向相反，后续避免 spacing opens |
| Vol.7 | 6 | Glyph Fold-In | 字内折入 | FOLDIN | 字符自身轻微内折再展开、英文主视觉展示核心动效 | 设计标题、质感转场、细腻入场 | 与 page/fold 不同，不做页面翻折，后续避免 inner fold |
| Vol.7 | 7 | Serif Spark | 衬线闪点 | SERIF | 字母边缘短暂细小亮点、英文主视觉展示核心动效 | 高级标题、字体展示、细节强调 | 与 glow pulse 不同，不做整字呼吸，后续避免 edge glints |
| Vol.7 | 8 | Glyph Swap | 字形替换 | GLYPH | 字母短暂替换为相近字形后归位、英文主视觉展示核心动效 | 概念变体、标题实验、视觉开场 | 与 scramble/decode 不同，不做乱码重组，后续避免 glyph alternate |
| Vol.7 | 9 | Mono Snap | 等宽锁定 | MONO | 字符从不等宽过渡到等宽排列、英文主视觉展示核心动效 | 代码感标题、系统提示、工具流程 | 与 grid snap 不同，不做散落吸附，后续避免 fixed width lock |
| Vol.7 | 10 | Word Pinch | 中心轻收 | PINCH | 单词左右向中心轻微收拢后恢复、英文主视觉展示核心动效 | 重点收束、短促强调、观点聚焦 | 与 zoom/stretch 不同，后续避免 center squeeze |
| Vol.7 | 11 | Silent Drop | 静默下沉 | SINK | 字符极轻微下沉，重量慢慢出现、英文主视觉展示核心动效 | 沉稳结论、严肃标题、落点强调 | 与 gravity drop 不同，不做高处坠落，后续避免 quiet descent |
| Vol.7 | 12 | Final Etch | 细刻定稿 | ETCH | 文字边缘逐渐变锐、英文主视觉展示核心动效 | 片尾定稿、发布声明、最终标题 | 与 stroke draw 不同，不做描边书写，后续避免 sharpened edge |

## 高风险相似机制

这些机制已经多次出现，后续如果继续使用，必须有明显差异：

- 残影 / 回声：Vol.1 Stagger、Vol.3 After Image、Vol.5 Echo Trail。
- 切片 / 裁切 / 遮罩：Vol.1 Mask Reveal、Vol.2 Split Alignment、Vol.4 Crop Window、Vol.5 Slice Shuffle。
- 旋转 / 环绕 / 聚合：Vol.3 Spiral、Vol.3 Orbit、Vol.5 Radial Spin。
- 弹性 / 回弹：Vol.2 Spring Return、Vol.5 Rubber Bounce。
- 波浪 / 折叠：Vol.1 Wave、Vol.5 Wave Fold。
- 翻转 / 翻页：Vol.2 Card Turn、Vol.3 Paper Fold、Vol.4 Page Turn、Vol.5 Mirror Flip。
- 英文主视觉纯文字动效：Vol.6 Weight Gain、Vol.6 Italic Lean、Vol.6 Case Switch、Vol.6 Space Tighten、Vol.6 Vowel Rise、Vol.6 Quiet Shiver、Vol.6 Dot Rhythm、Vol.6 Accent Hop、Vol.6 Erase Return、Vol.6 Settle Down。
- 字形微结构 / 字体细节：Vol.7 Glyph Swap、Vol.7 Stem Lift、Vol.7 Mono Snap、Vol.7 Cap Line、Vol.7 Quiet Tremolo、Vol.7 Letter Press、Vol.7 Soft Kern Out、Vol.7 Glyph Fold-In、Vol.7 Serif Spark、Vol.7 Word Pinch、Vol.7 Silent Drop、Vol.7 Final Etch。

## 新一组候选前置要求

新建 Vol.8 或后续系列前，先输出候选表，至少包含：

| 字段 | 要求 |
|---|---|
| 英文名 | 不与 registry 重复 |
| 中文名 | 不与 registry 重复 |
| 核心机制 | 不复用高风险相似机制 |
| 与旧动效差异 | 必须说明 |
| 适用场景 | 必须具体 |

未经确认，不要直接写代码。
