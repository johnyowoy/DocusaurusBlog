---
title: 實戰：Docusaurus 快速安裝指南
description: Install Docusaurus
tags:
    - Docusaurus
---
# 實戰：Docusaurus 快速安裝指南
:::info
系統環境檢查
安裝Node.js 20.0 或以上版本：您可以使用 node -v 確認。如果需要管理多版本，強烈推薦使用 nvm 進行管理。
:::
1. 核心安裝與專案初始化 (Scaffolding Project)

我們將使用 npx create-docusaurus 這個命令列工具，快速生成一個標準的 Docusaurus 專案骨架。
推薦使用 classic 模版：這個模版內建了標準的文件 (Docs)、部落格 (Blog) 和暗黑模式 (Dark Mode) 支援，讓您在不需要大量客製化的情況下，立刻獲得一個專業的知識站點。
```bash
npx create-docusaurus@latest my-website classic
# 選擇 TypeScript 專案骨架:
npx create-docusaurus@latest my-website classic --typescript
```
:::info
💡小提醒： my-website 是您的專案名稱，可以自行命名。
:::

3. 啟動開發伺服器 (Running Development Server)
```bash
cd my-website
npm run start
```
###### 預設會在 http://localhost:3000 開啟瀏覽器窗口。
恭喜！ 您的第一個 Docusaurus 靜態網站已經運行起來了！