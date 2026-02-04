import ToDoItem from "./ToDoItem";

function ToDoList({ tasks }) {
  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.length === 0 && <p>No tasks added yet</p>}

      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ToDoList;
