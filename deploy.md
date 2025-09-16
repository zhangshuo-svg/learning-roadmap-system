# 🚀 一键部署指南

## 快速部署到 Vercel

### 方法一：GitHub 一键部署 (推荐)

1. **上传到 GitHub**
   ```bash
   # 在学习路线目录下初始化 Git 仓库
   cd 学习路线
   git init
   git add .
   git commit -m "初始化学习路线验证码系统"
   
   # 创建 GitHub 仓库并推送
   git remote add origin https://github.com/你的用户名/learning-roadmap.git
   git push -u origin main
   ```

2. **连接 Vercel**
   - 访问 [Vercel](https://vercel.com)
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 点击 "Deploy"

3. **配置环境变量**
   在 Vercel 项目设置中添加:
   ```
   ADMIN_PASSWORD = admin123456
   VALID_CODES = []
   ```

### 方法二：Vercel CLI 部署

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **进入项目目录并部署**
   ```bash
   cd 学习路线
   vercel login
   vercel --prod
   ```

3. **设置环境变量**
   ```bash
   vercel env add ADMIN_PASSWORD
   vercel env add VALID_CODES
   ```

## 🔧 环境变量说明

| 变量名 | 说明 | 示例值 |
|--------|------|--------|
| `ADMIN_PASSWORD` | 管理员登录密码 | `admin123456` |
| `VALID_CODES` | 验证码数据(JSON) | `[]` |

## 📋 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 验证码页面工作正常 (`/verify.html`)
- [ ] 管理员后台可以登录 (`/admin.html`)
- [ ] 学习路线页面正常显示 (`/index.html`)
- [ ] API 接口响应正常 (`/api/verify-code`)
- [ ] 环境变量配置正确

## 🌐 访问地址

部署成功后，你将获得类似以下的访问地址：
- 主站: `https://your-project.vercel.app`
- 学习路线: `https://your-project.vercel.app/index.html`
- 验证页面: `https://your-project.vercel.app/verify.html`
- 管理后台: `https://your-project.vercel.app/admin.html`

## 🔄 更新部署

每次推送到 GitHub 主分支，Vercel 会自动重新部署。

或者使用 CLI:
```bash
cd 学习路线
vercel --prod
```

## ❓ 常见问题

**Q: API 返回 500 错误？**
A: 检查环境变量 `VALID_CODES` 是否为有效的 JSON 格式

**Q: 管理员无法登录？**
A: 确认环境变量 `ADMIN_PASSWORD` 已正确设置

**Q: 验证码验证失败？**
A: 确保 `VALID_CODES` 中包含有效的验证码数据

**Q: 页面显示 404？**
A: 确认 `vercel.json` 配置正确，路由设置无误

## 🎯 生产环境建议

1. **更改默认密码**: 将 `ADMIN_PASSWORD` 改为强密码
2. **定期备份**: 导出验证码数据进行备份
3. **监控日志**: 查看 Vercel 函数日志监控使用情况
4. **自定义域名**: 在 Vercel 中绑定自己的域名

## 📁 文件结构说明

```
学习路线/
├── index.html          # 主页 - 学习路线展示
├── verify.html         # 验证页面 - 用户验证入口
├── admin.html          # 管理后台 - 验证码管理
├── api/               # Serverless API 目录
│   ├── verify-code.js  # 验证码验证接口
│   └── admin/codes.js  # 管理员接口
├── data/              # 学习路线数据
├── vercel.json        # Vercel 部署配置
├── package.json       # 项目配置
└── deploy.md          # 本部署指南
```

## 📞 技术支持

如果部署过程中遇到问题，请联系：
- 抖音：69385006842
- 微信：ikwbj1113

## 🎉 部署成功后

1. 访问管理后台生成一些测试验证码
2. 测试验证码验证功能是否正常
3. 确认学习路线页面可以正常访问
4. 开始分享给你的粉丝使用！