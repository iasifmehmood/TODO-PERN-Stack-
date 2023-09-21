const QueryDB = require('../config/db.js');

exports.createTodo = title => {
  return QueryDB('INSERT INTO todo (title) VALUES ($1)', [title]);
};

exports.getAllTodos = () => {
  return QueryDB('SELECT * FROM todo');
};

exports.getTodoById = id => {
  return QueryDB('SELECT * FROM todo WHERE id = $1', [id]);
};

exports.updateTodo = (id, title) => {
  return QueryDB('UPDATE todo SET title = $1 WHERE id = $2', [title, id]);
};

exports.deleteTodo = id => {
  return QueryDB('DELETE FROM todo WHERE id = $1', [id]);
};
