import Icons from "@/assets/icons";
import React from "react";
import { IEnvironmentMenuProps } from "./environmentMenu.structure";
import EnvironmentItem from "../EnvironmentItem";

export default function EnvironmentPokedex({
  environment,
  handleChangeEnvironment,
}: IEnvironmentMenuProps) {
  const environmentIsMobile = environment === "environment_metch";

  return (
    <nav className="flex justify-items-start w-[300px] mt-5 relative">
      <div className="flex gap-11">
        <EnvironmentItem
          title="Meus pokemons"
          environment={environment}
          step={"environment_metch"}
          handleChangeEnvironment={handleChangeEnvironment}
        />
        <EnvironmentItem
          title="Outros"
          environment={environment}
          step={"environment_notMetch"}
          handleChangeEnvironment={handleChangeEnvironment}
        />
      </div>
      <span
        className={`absolute -bottom-1 border-b-4 border-gray-10 rounded-lg z-50 ${
          !environmentIsMobile
            ? " ease-in-out translate-x-[100%] transition-all duration-700 w-2/4"
            : " ease-in-out transition-all duration-700 w-2/4"
        }`}
      ></span>
      <span className="w-full absolute -bottom-1 border-b-4 border-gray-40  dark:border-gray-50 rounded-lg"></span>
    </nav>
  );
}
