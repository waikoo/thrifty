type HeroNewInArrow = {
  className?: string
}

export default function HeroNewInArrow({ className }: HeroNewInArrow) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="26"
      fill="none"
      viewBox="0 0 61 26"
      className={className}
    >
      <g filter="url(#filter0_d_1584_21429)">
        <path
          fill="#fff"
          d="M55.707 9.707a1 1 0 000-1.414l-6.364-6.364a1 1 0 10-1.414 1.414L53.586 9l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM55 8H5v2h50V8z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_1584_21429"
          width="61"
          height="24.729"
          x="0"
          y="0.636"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1584_21429"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1584_21429"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
