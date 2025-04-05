const bot = require('./bot');
const app = require('./express');
const { port } = require('./config/config');

const PORT = port;

(async () => {
    try {
        await bot.launch();
        console.log('🤖 Bot запущен');

        app.listen(PORT, () => {
            console.log(`🌐 Express сервер на http://localhost:${PORT}`);
        });

        process.once('SIGINT', () => {
            bot.stop('SIGINT');
            process.exit();
        });
        process.once('SIGTERM', () => {
            bot.stop('SIGTERM');
            process.exit();
        });

    } catch (error) {
        console.error('Ошибка запуска:', error);
        process.exit(1);
    }
})();
