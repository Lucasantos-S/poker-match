import EnvironmentPokedex from "@/components/EnvironmentPokedex";
import PokedexMatchList from "@/components/PokedexMatchList";
import PokedexNotMatchList from "@/components/PokedexNotMatchList";
import React from "react";
import { IHashSteps, StepsType } from "./Pokedex.Structure";
import { usePokemon } from "@/context/PokemonContext";
import { IPokedex } from "@/context/PokemonContext/pokemonContext.structure";
import PokemonModal from "@/components/PokemonModal";

export default function Pokedex() {
  const [modal, setModal] = React.useState(false);
  const [modalData, setModalData] = React.useState({} as IPokedex);
  const [environment, setEnvironment] = React.useState(
    "environment_match" as StepsType
  );

  const { pokemon } = usePokemon();

  const handleChangeEnvironment = React.useCallback(
    (environment: StepsType) => {
      setEnvironment(environment);
    },
    [environment]
  );

  const stepPokedexProps = {
    modal,
    modalData,
    setModal,
    setModalData,
  };

  const stepPokedex: IHashSteps = {
    environment_match: <PokedexMatchList {...stepPokedexProps} />,
    environment_notMatch: <PokedexNotMatchList {...stepPokedexProps} />,
  };

  return (
    <aside className="flex flex-col gap-5 w-full sm:w-3/5 z-50 px-4">
      <EnvironmentPokedex
        environment={environment}
        handleChangeEnvironment={handleChangeEnvironment}
      />
      {stepPokedex[environment]}
      {modal && <PokemonModal setModal={setModal} modalData={modalData} />}
    </aside>
  );
}
