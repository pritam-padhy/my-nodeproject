const express = require('express');

const todoRouter = express.Router();
const { getAllToDos } = require('../controller/todo-controller');

todoRouter.get('/', myError, getAllToDos);



module.exports = todoRouter;