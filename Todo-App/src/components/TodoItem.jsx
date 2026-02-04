import { useState } from "react";

function ToDoItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function saveEdit() {
    editTask(task.id, newText);
    setIsEdit(false);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {isEdit ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <span style={{ textDecoration: task.completed ? "line-through" : "" }}>
          {task.text}
        </span>
      )}

      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
