import Icons from "@/assets/icons";
import { usePokemon } from "@/context/PokemonContext";
import React from "react";
import { useDrop } from "react-dnd";

export default function PokemonDrop({
  setRefresh,
}: {
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { handlePokedexMatch, handlePokedexNotMatch } = usePokemon();
  const [{ isOverMatch, canDropMatch }, dropRestMatch] = useDrop({
    accept: "card",
    drop: () => {
      handlePokedexMatch();
      setRefresh((refresh) => !refresh);
    },
    collect: (monitor) => ({
      isOverMatch: !!monitor.isOver(),
      canDropMatch: !!monitor.canDrop(),
    }),
  });

  const [{ isOverNotMatch, canDropNotMatch }, dropResNotMatch] = useDrop({
    accept: "card",
    drop: () => {
      handlePokedexNotMatch();
      setRefresh((refresh) => !refresh);
    },
    collect: (monitor) => ({
      isOverNotMatch: !!monitor.isOver(),
      canDropNotMatch: !!monitor.canDrop(),
    }),
  });

  const isActiveMatch = isOverMatch && canDropMatch;
  const isActiveNotMatch = isOverNotMatch && canDropNotMatch;

  return (
    <>
      <div
        ref={dropRestMatch}
        className={`w-[500px] h-full flex items-center bg-transparent absolute top-0 -right-[400px] z-40 pl-20 ${
          isActiveMatch ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="animate-ping rounded-full">
          <Icons name="Match-Icon" size={100} />
        </div>
      </div>
      <div
        ref={dropResNotMatch}
        className={`w-[500px] h-full flex items-center justify-end  bg-transparent absolute top-0 right-52 pr-20 z-40   ${
          isActiveNotMatch ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="animate-ping rounded-full">
          <Icons name="NotMatch-Icon" size={100} />
        </div>
      </div>
    </>
  );
}
