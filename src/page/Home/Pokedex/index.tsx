import EnvironmentPokedex from "@/components/EnvironmentPokedex";
import PokedexMatchList from "@/components/PokedexMatchList";
import PokedexNotMatchList from "@/components/PokedexNotMatchList";
import { usePokemon } from "@/context/PokemonContext";
import React from "react";
import { IHashSteps, StepsType } from "./Pokedex.Structure";
import Icons from "@/assets/icons";

export default function Pokedex() {
  const [environment, setEnvironment] = React.useState(
    "environment_metch" as StepsType
  );

  const handleChangeEnvironment = React.useCallback(
    (environment: StepsType) => {
      setEnvironment(environment);
    },
    [environment]
  );

  const stepPokedex: IHashSteps = {
    environment_metch: <PokedexMatchList />,
    environment_notMetch: <PokedexNotMatchList />,
  };
  return (
    <aside className="flex flex-col gap-5 w-full sm:w-3/5 z-50 px-4">
      <EnvironmentPokedex
        environment={environment}
        handleChangeEnvironment={handleChangeEnvironment}
      />
      {stepPokedex[environment]}
    </aside>
  );
}
