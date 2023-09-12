import { IPokemon } from "pokeapi-typescript";

export interface IpokemonContext {
  pokedex: IPokemon[];
  setPokedex: React.Dispatch<React.SetStateAction<IPokemon[]>>;
}

export interface IPokemonContextProps {
  children: React.ReactNode;
}
