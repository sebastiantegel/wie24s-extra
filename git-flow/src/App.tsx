import { useState } from "react";
import "./App.css";

class Todo {
  constructor(public text: string) {}
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <ul>
        {todos.map((t) => {
          return <li>{t.text}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
