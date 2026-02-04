import { useState } from "react";

function ToDoItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function saveEdit() {
    editTask(task.id, newText);
    setIsEdit(false);
  }

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {isEdit ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          className={`task-text ${task.completed ? "completed" : ""}`}
        >
          {task.text}
        </span>
      )}

      {isEdit ? (
        <button onClick={saveEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEdit(true)}>Edit</button>
      )}

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
