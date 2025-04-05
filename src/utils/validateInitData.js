const crypto = require('crypto');
const { botToken } = require('../config/config');

function validateInitData(initData) {
    const urlParams = new URLSearchParams(initData);
    const hash = urlParams.get('hash');
    urlParams.delete('hash');

    const dataCheckArr = [];
    for (const [key, value] of urlParams.entries()) {
        dataCheckArr.push(`${key}=${value}`);
    }
    dataCheckArr.sort();
    const dataCheckString = dataCheckArr.join('\n');

    const secretKey = crypto.createHash('sha256').update(botToken).digest();
    const hmac = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

    return hmac === hash;
}

module.exports = validateInitData;
