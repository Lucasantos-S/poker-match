import Icons from "@/assets/icons";
import React from "react";
import { IPokemonModalDescriptionProps } from "./PokemonModalDescription.structure";
import { IIcons } from "@/assets/icons/Icons.structure";

export default function PokemonModalDescription({
  icon,
  title,
  description,
}: IPokemonModalDescriptionProps) {
  return (
    <div className="w-full flex flex-col ">
      <div className="flex items-center gap-2">
        <Icons name={icon} size={10} />
        <span className="text-sm text-gray-30">{title}</span>
      </div>
      <div className="w-full h-8 flex items-center justify-center  rounded-lg border-[1px]">
        <span className="font-bold">{description}</span>
      </div>
    </div>
  );
}
