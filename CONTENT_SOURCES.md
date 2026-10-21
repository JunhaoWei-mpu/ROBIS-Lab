# 内容来源

本轮核对/静态整理日期：**2026-10-20**。外部页面后续可能变化；网站构建不依赖实时抓取。

## 实验室与成员

- 实验室名称、四个研究方向、成员名单与完整英文简介：作者本轮直接提供；随后补充 Long Liu 和 Jiangyu Lai，成员总数 10。未授予任何成员 Director/PI/Founder 等实验室职务。
- Junhao Wei：https://junhaowei-mpu.github.io/；邮箱与博士生身份一致。
- Yapeng Wang：https://fca-portal.mpu.edu.mo/profile/yapengwang；https://research.mpu.edu.mo/en/persons/yapeng-wang/。校方简介支持 Associate Professor；学校项目协调职务不作为实验室角色。
- Erli Lyu：https://fca-portal.mpu.edu.mo/profile/erlilyu；Lecturer；姓名使用作者指定的 Erli Lyu。
- Yuhuan Lu：https://ryanlu32.github.io/ 与 https://info.mpu.edu.mo/teldir2005/contact_list-ac.asp?dept_id=fca&lang=eng 存在 Assistant Professor / Lecturer 差异。已实际下载并读取目录，其中为 `Lecturer LU YUHUAN`；首版只显示 Faculty of Applied Sciences / Macao Polytechnic University。
- Dexing Yao：按作者提供信息，机构保留 **Macau University of Science and Technology**。
- Long Liu：作者本轮补充简介与 `longliu.png`，不推断入学年月。
- Jiangyu Lai：作者本轮补充 Environmental Intelligence 硕士生简介与 `jiangyu.png`，不推断毕业年份或入学年月。
- 其他学生未提供公开个人主页时只提供本站 Profile，不生成假链接。

## 平台与素材

- Chironix：本地《擎行Chironix_挑战杯商业计划书_最终提交版.docx》，使用 python-docx 读取正文、表格，并提取/实际查看文内图片。只摘录科研平台硬件、数据、软件和阶段说明；不提交原件、完整解析文本、商业或财务表格。
- 对外范围：X1 组装联调、遥操作数据管线、LiDAR 导航与双臂规划的实机验证，三路 RGB-D、HDF5/LeRobot、ROS2 Humble。D1/M1 模块定型、快换和自动联合标定标为进行中；不宣称 ACT/扩散/VLA 全链路已训练部署。
- 三款 UAV：作者提供的 `uav1.png`、`uav2.png`、`uav3.png`。仅记录真实设备与研究方向，不猜测传感器型号、飞行性能或论文实物验证。
- 第一套 ROBIS logo：作者 `1.png`，实际查看后去除大面积白边；只作确定性裁切和等比缩放。`2.png` 为备选，不用于主导航。
- MPU 官方标识：https://fca-portal.mpu.edu.mo/themes/default/assets/images/mpu-logo.svg；下载保留原始 SVG、比例与颜色。
- 素材对应、公开资源位置与未采用素材见 `ASSET_MANIFEST.md`。

## 论文

每条 `_data/publications.yaml` 都有 `source`，作者顺序/全名优先核对 arXiv/Crossref/ACL Anthology。

- ARIES-Mission2：https://arxiv.org/abs/2608.12763；venue 与 Accepted 状态来自 Junhao 主页；论文 Figure 1 用于项目页，未绑定本地 UAV 的实验结果。
- SAGA：https://arxiv.org/abs/2605.02301；ICONIP 2026 Accepted 来自 Junhao 主页；论文 Figure 1 用于项目页。
- KIO-planner：https://arxiv.org/abs/2605.19703；VTC 2026-Fall Accepted 来自 Junhao 主页，arXiv comments 也标明 VTC 录用。
- CLCO：https://doi.org/10.1016/j.aei.2026.105092 与 Crossref REST metadata。登记创建时间为 2026-07-29，卷期日期为 2026-11；仅显示 2026，不将卷期月份当作线上发布日期。作者主页已列正式期刊成果。代码分支在原仓库真实存在，链接保留。
- DHCRWOA：https://doi.org/10.1038/s41598-026-49084-z；Crossref online 日期 2026-06-26，venue Scientific Reports。
- Motion Planning of Manipulator by Points-Guided Sampling Network：https://doi.org/10.1109/TASE.2022.3168542；校方简介同时出现 online 2022 与 20(2) 卷期；Crossref 核对卷期 2023-04，本站按 2023 收录。
- MO-Transformer：https://doi.org/10.1109/IROS47612.2022.9981837；校方主页 + Crossref，IROS 2022。
- HyperFM：https://aclanthology.org/2025.acl-long.142/；ACL 2025 Volume 1 Long Papers，非 Findings。
- KnowLCP：https://doi.org/10.1609/aaai.v40i45.41244；Yuhuan 主页 + Crossref，2026-03-14。

