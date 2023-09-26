import React from "react";
import { useLottie } from "lottie-react";
import Loading from "@/components/Helper/LottieAnimation/LoadingLogin/LoadingLogin.json";

const style = {
  height: "100px",
};

export default function LoadingLogin() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(defaultOptions, style);

  return View;
}
