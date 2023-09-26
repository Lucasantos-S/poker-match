import Icons from "@/assets/icons";
import { usePokemon } from "@/context/PokemonContext";
import { IPokedex } from "@/context/PokemonContext/pokemonContext.structure";
import React from "react";
import { IPokemonModalFooterProps } from "./PokemonModalFooter.structure";
import LoadingButton from "../Helper/LoadingButton";

export default function PokemonModalFooter({
  pokedex,
  loading,
  setLoading,
  setModal,
}: IPokemonModalFooterProps) {
  const { updateMatchFromPokemon } = usePokemon();
  const matche = pokedex.match;
  return (
    <footer className="w-full h-12 flex items-center justify-center mt-5">
      <button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            updateMatchFromPokemon(pokedex.pokemon?.id as number);
            setLoading(false);
            setModal(false);
          }, 2000);
        }}
        className={` w-full h-full flex items-center justify-center gap-2  py-2 px-5 rounded-lg transition-all ${
          matche ? "bg-primary hover:bg-primary/70" : "bg-green-500"
        }`}
      >
        {!loading ? (
          <span className="flex items-center text-base gap-4 text-gray-0 font-bold">
            {matche ? "Remover da sua lista" : "Incluir na sua lista"}
            <Icons name={matche ? "Close-Icon" : "Check-Icon"} size={20} />
          </span>
        ) : (
          <LoadingButton />
        )}
      </button>
    </footer>
  );
}
