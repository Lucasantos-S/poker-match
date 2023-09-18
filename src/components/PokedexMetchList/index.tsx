import { usePokemon } from "@/context/PokemonContext";
import { SupportedTypes, types } from "@/utils/inedex";
import React from "react";

export default function PokedexMetchList() {
  const { pokedex } = usePokemon();

  const pokedexMetches = React.useMemo(() => {
    return pokedex.map((pokedex) => {
      const handleTypes =
        pokedex.pokemon?.types && pokedex.pokemon?.types[0]?.type.name;
      return (
        <div
          // style={{ background: types[handleTypes as SupportedTypes]?.color }}
          className="w-full h-14 min-h-[56px] rounded-2xl grid grid-cols-[repeat(4,1fr)] gap-4 items-center border-b-[1px] break-words px-10 hover:scale-105 cursor-pointer bg-gradient-to-r from-linear-1 from-10% via-linear-2 via-30% to-linear-3 to-90% transition-all"
        >
          <div
            style={{ background: types[handleTypes as SupportedTypes]?.color }}
            className="w-10 h-10 rounded-full"
          >
            <img
              className="w-full h-full z-50 "
              src={pokedex.pokemon?.sprites?.other.dream_world.front_default}
              alt=""
            />
          </div>
          <span>{pokedex.pokemon?.name}</span>
          <span>{pokedex.pokemon?.types[0].type.name}</span>
          <span>ok</span>
        </div>
      );
    });
  }, [pokedex]);
  return (
    <main className="w-full bg-gray-0 dark:bg-gray-10 rounded-2xl pr-5 py-4 z-50 animate-modalOpenCenter">
      <aside className="w-full max-h-[calc(100vh-160px)] h-full flex items-center flex-col gap-4 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-gray-6 scrollbar-thumb-primary-dark scrollbar-thumb-rounded-lg px-10">
        {pokedexMetches}
      </aside>
    </main>
  );
}
