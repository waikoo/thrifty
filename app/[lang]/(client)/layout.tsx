import { Inter } from 'next/font/google';

import "@/styles/styles.css";

import { themeSettings } from "@/app/components/data/theme";
import { Footer } from "@/app/components/footer";
import Header from '@/app/components/navigation/Header';

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
      <body className={`bg-bkg min-h-screen w-full ${inter.className}`}>
        <Header />

        {children}

        <Footer />

      </body>
    </html>
  )
}
