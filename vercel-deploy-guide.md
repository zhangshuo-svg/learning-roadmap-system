# 🚀 Vercel 部署完整指南

## 第一步：GitHub 仓库创建
1. 访问 [github.com](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称：`learning-roadmap-system`
4. 设置为 Public
5. 点击 "Create repository"

## 第二步：推送代码
在终端中执行以下命令（请替换为您的 GitHub 用户名）：

```bash
cd 学习路线
git remote add origin https://github.com/您的用户名/learning-roadmap-system.git
git branch -M main
git push -u origin main
```

## 第三步：Vercel 部署
1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Sign up" 或 "Log in"
3. 选择 "Continue with GitHub" 登录
4. 点击 "New Project"
5. 选择您刚创建的 `learning-roadmap-system` 仓库
6. 点击 "Import"
7. 保持默认设置，点击 "Deploy"

## 第四步：配置环境变量
部署完成后：
1. 进入项目设置 (Settings)
2. 点击 "Environment Variables"
3. 添加以下变量：
   - `ADMIN_PASSWORD`: `admin123456`
   - `VALID_CODES`: `[]`
4. 点击 "Save"
5. 重新部署项目

## 第五步：访问您的网站
- 主页：`https://您的项目名.vercel.app`
- 验证页面：`https://您的项目名.vercel.app/verify.html`
- 管理后台：`https://您的项目名.vercel.app/admin.html`

## 🎯 默认登录信息
- 管理员密码：`admin123456`
- 首次访问需要在管理后台生成验证码

## 🔧 后续更新
每次修改代码后，只需：
```bash
git add .
git commit -m "更新描述"
git push
```
Vercel 会自动重新部署！

## ⚠️ 注意事项
1. 确保所有文件都在 `学习路线` 目录中
2. `vercel.json` 配置文件必须在根目录
3. API 文件必须在 `api/` 目录中
4. 环境变量配置后需要重新部署才能生效