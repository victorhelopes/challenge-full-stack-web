const StudentService = require("../service/StudentService");

module.exports = {
  async findAll(_, response){
    try{
        const students = await StudentService.findAll();
        return response.json(students);
    }catch(e){
        if (e instanceof Error)
            return response.status(500).json({ message: e.message });
        return response.status(500).json({ message: 'Unknown Error.' });
    }
  }
}