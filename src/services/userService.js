const User = require('../database/models/user');

class UserService {
    async registerUser(userId, username) {
        await User.createOrUpdate(userId, username);
    }

    async getUsers(page, perPage) {
        const users = await User.getAll(page, perPage);
        const total = await User.count();
        return { users, total };
    }
}

module.exports = new UserService();