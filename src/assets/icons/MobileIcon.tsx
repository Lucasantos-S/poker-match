import React from "react";
import { IProps } from "./Icons.structure";

export default function MobileIcon({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size + 8}
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="ease-in-out transition-all duration-300 fill-current"
        d="M5 19H9V18H5V19ZM2 22C1.45 22 0.979167 21.8042 0.5875 21.4125C0.195833 21.0208 0 20.55 0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V20C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22H2ZM2 17V20H12V17H2ZM2 15H12V5H2V15ZM2 3H12V2H2V3Z"
        fill={color}
      />
    </svg>
  );
}