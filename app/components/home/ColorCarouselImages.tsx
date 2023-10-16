"use client"
import { useUIStore } from "@/state/uiState";
import { TColor } from "@/types/home";
import { ColorCarouselElement } from ".";

type ColorCarouselImagesProps = {
  colors: TColor[]
}

export default function ColorCarouselImages({ colors }: ColorCarouselImagesProps) {
  const { isSecondColorPage } = useUIStore()
  const start = isSecondColorPage ? 4 : 0
  const end = isSecondColorPage ? colors.length : 4

  return (
    <div className="flex w-full gap-6 overflow-x-auto">
      {colors.slice(start, end).map(({ id, color, imgUrl, alt }: TColor) => (
        <ColorCarouselElement
          key={id}
          color={color}
          imgUrl={imgUrl}
          alt={alt}
        />
      ))}
    </div>
  );
}

