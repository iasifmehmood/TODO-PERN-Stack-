import { useEffect, useState } from 'react';
import TodoItems from './todoItems';
import {
  addTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from '../utils/handleApi';

interface TodoItem {
  id: number;
  title: string;
}

function Todo() {
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [title, setTitle] = useState<string>(''); // Specify the type for title
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [todoId, setTodoId] = useState<any>('');

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (id, title) => {
    setIsUpdating(true);
    setTitle(title);
    setTodoId(id);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>Todo</h1>

        <div className='top'>
          <input
            type='text'
            placeholder='Add Todos'
            value={title}
            onChange={e => setTitle(e.target.value)}
          ></input>
          <div
            className='add'
            onClick={
              isUpdating
                ? () =>
                    updateTodo(todoId, title, setTodo, setTitle, setIsUpdating)
                : () => addTodo(title, setTitle, setTodo)
            }
          >
            {isUpdating ? 'update' : 'Add'}
          </div>
        </div>

        <div className='list'>
          {todo && todo.length > 0 ? (
            todo.map(item => (
              <TodoItems
                key={item.id}
                text={item.title}
                updateMode={() => updateMode(item.id, item.title)}
                deleteTodo={() => deleteTodo(item.id, setTodo)}
              />
            ))
          ) : (
            <p>Loading...</p> // You can add a loading indicator here
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
