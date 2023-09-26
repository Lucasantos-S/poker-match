import React from "react";
import { usePokemon } from "@/context/PokemonContext";
import { SupportedTypes, formatId, formatName, types } from "@/utils";
import Icons from "@/assets/icons";
import { IIconProps, IIcons } from "@/assets/icons/Icons.structure";
import PokemonTypeIcon from "../PokemonTypeIcon";
import { IPokemon } from "pokeapi-typescript";

export default function PokemonName() {
  const { pokemon } = usePokemon();
  const handleTypesFirts = pokemon?.types && pokemon?.types[0]?.type.name;
  const handleTypesSecond = pokemon?.types && pokemon?.types[1]?.type.name;
  return (
    <div className="w-full flex justify-between z-50">
      <div>
        <span className="text-sm text-gray-30 font-semibold">
          #{pokemon?.id && formatId(pokemon?.id.toString())}
        </span>
        <h1 className="text-lg text-gray-50 font-bold">
          {pokemon?.name && formatName(pokemon?.name)}
        </h1>
      </div>
      <div className="h-full flex gap-2 items-center justify-center">
        <PokemonTypeIcon
          name={handleTypesFirts as string}
          handleType={handleTypesFirts as SupportedTypes}
        />

        <PokemonTypeIcon
          name={handleTypesSecond as string}
          handleType={handleTypesSecond as SupportedTypes}
        />
      </div>
    </div>
  );
}
