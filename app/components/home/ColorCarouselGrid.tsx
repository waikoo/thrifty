import { Category } from "@/types/home";
import { IconArrow } from "../generic/";
import { ColorCarouselImages } from "./";

type ColorCarouselGridProps = {
  category: Category['category'];
};

export default async function ColorCarouselGrid({ category }: ColorCarouselGridProps) {

  return (

    <div className="grid grid-cols-[0.5fr_9fr_0.5fr] items-center pt-16">

      <IconArrow left className="col-start-1 justify-self-start" />

      <ColorCarouselImages {... { category }} />

      <IconArrow className="col-start-3 justify-self-end" />

    </div>
  );
}

