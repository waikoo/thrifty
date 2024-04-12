import { IconArrow } from "../generic/";
import { ColorCarouselImages } from "./";
import { Gender } from "@/types/link";

type ColorCarouselGridProps = {
  gender: Gender
};

export default async function ColorCarouselGrid({ gender }: ColorCarouselGridProps) {

  return (

    <div className="grid grid-cols-[0.5fr_9fr_0.5fr] items-center pt-16">

      <div className="col-start-1 cursor-pointer justify-self-start" >
        <IconArrow left />
      </div>

      <ColorCarouselImages {... { gender }} />

      <div className="col-start-3 cursor-pointer justify-self-end" >
        <IconArrow />
      </div>
    </div>
  );
}

