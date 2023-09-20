import { SupportedTypes } from "@/utils";
import { IPokemon } from "pokeapi-typescript";

export interface IPokemonTypeIconProps {
  name: string;
  handleType: SupportedTypes;
}
