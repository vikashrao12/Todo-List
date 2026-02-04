import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice JavaScript", completed: false },
  ]);

  return (
    <>
      <Header />
      <ToDoList tasks={tasks} />
    </>
  );
}

export default App;
