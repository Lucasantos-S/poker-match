import React from "react";
import { usePokemon } from "@/context/PokemonContext";
import PokedexNotFound from "../PokedexNotFound";
import PokemonList from "../PokemonList";
import { IPokemon } from "pokeapi-typescript";

export default function PokedexMatchList() {
  const { pokedex, removeMetchFromPokemon } = usePokemon();

  const pokedexMetches = React.useMemo(() => {
    return pokedex.map((pokedex) => {
      if (pokedex.match)
        return (
          <div
            onClick={() =>
              removeMetchFromPokemon(pokedex?.pokemon?.id as number)
            }
            className="w-full h-20 lg:h-16 min-h-[100px] lg:min-h-[56px]  rounded-2xl flex flex-wrap lg:flex-nowrap  items-center justify-between border-b-[1px] break-words lg:px-10 hover:scale-105 cursor-pointer bg-gradient-to-r from-linear-1 from-10% via-linear-2 via-30% to-linear-3 to-90% transition-all px-6"
          >
            <PokemonList pokemon={pokedex.pokemon as IPokemon} />
          </div>
        );
    });
  }, [pokedex]);

  if (!pokedex.find((pokemon) => pokemon.match === true))
    return <PokedexNotFound />;
  return (
    <main className="w-full bg-gray-20 rounded-2xl pr-5 py-4 z-50 animate-left">
      <aside className="w-full max-h-[calc(100vh-160px)] h-full flex items-center flex-col gap-4 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-gray-6 scrollbar-thumb-primary-dark scrollbar-thumb-rounded-lg px-10 pb-5 ">
        {pokedexMetches}
      </aside>
    </main>
  );
}
