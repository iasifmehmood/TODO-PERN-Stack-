const express = require('express');
const todoController = require('../controller/TodoController');
const todoRouter = express.Router();

todoRouter.post('/create', todoController.createTodo);

todoRouter.get('/getAll', todoController.getAllTodos);

todoRouter.get('/getById/:id', todoController.getTodobyId);

todoRouter.put('/update/:id', todoController.updateTodo);

todoRouter.delete('/delete/:id', todoController.deleteTodo);

module.exports = todoRouter;
