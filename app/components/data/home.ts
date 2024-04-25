import AdidasSVG from '@/app/components/home/icons/AdidasSVG'
import CalvinKleinSVG from '@/app/components/home/icons/CalvinKleinSVG'
import VansSVG from '@/app/components/home/icons/VansSVG'
import NikeSVG from '@/app/components/home/icons/NikeSVG'
import MangoSVG from '@/app/components/home/icons/MangoSVG'
import HMSVG from '@/app/components/home/icons/HMSVG'
import ZaraSVG from '@/app/components/home/icons/ZaraSVG'
import LacosteSVG from '@/app/components/home/icons/LacosteSVG'
import ConverseSVG from '@/app/components/home/icons/ConverseSVG'

export const heroAlt = {
  new_in: {
    men: "a short haired man in a jacket looking away from the camera towards a forest",
    women: "a long haired woman in sunglasses wearing a green suit surrounded by mannequins",
    kids: "kids sitting on big pillows with their backs towards the camera looking at bubbles",
  },
  sale: {
    men: "a green-black polo shirt folded on top of a green-black suitcase",
    women: "red purses and red high heels hanging between ferns",
    kids: "a short sleeved white t-shirt with black stripes hanging from a hanger",
  }
}

export const popularBrands = [{
  brand: 'adidas',
  SVG: AdidasSVG,
  alt: 'a woman wearing a green striped adidas jacket',
  className: 'row-start-2 col-start-2 col-end-3',
},
{
  brand: 'calvin+klein',
  SVG: CalvinKleinSVG,
  alt: 'calvin klein jeans from the back',
  className: 'row-start-2 col-start-3 col-end-4',
}, {
  brand: 'vans',
  SVG: VansSVG,
  alt: 'a woman wearing a black and white vans jacket',
  className: 'row-start-2 col-start-4 col-end-5',
},
{
  brand: 'nike',
  SVG: NikeSVG,
  alt: 'a white Nike shoe hanging from its shoelaces reflected in blue tiles',
  className: 'row-start-3 col-start-2 col-end-3 xl:col-start-5 xl:col-end-6 xl:row-start-2',
},
{
  brand: 'mango',
  SVG: MangoSVG,
  alt: 'a man wearing a green long sleeve shirt and a woman in an orange top in a rocky backdrop',
  className: 'row-start-3 col-start-3 col-end-4 xl:row-start-2 xl:col-start-6 xl:col-end-7'
}, {
  brand: 'h&m',
  SVG: HMSVG,
  alt: 'a woman facing away but turning back her head toward the camera in a khaki trench coat',
  className: 'row-start-3 col-start-4 col-end-5 xl:row-start-3 xl:col-start-2 xl:col-end-3'
}, {
  brand: 'zara',
  SVG: ZaraSVG,
  alt: 'a pair of black boots on a white background',
  className: 'row-start-4 col-start-2 col-end-3 xl:row-start-3 xl:col-start-3 xl:col-end-4'
}, {
  brand: 'lacoste',
  SVG: LacosteSVG,
  alt: 'a man and a woman looking at the camera in baby blue lacoste jacket',
  className: 'row-start-4 col-start-3 col-end-4 xl:row-start-3 xl:col-start-4 xl:col-end-5'
}, {
  brand: 'converse',
  SVG: ConverseSVG,
  alt: 'two pairs of feet in the classic low-top black and white converse shoes',
  className: 'relative row-start-4 col-start-4 col-end-5 xl:row-start-3 xl:col-start-5 xl:col-end-6'
}]
