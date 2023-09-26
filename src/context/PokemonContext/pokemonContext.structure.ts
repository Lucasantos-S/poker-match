import { IPokemon } from "pokeapi-typescript";

export interface IpokemonContext {
  pokemon: IPokemon | null;
  pokedex: IPokedex[];
  like: boolean;
  setPokemon: React.Dispatch<React.SetStateAction<IPokemon | null>>;
  setPokedex: React.Dispatch<React.SetStateAction<IPokedex[]>>;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
  handlePokedexMatch: () => void;
  handlePokedexNotMatch: () => void;
  updateMatchFromPokemon: (pokemonId: number) => void;
}

export interface IPokemonContextProps {
  children: React.ReactNode;
}

export interface IPokedex {
  pokemon?: IPokemon;
  match?: boolean | null;
  notMatch?: boolean | null;
}
