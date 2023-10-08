import { IconMenuProps } from "@/types/theme";
import React from "react";

function IconMenuOrders({ color, isHovered }: IconMenuProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      fill="none"
      viewBox="0 0 14 15"
    >
      <path
        fill={!isHovered ? color : color === '#fff' ? '#000' : '#fff'}
        d="M6.309 3.75h1.473V7.5h5.491a.737.737 0 00.737-.737V4.487a.737.737 0 00-.737-.737H11.27A2.61 2.61 0 007.045.796 2.612 2.612 0 002.82 3.75H.818a.737.737 0 00-.737.737v2.276a.737.737 0 00.737.737h5.49V3.75zm1.473-1.138A1.138 1.138 0 118.92 3.75H7.782V2.612zm-3.75 0a1.138 1.138 0 112.277 0V3.75H5.17a1.138 1.138 0 01-1.138-1.138zM7.782 15h4.42a.737.737 0 00.736-.737V8.571H7.782V15zm-6.63-.737A.737.737 0 001.89 15h4.42V8.571H1.152v5.692z"
      ></path>
    </svg>
  );
}
export default IconMenuOrders;
