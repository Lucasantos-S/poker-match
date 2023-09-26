import React from "react";
import person from "@/assets/person.svg";
import pokeball from "@/assets/Pokeball.svg";
import { Outlet } from "react-router-dom";
import SideMenu from "@/components/SideMenu";
import Like from "@/components/Helper/LottieAnimation/LoadingLogin";
import { usePokemon } from "@/context/PokemonContext";

export default function Home() {
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
