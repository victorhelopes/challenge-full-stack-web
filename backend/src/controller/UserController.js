const UserService = require("../service/UserService");
const jwt = require('jsonwebtoken')

module.exports = {
  async createUser(request, response) {
    try{
      const { name, isAdmin } = request.body;
      const result = await UserService.createUser( {name, isAdmin} )
      return response.json(result);
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    }
  },

  async LoginUser(request, response){
    try{
      const { name } = request.body;
      const result = await UserService.filterUserByName(name)
      if(process.env.JWT_SECRET_KEY){
        const userInfos = {
          name: result.name,
          isAdmin: result.isAdmin,
        }
        const token = await jwt.sign(userInfos, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        response.send({ token });
      }
  
    }catch(e){
      if (e instanceof Error)
        return response.status(500).json({ message: e.message });
      return response.status(500).json({ message: 'Unknown Error.' });
    } 
  },

}