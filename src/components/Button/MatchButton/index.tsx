import React from "react";
import { IMatchButtonProps } from "./MatchButton.structure";

export default function MatchButton({
  onClick,
  setRefresh,
}: IMatchButtonProps) {
  return (
    <button
      onClick={() => {
        onClick();
        setRefresh((refresh) => !refresh);
      }}
      className="w-10 h-10 bg-gray-50 rounded-full absolute right-0 text-primary"
    >
      ♥
    </button>
  );
}
