# 计算机学习路线验证码系统

一个基于 Vue.js 和 Vercel Serverless 的学习路线验证码管理系统。

## 🚀 功能特性

- **粉丝验证系统**: 通过验证码控制学习路线访问权限
- **管理员后台**: 完整的验证码生成、管理、删除功能
- **学习路线展示**: 13个技术方向的详细学习路线
- **响应式设计**: 完美适配桌面和移动端
- **Serverless 后端**: 基于 Vercel Functions 的无服务器架构

## 📁 项目结构

```
学习路线/
├── index.html          # 学习路线主页
├── verify.html         # 验证码验证页面
├── admin.html          # 管理员后台
├── script.js           # 主要脚本文件
├── style.css           # 样式文件
├── data/              # 学习路线数据
│   ├── frontend.json   # 前端开发路线
│   ├── backend.json    # 后端开发路线
│   └── ...            # 其他技术方向
├── api/               # Serverless API
│   ├── verify-code.js  # 验证码验证API
│   └── admin/
│       └── codes.js    # 管理员验证码管理API
├── vercel.json        # Vercel 部署配置
├── package.json       # 项目配置
├── README.md          # 项目文档
└── deploy.md          # 部署指南
```

## 🛠️ 部署步骤

### 1. 准备工作

1. 注册 [Vercel](https://vercel.com) 账号
2. 安装 Vercel CLI:
   ```bash
   npm install -g vercel
   ```

### 2. 本地开发

1. 进入学习路线目录:
   ```bash
   cd 学习路线
   ```
2. 安装依赖:
   ```bash
   npm install
   ```
3. 启动本地开发服务器:
   ```bash
   vercel dev
   ```

### 3. 部署到 Vercel

1. 在学习路线目录下登录 Vercel:
   ```bash
   vercel login
   ```

2. 部署项目:
   ```bash
   vercel --prod
   ```

3. 设置环境变量:
   - `ADMIN_PASSWORD`: 管理员密码 (默认: admin123456)
   - `VALID_CODES`: 验证码数据 (JSON格式)

### 4. 环境变量配置

在 Vercel 控制台中设置以下环境变量:

```bash
# 管理员密码
ADMIN_PASSWORD=your_admin_password

# 初始验证码数据 (JSON格式)
VALID_CODES=[{"code":"123456","status":"active","createdAt":"2024-01-01T00:00:00.000Z","expiresAt":null,"note":"测试验证码"}]
```

## 🔧 API 接口

### 验证码验证
```
POST /api/verify-code
Content-Type: application/json

{
  "code": "123456"
}
```

### 管理员接口
```
# 获取验证码列表
GET /api/admin/codes
Authorization: Bearer your_admin_password

# 生成验证码
POST /api/admin/codes
Authorization: Bearer your_admin_password
Content-Type: application/json

{
  "count": 5,
  "expiry": 30,
  "note": "批量生成"
}

# 删除验证码
DELETE /api/admin/codes
Authorization: Bearer your_admin_password
Content-Type: application/json

{
  "code": "123456"
}
```

## 🎯 使用说明

1. **访问学习路线**: 用户需要先通过 `verify.html` 验证身份
2. **管理员登录**: 访问 `admin.html` 使用管理员密码登录
3. **生成验证码**: 在管理后台生成验证码分发给粉丝
4. **查看学习路线**: 验证成功后可访问完整的学习路线内容

## 🔒 安全特性

- 验证码一次性使用
- 支持过期时间设置
- 管理员密码保护
- CORS 跨域保护
- 请求频率限制

## 📱 技术栈

- **前端**: Vue.js 3, HTML5, CSS3
- **后端**: Vercel Serverless Functions (Node.js)
- **部署**: Vercel Platform
- **存储**: 环境变量 (可扩展为数据库)

## 🤝 联系方式

- **抖音号**: 69385006842
- **微信号**: ikwbj1113
- **作者**: 程序员沉潜

## 📄 许可证

MIT License