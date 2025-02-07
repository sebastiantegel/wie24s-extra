export interface IPokemon {
  name: string;
}

type PokemonProps = {
  pokemons: IPokemon[];
};

export const Pokemon = (props: PokemonProps) => {
  return (
    <>
      {props.pokemons.map((p) => (
        <h5>{p.name}</h5>
      ))}
    </>
  );
};
