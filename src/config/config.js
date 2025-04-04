require('dotenv').config();

module.exports = {
    botToken: process.env.BOT_TOKEN,
    adminId: process.env.ADMIN_ID,
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