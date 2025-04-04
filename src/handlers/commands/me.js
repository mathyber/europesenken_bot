module.exports = async (ctx) => {
    const { id, username } = ctx.from;

    let message = `Информация о вас:\n`;
    message += `ID: ${id}\n`;
    message += `Username: @${username || 'не указан'}\n`;

    await ctx.reply(message);
};