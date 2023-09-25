import Icons from "@/assets/icons";
import { usePokemon } from "@/context/PokemonContext";
import { IPokedex } from "@/context/PokemonContext/pokemonContext.structure";
import React from "react";
import { IPokemonModalFooterProps } from "./PokemonModalFooter.structure";

export default function PokemonModalFooter({ pokedex, setLoading }: IPokemonModalFooterProps) {
  const { removeMetchFromPokemon } = usePokemon();
  const matche = pokedex.match;
  return (
    <footer className="w-full h-full flex items-center justify-center mt-5">
      <button
        onClick={() => {
          removeMetchFromPokemon(pokedex.pokemon?.id as number);
          setLoading((loading) => !loading);
        }}
        className={`flex items-center gap-2 text-base text-gray-0 font-bold py-2 px-5 rounded-lg transition-all ${
          matche ? "bg-primary hover:bg-primary/70" : "bg-green-500"
        }`}
      >
        {matche ? "Remover da sua lista" : "Incluir na sua lista"}
        <Icons name="Close-Icon" size={15} />
      </button>
    </footer>
  );
}
