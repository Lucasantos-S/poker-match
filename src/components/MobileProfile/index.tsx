import { usePokemon } from "@/context/PokemonContext";
import Pokemon from "@/services/Pokemon";
import { SupportedTypes, formatId, types } from "@/utils/inedex";
import React from "react";
import Stats from "../Stats";
import Loading from "../Helper/LottieAnimation/Loading";
import pokeball from "@/assets/Pokeball.svg";
import PokemonImage from "../PokemonImage";
import PokemonName from "../PokemonName";

export default function MobileProfile() {
  const [refresh, setRefresh] = React.useState(false as boolean);
  const [loading, setLoading] = React.useState(false as boolean);

  const { pokemon, setPokemon, handlePokedexMetch, handlePokedexNotMetch } =
    usePokemon();

  const getPokemon = React.useCallback(async () => {
    setLoading(true);
    setPokemon(null);
    const randomPokemon = Math.floor(Math.random() * 300) + 1;
    const response = await Pokemon.getPokemon(randomPokemon);
    setPokemon(response);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleTypes = pokemon?.types && pokemon?.types[0]?.type.name;

  React.useEffect(() => {
    getPokemon();
  }, [refresh]);

  return (
    <aside className=" flex flex-col w-[300px] h-[550px] bg-gray-30 rounded-t-3xl rounded-bl-3xl rounded-br-[80px] m-10 pt-10 px-5 shadow-2xl shadow-black z-50 animate-left">
      <section className="w-full h-4/5 bg-gray-50 p-6 rounded-t-2xl rounded-bl-2xl rounded-br-[50px] relative z-50">
        {loading ? (
          <div className="flex items-center justify-center w-full h-full bg-gray-0 rounded-md p-4 shadow-2xl shadow-gray-55 ">
            <Loading />
          </div>
        ) : (
          <div
            className={`flex flex-col items-center justify-between w-full h-full  bg-gray-10 rounded-md p-4 shadow-2xl shadow-gray-55 animate-modalOpenCenter overflow-hidden`}
          >
            <PokemonImage />
            <Stats />
            <PokemonName />
            <div className="absolute z-0 bottom-5 -left-10 opacity-20">
              <img className="z-0" src={pokeball} alt="" />
            </div>
          </div>
        )}
        <span className="bg-gray-20 w-3 h-3 absolute rounded-full left-1 top-48"></span>
      </section>
      <section className="flex justify-between px-5 pt-2">
        <div className="w-20 h-20  relative"></div>
        <div className="w-20 h-20  relative">
          <div className="w-10 h-10 bg-gray-50 rounded-full absolute right-0">
            <button
              onClick={() => {
                handlePokedexMetch();
                setRefresh((refresh) => !refresh);
              }}
              className="w-10 h-10 bg-gray-50 rounded-full absolute right-0 text-primary"
            >
              ♥
            </button>
          </div>
          <div className="w-10 h-10 bg-gray-50 rounded-full absolute left-0 bottom-0">
            <button
              onClick={() => {
                handlePokedexNotMetch();
                setRefresh((refresh) => !refresh);
              }}
              className="w-10 h-10 bg-gray-50 rounded-full absolute left-0 bottom-0 text-violet-400"
            >
              x
            </button>
          </div>
        </div>
      </section>
    </aside>
  );
}
