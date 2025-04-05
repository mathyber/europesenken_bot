require('dotenv').config();

module.exports = {
    botToken: process.env.BOT_TOKEN,
    adminId: process.env.ADMIN_ID,
    port: process.env.PORT || 8443,
    pagination: {
        perPage: 10
    },
    commands: [
        '/me - Посмотреть информацию о себе',
        '/webapp - Открыть Web-приложение',
        '/help - Все команды'
    ],
    adminCommands: [
        '/users - Список пользователей'
    ],
    webapp: {
        url: 'https://laritovski.ru/europesenken/'
    }
};