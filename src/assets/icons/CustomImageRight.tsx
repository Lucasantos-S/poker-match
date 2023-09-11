import React from "react";
import { IProps } from "./Icons.structure";

export default function CustomImageRight({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size - 8}
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M2 14C1.45 14 0.979167 13.8042 0.5875 13.4125C0.195833 13.0208 0 12.55 0 12V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14H2ZM2 12H12V2H2V12ZM3 10H11L8.4 6.5L6.5 9L5.1 7.15L3 10ZM16 14V0H18V14H16ZM20 14V0H22V14H20Z"
        fill={color}
      />
    </svg>
  );
}
