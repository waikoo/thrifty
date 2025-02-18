"use client"
import { useEffect, useState } from "react"
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel"

import Hero from "@/app/components/home/Hero"
import HeroBarSwitch from "@/app/components/home/HeroBarSwitch"
import { HeroState } from "@/types/home"

export default function HeroCarousel() {
  const [carouselState, setCarouselState] = useState<HeroState>('new_in')
  const [api, setApi] = useState<CarouselApi>()
  const [oldState, setOldState] = useState<HeroState>('new_in')
  const currentScrollSnap = api?.selectedScrollSnap()
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  useEffect(() => {
    if (api) {
      const handleSelect = () => {
        const newState = api.selectedScrollSnap() === 0 ? 'new_in' : 'sale'
        const oldState = api.selectedScrollSnap() === 0 ? 'sale' : 'new_in'

        setCarouselState(newState);
        setOldState(oldState)
        setHasChanged(true)
      };

      api.on('select', handleSelect);

      return () => {
        api.off('select', handleSelect);
      };
    }
  }, [api, currentScrollSnap]);


  return (
    <div className="max-w-[90vw] 3xl:max-w-[1800px] mx-auto">
      <Carousel className="mx-auto w-full"
        plugins={[Autoplay({ delay: 5000 }), Fade()]}
        opts={{ startIndex: carouselState === 'new_in' ? 0 : 1, align: 'start', loop: true, containScroll: false }}
        setApi={setApi}
      >
        <CarouselContent>

          <CarouselItem>
            <Hero heroState="new_in" hasChanged={hasChanged} setHasChanged={setHasChanged} />
          </CarouselItem>

          <CarouselItem>
            <Hero heroState="sale" hasChanged={hasChanged} setHasChanged={setHasChanged} />
          </CarouselItem>


        </CarouselContent>

        <HeroBarSwitch
          carouselState={carouselState}
          setCarouselState={setCarouselState}
        />
      </Carousel>
    </div>
  )
}

