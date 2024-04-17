import { Albert_Sans } from 'next/font/google';
import { Zen_Tokyo_Zoo } from 'next/font/google';
import { Rock_Salt } from 'next/font/google';
import localFont from 'next/font/local';

export const albert = Albert_Sans({ subsets: ['latin'], display: 'swap' })
export const zen_tokyo_zoo = Zen_Tokyo_Zoo({ subsets: ['latin'], display: 'swap', weight: '400' })
export const rock_salt = Rock_Salt({ subsets: ['latin'], display: 'swap', weight: '400' })

export const allenoire = localFont({
  src: [
    {
      path: '../public/fonts/allenoire/allenoire.woff2',
      weight: '400',
    }
  ],
  variable: '--font-allenoire'
})

export const futura = localFont({
  src: [
    {
      path: '../public/fonts/futura/futura.woff2',
      weight: '400',
    }
  ],
  variable: '--font-futura'
})

export const alokary = localFont({
  src: [
    {
      path: '../public/fonts/alokary/alokary.otf',
      weight: '400',
    }
  ],
  variable: '--font-alokary'
})

