import { useState } from "react";
import { Child } from "./Child";

type Candy = {
  hardness: number;
  flavour: string;
  color: string;
};

export const Parent = () => {
  const [candies, setCandies] = useState<Candy[]>([]);

  const addCandy = (hardness: number, flavour: string, color: string) => {
    setCandies([...candies, { hardness, flavour, color }]);
  };

  return (
    <>
      <Child add={addCandy} />

      <ul>
        {candies.map((c) => {
          return (
            <li>
              {c.flavour} - {c.color} - {c.hardness}
            </li>
          );
        })}
      </ul>
    </>
  );
};
