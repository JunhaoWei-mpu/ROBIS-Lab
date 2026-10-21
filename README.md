# ROBIS Lab 网站维护

英文实验室网站，基于 Greene Lab Website Template 的 Jekyll 定制。中文说明文件不进入访客导航或构建产物。

- 仓库：https://github.com/JunhaoWei-mpu/ROBIS-Lab
- GitHub Pages：https://junhaowei-mpu.github.io/ROBIS-Lab/
- 原有 CLCO 和 CICDWOA 分支保留；本网站在 `main`。个人主页仓库独立。
- 模板来源与版本见 [TEMPLATE.md](TEMPLATE.md)，素材对应见 [ASSET_MANIFEST.md](ASSET_MANIFEST.md)。

## 本地运行与生产构建

需要 Ruby **3.3.10**、Bundler **2.5.23**、Git；Python 3.9+ 用于检查路径。使用自己的 Ruby 版本管理器安装 `.ruby-version` 指定的版本。

```bash
gem install bundler -v 2.5.23
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --baseurl /ROBIS-Lab
```

打开 `http://127.0.0.1:4000/ROBIS-Lab/`。生产检查：

```bash
JEKYLL_ENV=production bundle exec jekyll build --baseurl /ROBIS-Lab
python3 scripts/check_site.py _site /ROBIS-Lab
```

提交的 `Gemfile.lock` 是依赖事实源。CI 使用 frozen 模式；确需更新依赖时，更新锁文件、重新构建后再提交。禁止上传 `vendor/`、`.bundle/`、`_site/` 和运行环境。

## 日常内容维护

| 内容 | 修改位置 | 方法 |
|---|---|---|
| 成员 | `_members/姓名.md` | YAML 中维护姓名、真实职称、机构、研究兴趣、照片与链接；分隔符后的 Markdown 写完整简介。`group` 使用 `Supervisors` 或 `Research Students`；`lab_role` 是实验室角色，`role` 是学校职称/学位身份，`order` 决定排序。 |
| 论文 | `_data/publications.yaml` | 每项至少保留 `id/title/authors/year/venue/status/topics/paper_url/source`。首页不单列论文宣传区块；论文列表仅保留团队相关共同成果。不要把预印本当成正式 venue。 |
| 新闻 | `_data/news.yaml` | 在顶部添加月份和英文正文，日期只精确到来源支持的程度，并保留 `source`。不自动抓取。 |
| 平台 | `_data/platforms.yaml` | 修改阶段、介绍、图像与真实硬件说明；Chironix 长文在 `_projects/chironix.md`。 |
| 研究方向 | `_data/research.yaml` | 维护研究问题、`home_summary` 首页短介绍、技术重点和相关论文、平台、成员 ID。 |
| 项目 | `_projects/*.md` | 自动生成 `/projects/名称/`；`publication` 关联论文 ID；`home_summary`、`home_image` 等字段维护首页研究亮点。 |
| 图片 | `assets/images/people/`、`platforms/`、`projects/`、`brand/` | 使用小写英文文件名；用优化 WebP 或 PNG；保留真实比例，更新引用与尺寸。原始照片留在仓库外。 |
| 导航 | `_data/navigation.yaml` | 标题与内部路径。 |
| 视觉与交互 | `assets/css/site.css`、`assets/js/site.js` | 配色、响应式布局、手机菜单、论文筛选。 |

方向 ID：`aerial`、`manipulation`、`embodied`、`computing`。添加成员时，只有核实的个人主页才填写 `homepage`；没有照片可填写 `initials` 并省略 `image`。不要虚构职称、主页或实验室角色。成员照片使用圆形容器，`focal_point` 控制取景位置；白底照片可设置 `portrait_fit: contain`、`portrait_padding` 保留头顶留白，`portrait_zoom` 调整人物大小。每次替换照片后查看列表与详情页，不能裁掉头部。

论文 `status` 使用真实状态，例如 `Accepted` 或 `Published`。`paper_label: Preprint` 明确 arXiv 的链接性质；有真实代码库时才填写 `code_url`。作者全名来自原论文/Crossref，否则保留来源缩写。成员加入前的成果也可收录，但页面按成员成果表述。

## GitHub 发布

