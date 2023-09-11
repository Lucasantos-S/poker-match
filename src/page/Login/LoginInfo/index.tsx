import React from "react";
import imageTeste from "@/assets/pokeBg.svg";
import Icons from "@/assets/icons";

export default function LoginInfo() {
  const [teste, setTest] = React.useState(false);
  return (
    <section className="w-full h-full  flex items-center justify-center relative bg-transparent  ">
      {/* <span className="w-full h-full absolute bg-gradient-to-b from-slate-300 to-slate-900 opacity-90 shadow-2xl z-30"></span> */}
      <div className="absolute left-0">
        <img className="" src={imageTeste} alt="" />
      </div>
    </section>
  );
}
