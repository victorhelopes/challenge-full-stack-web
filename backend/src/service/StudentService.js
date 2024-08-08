const Students = require("../models/Student");

module.exports = {
    async findAll(){
        const students = await Students.findAll();
        return students;
      },
}