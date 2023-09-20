import React from "react";
import { useLottie } from "lottie-react";
import notFound from "@/components/Helper/LottieAnimation/notFound/NotFound.json";

interface ISuccessAnimationProps {
  size?: string;
}
export default function NotFound({ size }: ISuccessAnimationProps) {
  const style = {
    height: "80%",
  };

  const options = {
    animationData: notFound,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
}
