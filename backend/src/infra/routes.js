const  Router = require('express');

const StudentController = require('../controller/StudentController');
const UserController = require('../controller/UserController');
const { authenticateToken } = require('../middleware/auth');

const routes = Router();

routes.post('/createUser', UserController.createUser);
routes.post('/login', UserController.LoginUser);

routes.get("/findAll", authenticateToken ,StudentController.findAll);
routes.get("/findStudent/:ra", authenticateToken, StudentController.getStudentByRA);
routes.get("/filterStudent/:name",authenticateToken, StudentController.filterStudentByName);

routes.post("/create",authenticateToken, StudentController.createStudent);

routes.delete("/delete/:ra",authenticateToken, StudentController.destroyStudent);

routes.put("/update/:ra",authenticateToken, StudentController.updateStudent);

module.exports = routes;