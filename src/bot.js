const { Telegraf } = require('telegraf');
const { botToken } = require('./config/config');
const startHandler = require('./handlers/commands/start');
const usersHandler = require('./handlers/commands/users');
const meHandler = require('./handlers/commands/me');
const helpHandler = require('./handlers/commands/help');
const webappHandler = require('./handlers/commands/webapp');
const paginationHandler = require('./handlers/actions/pagination');
const webAppData = require('./handlers/actions/webAppData');

const bot = new Telegraf(botToken);

bot.start(startHandler);
bot.command('users', usersHandler);
bot.command('me', meHandler);
bot.command('help', helpHandler);
bot.command('webapp', webappHandler);
bot.action(/users:(\d+)/, paginationHandler);

// bot.on('web_app_data', webAppData);
bot.on('web_app_data', async (ctx) => {
    console.log('Web App data received:', ctx.webAppData); // Лог для отладки
    try {
        const data = JSON.parse(ctx.webAppData.data);
        console.log('Parsed data:', data); // Лог после парсинга
        const userId = data.userId;
        const message = data.message;

        await ctx.telegram.sendMessage(userId, `Получено от Web App: ${message}`);
        console.log('Message sent to user:', userId);
    } catch (err) {
        console.error('Error processing web app data:', err);
        await ctx.telegram.sendMessage(userId || ctx.from.id, 'Произошла ошибка при обработке данных.');
    }
});

bot.launch()
    .then(() => console.log('Bot started'))
    .catch((err) => console.error('Bot failed to start:', err));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

module.exports = bot;