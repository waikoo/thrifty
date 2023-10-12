import { Category, TColor } from "@/types/home";
import { ColorCarouselElement } from ".";
import { colors } from "../data/home/colorCarouselData";

type ColorCarouselImagesProps = {
  category: Category['category']
  count: number
  clicked: boolean
}

export default function ColorCarouselImages({ category, count, clicked }: ColorCarouselImagesProps) {
  const start = clicked ? 4 : 0
  const end = clicked ? colors[category].length : 4

  return (
    <div className="flex overflow-x-auto w-full gap-6">
      {colors[category].slice(start, end).map(({ id, color, imgUrl, alt }: TColor) => (
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