研究配图来源：
- https://arxiv.org/html/2608.12763v1/ariesmission2_ppl.png （Figure 1）
- https://arxiv.org/html/2605.02301v1/media/SAGA.png （Figure 1）

项目页保留署名说明与论文入口。数据驱动的论文和项目介绍避免复制所有数值与 benchmark 结论，也不将成员加入实验室之前的工作归为 ROBIS 成立后的成果。

## 新闻与联系方式

- 新闻静态整理自 https://junhaowei-mpu.github.io/#news 的当前 13 条记录（2026.10 至 2025.12）。NCMMSC 2026 为 **4 篇**；只保留月份，不合成实验室累计统计。
- 按来源记录具体新闻，不重复添加姓名前缀，避免扩大成果归属。网页只提供自然来源入口，抓取信息留在本文件。未设置定期抓取任务。
- 联系人 Yapeng Wang，yapengwang@mpu.edu.mo；地点限学校/学院、Macao, China。未推测实验室房间或统一邮箱。

## 设计参考（仅结构）

- https://rpg.ifi.uzh.ch/ ：研究使命与新闻。
- https://uav.hkust.edu.hk/ ：项目与真实资源连接。
- https://theairlab.org/ ：项目图像入口。
- https://asl.ethz.ch/ ：自主系统技术主线。
- https://rsl.ethz.ch/ ：独立平台入口。
- https://www.kumarrobotics.org/ ：稳定的研究、团队、论文与新闻位置。

访问限制和链接检查结果见 `VALIDATION.md`；抓取失败不直接认定论文链接失效。

## 首页结构修订（2026-10-20）

因作者要求重做首页主次，实际使用 Chrome 查看 HKUST Aerial Robotics、UZH RPG、UPenn Kumar Lab 和 CMU AirLab 的首页。具体借鉴：HKUST 的简短研究介绍与具体项目入口；RPG 的学校/实验室并列标识与新闻；Kumar Lab 的机构层级及稳定栏目。保留 ROBIS 自有照片与成果，未复制参考站图片或人物。当前首页去掉宣传式标语，采用学术信息顺序、普通章节标题、研究配图与侧栏新闻；MPU 官方 SVG 在每页顶部显示。

- https://uav.hkust.edu.hk/
- https://rpg.ifi.uzh.ch/
- https://www.kumarrobotics.org/
- https://theairlab.org/

## 2026-10-21 作者更新与公开项目

