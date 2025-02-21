type AddTodoProps = {
  add: () => void;
};

export const AddTodo = ({ add }: AddTodoProps) => {
  return (
    <>
      <button
        onClick={() => {
          add();
        }}
      >
        Add todo
      </button>
    </>
  );
};
