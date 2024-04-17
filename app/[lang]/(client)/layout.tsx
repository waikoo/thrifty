import "@/styles/styles.css";

import { themeSettings } from "@/app/components/data/theme";
import { Footer } from "@/app/components/footer";
import Header from '@/app/components/navigation/Header';
import { allenoire, alokary, futura, noir_pro, avant_garde } from '@/utils/fonts';

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

  return (
    <html
      data-theme={themeSettings.DEFAULT_THEME}
      className={`${allenoire.variable} ${futura.variable} ${alokary.variable} ${noir_pro.variable} ${avant_garde.variable}`}
      lang={lang}
    >
      <head />
      <body className={`dark:bg-t_black bg-t_white min-h-screen w-full`}>
        <Header />  {/* only above 1512px */}

        {children}

        {/* <Footer /> */}

      </body>
    </html>
  )
}