- 作者明确指定 Supervisors 为 Yapeng Wang、Yuhuan Lu、Erli Lyu，按此顺序展示；学校职称独立保留。Long Liu 与 Xuan Cheng 均为 PhD Student。Long Liu 原简介硕士在读表述按新确认改为博士在读，未推断博士专业/入学年份。
- Xuan Cheng 的学历、ZTE 经历、博士专业与研究兴趣均来自作者本轮英文简介。新头像对应 `yuhuan.png`、`dexing.png`、`xuancheng.jpg`，已逐一查看。
- 联系人由作者改为 Yapeng Wang，邮箱 yapengwang@mpu.edu.mo，与原校方资料相符。
- 使用作者提供 `fca.png`，图像已含 Macao Polytechnic University / Faculty of Applied Sciences；删除顶部额外文字及简介上方重复机构行。查找过程中也实际查看校方学院首页 https://mpusite.mpu.edu.mo/esca/en/index.php ，确认学院名称与标识用途；不使用旧 ESCA 图形替代用户提供的新组合标识。
- ARIES-Mission++：https://github.com/JunhaoWei-mpu/ARIES-Mission-pp ，采用公开 commit `7162d6a4c5663137e7c5dbc7d2f733d239a0fb47` 的 README 与系统总览图。页面只概述视觉语言定位、多无人机能量约束规划、任务文件导出与公开资源；不推断论文作者表、venue、录用状态，不把 SITL 写成实机验证。图像 MIT 版权说明同时保留在公开资源目录。
- 导师个人论文已按作者要求从成果列表及研究方向关联中移除。当前 5 篇为团队相关共同成果；首页取消独立 Selected publications 区块。
- 本轮重新查看 HKUST Aerial Robotics、Kumar Lab 的标题层级，采用清楚的页面标题 / 栏目标题 / 项目标题三级结构，字体大小、字重与分隔线分别设置。
- 作者随后明确确认 Yuhuan Lu 为 Assistant Professor；采用此职称并同步其英文简介，此确认取代此前因校方目录与个人主页差异而暂不显示职称的处理。首页与独立 Contact 页均按作者要求移除机构/地点三行。

## CLCO 与圆形头像修订（2026-10-21）

- 首页亮点按作者要求改为 ARIES-Mission++ → CLCO → SAGA。CLCO 的方法与应用概述核对校方论文页 https://research.mpu.edu.mo/en/publications/coordination-core-ligand-collaborative-optimizer-clco-a-chemistry/ 与代码分支 README；论文/作者/venue 继续只在 publications.yaml 维护。页面不添加未经核对的性能数字或实物验证。
- CLCO 配图为原论文 Figure 3，出版社资源：https://ars.els-cdn.com/content/image/1-s2.0-S1474034626007846-gr3_lrg.jpg 。实际查看后等比压缩为 WebP，保留所有内容；图注明确论文来源及版权。
- 参考作者指定 https://hypersec.research.st/people/5320 的圆形头像呈现，未使用其成员照片。ROBIS 人像沿用既有明确映射，仅调整 CSS 圆形显示、取景位置与白底源图留白；原照片不重绘、不改脸。
- 按作者要求删除首页新闻来源提示文字；完整来源继续保存在维护数据与本文件中。

- 最新作者修订：学生顺序为 Junhao Wei、Xuan Cheng、Long Liu，其余既定顺序保持；姓名显示黑色。首页 People 同时显示导师与研究学生全部 11 人。平台与研究设备图去掉人工灰色底板；最新 jqr1.png / uav3.png 已逐一查看并替换。
- 作者提供 saga_fpv.gif，为仿真柱状场景的第一视角演示；动画保持源尺寸、全部画面内容与 24 秒总时长，不标注为实机飞行。首页及项目页使用优化动画 WebP，减少动态偏好下使用静态代表帧。
- 参考页导航字体核对其 HTML 内嵌 @font-face 为 Roboto；本站自托管其 Latin 400/700 字体，不依赖访客浏览器请求参考站或字体 API。字库元数据确认为 Copyright 2011 Google Inc., Roboto Version 2.137; 2017, Apache License 2.0，许可证与来源保留在 assets/notices/。

- 后续作者更新 jqr1：当前原 jqr1.png 与此前版本一致，新文件为 jqr1 (1).png。已实际查看透明底机器人本体并替换，设备完整保留，无生成式改动。首页三项 Research highlights 统一使用同一左图右文组件；实验室全名标题改为纯黑 #000000。

## 本轮页面与素材更新

- 作者明确提供 jqr1 (1).png 透明底机器人图，按该版本替换。原始文件保留仓库外，公开图仅裁完全透明余量并无损编码。
- Manipulation.gif 已实际查看，为真实双臂机器人演示；等比编码为 488×600 动画 WebP，保留全部画面及时长，提供静态替代。
- 非凸函数配图采用 Diegotorquemada 自行绘制并释放至公共领域的 Rastrigin function.png：https://commons.wikimedia.org/wiki/File:Rastrigin_function.png 。已实际查看原图并等比编码；来源与公共领域说明保留在 assets/notices/rastrigin-source.txt，无需在图下添加文字。
- 展示1.jpg / 展示1.png 内容一致，采用 JPEG 源图；openday.png 与 ways.png 已逐一实际查看。首页按作者要求与 jqr2 轮换，未为照片虚构新闻日期。
- 人员研究兴趣由作者提供简介拆为分点列表，未增加未经提供的能力。新增 UAV Communications and Networked Systems 来自 Long Liu / Xuan Cheng 的已给方向；角色与机构维持已确认事实。
- 依作者最新要求：导航字体恢复与正文一致；Research 去掉小标题、People 名单、资源列表及图下说明；删除 CAST 新闻和 Member update 链接标签，新闻使用 🎉。


