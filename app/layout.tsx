import { ThemeToggler } from "@/app/components/generic/";
import { themeSettings } from "@/app/components/data/theme";
import { BackToTop, Banner, Category, LanguagePicker, NavBar } from "@/app/components/navigation";
import "@/styles/styles.css";
import { Inter } from 'next/font/google';
import { Suspense } from "react";

const inter = Inter({ subsets: ['latin'], display: 'swap' })
export const metadata = {
  title: 'Thrifty',
  description: 'An e-commerce store for second-hand clothing',
}

export type RootLayoutProps = {
  children: React.ReactNode,
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html data-theme={themeSettings.DEFAULT_THEME} className={inter.className}>
      <head />
      <body className="bg-bkg">
        <Banner />
        <section className="bg-bkg text-content mx-auto flex h-screen max-w-[1440px] flex-col items-center px-20">
          <NavBar />

          <Suspense fallback={<div>Loading...</div>}>
            <Category />
          </Suspense>

          <BackToTop />

          <main className="mt-6 flex w-full flex-col items-center">
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
