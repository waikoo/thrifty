import newIn_01 from '@/public/home/new_in_01.jpg';
import newIn_02 from '@/public/home/new_in_02.jpg';
import newIn_03 from '@/public/home/new_in_03.jpg';
import promos_01 from '@/public/home/promos_01.jpg';
import promos_02 from '@/public/home/promos_02.jpg';
import promos_03 from '@/public/home/promos_03.jpg'
import filters_01 from '@/public/home/filters_01.jpg'
import filters_02 from '@/public/home/filters_02.jpg'
import filters_03 from '@/public/home/filters_03.jpg'

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
  small: {
    0: [newIn_01, newIn_02],
    1: [promos_01, promos_02],
    2: [filters_01, filters_02]
  },
  large: {
    0: newIn_03,
    1: promos_03,
    2: filters_03
  }
}


