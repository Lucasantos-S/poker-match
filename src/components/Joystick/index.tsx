import Icons from "@/assets/icons";
import { usePokemon } from "@/context/PokemonContext";
import React from "react";
import MatchButton from "../Button/MatchButton";

export default function Joystick({
  setRefresh,
}: {
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { handlePokedexMatch, handlePokedexNotMatch } = usePokemon();
  return (
    <>
      <div className="w-20 h-20  relative">
        <Icons name="Control-Icon" size={70} />
      </div>
      <div className="w-20 h-20  relative">
        <div className="w-10 h-10 bg-gray-50 rounded-full absolute right-0 z-50 cursor-pointer hover:scale-110 transition-all">
          <MatchButton
            icon="Match-Icon"
            onClick={handlePokedexMatch}
            setRefresh={setRefresh}
          />
        </div>
        <div className="w-10 h-10 bg-gray-50 rounded-full absolute left-0 bottom-0 z-50 hover:scale-110 transition-all">
          <MatchButton
            icon="NotMatch-Icon"
            onClick={handlePokedexNotMatch}
            setRefresh={setRefresh}
          />
        </div>
      </div>
    </>
  );
}
