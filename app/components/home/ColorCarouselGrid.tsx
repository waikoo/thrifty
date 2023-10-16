import { Category, TColor } from "@/types/home";
import { getColors } from "@/utils/getColors";
import { IconArrow } from "../generic/";
import { ColorCarouselImages } from "./";

type ColorCarouselGridProps = {
  category: Category['category'];
};

const A_DAY = 24 * 60 * 60 * 1000;
export const revalidate = A_DAY;

export default async function ColorCarouselGrid({ category }: ColorCarouselGridProps) {
  const colorsResponse: TColor[] | null = await getColors(category);
  let colors: TColor[] = [];

  if (colorsResponse !== null) {
    colors = colorsResponse as TColor[];
  }

  return (
    colors && (
      <div className="grid grid-cols-[0.5fr_9fr_0.5fr] items-center pt-16">

        <IconArrow left className="col-start-1 justify-self-start" />

        <ColorCarouselImages colors={colors} />

        <IconArrow className="col-start-3 justify-self-end" />

      </div>
    )
  );
}

