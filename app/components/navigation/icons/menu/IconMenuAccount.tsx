import { IconMenuProps } from "@/types/theme";
import React from "react";


function IconMenuAccount({ color, isHovered }: IconMenuProps) {
  console.log('rendered')

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      fill="none"
      viewBox="0 0 14 15"
    >
      <path
        stroke={!isHovered ? color : color === '#fff' ? '#000' : '#fff'}

        strokeWidth="2.5"
        d="M9.813 4.076c0 1.578-1.256 2.826-2.768 2.826-1.512 0-2.768-1.248-2.768-2.826S5.533 1.25 7.045 1.25c1.512 0 2.768 1.248 2.768 2.826zM12.598 13.75H1.493c.598-2.261 2.81-4.022 5.552-4.022 2.742 0 4.954 1.76 5.553 4.022z"
      ></path>
    </svg>
  );
}
export default IconMenuAccount;
