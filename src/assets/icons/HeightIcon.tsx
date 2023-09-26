import React from "react";
import { IProps } from "./Icons.structure";

export default function HeightIcon({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size + 2}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.125 12.062H0.875C0.80625 12.062 0.75 12.1183 0.75 12.187V13.1245C0.75 13.1933 0.80625 13.2495 0.875 13.2495H11.125C11.1938 13.2495 11.25 13.1933 11.25 13.1245V12.187C11.25 12.1183 11.1938 12.062 11.125 12.062ZM11.125 0.749512L0.875 0.749512C0.80625 0.749512 0.75 0.805762 0.75 0.874512L0.75 1.81201C0.75 1.88076 0.80625 1.93701 0.875 1.93701L11.125 1.93701C11.1938 1.93701 11.25 1.88076 11.25 1.81201V0.874512C11.25 0.805762 11.1938 0.749512 11.125 0.749512ZM7.54375 4.90576C7.6375 4.90576 7.69063 4.79639 7.63281 4.72295L6.05781 2.7292C6.04739 2.71571 6.03401 2.70478 6.01871 2.69727C6.0034 2.68975 5.98658 2.68585 5.96953 2.68585C5.95248 2.68585 5.93566 2.68975 5.92036 2.69727C5.90505 2.70478 5.89167 2.71571 5.88125 2.7292L4.30625 4.72295C4.29313 4.73963 4.28497 4.75967 4.28271 4.78077C4.28046 4.80188 4.28419 4.82319 4.29348 4.84227C4.30278 4.86135 4.31726 4.87743 4.33527 4.88865C4.35328 4.89988 4.37409 4.90581 4.39531 4.90576H5.4375L5.4375 9.09326H4.45625C4.3625 9.09326 4.30938 9.20264 4.36719 9.27607L5.94219 11.2683C5.9875 11.3261 6.075 11.3261 6.11875 11.2683L7.69375 9.27607C7.75156 9.20264 7.7 9.09326 7.60469 9.09326H6.5625L6.5625 4.90576H7.54375Z"
        fill="black"
        fill-opacity="0.6"
      />
    </svg>
  );
}
