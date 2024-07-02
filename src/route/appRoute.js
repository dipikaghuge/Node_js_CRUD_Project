const route = require('express').Router();

const basicController = require('../controller/basic');

route.post('/add/employee',basicController.addEmployee);
route.put('/update/employee/:Id',basicController.updateEmployee);

//route.post('/basic',basicController.function1); //---body
//route.post('/basic/:city',basicController.function1); //--params
//route.post('/basic',basicController.function1); //--query

module.exports = route;

//http://192.168.102.82:4005/basic
//http://192.168.116.82:4005/basic/pune/2
//http://192.168.116.82:4005/basic?id=1&city=nashik
//http://192.168.116.82:4005/basic/nashik?salary=10000
//http://192.168.209.82:4005/add/employee
//http://192.168.209.82:4005/update/employee