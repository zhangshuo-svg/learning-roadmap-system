// Vercel Serverless Function - 管理员验证码管理API
export default async function handler(req, res) {
    // 设置 CORS 头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // 处理 OPTIONS 请求
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        // 简单的管理员验证（实际应用中应该使用更安全的方式）
        const adminPassword = process.env.ADMIN_PASSWORD || 'admin123456';
        const authHeader = req.headers.authorization;
        
        if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
            return res.status(401).json({
                success: false,
                message: '未授权访问'
            });
        }

        // 获取当前验证码数据
        const validCodesEnv = process.env.VALID_CODES || '[]';
        let validCodes = [];
        
        try {
            validCodes = JSON.parse(validCodesEnv);
        } catch (error) {
            console.error('解析验证码数据失败:', error);
        }

        switch (req.method) {
            case 'GET':
                // 获取验证码列表
                return res.status(200).json({
                    success: true,
                    data: validCodes,
                    total: validCodes.length
                });

            case 'POST':
                // 生成新验证码
                const { count = 1, expiry = 0, note = '' } = req.body;
                
                if (count < 1 || count > 50) {
                    return res.status(400).json({
                        success: false,
                        message: '验证码数量必须在1-50之间'
                    });
                }

                const newCodes = [];
                const existingCodes = validCodes.map(c => c.code);

                for (let i = 0; i < count; i++) {
                    let code;
                    do {
                        code = Math.floor(100000 + Math.random() * 900000).toString();
                    } while (existingCodes.includes(code) || newCodes.map(c => c.code).includes(code));

                    const now = new Date();
                    let expiresAt = null;
                    
                    if (expiry > 0) {
                        expiresAt = new Date(now.getTime() + expiry * 24 * 60 * 60 * 1000).toISOString();
                    }

                    newCodes.push({
                        code,
                        status: 'active',
                        createdAt: now.toISOString(),
                        expiresAt,
                        note: note || null
                    });
                }

                validCodes.unshift(...newCodes);

                // 记录生成日志
                console.log(`管理员生成了 ${count} 个验证码，时间: ${new Date().toISOString()}`);

                return res.status(200).json({
                    success: true,
                    message: `成功生成 ${count} 个验证码`,
                    data: newCodes
                });

            case 'DELETE':
                // 删除验证码
                const { code: deleteCode } = req.body;
                
                if (!deleteCode) {
                    return res.status(400).json({
                        success: false,
                        message: '请提供要删除的验证码'
                    });
                }

                const beforeLength = validCodes.length;
                validCodes = validCodes.filter(c => c.code !== deleteCode);
                
                if (validCodes.length === beforeLength) {
                    return res.status(404).json({
                        success: false,
                        message: '验证码不存在'
                    });
                }

                console.log(`管理员删除了验证码 ${deleteCode}，时间: ${new Date().toISOString()}`);

                return res.status(200).json({
                    success: true,
                    message: '验证码已删除'
                });

            default:
                return res.status(405).json({
                    success: false,
                    message: '不支持的请求方法'
                });
        }

    } catch (error) {
        console.error('管理员API错误:', error);
        return res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
}