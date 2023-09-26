import React from "react";
import PokemonImage from "../PokemonImage";
import { IModalProps } from "./Modal.structure";

export default function Modal({ children, setModal }: IModalProps) {
  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) setModal(false);
      }}
      className="w-full h-full flex items-center justify-center bg-gray-60/90  absolute z-50 top-0 right-0"
    >
      <div className="w-[300px] h-[600px] rounded-3xl backdrop-blur-sm bg-gray-0 p-5 animate-modalOpenCenter overflow-hidden">
        {children}
      </div>
    </div>
  );
}
