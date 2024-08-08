const { Model, DataTypes} = require('sequelize')

class student extends Model{
    static init(sequelize){
        super.init({
            ra: { primaryKey: true, type: DataTypes.INTEGER },
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = student;