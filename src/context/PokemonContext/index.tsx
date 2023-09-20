import React from "react";
import {
  IPokedex,
  IPokemonContextProps,
  IpokemonContext,
} from "./pokemonContext.structure";
import { IPokemon } from "pokeapi-typescript";

const PokemonContext = React.createContext({} as IpokemonContext);

function PokemonContextProvider({ children }: IPokemonContextProps) {
  const [pokemon, setPokemon] = React.useState({} as IPokemon | null);
  const [pokedex, setPokedex] = React.useState([] as IPokedex[]);

  const handlePokedexMetch = React.useCallback(() => {
    if (pokemon) {
      setPokedex((pokemons) => [
        ...pokemons,
        { pokemon: pokemon as IPokemon, match: true },
      ]);
    }
  }, [pokemon, setPokedex]);

  const handlePokedexNotMetch = React.useCallback(() => {
    if (pokemon) {
      setPokedex((pokemons) => [
        ...pokemons,
        { pokemon: pokemon as IPokemon, notMatch: true },
      ]);
    }
  }, [pokemon, setPokedex]);

  function removeMetchFromPokemon(pokemonId: number) {
    setPokedex((prevPokedex) => {
      return prevPokedex.map((pokemon) => {
        if (pokemon.pokemon && pokemon.pokemon.id === pokemonId) {
          return {
            ...pokemon,
            match: null,
          };
        }
        return pokemon;
      });
    });
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        pokedex,
        setPokemon,
        setPokedex,
        handlePokedexMetch,
        handlePokedexNotMetch,
        removeMetchFromPokemon,
      }}
    >
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
