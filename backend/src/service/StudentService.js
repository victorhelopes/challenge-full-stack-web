const { Op } = require("sequelize");
const Students = require("../models/Student");
const { cpfValidator } = require("../utils/cpfValidator");
const { emailValidator } = require("../utils/emailValidator");

module.exports = {
    async findAll(){
        const students = await Students.findAll();
        return students;
      },

    async createStudent( ra, cpf, email, name) {
        if(ra.length === 0 || cpf.length === 0 || email.length === 0 || name.length === 0){
            throw new Error('Verifique se todos os campos foram inseridos corretamente')
        }
        if(!cpfValidator(cpf)){
            throw new Error('CPF inválido');
        }
        if(!emailValidator(email)){
            throw new Error('Email não está inserido corretamente')
        }
        const result = await Students.create({ ra, cpf, email, name })
        return result;
    },

    
    async filterStudentByName(name){
        const student = await Students.findAll({ 
            where: { 
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })
        return student
    },

    async findStudentByRA(ra){
        const student = await Students.findByPk(ra)
        return student
    },

    async deleteStudent(ra){
        const result = await Students.destroy({ where: { ra: ra}})
        return result
    },

    async updateStudent({email, name}, ra){
        const result = await Students.update({ email, name }, { where: { ra: ra}})
        return result
    }
}