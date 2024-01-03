"use client"
import { HeroCarouselCircle } from ".";
import useHeroCarousel from "../hooks/useHeroCarousel";

const circles = [
  { cx: 5, cy: 5, r: 5 },
  { cx: 32.5, cy: 5, r: 4.5 },
  { cx: 60, cy: 5, r: 4.5 },
];

const HeroCarouselNavigator = () => {
  const { selectedCircle, setSelectedCircle } = useHeroCarousel()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={65} height={10} fill="none" className="self-center">
      {circles.map((circle, index) => {
        return (
          <HeroCarouselCircle
            key={index}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            isSelected={selectedCircle === index}
            onClick={() => setSelectedCircle(index)}
          />
        )
      })}
    </svg>
  );
};

export default HeroCarouselNavigator;

