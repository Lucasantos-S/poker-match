import { IPokedex } from "@/context/PokemonContext/pokemonContext.structure";
import { Dispatch, SetStateAction } from "react";

export type StepsType = "environment_match" | "environment_notMatch";

export type IHashSteps = {
  [key in StepsType]: JSX.Element;
};

export interface IstepPokedexProps {
  modal?: boolean;
  modalData: IPokedex;
  setModal: Dispatch<SetStateAction<boolean>>;
  setModalData: React.Dispatch<React.SetStateAction<IPokedex>>;
}
