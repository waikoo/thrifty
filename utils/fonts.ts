import { Albert_Sans } from 'next/font/google';
import { Zen_Tokyo_Zoo } from 'next/font/google';
import { Rock_Salt } from 'next/font/google';
import localFont from 'next/font/local';

export const albert_300 = Albert_Sans({ subsets: ['latin'], display: 'swap', weight: '300' })
export const albert = Albert_Sans({ subsets: ['latin'], display: 'swap', weight: '400' })
export const albert_500 = Albert_Sans({ subsets: ['latin'], display: 'swap', weight: '500' })
export const albert_600 = Albert_Sans({ subsets: ['latin'], display: 'swap', weight: '600' })
export const albert_700 = Albert_Sans({ subsets: ['latin'], display: 'swap', weight: '700' })
export const albert_800 = Albert_Sans({ subsets: ['latin'], display: 'swap', weight: '800' })
export const albert_900 = Albert_Sans({ subsets: ['latin'], display: 'swap', weight: '900' })
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

export const futura_bold = localFont({
  src: [
    {
      path: '../public/fonts/futura/futura_bold.woff2',
      weight: '700',
    }
  ],
  variable: '--font-futura_bold'
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

export const avant_garde = localFont({
  src: [
    {
      path: '../public/fonts/itc_avant_garde/itc_avant_garde.woff2',
      weight: '400',
    }
  ],
  variable: '--font-avant_garde'
})


export const noir_pro = localFont({
  src: [
    {
      path: '../public/fonts/noir_pro_heavy/noir_pro_heavy.woff2',
      weight: '700',
    }
  ],
  variable: '--font-noir_pro'
})
