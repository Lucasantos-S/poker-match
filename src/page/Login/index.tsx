import React from "react";
import LoginInfor from "./LoginInfo";
import teste from "@/assets/Vector (12).svg";
import imageTeste from "@/assets/pokeBg.svg";
export default function Login() {
  return (
    <div className="w-screen h-screen items-center flex justify-between bg-gradient-to-r from-linear-1 from-10% via-linear-2 via-30% to-linear-3 to-90% relative ">
      <LoginInfor />
      <div >
        <img className="w-full" src={imageTeste} alt="" />
      </div>
    </div>
  );
}
