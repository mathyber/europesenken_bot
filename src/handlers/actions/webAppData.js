const {songsArray} = require("../../config/songs");
const {songsData} = require("../../utils/helpers");
module.exports = async (ctx) => {
    try {
        const data = ctx.webAppData.data.json();
        const songs = data.songs;
        const songsInfo = songs?.map(s => {
            const sD = songsArray.find(sA => sA.id === s.id);
            return {
                ...s,
                ...sD
            }
        })
        console.log(ctx.from);
        await ctx.reply(
            `<i>${ctx.from.first_name}${ctx.from.username ? ` @${ctx.from.username}` : ''} лайкнул эти песни Евровидения 2025:</i>

${songsData(songsInfo)}`,
            { parse_mode: 'HTML' }
        );

        const mediaGroup = songsInfo.map(song => ({
            type: 'audio',
            media: `https://laritovski.ru${song.audio}`,
            title: `${song.name}`,
            performer: `${song.flag} ${song.artist}`,
            // parse_mode: "MarkdownV2",
        }));

        // await ctx.sendMediaGroup(ctx.from.id, mediaGroup)
        // await ctx.sendMediaGroup(mediaGroup)
        await ctx.telegram.sendMediaGroup(ctx.from.id, mediaGroup);
    } catch (err) {
        console.error('Error processing web app data:', err);
        await ctx.reply('Произошла ошибка при обработке данных.');
    }
};