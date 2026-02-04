import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
