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
