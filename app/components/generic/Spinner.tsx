type SpinnerProps = {
  size?: number
}

function Spinner({ size = 50 }: SpinnerProps) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "none",
        // DarkreaderInlineBgimage: "initial",
        // DarkreaderInlineBgcolor: "#0f1314",
      }}
      width={size}
      height={size}
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <g transform="translate(80 50)">
        <circle
          r="6"
          fill="#d3d62e"
        // style={{ DarkreaderInlineFill: "#99ffc3" }}
        >
          <animateTransform
            attributeName="transform"
            begin="-0.875s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.875s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(71.213 71.213) rotate(45)">
        <circle
          r="6"
          fill="#d3d62e"
          fillOpacity="0.875"
        // style={{ DarkreaderInlineFill: "#31b754" }}
        >
          <animateTransform
            attributeName="transform"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(50 80) rotate(90)">
        <circle
          r="6"
          fill="#d3d62e"
          fillOpacity="0.75"
        // style={{ DarkreaderInlineFill: "#99ffc3" }}
        >
          <animateTransform
            attributeName="transform"
            begin="-0.625s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.625s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(28.787 71.213) rotate(135)">
        <circle
          r="6"
          fill="#d3d62e"
          fillOpacity="0.625"
        // style={{ DarkreaderInlineFill: "#31b754" }}
        >
          <animateTransform
            attributeName="transform"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(20 50) rotate(180)">
        <circle
          r="6"
          fill="#d3d62e"
          fillOpacity="0.5"
        // style={{ DarkreaderInlineFill: "#99ffc3" }}
        >
          <animateTransform
            attributeName="transform"
            begin="-0.375s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.375s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(28.787 28.787) rotate(225)">
        <circle
          r="6"
          fill="#d3d62e"
          fillOpacity="0.375"
        // style={{ DarkreaderInlineFill: "#31b754" }}
        >
          <animateTransform
            attributeName="transform"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(50 20) rotate(270)">
        <circle
          r="6"
          fill="#d3d62e"
          fillOpacity="0.25"
        // style={{ DarkreaderInlineFill: "#99ffc3" }}
        >
          <animateTransform
            attributeName="transform"
            begin="-0.125s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="-0.125s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
      <g transform="translate(71.213 28.787) rotate(315)">
        <circle
          r="6"
          fill="#d3d62e"
          fillOpacity="0.125"
        // style={{ DarkreaderInlineFill: "#31b754" }}
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          ></animateTransform>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
        </circle>
      </g>
    </svg>
  );
}

export default Spinner;
