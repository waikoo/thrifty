import men_newIn_01 from '@/public/home/men_new_in_01.jpg';
import men_newIn_02 from '@/public/home/men_new_in_02.jpg';
import men_newIn_03 from '@/public/home/men_new_in_03.jpg';
import men_promos_01 from '@/public/home/men_promos_01.jpg';
import men_promos_02 from '@/public/home/men_promos_02.jpg';
import men_promos_03 from '@/public/home/men_promos_03.jpg'
import men_filters_01 from '@/public/home/men_filters_01.jpg'
import men_filters_02 from '@/public/home/men_filters_02.jpg'
import men_filters_03 from '@/public/home/men_filters_03.jpg'

import women_newIn_01 from '@/public/home/women_new_in_01.jpg';
import women_newIn_02 from '@/public/home/women_new_in_02.jpg';
import women_newIn_03 from '@/public/home/women_new_in_03.jpg';
import women_promos_01 from '@/public/home/women_promos_01.jpg';
import women_promos_02 from '@/public/home/women_promos_02.jpg';
import women_promos_03 from '@/public/home/women_promos_03.jpg'
import women_filters_01 from '@/public/home/women_filters_01.jpg'
import women_filters_02 from '@/public/home/women_filters_02.jpg'
import women_filters_03 from '@/public/home/women_filters_03.jpg'

import kids_newIn_01 from '@/public/home/kids_new_in_01.jpg';
import kids_newIn_02 from '@/public/home/kids_new_in_02.jpg';
import kids_newIn_03 from '@/public/home/kids_new_in_03.jpg';
import kids_promos_01 from '@/public/home/kids_promos_01.jpg';
import kids_promos_02 from '@/public/home/kids_promos_02.jpg';
import kids_promos_03 from '@/public/home/kids_promos_03.jpg'
import kids_filters_01 from '@/public/home/kids_filters_01.jpg'
import kids_filters_02 from '@/public/home/kids_filters_02.jpg'
import kids_filters_03 from '@/public/home/kids_filters_03.jpg'

import { Timages } from "@/types/home";

export const HERO_CAROUSEL_TITLES = ['NEW IN', 'PROMOS', 'FILTERS'] as const
export type HeroCarouselTitlesTuple = typeof HERO_CAROUSEL_TITLES
export type HeroCarouselTitle = HeroCarouselTitlesTuple[number]


export const images: Timages = {
  men: {
    small: {
      0: [men_newIn_01, men_newIn_02],
      1: [men_promos_01, men_promos_02],
      2: [men_filters_01, men_filters_02]
    },
    large: {
      0: men_newIn_03,
      1: men_promos_03,
      2: men_filters_03
    }
  },
  women: {
    small: {
      0: [women_newIn_01, women_newIn_02],
      1: [women_promos_01, women_promos_02],
      2: [women_filters_01, women_filters_02]
    },
    large: {
      0: women_newIn_03,
      1: women_promos_03,
      2: women_filters_03
    }
  },
  kids: {
    small: {
      0: [kids_newIn_01, kids_newIn_02],
      1: [kids_promos_01, kids_promos_02],
      2: [kids_filters_01, kids_filters_02]
    },
    large: {
      0: kids_newIn_03,
      1: kids_promos_03,
      2: kids_filters_03
    }
  },
}
