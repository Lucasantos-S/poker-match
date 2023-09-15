import React from "react";
import { useLottie } from "lottie-react";
import loading from "@/components/Helper/LottieAnimation/Loading/loading.json";

const style = {
  height: "30%",
};

export default function Loading() {
  const options = {
    animationData: loading,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
}
