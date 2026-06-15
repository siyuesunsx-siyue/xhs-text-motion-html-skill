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
| Vol.8 | 1 | Heat Haze | 热雾浮字 | HAZE | 字形边缘轻微热浪折射后稳定、英文主视觉展示核心动效 | 夏日标题、情绪开场、氛围转场 | 与 blur/focus/glitch 不同，不做对焦或故障，后续避免 warm refraction |
| Vol.8 | 2 | Clay Mold | 陶模成形 | MOLD | 字母像软陶被压出轮廓并逐渐成型、英文主视觉展示核心动效 | 手作质感、品牌标题、慢节奏开场 | 与 press/stamp 不同，不做压印定稿，后续避免 pressed contour |
| Vol.8 | 3 | Sand Settle | 沙粒沉积 | SAND | 字符从细碎颗粒感聚稳成完整字面、英文主视觉展示核心动效 | 旅行标题、回忆感、片尾收束 | 与 pixel dust 不同，不做像素聚散，后续避免 grain settle |
| Vol.8 | 4 | Sun Breathe | 日光呼吸 | SUN | 字面亮度轻轻舒张再回落、英文主视觉展示核心动效 | 温暖标题、生活方式、柔和强调 | 与 glow pulse 不同，不做整字光晕脉冲，后续避免 soft luminance |
| Vol.8 | 5 | Score Flick | 比分闪定 | SCORE | 字符像记分牌短暂翻跳后迅速锁定、英文主视觉展示核心动效 | 体育标题、数据亮相、赛事情绪 | 与 count/numeric lock 不同，不做数字计数，后续避免 scoreboard lock |
| Vol.8 | 6 | Crowd Surge | 人浪推字 | CROWD | 字符按小幅起伏节奏向中间涌动后归位、英文主视觉展示核心动效 | 群体情绪、热闹开场、节奏标题 | 与 wave 不同，不做连续波峰推进，后续避免 crowd wave |
| Vol.8 | 7 | Whistle Cut | 哨声切入 | WHISTLE | 文字瞬间吹亮并快速收紧定住、英文主视觉展示核心动效 | 开场提示、规则切换、短促强调 | 与 cursor/scan 不同，不做光标定位或扫描线，后续避免 sharp cue |
| Vol.8 | 8 | Turf Roll | 草纹滚入 | TURF | 字母底部带方向感滚入并稳住、英文主视觉展示核心动效 | 足球主题、场地感、运动标题 | 与 directional slide 不同，强调底部滚动质感，后续避免 ground roll |
| Vol.8 | 9 | Banner Unfurl | 旗帜舒展 | BANNER | 单词像横幅布料轻微展开后回正、英文主视觉展示核心动效 | 球迷口号、宣言标题、章节开场 | 与 fold/page 不同，不做页面翻折，后续避免 cloth release |
| Vol.8 | 10 | Net Catch | 球网收字 | NET | 字符被网格张力轻拉后弹回笔直字形、英文主视觉展示核心动效 | 进球瞬间、结果揭晓、重点捕捉 | 与 grid snap 不同，不做散落吸附，后续避免 net tension |
| Vol.8 | 11 | Match Burn | 赛点升温 | BURN | 字面温度和力度逐步上升后冷静落稳、英文主视觉展示核心动效 | 高潮标题、决胜时刻、强观点 | 与 weight gain 不同，强调色温和赛点升温，后续避免 rising heat |
| Vol.8 | 12 | Trophy Rise | 奖杯升格 | TROPHY | 字符细微抬升并庄重定格、英文主视觉展示核心动效 | 夺冠标题、终章页面、荣耀感 | 与 gravity/drop 不同，不做坠落回弹，后续避免 honor lift |
| Vol.9 | 1 | Hinge Set | 铰点归位 | HINGE | 字符绕小铰点轻微转正后落位、英文主视觉展示核心动效 | 理性开场、结构标题、概念校准 | 与 flip/page 不同，不做翻面或页面翻折，后续避免 small pivot |
| Vol.9 | 2 | Thread Pull | 细线牵引 | THREAD | 字母像被细线从偏移处牵回并收成一行、英文主视觉展示核心动效 | 线索整理、观点回收、安静转场 | 与 directional slide 不同，强调细线牵回感，后续避免 fine pull |
| Vol.9 | 3 | Static Bloom | 静噪显影 | STATIC | 字面从细微静噪透明度里显影，不做错位故障、英文主视觉展示核心动效 | 信息显影、悬念标题、冷静开场 | 与 glitch/tremolo 不同，不做位置抖动或色散，后续避免 quiet noise |
| Vol.9 | 4 | Brace Close | 括合收拢 | BRACE | 两端字符向内轻轻合上并框定单词、英文主视觉展示核心动效 | 重点归纳、定义标题、结论框定 | 与 pinch 不同，不压缩整词，只做两端括合感，后续避免 inward brace |
| Vol.9 | 5 | Index Shift | 索引换档 | INDEX | 字符像索引位短暂换档后落到正确序列、英文主视觉展示核心动效 | 目录标题、编号切换、信息排序 | 与 typewriter/count 不同，不做逐字输入或数字计数，后续避免 slot shift |
| Vol.9 | 6 | Phase Lock | 相位锁定 | PHASE | 字符亮度先不同步，再一起锁到同一节拍、英文主视觉展示核心动效 | 节奏统一、系统标题、状态同步 | 与 tremolo 不同，不做持续微振，后续避免 sync phase |
| Vol.9 | 7 | Notion Step | 概念进格 | NOTION | 字符按小格距递进到位、英文主视觉展示核心动效 | 方法论、知识标题、流程提示 | 与 stair/grid snap 不同，不做阶梯上升或散落吸附，后续避免 micro step |
| Vol.9 | 8 | Relay Pass | 接力点亮 | RELAY | 亮度从一个字符传到下一个后整词稳定、英文主视觉展示核心动效 | 协作标题、流程交接、团队主题 | 与 accent hop 不同，不做上跳重音，后续避免 light relay |
| Vol.9 | 9 | Margin Pull | 边距牵回 | MARGIN | 字符从页边方向轻轻回收，留白被整理、英文主视觉展示核心动效 | 版面收束、留白标题、秩序建立 | 与 space tighten/open 不同，不以字距变化为核心，后续避免 margin return |
| Vol.9 | 10 | Kernel Pop | 核心弹出 | KERNEL | 单词中心先显现，再带出两侧字符、英文主视觉展示核心动效 | 核心概念、主题亮相、观点展开 | 与 zoom/pulse 不同，不做整词缩放脉冲，后续避免 center seed |
| Vol.9 | 11 | Meter Tick | 刻度轻跳 | METER | 字符像小刻度轻跳一次后精准归位、英文主视觉展示核心动效 | 数据标题、工具状态、轻量强调 | 与 bounce/accent hop 不同，幅度更小且偏测量感，后续避免 measure tick |
| Vol.9 | 12 | Quiet Seal | 静默封存 | SEAL | 文字轻轻收紧透明度，像内容被安静封存、英文主视觉展示核心动效 | 片尾收束、结论保留、安静落点 | 与 settle/etch 不同，不做锐化或落点下沉，后续避免 soft closure |
| Vol.10 | 1 | Kickoff Slide | 开球滑入 | KICKOFF | 字符像开球线路向前滑出后停住、英文主视觉展示核心动效 | 赛事开场、主题亮相、节奏启动 | 与 directional 不同，强调短距离启动线路，后续避免 start run |
| Vol.10 | 2 | Lane Trace | 跑道描行 | LANE | 字母沿隐形跑道轻轻描出，轨迹干净克制、英文主视觉展示核心动效 | 运动路径、流程展示、科技标题 | 与 stroke draw 不同，不做描边书写，后续避免 track path |
| Vol.10 | 3 | Flood Flare | 场灯亮起 | FLARE | 文字像被场灯从暗处照亮后快速收稳、英文主视觉展示核心动效 | 夜赛开场、重点亮相、氛围建立 | 与 glow pulse/sun breathe 不同，不做呼吸脉冲，后续避免 stadium light |
| Vol.10 | 4 | Vector Check | 向量校准 | VECTOR | 字符带微小方向偏差后校准到同一轴线、英文主视觉展示核心动效 | 战术分析、方向说明、系统标题 | 与 cap line 不同，不做高度归齐，后续避免 axis align |
| Vol.10 | 5 | Press Line | 压迫成线 | PRESS | 字符从分散压力里收成一条线，像阵型压紧、英文主视觉展示核心动效 | 战术标题、对抗分析、局势推进 | 与 Letter Press 不同，不做字面压印，后续避免 shape compress |
| Vol.10 | 6 | Whip Pass | 疾传掠过 | WHIP | 字符带短促拖速掠过后干净停住、英文主视觉展示核心动效 | 快速转场、传球节奏、高能片段 | 与 echo trail 不同，不保留残影尾迹，后续避免 fast pass |
| Vol.10 | 7 | Freeze Frame | 定格锁帧 | FREEZE | 文字短暂停在半透明状态，像关键瞬间被锁住、英文主视觉展示核心动效 | 关键回放、瞬间分析、观点暂停 | 与 settle 不同，强调中段定格，后续避免 held frame |
| Vol.10 | 8 | Angle Read | 角度读入 | ANGLE | 字符从轻微斜向读入后校回正面、英文主视觉展示核心动效 | 视角切换、战术讲解、镜头说明 | 与 italic lean 不同，不做整词倾斜回正，后续避免 view angle |
| Vol.10 | 9 | Table Climb | 榜位攀升 | CLIMB | 字符以小幅层级向上归位，像排名逐格上升、英文主视觉展示核心动效 | 积分榜、排名变化、数据标题 | 与 stair rhythm 不同，不做阶梯整体上升，后续避免 rank rise |
| Vol.10 | 10 | Huddle Form | 围合成阵 | HUDDLE | 字符从四周轻轻围合成稳定标题阵型、英文主视觉展示核心动效 | 团队主题、阵容介绍、赛前动员 | 与 orbit/assemble 不同，不做环绕或爆裂拼合，后续避免 team gather |
| Vol.10 | 11 | Sprint Tap | 冲刺点触 | SPRINT | 字符依次轻触前移一小步，像短距离冲刺启动、英文主视觉展示核心动效 | 速度标题、短促强调、进攻推进 | 与 accent hop/meter tick 不同，更偏前推动作，后续避免 quick step |
| Vol.10 | 12 | Final Lock | 终局锁定 | FINAL | 文字从轻微浮动中收住，最终像比分一样定格、英文主视觉展示核心动效 | 结尾页、赛果确认、最终观点 | 与 quiet seal 不同，强调赛果锁定感，后续避免 final state |
| Vol.11 | 1 | Turf Cut | 草纹切入 | TURF | 字母像被草纹方向轻切后合成清晰标题、英文主视觉展示核心动效 | 草场开场、运动标题、场地氛围 | 与 Turf Roll 不同，不做滚入，后续避免 grass grain |
| Vol.11 | 2 | Touchline Hold | 边线停靠 | LINE | 字符贴着隐形边线停稳，像球停在界线旁、英文主视觉展示核心动效 | 边路进攻、规则说明、镜头定位 | 与 underline/rule 不同，不画线强调，后续避免 line stop |
| Vol.11 | 3 | Back Four | 四后卫排开 | BACKFOUR | 字符像防线一样横向排开并保持克制间距、英文主视觉展示核心动效 | 阵型讲解、防守主题、战术页 | 与 Press Line 不同，不做压迫成线，后续避免 defense line |
| Vol.11 | 4 | Cleat Mark | 钉痕压入 | CLEAT | 字面像被鞋钉轻压短暂下陷后回弹、英文主视觉展示核心动效 | 对抗瞬间、动作标题、质感强调 | 与 Letter Press/Clay Mold 不同，强调鞋钉触地，后续避免 stud mark |
| Vol.11 | 5 | Cross Run | 交叉跑位 | CROSS | 字符从相反方向交错掠过后回到整齐队形、英文主视觉展示核心动效 | 跑位分析、进攻线路、节奏切换 | 与 Cross/Directional 不同，强调交叉跑位，后续避免 cross motion |
| Vol.11 | 6 | Offside Step | 越位回撤 | OFFSIDE | 个别字符先越出队列再回撤到合法位置、英文主视觉展示核心动效 | 判罚解释、战术复盘、规则科普 | 与 Margin Pull 不同，只做局部越位回撤，后续避免 step back |
| Vol.11 | 7 | Possession Roll | 控球滚动 | POSSESS | 亮度像控球权一样在字符间转移后稳定、英文主视觉展示核心动效 | 控球数据、局势分析、节奏控制 | 与 Relay Pass 不同，强调控球权滚动，后续避免 control roll |
| Vol.11 | 8 | Box Entry | 禁区入场 | BOX | 字符从四角小范围进入中心，像压进禁区、英文主视觉展示核心动效 | 禁区机会、进攻分析、关键区域 | 与 Huddle Form 不同，方向更像区域压入，后续避免 area enter |
| Vol.11 | 9 | VAR Confirm | 回看确认 | VAR | 文字短暂复核后以清晰结果确认、英文主视觉展示核心动效 | 判罚确认、争议回看、结果揭晓 | 与 Static Bloom 不同，不做静噪显影，后续避免 review lock |
| Vol.11 | 10 | Header Lift | 头球上顶 | HEADER | 字符从低位轻轻上顶，到达高点后落稳、英文主视觉展示核心动效 | 空中对抗、进攻瞬间、动作标题 | 与 Vowel Rise/Table Climb 不同，不做选择性元音或榜位上升，后续避免 aerial lift |
| Vol.11 | 11 | Penalty Pause | 点球停顿 | PENALTY | 字符在出脚前短暂停顿，再迅速完成定格、英文主视觉展示核心动效 | 点球时刻、悬念营造、关键选择 | 与 Freeze Frame 不同，强调出脚前停顿，后续避免 spot pause |
| Vol.11 | 12 | Fulltime Fade | 终场淡停 | FULLTIME | 文字像终场哨后慢慢降噪并停在最后一帧、英文主视觉展示核心动效 | 片尾收束、赛后总结、结果落点 | 与 Final Lock 不同，不做比分锁定，后续避免 match close |
| Vol.12 | 1 | Horizon Rise | 地平升字 | HORIZON | 字符从低位地平位置升起，像远处景物慢慢出现、英文主视觉展示核心动效 | 旅途开场、远景标题、清晨氛围 | 与 Header Lift 不同，不做动作上顶，后续避免 low reveal |
| Vol.12 | 2 | Asphalt Drift | 路面缓漂 | ASPHALT | 字母像车道上的微小偏移，缓慢漂回正中、英文主视觉展示核心动效 | 公路主题、路线叙事、慢速转场 | 与 directional slide 不同，不做快速滑入，后续避免 road drift |
| Vol.12 | 3 | Dune Slide | 沙丘滑移 | DUNE | 字符带柔软斜坡感滑入，像沙丘表面被风推过、英文主视觉展示核心动效 | 沙漠场景、地貌标题、暖调转场 | 与 Wave Fold 不同，不做波浪折叠，后续避免 slope shift |
| Vol.12 | 4 | Mile Marker | 里程标记 | MILE | 字符像路边里程牌依次立起，最后形成清晰提示、英文主视觉展示核心动效 | 进度标题、旅行节点、阶段提示 | 与 Meter Tick 不同，不做刻度轻跳，后续避免 road marker |
| Vol.12 | 5 | Compass Set | 罗盘定向 | COMPASS | 字符从轻微偏角转回正向，像罗盘完成一次定位、英文主视觉展示核心动效 | 方向选择、地图标题、路线规划 | 与 Vector Check 不同，不做轴线校准，后续避免 bearing set |
| Vol.12 | 6 | Dust Veil | 沙幕显字 | DUST | 文字从一层轻沙般的模糊里显出，随后变得干净、英文主视觉展示核心动效 | 荒野标题、记忆感、氛围开场 | 与 Sand Settle 不同，不做颗粒沉积，后续避免 soft veil |
| Vol.12 | 7 | Overpass Shade | 桥影掠过 | SHADE | 字面短暂压暗再恢复，像驶过高架桥的阴影、英文主视觉展示核心动效 | 城市道路、转场标题、节奏过渡 | 与 Marker Sweep 不同，不做高亮扫过，后续避免 passing shade |
| Vol.12 | 8 | Route Bend | 路线转弯 | ROUTE | 字符沿轻微弯道错位入场，最后回到直线标题、英文主视觉展示核心动效 | 路线变化、地图讲解、观点转向 | 与 Radial Spin/Orbit 不同，不做圆形旋转，后续避免 soft bend |
| Vol.12 | 9 | Checkpoint | 检查点停靠 | CHECK | 字符逐个停靠到检查点，像路线上的短暂停留、英文主视觉展示核心动效 | 任务节点、流程确认、旅行清单 | 与 Penalty Pause 不同，不做悬念停顿，后续避免 stop point |
| Vol.12 | 10 | Altitude Set | 海拔定高 | ALTITUDE | 字符在上下微差中找到高度，最后停在同一层面、英文主视觉展示核心动效 | 山路标题、高度变化、数据说明 | 与 Cap Line/Table Climb 不同，不做大写高度归齐或排名上升，后续避免 height settle |
| Vol.12 | 11 | Trail Mark | 轨迹留痕 | TRAIL | 字符留下极短的方向痕迹，再收回到本体、英文主视觉展示核心动效 | 路线回顾、行动轨迹、过程总结 | 与 Echo Trail 不同，不保留明显残影尾迹，后续避免 brief trace |
| Vol.12 | 12 | Sunset Hold | 日落停驻 | SUNSET | 文字像日落后慢慢降低亮度，安静停在画面里、英文主视觉展示核心动效 | 片尾收束、旅途结束、情绪落点 | 与 Sun Breathe/Fulltime Fade 不同，不做呼吸脉冲或终场降噪，后续避免 warm close |
| Vol.13 | 1 | Strait Open | 海峡打开 | STRAIT | 字符从狭窄中缓缓展开，像航道重新露出通行宽度、英文主视觉展示核心动效 | 局势开场、通道主题、希望提示 | 与 Space Tighten/Open Water 不同，强调狭窄海峡打开，后续避免 clear opening |
| Vol.13 | 2 | Channel Flow | 航道顺流 | CHANNEL | 字母沿同一方向轻轻流入，最后形成稳定航道、英文主视觉展示核心动效 | 流程讲解、航线标题、秩序恢复 | 与 Whip Pass/Asphalt Drift 不同，不做快速掠过或路面偏移，后续避免 guided stream |
| Vol.13 | 3 | Beacon Blink | 航标闪定 | BEACON | 字符像航标灯短促闪亮，随后一起稳定下来、英文主视觉展示核心动效 | 提示信息、风险提醒、重点亮相 | 与 Glow Pulse/Relay Pass 不同，不做整词光晕或字符传递，后续避免 signal pulse |
| Vol.13 | 4 | Tide Align | 潮汐归线 | TIDE | 字符上下轻微起伏，像潮位回到平稳线、英文主视觉展示核心动效 | 节奏缓和、海面氛围、状态回稳 | 与 Wave Fold 不同，不做波浪折叠，后续避免 level return |
| Vol.13 | 5 | Convoy Pace | 船队同速 | CONVOY | 字符先后进入同一节奏，像船队逐渐保持航速、英文主视觉展示核心动效 | 协同行动、队列主题、节奏统一 | 与 Phase Lock 不同，不做亮度相位锁定，后续避免 matched pace |
| Vol.13 | 6 | Narrow Gate | 窄门通行 | GATE | 字符被短暂压窄穿过中心，再恢复完整字形、英文主视觉展示核心动效 | 关口标题、限制解除、紧张转场 | 与 Word Pinch/Brace Close 不同，不做夹紧或括合，后续避免 tight pass |
| Vol.13 | 7 | Signal Clear | 信号转清 | SIGNAL | 文字从轻微失焦中转清，像通信信号恢复稳定、英文主视觉展示核心动效 | 信息确认、新闻标题、状态更新 | 与 Static Bloom 不同，不做静噪显影，后续避免 clean signal |
| Vol.13 | 8 | Safe Passage | 安全通行 | PASSAGE | 字符从紧张收束中放开，像通行压力被逐步释放、英文主视觉展示核心动效 | 积极转折、通航表达、结果说明 | 与 Space Tighten 不同，不以字距收缩为核心，后续避免 pressure release |
| Vol.13 | 9 | Current Turn | 海流转向 | CURRENT | 字符带着轻微转向弧度入场，最终回到笔直方向、英文主视觉展示核心动效 | 趋势变化、方向判断、局势转折 | 与 Route Bend 不同，强调海流方向转正，后续避免 flow bend |
| Vol.13 | 10 | Harbor Light | 港灯亮起 | HARBOR | 字面亮度由低到高收稳，像远处港口灯光出现、英文主视觉展示核心动效 | 安全抵达、暖调收束、目的地标题 | 与 Flood Flare/Sun Breathe 不同，不做场灯爆亮或呼吸，后续避免 port light |
| Vol.13 | 11 | Buoy Set | 浮标定点 | BUOY | 字符小幅漂浮后停稳，像浮标在水面找到定位、英文主视觉展示核心动效 | 定位提示、导航信息、轻量强调 | 与 Tiny Drift 不同，强调浮标定位停稳，后续避免 floating mark |
| Vol.13 | 12 | Open Water | 开阔水面 | OPEN | 文字从压缩状态舒展开，像驶出狭窄海峡后的开阔、英文主视觉展示核心动效 | 片尾收束、希望表达、通航结果 | 与 Strait Open 不同，强调终章释放与开阔水面，后续避免 wide release |

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
- 暖质感 / 赛事语义文字动效：Vol.8 Heat Haze、Vol.8 Clay Mold、Vol.8 Sand Settle、Vol.8 Sun Breathe、Vol.8 Score Flick、Vol.8 Crowd Surge、Vol.8 Whistle Cut、Vol.8 Turf Roll、Vol.8 Banner Unfurl、Vol.8 Net Catch、Vol.8 Match Burn、Vol.8 Trophy Rise。
- 冷静秩序 / 微交互文字动效：Vol.9 Hinge Set、Vol.9 Thread Pull、Vol.9 Static Bloom、Vol.9 Brace Close、Vol.9 Index Shift、Vol.9 Phase Lock、Vol.9 Notion Step、Vol.9 Relay Pass、Vol.9 Margin Pull、Vol.9 Kernel Pop、Vol.9 Meter Tick、Vol.9 Quiet Seal。
- 体育场 / 赛事科技文字动效：Vol.10 Kickoff Slide、Vol.10 Lane Trace、Vol.10 Flood Flare、Vol.10 Vector Check、Vol.10 Press Line、Vol.10 Whip Pass、Vol.10 Freeze Frame、Vol.10 Angle Read、Vol.10 Table Climb、Vol.10 Huddle Form、Vol.10 Sprint Tap、Vol.10 Final Lock。
- 草场 / 判罚 / 战术跑位文字动效：Vol.11 Turf Cut、Vol.11 Touchline Hold、Vol.11 Back Four、Vol.11 Cleat Mark、Vol.11 Cross Run、Vol.11 Offside Step、Vol.11 Possession Roll、Vol.11 Box Entry、Vol.11 VAR Confirm、Vol.11 Header Lift、Vol.11 Penalty Pause、Vol.11 Fulltime Fade。
- 旅途 / 道路 / 旷野文字动效：Vol.12 Horizon Rise、Vol.12 Asphalt Drift、Vol.12 Dune Slide、Vol.12 Mile Marker、Vol.12 Compass Set、Vol.12 Dust Veil、Vol.12 Overpass Shade、Vol.12 Route Bend、Vol.12 Checkpoint、Vol.12 Altitude Set、Vol.12 Trail Mark、Vol.12 Sunset Hold。
- 海峡 / 航道 / 通航信号文字动效：Vol.13 Strait Open、Vol.13 Channel Flow、Vol.13 Beacon Blink、Vol.13 Tide Align、Vol.13 Convoy Pace、Vol.13 Narrow Gate、Vol.13 Signal Clear、Vol.13 Safe Passage、Vol.13 Current Turn、Vol.13 Harbor Light、Vol.13 Buoy Set、Vol.13 Open Water。

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
