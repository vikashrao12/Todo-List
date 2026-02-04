import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  // ADD TASK
  function addTask() {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  }

  // DELETE TASK
  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  // COMPLETE TASK
  function toggleTask(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
  }

  // EDIT TASK
  function editTask(id, newText) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <Header />

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
