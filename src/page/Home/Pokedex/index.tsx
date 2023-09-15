import EnvironmentPokedex from "@/components/EnvironmentPokedex";
import PokedexMetchList from "@/components/PokedexMetchList";
import PokedexNotMetchList from "@/components/PokedexNotMetchList";
import { usePokemon } from "@/context/PokemonContext";
import React from "react";
import { IHashSteps, StepsType } from "./Pokedex.Structure";

export default function Pokedex() {
  const [environment, setEnvironment] = React.useState(
    "environment_metch " as StepsType
  );
  const { pokedex } = usePokemon();

  function handleChangeEnvironment(environment: StepsType) {
    setEnvironment(environment);
  }

  const stepPokedex: IHashSteps = {
    environment_metch: <PokedexMetchList />,
    environment_notMetch: <PokedexNotMetchList />,
  };
  return (
    <aside className="flex flex-col gap-5 w-3/5 z-50">
      <EnvironmentPokedex
        environment={environment}
        handleChangeEnvironment={handleChangeEnvironment}
      />
      {stepPokedex[environment]}
    </aside>
  );
}
