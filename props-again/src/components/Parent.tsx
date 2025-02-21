import { useState } from "react";
import { Child } from "./Child";

export type Candy = {
  hardness: number;
  flavour: string;
  color: string;
};

export const Parent = () => {
  const [candies, setCandies] = useState<Candy[]>([]);

  const addCandy = (hardness: number, flavour: string, color: string): void => {
    setCandies([...candies, { hardness, flavour, color }]);
  };

  return (
    <>
      {/* Parent -> { add: addCandy } -> Child */}
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
