import "./Todo.css";
import { useState } from "react";
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-list/todo-create/TodoCreate";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    { id: 1, tittle: "Eat" },
    { id: 2, tittle: "Sleep" },
    { id: 3, tittle: "Code" },
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
