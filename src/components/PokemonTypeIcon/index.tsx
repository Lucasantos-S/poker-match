import Icons from "@/assets/icons";
import React from "react";
import { IPokemonTypeIconProps } from "./PokemonTypeIcon.structure";
import { IIcons } from "@/assets/icons/Icons.structure";
import { SupportedTypes, types } from "@/utils";

export default function PokemonTypeIcon({
  name,
  handleType,
}: IPokemonTypeIconProps) {
  if (!handleType) return null;
  return (
    <div className="w-8 h-8 flex items-center justify-center relative">
      <span className="z-50">
        <Icons name={name as keyof IIcons} size={14} />
      </span>

      <span
        style={{
          background: types[handleType]?.color,
        }}
        className="w-8 h-8 absolute z-0 opacity-40 rounded-full"
      ></span>
    </div>
  );
}
