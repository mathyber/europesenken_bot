const {songsArray} = require("../../config/songs");
module.exports = async (ctx) => {
    try {
        console.log(ctx.webAppData.data.json())
        const data = ctx.webAppData.data.json();
        const userId = data.userId;
        const songs = data.songs;
        const songsData = songs?.map(s => {
            const sD = songsArray.find(sA => sA.id === s.id);
            return {
                ...s,
                ...sD
            }
        })
        console.log(songsData);
        await ctx.reply(`Получено от Web App (${userId})`)
    } catch (err) {
        console.error('Error processing web app data:', err);
        await ctx.reply('Произошла ошибка при обработке данных.');
    }
};