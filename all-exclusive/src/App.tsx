import { useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./models/Todo";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";

function App() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([new Todo("Learn React")]);

  // <Todo[]> === I mitt state får det bara finnas objekt av typen Todo
  // [{ id: 1, text: "Test", done: false }]

  // new -> Skapar ett nytt objekt
  // Todo -> Klassen/mallen som objektet använder

  useEffect(() => {
    if (todos.length > 0) return;

    const getData = async () => {
      const response = await fetch("...");
      const data: Todo[] = await response.json();
      setTodos(data);
    };

    getData();
  });

  const decrease = () => {
    if (counter >= 1) {
      setCounter(counter - 1); // counter-- === counter = counter - 1
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const addTodo = () => {
    setTodos([...todos, new Todo("Learn TypeScript")]);
  };

  return (
    <>
      <button onClick={decrease}>-</button>
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>

      <div>
        {/* props = { theTodoList: todos, removeTodo: (id: number) => {setTodos(...)} } */}
        <Todos theTodoList={todos} removeTodo={removeTodo} />
        <AddTodo add={addTodo} />

        {/* Reducer, Context */}
        {/* <TodosContext.Provider value={{todos, dispatch}}>
          <Todos />
          <AddTodo />
        </TodosContext.Provider> */}
      </div>
    </>
  );
}

export default App;
