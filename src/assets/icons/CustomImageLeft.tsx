import React from "react";
import { IProps } from "./Icons.structure";

export default function CustomImageLeft({ size, color }: IProps) {
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
        d="M0 14V0H2V14H0ZM4 14V0H6V14H4ZM10 14C9.45 14 8.97917 13.8042 8.5875 13.4125C8.19583 13.0208 8 12.55 8 12V2C8 1.45 8.19583 0.979167 8.5875 0.5875C8.97917 0.195833 9.45 0 10 0H20C20.55 0 21.0208 0.195833 21.4125 0.5875C21.8042 0.979167 22 1.45 22 2V12C22 12.55 21.8042 13.0208 21.4125 13.4125C21.0208 13.8042 20.55 14 20 14H10ZM10 12H20V2H10V12ZM11 10H19L16.4 6.5L14.5 9L13.1 7.15L11 10Z"
        fill={color}
      />
    </svg>
  );
}
