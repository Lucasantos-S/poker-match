import React from "react";
import { IProps } from "./Icons.structure";

export default function WeightIcon({ size, color }: IProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0.5C5.1775 0.5 4.5 1.1775 4.5 2C4.5 2.176 4.537 2.342 4.594 2.5L2.094 2.5L2.0155 2.9065L0.5155 10.4065L0.5 10.453L0.5 11.5H11.5V10.453L11.4845 10.4065L9.9845 2.9065L9.906 2.5H7.406C7.46606 2.34004 7.49786 2.17085 7.5 2C7.5 1.1775 6.8225 0.5 6 0.5ZM6 1.5C6.2815 1.5 6.5 1.719 6.5 2C6.5 2.2815 6.281 2.5 6 2.5C5.7185 2.5 5.5 2.281 5.5 2C5.5 1.7185 5.719 1.5 6 1.5ZM2.906 3.5L9.094 3.5L10.5 10.5H1.5L2.906 3.5Z"
        fill="black"
        fill-opacity="0.6"
      />
    </svg>
  );
}
