import React from "react";
import Icons from "@/assets/icons";
import { IIcons } from "@/assets/icons/Icons.structure";
import { SupportedTypes, formatId, types } from "@/utils";
import { IPokemonListProps } from "./PokemonList.structure";

export default function PokemonList({ pokemon }: IPokemonListProps) {
  const handleTypesFirts = pokemon?.types && pokemon?.types[0]?.type.name;
  const handleTypesSecond = pokemon?.types && pokemon?.types[1]?.type.name;
  return (
    <>
      <section className="lg:w-1/2 w-full flex items-center justify-between gap-5">
        <div
          style={{
            background: types[handleTypesFirts as SupportedTypes]?.color,
          }}
          className="w-10 h-10 rounded-full"
        >
          <img
            className="w-full h-full z-50 "
            src={pokemon?.sprites?.other.dream_world.front_default}
            alt=""
          />
        </div>
        <span className="font-bold">
          {pokemon &&
            pokemon?.name.charAt(0).toLocaleUpperCase() +
              pokemon?.name.slice(1)}
        </span>
        <span className="text-sm text-gray-30 font-semibold">
          #{pokemon?.id && formatId(pokemon?.id.toString())}
        </span>
      </section>
      <section className="flex gap-5 h-7">
        <div className="flex items-center gap-2">
          <Icons name={handleTypesFirts as keyof IIcons} size={12} />
          <span>{handleTypesFirts}</span>
        </div>
        <div className="flex items-center gap-2">
          <Icons name={handleTypesSecond as keyof IIcons} size={12} />
          <span>{handleTypesSecond}</span>
        </div>
      </section>
    </>
  );
}
