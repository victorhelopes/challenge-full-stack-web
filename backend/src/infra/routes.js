const  Router = require('express');

const StudentController = require('../controller/StudentController');

const routes = Router();

routes.get("/findAll", StudentController.findAll);
routes.post("/create", StudentController.createStudent);

module.exports = routes;