import React from "react";
import PokemonModalDescription from "../PokemonModalDescription";
import Icons from "@/assets/icons";
import { IPokemon } from "pokeapi-typescript";
import { SupportedTypes, formatId, types } from "@/utils";
import { IIcons } from "@/assets/icons/Icons.structure";
import { IPokedex } from "@/context/PokemonContext/pokemonContext.structure";

export default function PokemonModalMain({ pokemon }: IPokedex) {
  const handleTypesFirts = pokemon?.types && pokemon?.types[0]?.type.name;
  const handleTypesSecond = pokemon?.types && pokemon?.types[1]?.type.name;
  return (
    <main className="w-full  flex flex-col gap-5 ">
      <section className="flex flex-col ">
        <h2 className="text-2xl text-gray-50 font-bold">
          {pokemon?.name &&
            pokemon?.name.charAt(0).toLocaleUpperCase() +
              pokemon?.name.slice(1)}
        </h2>
        <span className="text-sm text-gray-30 font-semibold">
          #{pokemon?.id && formatId(pokemon?.id.toString())}
        </span>
      </section>
      <section className="flex  w-full gap-2">
        <div
          style={{
            background: types[handleTypesFirts as SupportedTypes]?.color,
          }}
          className="flex items-center gap-2 px-3 py-[3px] rounded-2xl"
        >
          <div className="w-6 h-6  flex items-center justify-center bg-gray-0 rounded-full">
            <Icons name={handleTypesFirts as keyof IIcons} size={9} />
          </div>
          <span className="text-sm text-gray-60 font-bold">
            {handleTypesFirts}
          </span>
        </div>
        <div
          style={{
            background: types[handleTypesSecond as SupportedTypes]?.color,
          }}
          className="flex items-center gap-2 px-3 py-[3px] rounded-2xl"
        >
          <div className="w-6 h-6  flex items-center justify-center bg-gray-0 rounded-full">
            <Icons name={handleTypesSecond as keyof IIcons} size={9} />
          </div>
          <span className="text-base font-bold">{handleTypesSecond}</span>
        </div>
      </section>
      <section className="w-full grid grid-cols-2 gap-5 border-y-[1px] px-2 py-5">
        <PokemonModalDescription
          title="Altura"
          icon="Weight-Icon"
          description={`${pokemon?.weight && pokemon?.weight / 10} kg`}
        />
        <PokemonModalDescription
          title="Peso"
          icon="Weight-Icon"
          description={`${pokemon?.weight && pokemon?.height / 10} m`}
        />
        <PokemonModalDescription
          title="Habilidade"
          icon="Weight-Icon"
          description={pokemon?.abilities[0].ability.name as string}
        />
      </section>
    </main>
  );
}
