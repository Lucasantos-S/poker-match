import React from "react";
import { useLottie } from "lottie-react";
import searchNotFound from "@/components/Helper/LottieAnimation/SearchNotFound/search-not-found.json";

const style = {
  height: "80%",
};

export default function SearchNotFound() {
  const options = {
    animationData: searchNotFound,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
}
