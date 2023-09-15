import React from "react";
import { IEnvironmentMenuProps } from "../EnvironmentPokedex/environmentMenu.structure";
import { StepsType } from "@/page/Home/Pokedex/Pokedex.Structure";

export default function EnvironmentItem({
  environment,
  title,
  step,
  handleChangeEnvironment,
}: IEnvironmentMenuProps) {
  const environmentIsMobile = environment === "environment_metch";
  return (
    <button
      onClick={() => {
        handleChangeEnvironment(step as StepsType);
      }}
      className={`flex gap-2  pb-2 cursor-pointer ${
        environmentIsMobile
          ? "text-secondary-dark"
          : " text-gray-40 dark:text-gray-10"
      }`}
    >
      <span
        className={`text-sm font-semibold ml-2 ${
          environmentIsMobile
            ? "text-secondary-dark ease-in-out transition-all duration-700"
            : " text-gray-40 dark:text-gray-10"
        }`}
      >
        {title}
      </span>
    </button>
  );
}
