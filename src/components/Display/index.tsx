import React from "react";
import pokeball from "@/assets/Pokeball.svg";
import PokemonImage from "../PokemonImage";
import Stats from "../Stats";
import PokemonName from "../PokemonName";
import { useDrag } from "react-dnd";
import { usePokemon } from "@/context/PokemonContext";
import Loading from "../Helper/LottieAnimation/Loading";

export default function Display({ loading }: { loading: boolean }) {
  const { pokemon } = usePokemon();

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "card",
      item: { data: pokemon },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-0 rounded-md p-4 shadow-2xl shadow-gray-55 ">
          <Loading />
        </div>
      ) : (
        <div
          ref={dragRef}
          className={`flex flex-col items-center justify-between w-full h-full  bg-gray-10 rounded-md p-4 shadow-2xl shadow-gray-55 animate-modalOpenCenter overflow-hidden ${
            isDragging && "opacity-0"
          } cursor-pointer`}
        >
          <PokemonImage />
          <Stats />
          <PokemonName />
          <div className="absolute z-0 bottom-5 -left-10 opacity-20 group-[true]:hidden">
            <img className="z-0" src={pokeball} alt="" />
          </div>
        </div>
      )}
      <span className="bg-gray-20 w-3 h-3 absolute rounded-full left-1 top-48"></span>
    </>
  );
}
