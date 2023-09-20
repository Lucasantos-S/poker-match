import { IPokemon } from "pokeapi-typescript";

export interface IpokemonContext {
  pokemon: IPokemon | null;
  pokedex: IPokedex[];
  setPokemon: React.Dispatch<React.SetStateAction<IPokemon | null>>;
  setPokedex: React.Dispatch<React.SetStateAction<IPokedex[]>>;
  handlePokedexMetch: () => void;
  handlePokedexNotMetch: () => void;
  removeMetchFromPokemon: (pokemonId: number) => void;
}

export interface IPokemonContextProps {
  children: React.ReactNode;
}

export interface IPokedex {
  pokemon?: IPokemon;
  match?: boolean | null;
  notMatch?: boolean | null;
}
