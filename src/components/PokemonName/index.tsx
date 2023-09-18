import React from "react";
import { usePokemon } from "@/context/PokemonContext";
import { SupportedTypes, formatId, types } from "@/utils/inedex";
import Icons from "@/assets/icons";
import { IIconProps, IIcons } from "@/assets/icons/Icons.structure";

export default function PokemonName() {
  const { pokemon } = usePokemon();
  const handleTypes = pokemon?.types && pokemon?.types[0]?.type.name;
  return (
    <div className="w-full flex justify-between z-50">
      <div>
        <span className="text-sm text-gray-30 font-semibold">
          #{pokemon?.id && formatId(pokemon?.id.toString())}
        </span>
        <h1 className="text-lg text-gray-50 font-bold">
          {pokemon?.name &&
            pokemon?.name.charAt(0).toLocaleUpperCase() +
              pokemon?.name.slice(1)}
        </h1>
      </div>
      <div className="w-10 h-10 flex items-center justify-center relative">
        <span className="z-50">
          {handleTypes && (
            <Icons
              name={pokemon?.types[0].type.name as keyof IIcons}
              size={15}
            />
          )}
        </span>

        <span
          style={{
            background: types[handleTypes as SupportedTypes]?.color,
          }}
          className="w-10 h-10 absolute z-0 opacity-40 rounded-full"
        ></span>
      </div>
    </div>
  );
}
