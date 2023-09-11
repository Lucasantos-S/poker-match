import React from "react";
import { IProps } from "./Icons.structure";

export default function DisplaySettingsIcon({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size - 2}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M5.5 12H7V8H5.5V9.25H4V10.75H5.5V12ZM8 10.75H16V9.25H8V10.75ZM13 8H14.5V6.75H16V5.25H14.5V4H13V8ZM4 6.75H12V5.25H4V6.75ZM6 18V16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H14V18H6ZM2 14H18V2H2V14Z"
        fill={color}
      />
    </svg>
  );
}
