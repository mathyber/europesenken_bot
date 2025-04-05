const {pagination, commands, adminCommands} = require('../config/config');

module.exports = {
    formatUserList: (users, page, total) => {
        let text = `Список пользователей (${total}):\n\n`;
        users.forEach((user, index) => {
            text += `${(page - 1) * pagination.perPage + index + 1}. ${user.username ? `@${user.username}` : `[unknown]`} (ID: ${user.id})\n`;
        });
        text += `\nСтраница ${page}`;
        return text;
    },
    commandsText: (isAdmin) => 'Доступные команды:\n\n' +
        commands.join('\n') +
        (
            isAdmin
                ? ('\n\nДля администратора:\n' +
                    adminCommands.join('\n'))
                : ''
        ),
};