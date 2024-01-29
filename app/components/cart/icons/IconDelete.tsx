type IconDeleteProps = {
  className?: string
}

function IconDelete({ className }: IconDeleteProps) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      fill="none"
      viewBox="0 0 11 11"
      className={className}
    >
      <path
        stroke="#757575"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.989 1l-9 9m0-9l9 9"
      ></path>
    </svg>
  );
}

export default IconDelete;