## 2026-10-21：学生论文补齐与本轮展示调整

- 论文范围按作者要求：收录研究生署名的公开论文，允许其导师共同署名；不导入导师个人论文全集。现有 **42 条去重记录**，每条均有 `source`，作者、年份、venue 和状态集中维护于 `_data/publications.yaml`。
- 主来源为 Junhao Wei 当前个人主页（27 条），以 DOI/Crossref 登记的完整标题和作者逐条匹配；拒绝仅关键词近似的 Crossref 搜索结果。arXiv 作者 API 的完整作者列表补充了 8 条未列主页的 MPU 合作论文，三条同名但不属于此合作网络的作者记录未收录。
- Xuan Cheng 的 ORCID `0009-0004-3137-6649` 由 IEEE Access 论文作者元数据关联，补充 Ad Hoc Networks 和 Mathematics 论文；Long Liu 的 UAV 信号强度论文由 MDPI 原文核对。IEEE Access 论文 DOI 为 `10.1109/ACCESS.2026.3670819`，MPU 官方研究档案进一步确认作者与出版状态。
- 另外补充 Research Square 的 ARIES-Mission (`10.21203/rs.3.rs-10372117/v1`)、MOBI Depth (`10.21203/rs.3.rs-9593902/v1`)，以及 Elsevier 正式页面的 RAWA-RHP (`10.1016/j.rineng.2026.113481`)。Research Square/arXiv 原稿没有录用证明时标为 Preprint。
- RAWA-RHP 正式页面为 Journal Pre-proof，标记 In press。Ad Hoc Networks 无线电地图论文的官方书目年为 **2027**（volume 194, 104392），保留原年份并标为 In press，不擅自把计划卷期改成 2026。
- LEAD 是 IJCAI-ECAI 2026 的 Learning-assisted Algorithm Design **Workshop**，已根据 https://2026.ijcai.org/accepted-workshops/ 明确标注，不作为 IJCAI 主会。
- WiOpt 2024 的 Adaptive PSO 使用 IFIP 官方 PDF，注明 ISAC Workshop。正式论文与其预印本合并为一条；两种链接均存在时分别显示 Paper / Preprint。
- Google Scholar 公开列表返回 429；DBLP XML 请求返回访问检查页，因此不声称已完整读取这两个个人目录。Google 检索用于发现，收录事实依赖作者主页、arXiv、出版机构、MPU 或 DOI 原始登记。
- 通讯方向图使用 Long Liu 等人 Mathematics 14(8), 1399 的 Figure 6，完整保留三组空域信号强度图，仅转为 WebP。CC BY 4.0 来源及许可见 `assets/notices/uav-signal-prediction-source.txt`；VLA 方向使用作者最新的 UAV3 平台照片。
- 首页研究区域第五项与其他项等宽；首页仅显示四位研究生，People 保留全部 11 位成员。头像卡片不再显示任何学校名；Dexing 的真实机构仍保留在个人资料及完整简介中。
- 首页简介参考 HyperSec 的机构与研究范围表达方式重新撰写，使用普通正文。Research 页首简介按作者要求移除。页脚 MPU 与 ROBIS 标识并排。
- 首页轮播顺序改为 展示1 → 机器人展示(jqr2) → Open day → WAYS。取消鼠标悬停和控件焦点导致的隐式暂停；保留 Pause/Play、Next、后台标签暂停及系统减少动态效果支持。

2026-10-21 作者补充确认：Real-Validated UAV Audition Under Rotor Ego-Noise for Low-False-Alarm Human Detection 录用于 NCMMSC 2026；其 venue 已从 arXiv 改为 NCMMSC 2026、status 改为 Accepted，原 arXiv 链接仍作为 Preprint。

