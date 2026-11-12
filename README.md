# Blog

基于 Astro 构建的个人博客。

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成
- [React](https://react.dev/) - UI 组件
- [Tailwind CSS](https://tailwindcss.com/) - 样式
- [shadcn/ui](https://ui.shadcn.com/) - 组件库

## Node 版本

`package.json` 的 `engines.node`（`^22.22.3 || ^24.16.0 || >=26.3.0`）对齐 `eslint-plugin-astro` 的运行时要求。CI 固定使用 Node 24，而不是 `lts/*`，避免 Actions 的 LTS 标签落到插件不支持的版本。
