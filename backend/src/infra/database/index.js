const Sequelize = require("sequelize");

const student = require('../../models/Student')
const user = require('../../models/User')

const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

student.init(connection)
user.init(connection)

module.exports = connection;