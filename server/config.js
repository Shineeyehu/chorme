// API配置
module.exports = {
    // API应用名称
    appName: 'DeepSeek R1',
    
    // API密钥
    apiKey: '3c8e29e5-acb9-43ea-8efb-8a7b1ae84006',
    
    // API调用配置
    apiConfig: {
        // API基础URL
        baseUrl: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
        
        // 模型名称
        model: 'deepseek-v3-241226',
        
        // 系统提示词
        systemPrompt: '使用一个金句总结全文最核心的内容',
        
        // 温度参数
        temperature: 0.6,
        
        // 是否流式响应
        stream: true,
        
        // 请求超时时间（毫秒）
        timeout: 60000
    }
}