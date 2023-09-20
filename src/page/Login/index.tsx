import React from "react";
import imageTeste from "@/assets/pokeBg.svg";
import LoginForm from "./LoginForm";
export default function Login() {
  return (
    <div className="w-screen h-screen items-center flex justify-between bg-gradient-to-r from-linear-1 from-10% via-linear-2 via-30% to-linear-3 to-90% relative ">
      <LoginForm />
      <div className="absolute sm:static">
        <img className="w-full" src={imageTeste} alt="" />
      </div>
    </div>
  );
}
