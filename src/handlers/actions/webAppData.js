const {songsArray} = require("../../config/songs");
const {songsData} = require("../../utils/helpers");
module.exports = async (ctx) => {
    try {
        console.log(ctx.webAppData.data.json())
        const data = ctx.webAppData.data.json();
        const userId = data.userId;
        const songs = data.songs;
        const songsInfo = songs?.map(s => {
            const sD = songsArray.find(sA => sA.id === s.id);
            return {
                ...s,
                ...sD
            }
        })
        console.log(songsInfo);
        await ctx.reply(
            songsData(songsInfo),
            { parse_mode: 'HTML' }
        );

        for (const song of songsInfo) {
            await ctx.replyWithAudio(
                { url: `https://laritovski.ru${song.audio}` },
                {
                    title: `${song.name}`,
                    performer: `${song.flag} ${song.artist}`,
                }
            );
        }

    } catch (err) {
        console.error('Error processing web app data:', err);
        await ctx.reply('Произошла ошибка при обработке данных.');
    }
};