import React from "react";
import { IMatchButtonProps } from "./MatchButton.structure";
import { usePokemon } from "@/context/PokemonContext";
import Like from "@/components/Helper/LottieAnimation/LoadingLogin";
import Icons from "@/assets/icons";
import { IIcons } from "@/assets/icons/Icons.structure";

export default function MatchButton({
  icon,
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
      className="w-full h-full flex items-center justify-center bg-transparent rounded-full absolute right-0  cursor-pointer"
    >
      <Icons name={icon as keyof IIcons} size={22} />
    </button>
  );
}
