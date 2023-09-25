import { IPokedex } from "@/context/PokemonContext/pokemonContext.structure";
import { Dispatch, SetStateAction } from "react";

export interface IPokemonModalProps {
  modalData: IPokedex;
  setModal: Dispatch<SetStateAction<boolean>>;
}
