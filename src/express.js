const express = require('express');
const bot = require('./bot');
const validateInitData = require('./utils/validateInitData');

const app = express();
app.use(express.json());

app.post('/from-webapp', async (req, res) => {
    const { initData, payload } = req.body;

    if (!initData || !validateInitData(initData)) {
        return res.status(403).json({ error: 'Invalid initData' });
    }

    const userJson = new URLSearchParams(initData).get('user');
    let user;
    try {
        user = JSON.parse(userJson);
    } catch (err) {
        return res.status(400).json({ error: 'Failed to parse user' });
    }

    await bot.telegram.sendMessage(
        user.id,
        `✅ Данные из WebApp:\n${JSON.stringify(payload, null, 2)}`
    );

    res.json({ ok: true });
});

module.exports = app;