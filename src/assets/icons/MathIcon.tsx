import React from "react";
import { IProps } from "./Icons.structure";

export default function MathIcon({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 7.5V4.5H0.5V3.5H3.5V0.5H4.5V3.5H7.5V4.5H4.5V7.5H3.5Z"
        fill={color}
      />
    </svg>
  );
}
