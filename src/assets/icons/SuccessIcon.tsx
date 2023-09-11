import React from "react";
import { IProps } from "./Icons.structure";

export default function SuccessIcon({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size - 22}
      viewBox="0 0 95 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.4995 57.4L8.09948 35L0.632812 42.4667L30.4995 72.3334L94.4995 8.33337L87.0328 0.866699L30.4995 57.4Z"
        fill={color}
      />
    </svg>
  );
}
