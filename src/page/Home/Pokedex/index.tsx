import { usePokemon } from "@/context/PokemonContext";
import React from "react";

export default function Pokedex() {
  const { pokedex } = usePokemon();
  return (
    <div className="flex w-full max-h-[200px]">
      {pokedex?.map((pokedex) => {
        const tag = pokedex.match ? "Match" : "NotMatch";
        return (
          <div className="flex flex-col items-center justify-center min-w-[100px] min-h-[100px]">
            <img
              className="w-full h-full animate-left"
              src={pokedex?.pokemon?.sprites?.other.dream_world.front_default}
              alt=""
            />
            <p>{tag}</p>
          </div>
        );
      })}
    </div>
  );
}
