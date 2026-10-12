# CET-4 英语四级精华复习笔记

面向四级备考学生的免费复习站，基于 VitePress 构建。

## 板块

- 写作模板
- 翻译句型
- 语法专题
- Unit 1-4 词汇

## 开发中

- 单词测试交互工具
- 汉译英对照练习
- 程序化单词详情页（搜索长尾流量）

## 本地开发

```bash
npm install
npm run dev     # 本地预览
npm run build   # 构建到 docs/.vitepress/dist
```

## 部署

Cloudflare Pages（连接本仓库，构建命令 `npm run build`，输出目录 `docs/.vitepress/dist`）。
