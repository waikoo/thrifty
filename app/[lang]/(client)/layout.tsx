import { Inter } from 'next/font/google';

import "@/styles/styles.css";
import FavoritesOrCart from "@/app/components/FavoritesOrCart";
import { themeSettings } from "@/app/components/data/theme";
import { Footer } from "@/app/components/footer";
import { BackToTop, Banner, Category, NavBar } from "@/app/components/navigation";

const inter = Inter({ subsets: ['latin'], display: 'swap' })
export const metadata = {
  title: 'Thrifty',
  description: 'An e-commerce store for second-hand clothing',
}

export type RootLayoutProps = {
  children: React.ReactNode,
  params?: { [key: string]: string | string[] | undefined }

}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const lang = typeof params?.lang === 'string' ? params.lang : ''

  return (
    <html
      data-theme={themeSettings.DEFAULT_THEME}
      className={`${inter.className} max-w-screen min-h-screen overflow-x-hidden`}
      lang={lang}
    >
      <head />
      <body className={`bg-bkg w-full min-h-screen ${inter.className}`}>
        <Banner />
        <section className="bg-bkg text-content mx-auto flex flex-col items-center px-20 lg:max-w-[1500px]">
          <NavBar />
          <Category />

          <FavoritesOrCart lang={lang} />

          <BackToTop />
        </section>

        {children}

        <Footer />

      </body>
    </html>
  )
}
