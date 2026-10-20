# 验证记录

核对日期：2026-10-20。发布后补充实际 Actions 与线上核验记录。

## 本地构建与路径

- Ruby 3.3.10 / Bundler 2.5.23 / Jekyll 4.3.4，Gemfile.lock 固定全部依赖。
- `JEKYLL_ENV=production bundle exec jekyll build --baseurl /ROBIS-Lab` 通过。
- `python3 scripts/check_site.py _site /ROBIS-Lab` 通过：21 个 HTML 页面，包含 7 个一级页面、10 个成员页、3 个项目页和 404。
- 检查所有本地 href/src 目标、fragment、独立 title、description、OG、图片 alt/尺寸、sitemap 和 `/ROBIS-Lab` 前缀。
- 模板示例内容清理；商业计划书、完整解析文本、原始素材、临时 Ruby/Node 环境、构建产物与凭据不提交。

## 真实浏览器

使用本机 Google Chrome（Playwright 控制，headless）。

- 在 **1440、768、390 px** 分别访问首页、People、Platforms、Research、Publications、News、Contact、Junhao Wei、Long Liu 以及 3 个项目页，共 36 次页面检查。随后补充 Jiangyu Lai，在三个宽度额外检查其详情与十人 People 列表，并刷新 People 截图。
- 页面无横向溢出；图片成功加载；每页一个 h1；控制台/pageerror 均为 0。
- 实际查看首页的桌面、平板、手机截图，以及 People、Platforms 的代表图；设备图 contain 保留机体、手臂和旋翼，人物源图保持等比。
- 手机菜单打开/链接跳转/关闭、Escape 返回按钮焦点通过。
- 论文多词搜索、研究方向筛选、无结果提示、Reset、URL 参数通过；筛选重置在交互测试中发现的时序问题已修正。
- 成员详情与返回入口通过；10 位成员有明确图像映射。
- 减少动态效果偏好下 scroll-behavior 为 auto；全站有 skip link 与 focus-visible。
- 对懒加载图片先触发加载并等待 decode 后留图，避免保存尚未加载的空区域。

截图保留在网站仓库旁的 `../robis-preview/`，包含 Home / People / Platforms 的三个宽度与首页首屏图，验证产物不混入公开源码。

## 外部链接

本轮核对 15 个关键外部链接：13 个返回 HTTP 200；两条 IEEE DOI 成功解析到 IEEE Xplore，并返回 HTTP 202（站点的访问处理响应）。这两篇的标题、作者、年份与 venue 另用校方页面和 Crossref 元数据核对，不将 202 解释为论文失效或全文已获取。

包括三个 arXiv、CLCO/DHCRWOA/KnowLCP DOI、ACL HyperFM、四位成员主页、MPU 官网与实际 CLCO 代码分支。全部保留正确论文入口。没有给未提供公开主页的学生添加虚构链接。

## 首次线上部署与核验

- 源码提交：`2440efb9ff3a5d5bb7e02090688c48612c5eaf2f`。
- Actions：https://github.com/JunhaoWei-mpu/ROBIS-Lab/actions/runs/39390653761 ，build 与 deploy 均 success。
- 部署 ID：`7194670718`，GitHub deployments status 为 success；环境返回实际地址：https://junhaowei-mpu.github.io/ROBIS-Lab/ 。
- Pages API 确认 `build_type: workflow`、HTTPS enforced；没有并用分支发布。
- 线上 HTTP 核对首页、全部一级页面、Long Liu/Jiangyu Lai、三个项目页、sitemap 和 404 共 14 个地址，均 HTTP 200。不存在地址另验为 HTTP 404，并显示本站自定义 404 内容。
- 线上页面引用的 21 个 CSS/JS/图像资源全部 HTTP 200，SHA-256 与本地构建资源一致。
- 真实 Chrome 再次访问线上 Home / People / Platforms 并保存截图，图像完整加载，控制台无错误。手机菜单 → People → Long Liu 的跳转与线上 SAGA 搜索通过。
- 线上截图位于 `../robis-preview/online-home-1440.png`、`online-people-1440.png`、`online-platforms-1440.png`。

本记录补充属于维护文档变更，文件本身不进入站点产物；对应后续提交的 Actions 状态可在仓库 Actions 查看。
