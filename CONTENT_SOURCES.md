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
- 每条以 Junhao Wei 及合作者表述，避免扩大归属。网页只提供自然来源入口，抓取信息留在本文件。未设置定期抓取任务。
- 联系人 Junhao Wei，p2312195@mpu.edu.mo；地点限学校/学院、Macao, China。未推测实验室房间或统一邮箱。

## 设计参考（仅结构）

- https://rpg.ifi.uzh.ch/ ：研究使命与新闻。
- https://uav.hkust.edu.hk/ ：项目与真实资源连接。
- https://theairlab.org/ ：项目图像入口。
- https://asl.ethz.ch/ ：自主系统技术主线。
- https://rsl.ethz.ch/ ：独立平台入口。
- https://www.kumarrobotics.org/ ：稳定的研究、团队、论文与新闻位置。

访问限制和链接检查结果见 `VALIDATION.md`；抓取失败不直接认定论文链接失效。
