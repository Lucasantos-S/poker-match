import React from "react";
import { usePokemon } from "@/context/PokemonContext";
import { SupportedTypes, types } from "@/utils";

export default function PokemonImage() {
  const { pokemon } = usePokemon();
  const handleTypes = pokemon?.types && pokemon?.types[0]?.type.name;
  return (
    <div className="w-[150px] h-[150px] mt-2 flex items-center justify-center rounded-full relative z-50 animate-modalOpenCenter">
      <img
        className="w-full h-full z-50 "
        src={pokemon?.sprites?.other.dream_world.front_default}
        alt=""
      />
      <div
        className="w-[150px] h-[150px] rounded-full shadow-lg absolute z-10 opacity-70"
        style={{
          background: types[handleTypes as SupportedTypes]?.color,
        }}
      ></div>
      <div className="w-[150px] h-[150px] bg-gray-0 rounded-full shadow-lg absolute z-0 opacity-70 animate-spin"></div>
    </div>
  );
}
