import Pokemon from "@/services/Pokemon";
import React from "react";
import { IPokemon } from "pokeapi-typescript";

export default function Home() {
  const [pokemon, setPokemon] = React.useState({} as IPokemon | null);
  const [pokemonMetch, setPokemonMetch] = React.useState([] as IPokemon[]);
  const [refresh, setRefresh] = React.useState(false as boolean);

  const getPokemon = React.useCallback(async () => {
    const randomPokemon = Math.floor(Math.random() * 300) + 1;
    const response = await Pokemon.getPokemon(randomPokemon);
    setPokemon(response);
  }, []);

  React.useEffect(() => {
    getPokemon();
    const randomPokemon = Math.floor(Math.random() * 300) + 1;
    console.log(randomPokemon);
  }, [refresh]);

  function handlePokerMatch() {
    setPokemonMetch((pokemonMatch) => [...pokemonMatch, pokemon as IPokemon]);
  }
  return (
    <>
      <aside className=" flex flex-col w-[300px] h-[500px] bg-gray-30 rounded-t-3xl rounded-bl-3xl rounded-br-[80px] m-10 pt-10 px-5 shadow-xl">
        <section className="w-full h-2/4 bg-gray-50 p-10 rounded-t-2xl rounded-bl-2xl rounded-br-[50px] relative">
          <div className=" flex flex-col items-center justify-between w-full h-full bg-green-300 rounded-md p-4">
            <div className="min-w-[100px] min-h-[100px]">
              {pokemon && (
                <img
                  className="w-full h-full animate-left"
                  src={pokemon?.sprites?.other.dream_world.front_default}
                  alt=""
                />
              )}
            </div>
            <h1 className="text-lg font-bold">{pokemon?.name}</h1>
          </div>
          <span className="bg-gray-20 w-3 h-3 absolute rounded-full left-3 top-28"></span>
        </section>
        <section className="flex justify-between px-5 pt-10">
          <div className="w-20 h-20  relative"></div>
          <div className="w-20 h-20  relative">
            <div className="w-10 h-10 bg-gray-50 rounded-full absolute right-0">
              <button
                onClick={() => {
                  console.log("Game");
                  handlePokerMatch();
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
                  console.log("Game");
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

      <div className="flex w-[200px] h-[200px]">
        {pokemonMetch?.map((pokemonMetch) => (
          <img
            src={pokemonMetch?.sprites?.other.dream_world.front_default}
            alt=""
          />
        ))}
      </div>
    </>
  );
}
