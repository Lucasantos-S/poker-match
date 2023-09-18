import React from "react";
import { IProps } from "./Icons.structure";

export default function Poison({ size, color }: IProps) {
  return (
    <svg
      width={size + 10}
      height={size + 10}
      viewBox="0 0 144 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M120.325 111.057C134.866 99.4303 144 82.6307 144 63.9483C144 28.8514 111.765 0.399902 72 0.399902C32.2355 0.399902 0 28.8514 0 63.9483C0 81.9562 8.48635 98.2147 22.1218 109.778C21.2954 112.632 20.8421 115.735 20.8421 118.981C20.8421 133.019 29.3251 144.4 39.7896 144.4C46.5891 144.4 52.5521 139.595 55.8948 132.378C59.2374 139.595 65.2005 144.4 72 144.4C78.1982 144.4 83.7011 140.407 87.158 134.235C90.6148 140.407 96.1178 144.4 102.316 144.4C112.78 144.4 121.263 133.019 121.263 118.981C121.263 116.214 120.934 113.551 120.325 111.057ZM113.684 65.2086C113.684 83.0269 94.5973 97.4717 71.0527 97.4717C47.5079 97.4717 28.4212 83.0269 28.4212 65.2086C28.4212 47.3903 47.5079 32.9456 71.0527 32.9456C94.5973 32.9456 113.684 47.3903 113.684 65.2086Z"
        fill="#B567CE"
      />
    </svg>
  );
}
