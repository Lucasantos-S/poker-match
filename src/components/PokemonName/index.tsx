import React from "react";
import { usePokemon } from "@/context/PokemonContext";
import { formatId } from "@/utils/inedex";

export default function PokemonName() {
  const { pokemon } = usePokemon();
  return (
    <div className="w-full z-50">
      <span className="text-sm text-gray-30 font-semibold">
        #{pokemon?.id && formatId(pokemon?.id.toString())}
      </span>
      <h1 className="text-lg text-gray-50 font-bold">
        {pokemon?.name &&
          pokemon?.name.charAt(0).toLocaleUpperCase() + pokemon?.name.slice(1)}
      </h1>
    </div>
  );
}
