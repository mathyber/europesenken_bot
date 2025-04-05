module.exports = async (ctx) => {
    try {
        console.log(ctx.webAppData.data.json())
        const data = ctx.webAppData.data.json();
        const userId = data.userId;
        const songs = data.songs;
        console.log(songs);
        await ctx.reply(`Получено от Web App (${userId})`)
    } catch (err) {
        console.error('Error processing web app data:', err);
        await ctx.reply('Произошла ошибка при обработке данных.');
    }
};