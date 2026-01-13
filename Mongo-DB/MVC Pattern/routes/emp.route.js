const express = require('express');
const multer = require('multer');
const path = require('path')
// const fs = require('fs');
const { employeeFormPage, addEmployee, allEmployeePage, deleteEmployee, editEmployeePage, updateEmployee, errorPage } = require("../controller/emp.controller");

const empRoute = express.Router();

empRoute.get('/', employeeFormPage);
empRoute.post('/addEmp', uploads.single("emp_image"), addEmployee);
empRoute.get('/allEmployeePage', uploads.single("emp_image"), allEmployeePage);

empRoute.get('/deleteEmp', deleteEmployee);

empRoute.get('/editEmp/:empId', uploads.single("emp_image"), editEmployeePage);
empRoute.post('/updateEmp', updateEmployee);


empRoute.get('/404', errorPage);

module.exports = empRoute;