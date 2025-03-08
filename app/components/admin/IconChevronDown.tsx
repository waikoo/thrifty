import { twMerge as tm } from 'tailwind-merge';

type IconChevronDownProps = {
  className?: string
  color?: string
}
function IconChevronDown({ className, color }: IconChevronDownProps) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="5"
      fill="none"
      viewBox="0 0 10 5"
      className={tm(`${className} pointer-events-none`)}
    >
      <path
        fill={color || 'white'}
        d="M0 0l5 5 5-5H0z"></path>
    </svg>
  );
}

export default IconChevronDown;
