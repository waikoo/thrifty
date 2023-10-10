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

import { TColor, Timages } from "@/types/home";

export const colors: TColor[] = [{
  id: 1,
  color: 'blue',
  imgUrl: 'https://loremflickr.com/250/350/clothes,europe/all',
  alt: 'bluez alt'
},
{
  id: 2,
  color: 'red',
  imgUrl: 'https://loremflickr.com/250/350/clothes,europe/all',
  alt: 'redz alt'
},
{
  id: 3,
  color: 'yellow',
  imgUrl: 'https://loremflickr.com/250/350/clothes,europe/all',
  alt: 'yellaz alt'
},
{
  id: 4,
  color: 'green',
  imgUrl: 'https://loremflickr.com/250/350/clothes,europe/all',
  alt: 'greenz alt'
}]

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
//
// small: {
//   0: [newIn_01, newIn_02],
//   1: [promos_01, promos_02],
//   2: [filters_01, filters_02]
// },
// large: {
//   0: newIn_03,
//   1: promos_03,
//   2: filters_03
// }


