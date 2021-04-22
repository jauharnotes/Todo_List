import "./TodoCreate.css";
import { useState } from 'react';

const TodoCreate = (props) => {
  const [getInputTodo, setInputTodo] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      tittle: getInputTodo
    }

    props.onCreateTodo(newTodo);

    setInputTodo('');

  }

  const handleInputTodo = (event) => {
    setInputTodo(event.target.value)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={getInputTodo} placeholder="Type here.." onChange={handleInputTodo}/>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCreate;
