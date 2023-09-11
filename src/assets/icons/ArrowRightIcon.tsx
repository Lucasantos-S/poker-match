import React from "react";
import { IProps } from "./Icons.structure";

export default function ArrowRightIcon({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size + 6}
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.328125 12.92L1.50813 14.1L8.10813 7.49999L1.50813 0.899994L0.328125 2.07999L5.74813 7.49999L0.328125 12.92Z"
        fill={color}
      />
    </svg>
  );
}
