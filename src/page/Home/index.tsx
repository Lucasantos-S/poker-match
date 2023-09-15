import Pokemon from "@/services/Pokemon";
import React from "react";
import { IPokemon } from "pokeapi-typescript";
import { usePokemon } from "@/context/PokemonContext";
import MobileProfile from "@/components/MobileProfile";
import person from "@/assets/person.svg";
import pokeball from "@/assets/Pokeball.svg";

export default function Home() {
  const { pokedex } = usePokemon();

  return (
    <div className="flex items-center justify-center w-screen h-screen relative bg-gradient-to-r from-linear-1 from-10% via-linear-2 via-30% to-linear-3 to-90%">
      <MobileProfile />
      {/* <div className="flex w-full max-h-[200px]">
        {pokedex?.map((pokedex) => {
          const tag = pokedex.match ? "Match" : "NotMatch";
          return (
            <div className="flex flex-col items-center justify-center min-w-[100px] min-h-[100px]">
              <img
                className="w-full h-full animate-left"
                src={pokedex?.pokemon?.sprites?.other.dream_world.front_default}
                alt=""
              />
              <p>{tag}</p>
            </div>
          );
        })}
      </div> */}
      <div className="h-full right-0 absolute z-20">
        <img className="w-full h-full" src={person} alt="" />
      </div>
      <div className="h-full left-0 absolute z-0">
        <img className="w-full h-full" src={pokeball} alt="" />
      </div>
    </div>
  );
}
