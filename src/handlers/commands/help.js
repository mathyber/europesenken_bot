const {commandsText} = require("../../utils/helpers");
const {adminId} = require("../../config/config");
module.exports = async (ctx) => {
    await ctx.reply(
        commandsText(ctx.from.id.toString() === adminId)
    );
};