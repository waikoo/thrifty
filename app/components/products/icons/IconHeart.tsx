type IconHeartProps = {
  className?: string
  isFavorited: boolean
}

function IconHeart({ className, isFavorited }: IconHeartProps) {
  const color = isFavorited ? 'black' : 't_mustard'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="15"
      fill="none"
      viewBox="0 0 18 15"
      className={`${className}`}
    >
      <path
        fill={color}
        stroke="#000"
        d="M16.995 4.535h0a4 4 0 01-.306 1.542l.462.192-.462-.192c-.202.489-.5.932-.874 1.305h0l-.004.004-6.974 7.077h0a.125.125 0 01-.178 0h0L1.685 7.386h0l-.003-.003A4.03 4.03 0 017.38 1.679l.006.006.006.005 1.016.95.34.318.342-.318 1.022-.952.006-.006.006-.006a4.03 4.03 0 016.872 2.859z"
      ></path>
    </svg>
  );
}

export default IconHeart;
