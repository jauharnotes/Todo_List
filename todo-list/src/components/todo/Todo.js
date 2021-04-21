import "./Todo.css";
import TodoList from "../todo-list/TodoList";

const Todo = () => {
  const todos = [
    { id: 1, tittle: "Eat" },
    { id: 2, tittle: "Sleep" },
    { id: 3, tittle: "Code" },
  ];

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default Todo;
