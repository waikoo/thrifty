import { IconMenuProps } from "@/types/theme";
import React from "react";

function IconMenuLogOut({ color }: IconMenuProps) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      fill="none"
      viewBox="0 0 14 15"
    >
      <path
        fill={color}
        d="M3.831 6.818h5.357V.682A.786.786 0 009.031.2a.485.485 0 00-.378-.2H.617a.485.485 0 00-.379.2.786.786 0 00-.157.482v13.636c0 .181.056.354.157.482.1.128.237.2.379.2h8.036a.485.485 0 00.378-.2.786.786 0 00.157-.482V8.182H3.831V6.818zm10.022.2l-3.057-3.891-.758.964 2.143 2.727H9.188v1.364h2.993l-2.143 2.727.758.964 3.057-3.891a.786.786 0 00.157-.482.786.786 0 00-.157-.482z"
      ></path>
    </svg>
  );
}



export default IconMenuLogOut;
