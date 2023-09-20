import React from "react";
import { useLottie } from "lottie-react";
import like from "@/components/Helper/LottieAnimation/Like/like.json";

const style = {
  height: "30%",
};

export default function Like() {
  const options = {
    animationData: like,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
}
