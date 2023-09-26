import { SupportedTypes, types } from "@/utils";
import { IPokemon } from "pokeapi-typescript";
import React from "react";

export default function PokemonModalHeader({ pokemon }: { pokemon: IPokemon }) {
  const handleTypes = pokemon?.types && pokemon?.types[0]?.type.name;
  return (
    <header className="w-[200px] h-[200px] mt-2 flex items-center justify-center rounded-full relative z-0">
      <img
        className="w-full h-full z-50 "
        src={pokemon?.sprites?.other.dream_world.front_default}
        alt=""
      />
      <div
        className="w-[400px] h-[400px] rounded-full shadow-lg absolute z-0 opacity-70 -top-64"
        style={{
          background: types[handleTypes as SupportedTypes]?.color,
        }}
      ></div>
    </header>
  );
}
