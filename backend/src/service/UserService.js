const Users = require("../models/User");

module.exports = {
    async createUser({name, isAdmin}) {
        const result = await Users.create({ name, isAdmin })
        return result;
    },

    async filterUserByName(name){
        const user = await Users.findOne({ where: {name}})
        console.log(user)
        return user
    },
}