2026-10-21 作者补充确认：HonestAffinity: Leak-Aware Evaluation of Protein and Pocket Priors for Binding Affinity Prediction 录用于 IEEE BIBM 2026；保留 Intelligent Computing and Optimization 分类及 arXiv Preprint 链接。


## 2026-10-21：以作者提供的 Scholar 40 条清单复核，限定实验室一作

最新收录口径：第一作者必须出现在本站 `_members/` 中；导师个人论文仍不导入。原 42 条候选删除 12 条外部一作记录，补上作者 Scholar 清单中遗漏的 AHRRT、MRBMO 预印本后，当前 **32 条**。

作者直接提供的 Scholar 清单及后续确认用于更新：UAV Audition → NCMMSC 2026 / Accepted；HonestAffinity → IEEE BIBM 2026 / Accepted；FleetGuard → IEEE CSCloud 2026 / Accepted。各条 arXiv 链接仍标为 Preprint，不将预印本平台当会议 venue。

Scholar 直连本轮再次返回不可访问，清单内容由作者直接提供；未声称成功读取受限的 Scholar 页面。AHRRT 的日期、作者与链接进一步核对 Preprints.org 原文 https://www.preprints.org/manuscript/202511.1805 （2025-11-25）。

MRBMO 的 Preprints.org 版本 https://www.preprints.org/manuscript/202502.0188 （2025-02-04）第一作者为 Junhao Wei，明确以 Preprint 条目收录。Symmetry 正式版第一作者为 Baili Lu，依照本轮规则移除；不把预印本的作者顺序套用到正式期刊条目，也不将两个版本重复计数。

每条新增 `sort_date` 和 `sort_date_basis`，每年由新到旧排列。优先使用可核实的 online / proceedings 日期；只有月份或年份时保留原精度。无明确录用日期的 accepted 稿使用预印本首次公开日期排序，不编造录用日。CLCO 用作者 2026-07 的公开出版更新月份（而非未来的 November 印刷卷期）；RAWA-RHP 用出版机构的 2026-10-13 available-online 日期。年份为书目引用年份，Ad Hoc Networks 保留 2027。

本轮删除的外部一作 ID：pwoa, askssa-cnn-bilstm, llm-writing-assessment, mobi-depth, pamk-thymic-necroptosis, att-bilstm-xgboost, gwoa, mrbmo, uav-public-administration, pamk-hepatoprotection, pamk-intestinal-injury, credit-card-fraud.


2026-10-21 展示调整：主页扩写实验室研究问题与实物平台介绍，五个研究方向加粗。Contact 参考 HyperSec 的导师联系与 Join us 入口，加入学生咨询和合作说明、Yapeng Wang 头像及官方主页、mailto 邮件链接；未声明已确认的空缺岗位，不复刻需要服务端的表单，不增加未核实电话和房间地址。来源 https://hypersec.research.st/ 、https://hypersec.research.st/contact_form 、https://fca-portal.mpu.edu.mo/profile/yapengwang 。

SAGA 详情页按作者要求移除架构图；改为并排显示作者提供的 saga_fpv.gif 与 saga_top.gif。两个动画分别保留完整视角与原始时间，不把模拟动画标成实机实验；提供静态帧支持减少动态效果偏好。原始素材保留；FPV 网站使用压缩后的 WebP，俯视图采用完整 1 MB GIF（比重编码 WebP 更小），并提供 WebP 静态封面。

2026-10-21 作者最终调整：首页介绍精简为两段，五个方向仍加粗；轮播图片与左侧介绍块顶端对齐，移除过长的首页方向说明列表。

2026-10-21 arXiv 日期再核对：排序改用最新公开版本日期 `updated`，并非抓取时间。UAV Audition 的官方 v1 仍为 2026-09-19，FleetGuard 为 2026-10-13，无后续修订；UAV Audition 在 2026 年目录中仅排在两篇 October 条目之后。AeroTSBoost 用真实 v2 更新时间 2026-05-26。FleetGuard 的 IEEE CSCloud 2026 / Accepted 保持不变。
