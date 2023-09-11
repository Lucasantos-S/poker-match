import React from "react";
import { IProps } from "./Icons.structure";

export default function PublishIcon({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size + 1}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M6.5 15.0004V6.35045L4.16923 8.68122L3.46152 7.962L7 4.42352L10.5385 7.962L9.83078 8.68122L7.5 6.35045V15.0004H6.5ZM0 4.6543V2.26967C0 1.80942 0.154167 1.42513 0.4625 1.1168C0.770833 0.808464 1.15512 0.654297 1.61537 0.654297H12.3846C12.8449 0.654297 13.2292 0.808464 13.5375 1.1168C13.8458 1.42513 14 1.80942 14 2.26967V4.6543H13V2.26967C13 2.11582 12.9359 1.9748 12.8077 1.8466C12.6795 1.7184 12.5385 1.6543 12.3846 1.6543H1.61537C1.46154 1.6543 1.32052 1.7184 1.1923 1.8466C1.0641 1.9748 1 2.11582 1 2.26967V4.6543H0Z"
        fill={color}
      />
    </svg>
  );
}
