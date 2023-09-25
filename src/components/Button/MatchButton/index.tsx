import React from "react";
import { IMatchButtonProps } from "./MatchButton.structure";
import { usePokemon } from "@/context/PokemonContext";

export default function MatchButton({
  onClick,
  setRefresh,
}: IMatchButtonProps) {
  const { setLike } = usePokemon();
  return (
    <button
      onClick={() => {
      
        onClick();
        setRefresh((refresh) => !refresh);
      }}
      className="w-10 h-10 bg-gray-50 rounded-full absolute right-0 text-primary"
    >
      ♥
    </button>
  );
}
