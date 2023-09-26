import React from "react";
import { IInputEmailProps } from "./InputEmail.structure";
import Icons from "@/assets/icons";
export default function InputEmail({
  onChange,
  value,
  errorMessage,
  hasError,
  isValid,
  name,
}: IInputEmailProps) {
  const [isFocus, setIsFocus] = React.useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div className="w-full relative">
      <input
        name={name}
        className="w-full h-10 bg-transparent text-gray-40 border-[1px] border-primary-light rounded-lg focus:border-primary outline-none py-4 px-10 ease-in-out transition-all duration-400"
        type="text"
        placeholder="Digite seu email aqui"
        onChange={onChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <span
        className={`absolute left-2 top-[10px] z-50 ${
          isFocus ? "text-primary" : "text-gray-20"
        }`}
      >
        <Icons name="Mail-Icon" size={20} />
      </span>
      <label
        className="flex items-center font-bold text-gray-20 px-2 -top-3 left-3 bg-gray-50 absolute"
        htmlFor=""
      >
        E-mail
      </label>
      <span className="ml-2 text-gray-10">{errorMessage}</span>
    </div>
  );
}
