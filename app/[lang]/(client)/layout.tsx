import "@/styles/styles.css";

import { themeSettings } from "@/app/components/data/theme";
import { Footer } from "@/app/components/footer";
import Header from '@/app/components/navigation/Header';
import { allenoire, alokary, futura, noir_pro, avant_garde, futura_bold } from '@/utils/fonts';
import { Gender, Locales } from "@/types/link";
import HamburgerMenu from "@/app/components/navigation/HamburgerMenu";

export const metadata = {
  title: 'Thrifty',
  description: 'An e-commerce store for second-hand clothing',
}

export type RootLayoutProps = {
  children: React.ReactNode,
  params?: { [key: string]: string | string[] | undefined }
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const lang = typeof params?.lang === 'string' ? params.lang : ''
  const gender = typeof params?.gender === 'string' ? params.gender : ''

  return (
    <html
      data-theme={themeSettings.DEFAULT_THEME}
      className={`${allenoire.variable} ${futura.variable} ${alokary.variable} ${noir_pro.variable} ${avant_garde.variable} ${futura_bold.variable}`}
      lang={lang}
    >
      <head />
      <body className={`dark:bg-t_black bg-t_white min-h-screen w-full`}>
        <div id="popup-root"></div>
        <HamburgerMenu />
        <Header />

        {children}

        <Footer lang={lang as Locales} gender={gender as Gender} />

      </body>
    </html>
  )
}
