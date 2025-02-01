---
title: 將Docusaurus網站部署到Github Pages
description: Deploying to GitHub Pages
tags:
    - Docusaurus
    - Deployment
---
# 將Docusaurus網站部署到Github Pages
:::info
<b>前置條件</b>  
在實作之前，請確認自己的電腦環境是否已經安裝以下工具：
* Node.js
* npm
* yarn
* Github帳號
* 已經建立並初始化Docusaurus網站
:::

## Step1. 建立Github倉庫
* 登入你的Github帳號
* 點擊右上角的+按鈕，選擇【New repository】
* 輸入【Repository name】，並且點擊【Create repositorry】
![Create a new repository - Github](./img/01.png)

## Step2. 設定Docusaurus
* 在你的Docusaurus網站目錄，打開<code>docusaurus.config.js</code>文件。
* 修改以下配置：
```JavaScript=
    ...
    ...
    ...
const config = {
  title: 'JOHNYOWOY',
  tagline: 'This is my BLOG ^^',
  favicon: 'img/myIcon.png',

  // Set the production url of your site here
  url: 'https://<your-github-username>.github.io', // 例如：https://johnyowoy.github.io
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/<repository-name>/', // 例如：/johnyowoy-website/

  // GitHub pages deployment config.
  organizationName: '<your-github-username>', // 例如：johnyowoy
  projectName: '<repository-name>', // 例如：johnyowoy-website
  deploymentBranch: 'gh-pages',
    ...
    ...
    ...
    ...
};
```

## Step3. 初始化Docusaurus項目
:::info
如果你已經有 .gitignore 文件，可以跳過這一步。否則，請新建一個 .gitignore 文件並添加以下內容：
```
# Dependencies
/node_modules

# Production
/build

# Generated files
.docusaurus
.cache-loader

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
:::
然後，打開命令提示符（或PowerShell），運行以下命令初始化Git倉庫並提交代碼：
```powershell=
cd <your Docusaurus Project>
git init
git add .
git commit -m "upload my first blog."
git branch -M main
git remote add origin https://github.com/<your github account>/<your repository>.git
git push -u origin main
```

## Step4. 部署到GitHub Pages
運行以下命令來部署你的Docusaurus網站到GitHub Pages：
```powershell=
GIT_USER=<your github account> yarn deploy
```
例如，如果你的GitHub帳號是 johnyowoy，那麼命令應該是：
```powershell=
GIT_USER=johnyowoy yarn deploy
```
這樣，你的Docusaurus網站就會被部署到GitHub Pages，並可以通過以下連結進行訪問。
```
https://<your-github-username>.github.io/<repository-name>/
```
###### 參考資料
[Create & Deploy Your Website Quickly - Docusaurus & GitHub Pages - YouTube](https://youtu.be/9iVNf0T09dE?si=2EpGvYwqDTuWG5Da)