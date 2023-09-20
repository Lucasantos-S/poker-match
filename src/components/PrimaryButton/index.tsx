import React from "react";
import { IPrimaryButtonProps } from "./PrimaryButton.structure";

export default function PrimaryButton(props: IPrimaryButtonProps) {
  const buttonDisabled = props.disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const buttonLoading = props.loading && "cursor-wait opacity-70";
  return (
    <button
      disabled={props.disabled}
      className={`flex justify-center bg-primary py-2 rounded-lg w-full h-10 duration-500 ease-in-out ${buttonDisabled} ${buttonLoading}`}
    >
      {props.children}
    </button>
  );
}
