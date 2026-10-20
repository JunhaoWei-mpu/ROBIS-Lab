# 模板来源与采用记录

- 上游：https://github.com/greenelab/lab-website-template
- 文档：https://greene-lab.gitbook.io/lab-website-template-docs
- 核对日期：2026-10-20。
- 采用 commit：`cca827da53417f039cb485bc8930a6d163aaa48a`（执行时上游 main）。
- 当前 CHANGELOG 最新条目：**1.4.0，2026-08-03**；上游 CHANGELOG 原样保留。
- 上游 BSD-3-Clause 许可完整保留在 `LICENSE.md`；已有 ROBIS 仓库的 MIT `LICENSE` 同样保留。标识、成员照片和研究配图的原有权利不因源码许可而改变。

本网站从上游实际源码定制，沿用 Jekyll collections、Markdown/YAML 内容结构、default 布局及内容分段机制。`_includes/content.html`、`section.html`、`grid.html`、`cols.html` 和 `_plugins/` 中通用过滤器来自模板；header、footer、portrait、citation、figure 和成员布局按 ROBIS 需求改写。论文以 `_data/publications.yaml` 为唯一事实源，不并行维护模板示例 citations。

清理了示例成员、示例论文、博客、演示图、testbed、默认联系方式和社交入口。替换了模板原有初始化、引用更新、PR 预览、gh-pages 发布与定时工作流，只保留 Pages artifact 构建部署。未保留上游定时更新或额外的 contents 写权限。

删除了本项目不用的 spaceship/feed/redirect/last-modified/html-proofer 依赖，并同步移除配置和 `misc.rb` 内 html-proofer 的 require 与 hook。网站只使用 sitemap 插件；没有浏览器运行时内容抓取。

发布方案按 GitHub 官方 Jekyll Pages starter 的 artifact 流程定制，2026-10-20 核对 checkout、configure-pages、upload-pages-artifact、deploy-pages 与 ruby/setup-ruby 的官方仓库，锁定 SHA。Ruby 3.3.10、Bundler 2.5.23、Jekyll 4.3.4 及完整 Gemfile.lock 保证构建输入可复现。

参考：
- https://github.com/actions/starter-workflows/blob/main/pages/jekyll.yml
- https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll
- https://docs.github.com/en/rest/pages/pages

信息组织参考 RPG、HKUST Aerial Robotics Group、CMU AirLab、ETH ASL、ETH RSL 与 Vijay Kumar Lab。仅参考研究使命、项目资源、平台入口与稳定导航，没有复制其人物、照片或成果。
