import React from "react";
import NotFound from "../Helper/LottieAnimation/notFound";

export default function PokedexNotFound() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="py-2 px-5 bg-gradient-to-r from-linear-1 from-10% via-linear-2 via-30% to-linear-3 to-90% rounded-lg">
        <h1 className="text-3xl text-gray-40">Nenhum pokémon encontrado</h1>
      </div>
      <NotFound />
    </div>
  );
}
