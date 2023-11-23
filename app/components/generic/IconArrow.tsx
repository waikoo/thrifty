"use client"
import { useColorCarouselRef } from '@/state/colorCarouselState';
import { useUIStore } from '@/state/uiState';
import { twMerge as tm } from 'tailwind-merge';

type IconArrowProps = {
  left?: boolean;
  className?: string
};

function IconArrow({ left, className }: IconArrowProps) {
  const rotateArrow = `transform ${left ? 'scale-x-[-1]' : 'scale-x-1'}`
  const { containerRef } = useColorCarouselRef()

  const handleScrolling = () => {
    if (containerRef) {
      const imageWidth = containerRef.clientWidth;
      containerRef.scrollTo({
        left: left ? containerRef.scrollLeft - imageWidth : containerRef.scrollLeft + imageWidth,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div
      onClick={handleScrolling}
      className="rounded-full p-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="15"
        fill="none"
        viewBox="0 0 8 15"
        className={tm(`cursor-pointer ${rotateArrow} ${className}`)}
      >
        <path
          fill="#fff"
          // fill="#121212"
          fillRule="evenodd"
          d="M7.695 6.69c.195.21.305.497.305.796 0 .299-.11.585-.305.797l-5.902 6.373a1.044 1.044 0 01-.338.252.977.977 0 01-.807.008 1.04 1.04 0 01-.342-.246 1.138 1.138 0 01-.228-.37 1.206 1.206 0 01.007-.871c.054-.138.134-.262.233-.366l5.164-5.577L.318 1.91a1.176 1.176 0 01-.292-.792C.028.82.138.539.33.33.525.121.786.003 1.06 0c.273-.003.537.111.733.316L7.695 6.69z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

export default IconArrow;

