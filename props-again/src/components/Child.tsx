import { ChangeEvent, useState } from "react";
import { Candy } from "./Parent";

type ChildProps = {
  add: (hardness: number, flavour: string, color: string) => void;
};

//                   props
{
  /* Parent -> { add: addCandy } -> Child */
}

// ChildProps -> {
// add: (hardness: number, flavour: string, color: string) => void
// }
export const Child = ({ add }: ChildProps) => {
  const [candy, setCandy] = useState<Candy>({
    hardness: 0,
    flavour: "",
    color: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.target === Den textruta som har ändrats
    // e.target.value  === Det värde som står i en av textrutorna

    if (e.target.type === "number") {
      // Gör en kopia på candy och ändra egenskapen
      // hardness till det värde som står i textrutan
      setCandy({ ...candy, [e.target.id]: +e.target.value });
    }
    if (e.target.type === "text") {
      setCandy({ ...candy, [e.target.id]: e.target.value });
    }
  };

  return (
    <div className="child">
      <div>
        <label htmlFor="hardness">Hårdhet: </label>
        <input
          type="number"
          id="hardness"
          value={candy.hardness}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="flavour">Smak: </label>
        <input
          type="text"
          id="flavour"
          value={candy.flavour}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="color">Färg: </label>
        <input
          type="text"
          id="color"
          value={candy.color}
          onChange={handleChange}
        />
      </div>

      <p>{JSON.stringify(candy)}</p>

      <button
        onClick={() => {
          add(candy.hardness, candy.flavour, candy.color);
        }}
      >
        Spara godis
      </button>
    </div>
  );
};
