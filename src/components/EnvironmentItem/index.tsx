import React from "react";
import { IEnvironmentMenuProps } from "../EnvironmentPokedex/environmentMenu.structure";
import { StepsType } from "@/page/Home/Pokedex/Pokedex.Structure";

export default function EnvironmentItem({
  environment,
  title,
  step,
  handleChangeEnvironment,
}: IEnvironmentMenuProps) {
  const environmentIsMobile = environment === "environment_match";
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
        className={`text-base font-semibold ml-2 ${
          environment === step
            ? "text-gray-0 ease-in-out transition-all duration-700"
            : " text-gray-50"
        }`}
      >
        {title}
      </span>
    </button>
  );
}
