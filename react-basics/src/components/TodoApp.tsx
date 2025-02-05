import { useState } from "react";

class Todo {
  id: number;
  done: boolean;

  constructor(public text: string) {
    this.id = Date.now();
    this.done = false;
  }
}

export const TodoApp = () => {
  // todos = [{ id: 1, text: 'abc', done: false},
  // { id: 2, text: '123', done: false},
  // { id: 3, text: 'ode', done: false}]
  //   const [todos, setTodos] = useState<Todo[]>([
  //     new Todo("abc"),
  //     new Todo("123"),
  //     new Todo("ode"),
  //   ]);
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  const [userInput, setUserInput] = useState("");

  // todos = [{ id: 1, text: 'abc', done: false},
  // { id: 2, text: '123', done: false},
  // { id: 3, text: 'ode', done: false},
  // { id: 4, text: '8a79f', done: false}]
  const add = () => {
    console.log("In add:", todos);
    // Skapa en kopia av todos (3 saker)
    // , new Todo(4, '8a79f', false) -> Lägg till en ny todo (objekt)
    // i listan
    setTodos([...todos, new Todo(userInput)]);
  };

  console.log("In component:", todos);
  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div>
      <p>Antal todos: {todos.length}</p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        placeholder="Ange todotext"
      />
      <button onClick={add}>Add todo</button>
    </div>
  );
};
