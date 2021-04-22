import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="container">
      <ul>
        {props.dataTodos.map((todo) => {
          return <li key={todo.id}>{todo.tittle}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
