type IconHeartProps = {
  className?: string
}

function IconHeart({ className }: IconHeartProps) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="11"
      fill="none"
      viewBox="0 0 12 11"
      className={className}
    >
      <path
        fill="#757575"
        d="M6.054 9.322l-.06.06-.065-.06c-2.848-2.584-4.73-4.293-4.73-6.025 0-1.199.9-2.098 2.098-2.098.923 0 1.822.6 2.14 1.415h1.115c.318-.816 1.217-1.415 2.14-1.415 1.199 0 2.098.9 2.098 2.098 0 1.732-1.882 3.44-4.735 6.025zM8.692 0a3.605 3.605 0 00-2.697 1.247A3.605 3.605 0 003.297 0 3.261 3.261 0 000 3.297c0 2.26 2.038 4.112 5.125 6.912l.87.791.869-.791c3.087-2.8 5.125-4.652 5.125-6.912A3.261 3.261 0 008.692 0z"
      ></path>
    </svg>
  );
}

export default IconHeart;
