import { IPokemonStat, IPokemonType } from "pokeapi-typescript";

export interface IStatsProps {
  stats: IPokemonStat[];
  type: IPokemonType[];
}
