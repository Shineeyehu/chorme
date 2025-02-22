const express = require('express');
const cors = require('cors');
const axios = require('axios');
const config = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/summarize', async (req, res) => {
    try {
        const { text } = req.body;
        
        const response = await axios.post(config.apiConfig.baseUrl, {
            model: config.apiConfig.model,
            messages: [
                {
                    role: 'system',
                    content: config.apiConfig.systemPrompt
                },
                {
                    role: 'user',
                    content: text
                }
            ],
            temperature: config.apiConfig.temperature,
            stream: config.apiConfig.stream
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`
            },
            timeout: config.apiConfig.timeout
        });

        res.json({ summary: response.data.choices[0].message.content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: '请求失败，请稍后重试' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});