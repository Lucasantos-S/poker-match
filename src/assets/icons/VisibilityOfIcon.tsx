import React from "react";
import { IProps } from "./Icons.structure";

export default function VisibilityOfIcon({ size, color }: IProps) {
  return (
    <svg
      width={size}
      height={size - 2}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 4.0002C14.79 4.0002 18.17 6.1302 19.82 9.5002C19.23 10.7202 18.4 11.7702 17.41 12.6202L18.82 14.0302C20.21 12.8002 21.31 11.2602 22 9.5002C20.27 5.1102 16 2.0002 11 2.0002C9.73 2.0002 8.51 2.2002 7.36 2.5702L9.01 4.2202C9.66 4.0902 10.32 4.0002 11 4.0002ZM9.93 5.14019L12 7.2102C12.57 7.4602 13.03 7.9202 13.28 8.4902L15.35 10.5602C15.43 10.2202 15.49 9.8602 15.49 9.4902C15.5 7.0102 13.48 5.0002 11 5.0002C10.63 5.0002 10.28 5.05019 9.93 5.14019ZM1.01 1.8702L3.69 4.5502C2.06 5.8302 0.77 7.5302 0 9.5002C1.73 13.8902 6 17.0002 11 17.0002C12.52 17.0002 13.98 16.7102 15.32 16.1802L18.74 19.6002L20.15 18.1902L2.42 0.450195L1.01 1.8702ZM8.51 9.3702L11.12 11.9802C11.08 11.9902 11.04 12.0002 11 12.0002C9.62 12.0002 8.5 10.8802 8.5 9.5002C8.5 9.4502 8.51 9.4202 8.51 9.3702ZM5.11 5.97019L6.86 7.7202C6.63 8.2702 6.5 8.8702 6.5 9.5002C6.5 11.9802 8.52 14.0002 11 14.0002C11.63 14.0002 12.23 13.8702 12.77 13.6402L13.75 14.6202C12.87 14.8602 11.95 15.0002 11 15.0002C7.21 15.0002 3.83 12.8702 2.18 9.5002C2.88 8.0702 3.9 6.89019 5.11 5.97019Z"
        fill={color}
      />
    </svg>
  );
}