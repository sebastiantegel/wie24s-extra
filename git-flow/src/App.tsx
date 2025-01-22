import { useState } from "react";
import "./App.css";

class Todo {
  constructor(public text: string) {}
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div id="wrapper">
      <header>
        <nav>
          <ul>
            <li>Hem</li>
            <li>Om</li>
            <li>Kontakt</li>
          </ul>
        </nav>
      </header>
      <main>
        <ul id="todos">
          {todos.map((t) => {
            return <li>{t.text}</li>;
          })}
        </ul>
      </main>
      <footer>
        <div>Social media</div>
        <div>Map</div>
        <div>Contact info</div>
      </footer>
    </div>
  );
}

export default App;
