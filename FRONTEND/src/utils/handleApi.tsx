import axios from 'axios';

const baseURL = 'http://localhost:4000';

const getAllTodo = (setTodo: any) => {
  axios
    .get(`${baseURL}/api/getAll`)
    .then(({ data }) => {
      console.log('data', data.Todos);
      setTodo(data.Todos);
    })
    .catch(error => console.log(error));
};

const addTodo = (title, setTitle, setTodo) => {
  axios
    .post(`${baseURL}/api/create`, { title })
    .then(({ data }) => {
      console.log('data', data.Todos);
      setTodo(data.Todos);
      setTitle(''); //clearing text field
      getAllTodo(setTodo); //fetch all todo also new ones
    })
    .catch(error => console.log(error));
};

const updateTodo = (todoId, title, setTodo, setTitle, setIsUpdating) => {
  axios
    .put(`${baseURL}/api/update/${todoId}`, { title })
    .then(({ data }) => {
      console.log('data', data.Todos);
      setTitle('');
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch(error => console.log(error));
};

const deleteTodo = (todoId, setTodo) => {
  axios
    .delete(`${baseURL}/api/delete/${todoId}`)
    .then(({ data }) => {
      console.log('data', data.Todos);
      getAllTodo(setTodo);
    })
    .catch(error => console.log(error));
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
