import React from "react";
import { IStatsProps } from "./Stats.structure";
import { SupportedTypes, types } from "@/utils/inedex";

export default function Stats({ stats, type }: IStatsProps) {
  const handleTypes = type && type[0]?.type.name;

  const pokemonStats = stats.map((stats) => {
    if (
      stats.stat.name !== "special-attack" &&
      stats.stat.name !== "special-defense"
    ) {
      return (
        <div className=" flex items-center gap-2 w-full h-5 relative">
          <span className="text-xs text-gray-40 font-bold w-5">
            {stats.stat.name[0].toLocaleUpperCase()}
            {stats.stat.name[1].toLocaleUpperCase()}
          </span>
          <div className="flex items-center w-full">
          <span
              className="h-2 text-xs rounded z-50 opacity-70"
              style={{
                background: types[handleTypes as SupportedTypes]?.color,
                width: `${stats.base_stat /2}%`,
              }}
            ></span>
            <span className="w-[86%] bg-gray-20 h-2 text-xs rounded absolute z-0 shadow-2xl"></span>
          </div>
        </div>
      );
    }
  });
  return (
    <aside className="flex flex-col justify-center w-full h-36 overflow-hidden pt-2 z-50 ">
      {pokemonStats}
    </aside>
  );
}
