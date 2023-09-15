import Pokemon from "@/services/Pokemon";
import React from "react";
import { IPokemon } from "pokeapi-typescript";
import { usePokemon } from "@/context/PokemonContext";
import MobileProfile from "@/components/MobileProfile";
import person from "@/assets/person.svg";
import pokeball from "@/assets/Pokeball.svg";
import { Link, Outlet } from "react-router-dom";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  const { pokedex } = usePokemon();

  return (
    <div className="flex justify-center w-screen h-screen relative bg-gradient-to-r from-linear-1 from-10% via-linear-2 via-30% to-linear-3 to-90% py-10">
      <Outlet />
      <div className="absolute top-5 left-5 z-50">
        <SideMenu />
      </div>
      <div className="h-full right-0 absolute z-20">
        <img className="w-full h-full" src={person} alt="" />
      </div>
      <div className="h-full left-0 absolute z-0">
        <img className="w-full h-full" src={pokeball} alt="" />
      </div>
    </div>
  );
}
