import { IPokedex } from "@/context/PokemonContext/pokemonContext.structure";
import { Dispatch, SetStateAction } from "react";

export interface IPokemonModalFooterProps {
  pokedex: IPokedex;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
