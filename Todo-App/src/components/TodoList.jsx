import ToDoItem from "./TodoItem";

function ToDoList({ todos }) {
  return (
    <div>
      <h2>My Tasks</h2>

      {todos.length === 0 && <p>No tasks added yet</p>}
    </div>
  );
}

export default ToDoList;
