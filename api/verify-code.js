// Vercel Serverless Function - 验证码验证API
export default async function handler(req, res) {
    // 设置 CORS 头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 处理 OPTIONS 请求
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // 只允许 POST 请求
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            success: false, 
            message: '只允许 POST 请求' 
        });
    }

    try {
        const { code, deviceCode, deviceInfo } = req.body;

        // 验证输入
        if (!code || typeof code !== 'string' || code.length !== 6) {
            return res.status(400).json({
                success: false,
                message: '请输入6位验证码'
            });
        }

        // 验证设备码
        if (!deviceCode || typeof deviceCode !== 'string') {
            return res.status(400).json({
                success: false,
                message: '设备码无效'
            });
        }

        // 从环境变量获取验证码数据
        // 在 Vercel 中设置环境变量 VALID_CODES
        const validCodesEnv = process.env.VALID_CODES || '[]';
        let validCodes = [];
        
        try {
            validCodes = JSON.parse(validCodesEnv);
        } catch (error) {
            console.error('解析验证码数据失败:', error);
            return res.status(500).json({
                success: false,
                message: '服务器配置错误'
            });
        }

        // 查找验证码
        const codeData = validCodes.find(c => c.code === code);
        
        if (!codeData) {
            return res.status(400).json({
                success: false,
                message: '验证码无效'
            });
        }

        // 检查验证码状态
        if (codeData.status !== 'active') {
            return res.status(400).json({
                success: false,
                message: codeData.status === 'used' ? '验证码已使用' : '验证码已失效'
            });
        }

        // 检查是否过期
        if (codeData.expiresAt) {
            const now = new Date();
            const expiryDate = new Date(codeData.expiresAt);
            
            if (now > expiryDate) {
                return res.status(400).json({
                    success: false,
                    message: '验证码已过期'
                });
            }
        }

        // 验证成功 - 标记为已使用并记录设备信息
        codeData.status = 'used';
        codeData.usedAt = new Date().toISOString();
        codeData.deviceCode = deviceCode;
        codeData.deviceInfo = deviceInfo;

        // 更新环境变量中的数据（注意：这在 Vercel 中不会持久化）
        // 实际应用中应该使用数据库
        
        // 记录使用日志
        console.log(`验证码 ${code} 验证成功，设备码: ${deviceCode}，时间: ${new Date().toISOString()}`);

        return res.status(200).json({
            success: true,
            message: '验证成功',
            data: {
                code: code,
                deviceCode: deviceCode,
                verifiedAt: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('验证码验证失败:', error);
        return res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
}