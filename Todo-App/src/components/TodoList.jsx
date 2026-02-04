import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <div>
      {tasks.length === 0 && <p>No tasks added</p>}

      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
