const  Router = require('express');

const StudentController = require('../controller/StudentController');

const routes = Router();

routes.get("/findAll", StudentController.findAll);
routes.get("/findStudent/:ra", StudentController.getStudentByRA);
routes.get("/filterStudent/:name", StudentController.filterStudentByName);

routes.post("/create", StudentController.createStudent);

routes.delete("/delete/:ra", StudentController.destroyStudent);

routes.put("/update/:ra", StudentController.updateStudent);

module.exports = routes;