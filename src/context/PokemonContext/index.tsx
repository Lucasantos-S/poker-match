import React from "react";
import {
  IPokemonContextProps,
  IpokemonContext,
} from "./pokemonContext.structure";
import { IPokemon } from "pokeapi-typescript";

const PokemonContext = React.createContext({} as IpokemonContext);

function PokemonContextProvider({ children }: IPokemonContextProps) {
  const [pokemon, setPokemon] = React.useState({} as IPokemon | null);
  const [pokedex, setPokedex] = React.useState([] as IPokemon[]);

  function handlePokerMatch() {
    setPokedex((pokemonMatch) => [...pokemonMatch, pokemon as IPokemon]);
  }
  return (
    <PokemonContext.Provider value={{ pokedex, setPokedex }}>
      {children}
    </PokemonContext.Provider>
  );
}

function usePokemon() {
  const context = React.useContext(PokemonContext);

  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
}

export { PokemonContextProvider, usePokemon };
