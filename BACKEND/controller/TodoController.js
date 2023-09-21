const todoModel = require('../model/TodoModel');

exports.createTodo = async (req, res) => {
  const { title } = req.body;
  try {
    await todoModel.createTodo(title);
    return res.status(200).json({
      status: 'success',
      message: 'Todo is created',
    });
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Error in createTodo',
      errMsg: error,
    });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const results = await todoModel.getAllTodos();
    return res.status(200).json({
      status: 'success',
      message: 'View all Todos',
      Todos: results,
    });
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Error in viewing Todo',
      errMsg: error,
    });
  }
};

exports.getTodobyId = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await todoModel.getTodoById(id);
    return res.status(200).json({
      status: 'success',
      message: 'View Todo by ID',
      Todos: results,
    });
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Error in viewing Todo',
      errMsg: error,
    });
  }
};

exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  try {
    const results = await todoModel.updateTodo(id, title);
    if (results.affectedRows === 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'Id not found',
      });
    }
    return res.status(200).json({
      status: 'success',
      message: 'Todo is updated',
    });
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Error in updating Todos',
      errMsg: error,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await todoModel.deleteTodo(id);
    if (results.affectedRows === 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'Id not found',
      });
    }
    return res.status(200).json({
      status: 'success',
      message: 'Todo is deleted successfully',
    });
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Error in deleting Todos',
      errMsg: error,
    });
  }
};
