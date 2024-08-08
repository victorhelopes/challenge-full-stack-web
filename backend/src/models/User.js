const { Model, DataTypes} = require('sequelize')

class user extends Model{
    static init(sequelize){
        super.init({
            isAdmin: DataTypes.BOOLEAN,
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = user;