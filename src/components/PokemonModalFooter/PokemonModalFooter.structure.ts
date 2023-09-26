import { IPokedex } from "@/context/PokemonContext/pokemonContext.structure";
import { Dispatch, SetStateAction } from "react";

export interface IPokemonModalFooterProps {
  pokedex: IPokedex;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setModal: Dispatch<SetStateAction<boolean>>
}