唯一发布工作流是 `.github/workflows/pages.yml`：`main` push → 锁定依赖构建 → 检查路径 → 上传 `_site` artifact → Pages 部署。仓库 Settings → Pages 的 Source 必须为 **GitHub Actions**（API `build_type: workflow`）。不并行启用 `gh-pages` 分支发布。

```bash
git status --short
git diff
# 明确暂存本次改动的文件，例如：
git add _data/news.yaml
git commit -m "Update member news"
git push origin main
gh run list --workflow pages.yml --limit 3
```

等待最新提交对应的 run 成功，再检查线上页面及资源。不要把 push 成功等同于部署成功。工作流没有定时触发，也没有自动写入引用数据的额外权限。构建仅需 `contents: read`；部署作业授予 `pages: write`、`id-token: write`。

## 更换仓库或站点路径

`_config.yaml` 中 `url` 为域名，`baseurl` 为项目路径。当前仓库真实名称为 **ROBIS-Lab**，因此使用 `/ROBIS-Lab`，区分大小写。迁移时同步更新这两个值、README 链接和本地检查参数；在新仓库启用 Pages。工作流的正式构建会使用 Pages 返回的 `base_path`。

内部链接一律使用 Liquid `relative_url`，canonical、OG 和 sitemap 使用 `absolute_url`。只有根站才把 `baseurl` 设为空。不要修改个人主页的域名或仓库设置。

## 公开内容边界

商业计划书原件、财务/融资/股权信息、未获证实的技术指标、无关人物照片、凭据和运行环境不入库。对外文案以已确认阶段为准。来源、待确认项和验证记录见 `CONTENT_SOURCES.md`、`CONTENT_TODO.md`、`VALIDATION.md`。

## 首页版式

首页使用学术实验室结构：顶部 ROBIS 与 MPU 学院组合标识 → 实验室全名和简介 → 研究亮点与新闻 → 研究方向与平台入口；侧栏提供导师、完整团队与联系入口。`index.html` front matter 的 `featured_projects` 控制研究亮点；详情来自 `_projects/`、`_data/publications.yaml`，不重复维护录用信息。MPU 标识位于 `_includes/header.html` 的 masthead，在手机端也显示。

CSS/JS 链接带构建时间版本参数，部署后会请求新版资源。最新截图保存在仓库旁 `../robis-preview/revision-4/`。

## 2026-10-21 内容调整

- 首页研究亮点由 `index.html` 的 `featured_projects` 控制，现为 ARIES-Mission++、CLCO 和 SAGA。ARIES-Mission++ 的代码、benchmark、简介及配图在 `_projects/aries-mission-pp.md`；未确认的论文 venue/status 不填写。
- 首页移除 Selected publications 区块；`_data/publications.yaml` 保留团队相关共同论文，不收录导师个人论文目录。
- 联系人由 `_data/contact.yaml` 的 `member` 选择，姓名、学校职称、邮箱和主页从该成员资料读取，现为 Yapeng Wang。
- 人员：Yapeng Wang、Yuhuan Lu、Erli Lyu 为 Supervisors；Long Liu 与 Xuan Cheng 为 PhD Student。导师的实验室角色与学校职称分别维护。
- Yuhuan Lu 的学校职称由作者确认为 Assistant Professor，已同步到人员列表和完整简介。
- 顶部标识采用作者提供的 `fca.png`，公开路径为 `assets/images/brand/mpu-fca-logo.png`；不再附加独立学院文字。
- Yuhuan Lu、Dexing Yao 使用本轮本地新照片，文件名含日期避免旧图缓存；Xuan Cheng 使用 `xuancheng.jpg`。

- 首页 People 覆盖导师和研究学生全部 11 人；导师顺序及学生顺序由各成员 `order` 控制，Xuan Cheng 在 Long Liu 前。
- SAGA 首页动画在 `_projects/saga.md` 的 `home_image`，`home_still` 指定减少动态效果时的静态替代。静态图取自原动画第 80 帧；原始 GIF 保留仓库外。
- 导航使用本站自托管 Roboto，文件在 `assets/fonts/`，许可证在 `assets/notices/`。平台/研究设备图片采用白色页面自然显示，无额外灰底。
