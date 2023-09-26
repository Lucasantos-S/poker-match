import { usePokemon } from "@/context/PokemonContext";
import Pokemon from "@/services/Pokemon";
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import Icons from "@/assets/icons";
import Joystick from "@/components/Joystick";
import Display from "@/components/Display";
import PokemonDrop from "@/components/PokemonDrop";

export default function MobileProfile() {
  const [refresh, setRefresh] = React.useState(false as boolean);
  const [loading, setLoading] = React.useState(true as boolean);
  const [isLike, setIsLike] = React.useState(false as boolean);
  const { pokemon, setPokemon, handlePokedexMatch, handlePokedexNotMatch } =
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

  React.useEffect(() => {
    getPokemon();
  }, [refresh]);

  return (
    <aside className="lg:m-10 lg:pt-10 flex flex-col w-[300px] h-[500px] lg:h-[550px] pt-5 bg-gray-30 rounded-t-3xl rounded-bl-3xl rounded-br-[80px]  px-5 shadow-2xl shadow-black z-50 animate-left">
      <section className="w-full h-3/4 lg:h-4/5 bg-gray-50 p-6 rounded-t-2xl rounded-bl-2xl rounded-br-[50px] relative z-40">
        <Display loading={loading} />
      </section>
      <section className="flex justify-between px-5 pt-2">
        <Joystick setRefresh={setRefresh} />
      </section>
      <PokemonDrop setRefresh={setRefresh} />
    </aside>
  );
}
