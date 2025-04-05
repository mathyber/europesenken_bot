module.exports = async (ctx) => {
    const { id, username } = ctx.from;

    let message = `Информация о вас:\n`;
    message += `ID: ${id}\n`;
    message += `Username: TEST @${username || 'не указан'}\n`;

    await ctx.reply(message);
};