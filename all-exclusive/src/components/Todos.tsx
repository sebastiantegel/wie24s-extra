import { Todo } from "../models/Todo";

type TodosProps = {
  theTodoList: Todo[];
  removeTodo: (id: number) => void;
};

{
  /* props = { theTodoList: todos, removeTodo: (id: number) => {setTodos(...)} } */
}
export const Todos = ({ theTodoList, removeTodo }: TodosProps) => {
  return (
    <>
      {theTodoList.map((t) => {
        return (
          <div key={t.id}>
            <span>{t.text}</span>
            <button
              onClick={() => {
                removeTodo(t.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};
