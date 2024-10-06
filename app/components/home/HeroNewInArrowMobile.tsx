type HeroNewInArrowMobileProps = {
  className?: string
}

export default function HeroNewInArrowMobile({ className }: HeroNewInArrowMobileProps) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="22"
      fill="none"
      viewBox="0 0 37 22"
      className={className}
    >
      <g filter="url(#filter0_d_1601_21509)">
        <path
          fill="#fff"
          d="M31.53 7.53a.75.75 0 000-1.06l-4.773-4.773a.75.75 0 00-1.06 1.06L29.939 7l-4.242 4.243a.75.75 0 001.06 1.06L31.53 7.53zM31 6.25H5v1.5h26v-1.5z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_1601_21509"
          width="36.75"
          height="21.047"
          x="0"
          y="0.477"
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
            result="effect1_dropShadow_1601_21509"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1601_21509"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
