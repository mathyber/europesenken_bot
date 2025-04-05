module.exports = async (ctx) => {
    try {
        console.log(ctx.webAppData)
        const data = JSON.parse(ctx.webAppData.data);
        const userId = data.userId;
        const message = data.message;

        await ctx.reply(`Получено от Web App (${userId}): ${message}`)
    } catch (err) {
        console.error('Error processing web app data:', err);
        await ctx.reply('Произошла ошибка при обработке данных.');
    }
};