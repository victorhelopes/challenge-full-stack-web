const  Router = require('express');

const StudentController = require('../controller/StudentController');

const routes = Router();

routes.get("/findAll", StudentController.findAll);
routes.get("/findStudent/:ra", StudentController.getStudentByRA);
routes.post("/create", StudentController.createStudent);
routes.delete("/delete/:ra", StudentController.destroyStudent);

module.exports = routes;