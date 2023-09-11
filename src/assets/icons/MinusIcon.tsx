import React from "react";
import { IProps } from "./Icons.structure";

export default function MinusIcon({ color }: IProps) {
  return (
    <svg
      width="10"
      height="2"
      viewBox="0 0 8 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 1.5V0.5H7.5V1.5H0.5Z" fill={color} />
    </svg>
  );
}
