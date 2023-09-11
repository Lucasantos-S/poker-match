import React from "react";
import { IPrimaryButtonProps } from "./PrimaryButton.structure";

export default function PrimaryButton(props: IPrimaryButtonProps) {
  return (
    <button className="w-full h-10 bg-primary hover:bg-opacity-80 text-gray-10 font-bold rounded-lg ease-in-out transition-all duration-400">
      {props.children}
    </button>
  );
}
