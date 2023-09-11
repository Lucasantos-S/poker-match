import Icons from "@/assets/icons";
import React from "react";
import { IInputPasswordProps } from "./InputPassword.structure";

export default function InputPassword({
  onChange,
  value,
  errorMessage,
  hasError,
  isValid,
  name,
}: IInputPasswordProps) {
  const [passwordVisiblity, setPasswordVisiblity] = React.useState(
    false as boolean
  );
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
        type={!passwordVisiblity ? "password" : "text"}
        placeholder="Digite sua senha aqui"
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
        <Icons name="Lock-Icon" size={20} />
      </span>
      <label
        className="flex items-center font-bold text-gray-20 px-2 -top-3 left-3  bg-gray-50 absolute"
        htmlFor=""
      >
        Senha
      </label>
      <span
        className="absolute right-4 top-3 cursor-pointer"
        onClick={() =>
          setPasswordVisiblity((passwordVisiblity) => !passwordVisiblity)
        }
      >
        <Icons
          name={!passwordVisiblity ? "Visibility-Icon" : "Visibility-Of-Icon"}
          size={20}
          color="#8257E5"
        />
      </span>
    </div>
  );
}
