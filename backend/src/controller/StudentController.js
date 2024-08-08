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
  },

  async createStudent(request, response) {
    try{
      const { ra, cpf, email, name } = request.body;
      const result = await StudentService.createStudent( ra, cpf, email, name )
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  },
  
  async getStudentByRA(request, response){
    try{
      const { ra } = request.params;
      const result = await StudentService.findStudentByRA(ra)
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    } 
  }
}