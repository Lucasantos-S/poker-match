import { StepsType } from "@/page/Home/Pokedex/Pokedex.Structure";

export interface IEnvironmentMenuProps {
  environment: StepsType;
  title?: string;
  step?: StepsType;
  handleChangeEnvironment: (environment: StepsType) => void;
}
