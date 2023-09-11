import React from "react";
import { useLottie } from "lottie-react";
import successAnimeJson from "@/components/Helper/LottieAnimation/Success/success-Animation.json";

interface ISuccessAnimationProps {
  size?: string;
}
export default function SuccessAnimation({ size }: ISuccessAnimationProps) {
  const style = {
    height: size ? size : "300px",
  };

  const options = {
    animationData: successAnimeJson,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
}
