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
bot.on('web_app_data', webAppData);

module.exports = bot;
