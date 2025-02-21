import { useState } from "react";
import { Coffee } from "../models/Coffee";

export const CoffeeList = () => {
  const [theList, setTheList] = useState<Coffee[]>([
    new Coffee("Cortado", "Blaha blaha", 8, "Drop Coffee"),
    new Coffee("Flat white", "Lorem ipsum", 2, "Waynes coffee"),
    new Coffee("Espresso tonic", "Tveksamt", 5, "Johan & Nyström"),
  ]);

  return (
    <ul>
      {theList.map((c) => {
        return (
          <li key={c.name}>
            {c.name} - {c.strength}
          </li>
        );
      })}
    </ul>
  );
};
