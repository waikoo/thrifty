import { themeSettings } from "@/app/components/data/theme";
import { BackToTop, Banner, Category, NavBar } from "@/app/components/navigation";
import "@/styles/styles.css";
import { Inter } from 'next/font/google';
import { Footer } from "./components/footer";

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
        <section className="bg-bkg text-content mx-auto flex h-screen max-w-[1600px] flex-col items-center px-20 lg:max-w-[1500px]">
          <NavBar />
          <Category />
          <BackToTop />

          <main className="mt-6 flex w-full flex-col items-center">
            {children}
          </main>

          <Footer />

        </section>

      </body>
    </html>
  )
}
