import React from "react";
import { IProps } from "./Icons.structure";

export default function ArrowDownIcon({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size - 7}
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M1.86844 0.48999L0.0984383 2.25999L9.99844 12.16L19.8984 2.25999L18.1284 0.48999L9.99844 8.61999L1.86844 0.48999Z"
        fill="#F4F4F4"
      />
    </svg>
  );
}
