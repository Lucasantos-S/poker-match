import { usePokemon } from "@/context/PokemonContext";
import Pokemon from "@/services/Pokemon";
import React from "react";
import Stats from "../../../components/Stats";
import Loading from "../../../components/Helper/LottieAnimation/Loading";
import pokeball from "@/assets/Pokeball.svg";
import PokemonImage from "../../../components/PokemonImage";
import PokemonName from "../../../components/PokemonName";
import { useDrag, useDrop } from "react-dnd";
import Like from "../../../components/Helper/LottieAnimation/Like";
import Deslike from "../../../components/Helper/LottieAnimation/Deslike";
import MatchButton from "../../../components/Button/MatchButton";

export default function MobileProfile() {
  const [refresh, setRefresh] = React.useState(false as boolean);
  const [loading, setLoading] = React.useState(false as boolean);
  const [isLike, setIsLike] = React.useState(false as boolean);
  const { pokemon, setPokemon, handlePokedexMetch, handlePokedexNotMetch } =
    usePokemon();

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

  const [, dropRef] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      handlePokedexNotMetch();
      setRefresh((refresh) => !refresh);
    },
  });
  const [{ isOver, canDrop }, dropResNotMetch] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      handlePokedexNotMetch();
      setIsLike(true);
      setTimeout(() => {
        setIsLike(false);
      }, 500);
      setRefresh((refresh) => !refresh);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  const [{ isOverMetch, canDropMetch }, dropRestMetch] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      handlePokedexMetch();
      setRefresh((refresh) => !refresh);
    },
    collect: (monitor) => ({
      isOverMetch: !!monitor.isOver(),
      canDropMetch: !!monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  const isActiveLike = isOverMetch && canDropMetch;

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

  React.useEffect(() => {
    getPokemon();
    console.log("ok");
  }, [refresh]);

  return (
    <aside className="lg:m-10 lg:pt-10 flex flex-col w-[300px] h-[500px] lg:h-[550px] pt-5 bg-gray-30 rounded-t-3xl rounded-bl-3xl rounded-br-[80px]  px-5 shadow-2xl shadow-black z-50 animate-left">
      <section className="w-full h-3/4 lg:h-4/5 bg-gray-50 p-6 rounded-t-2xl rounded-bl-2xl rounded-br-[50px] relative z-50">
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
      </section>
      <section className="flex justify-between px-5 pt-2">
        <div className="w-20 h-20  relative"></div>
        <div className="w-20 h-20  relative">
          <div className="w-10 h-10 bg-gray-50 rounded-full absolute right-0">
            <MatchButton onClick={handlePokedexMetch} setRefresh={setRefresh} />
          </div>
          <div className="w-10 h-10 bg-gray-50 rounded-full absolute left-0 bottom-0">
            <MatchButton onClick={handlePokedexMetch} setRefresh={setRefresh} />
          </div>
        </div>
      </section>
      <div
        ref={dropResNotMetch}
        className={`w-56 h-full flex items-center bg-transparent border-dashed border-2  absolute top-0 -right-44 z-50   ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        ref={dropRestMetch}
        className={`w-56 h-full flex items-center bg-white absolute top-0 right-64 z-50   ${
          isActiveLike ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </aside>
  );
}
