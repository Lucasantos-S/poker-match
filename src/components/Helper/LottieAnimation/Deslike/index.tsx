import React from "react";
import { useLottie } from "lottie-react";
import deslike from "@/components/Helper/LottieAnimation/Deslike/deslike.json";

const style = {
  height: "30%",
};

export default function Deslike() {
  const options = {
    animationData: deslike,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
}
