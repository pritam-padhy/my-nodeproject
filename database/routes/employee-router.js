const express = require('express');
const { getEmployees, getEmployeeById } = require('../controllers/employee-controller');

const employeeRouter = require.Router();

employeeRouter.get('/', getEmployees);
employeeRouter.get('/:id', getEmployeeById);

module.exports = employeeRouter;
