import ThemeToggler from "@/app/components/ThemeToggler";
import { themeSettings } from "@/app/components/data/theme";
import { Banner } from "@/app/components/generic";
import { LanguagePicker, Navigation } from "@/app/components/navigation";
import "@/styles/styles.css";
import { Suspense } from "react";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
export const metadata = {
  title: 'Thrifty'
}

export type RootLayoutProps = {
  children: React.ReactNode,
  params: {
    lang: string,
    category: string
  }
}

export default function RootLayout({ children, params: { lang, category } }: RootLayoutProps) {

  return (
    <html data-theme={themeSettings.DEFAULT_THEME} className={inter.className}>
      <head />
      <body className="relative bg-bkg">
        <Banner />
        <section className="h-screen bg-bkg text-content flex flex-col px-20">
          <LanguagePicker {... { lang, category }} />
          <Navigation />
          <main className="mt-5">
            {children}
          </main>

          <footer className="mt-auto">
            <Suspense fallback={null}> <ThemeToggler /> </Suspense>
          </footer>

        </section>

      </body>
    </html>
  )
}
