type ChildProps = {
  add: (hardness: number, flavour: string, color: string) => void;
};

export const Child = ({ add }: ChildProps) => {
  return (
    <>
      <button
        onClick={() => {
          add();
        }}
      >
        Spara godis
      </button>
    </>
  );
};
