import { IPokemon, Pokemon } from "./Pokemon";

export const Pokemons = () => {
  const ps: IPokemon[] = [{ name: "Pikachu" }, { name: "Charmander" }];

  return (
    <>
      <h2>Pokemons</h2>
      <Pokemon pokemons={ps} />
    </>
  );
};
