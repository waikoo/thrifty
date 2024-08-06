"use client"
import useViewport from "@/app/components/hooks/useViewport";

export default function SuccessSVG() {
  const viewportWidth = useViewport()
  const svgWidth = viewportWidth < 640 ? '124' : viewportWidth <= 1280 ? '281' : '186'
  const svgHeight = viewportWidth < 640 ? '80' : viewportWidth <= 1280 ? '180' : '119'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgWidth}
      height={svgHeight}
      fill="none"
      viewBox="0 0 186 119"
    >
      <path fill="#D2D62E" d="M0 69l26-3.5L30.5 53 0 69z"></path>
      <path fill="#C9CC2C" d="M57 54.5L30.5 53 57 49v5.5z"></path>
      <path fill="#D2D62E" d="M157.5 50.5L134 49V32l39.5 2-16 16.5z"></path>
      <path fill="#C9CC2C" d="M134 53.5V49l24 1-24 3.5z"></path>
      <rect width="79" height="45" x="55" y="14" fill="#DAFCC9" rx="5"></rect>
      <rect width="28" height="28" x="81" fill="#F2F2F2" rx="14"></rect>
      <path
        fill="#6CA648"
        fillRule="evenodd"
        d="M95 28c7.732 0 14-6.268 14-14S102.732 0 95 0 81 6.268 81 14s6.268 14 14 14zm7.348-16.732a1.68 1.68 0 00-2.376-2.376l-6.652 6.652-3.292-3.292a1.68 1.68 0 10-2.376 2.376l4.48 4.48a1.68 1.68 0 002.376 0l7.84-7.84z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#DBDE30"
        strokeLinecap="round"
        strokeWidth="5"
        d="M67.5 37.5L94.5 37.5"
      ></path>
      <path
        stroke="#C9CC2C"
        strokeLinecap="round"
        strokeWidth="5"
        d="M67.5 45.5L85.5 45.5"
      ></path>
      <circle cx="125.5" cy="22.5" r="2.5" fill="#7DC255"></circle>
      <circle cx="117.5" cy="22.5" r="2.5" fill="#C9CC2C"></circle>
      <path
        fill="#C9CC2C"
        d="M157.5 104.5l-53.5 11V57l29 16.5 24.5-4.227V104.5z"
      ></path>
      <path
        fill="#D2D62E"
        d="M104 115.5l-73.5-7V81.778L94 86.5 104 57v58.5zM133 73.5L104 57l54-7 27.5 14.5-52.5 9z"
      ></path>
      <path fill="#DBDE30" d="M94 86.5L20 81l10.5-28 73.5 4-10 29.5z"></path>
      <path
        fill="#6CA648"
        d="M121 112c5.079-.242 6.794-2.354 7.5-8.5 1.092-6.153 3.021-9.278 5-9.416l12-2.084c4.22.463 5.627 3.164 7 11 .488 11.569 11.518 11.11 27 13l-13 2c-12.891-1.733-22.797-1.256-26.292-9.5 0 0-.765 1.252-2.708 2-5.287 2.037-16.5 1.5-16.5 1.5z"
      ></path>
      <path
        fill="#7DC255"
        d="M180 115.5l-13 3.5c-12.891-1.733-23.505-1.256-27-9.5-.593-1.398-1.293-5.047-1.5-7-1.281-6.406-2.919-8.646-5-8.5l12-2c4.22.463 6.127 3.164 7.5 11 .488 11.569 11.518 10.61 27 12.5zM30.5 100L2 96l12-3 16.5 2v5z"
      ></path>
    </svg>
  );
}
