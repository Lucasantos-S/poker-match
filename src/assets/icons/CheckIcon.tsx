import React from "react";
import { IProps } from "./Icons.structure";

export default function CheckIcon({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size - 3}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M5.39688 11.594L5.75027 11.9465L6.10339 11.5937L16.3398 1.36694L17.0429 2.07L5.75 13.3629L0.957107 8.57L1.66043 7.86667L5.39688 11.594Z"
        fill="black"
        stroke="white"
      />
    </svg>
  );
}
