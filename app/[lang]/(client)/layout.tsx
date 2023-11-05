import { themeSettings } from "@/app/components/data/theme";
import { Footer } from "@/app/components/footer";
import { BackToTop, Banner, Category, NavBar } from "@/app/components/navigation";
import "@/styles/styles.css";
import { Inter } from 'next/font/google';

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
      <body className={`bg-bkg ${inter.className}`}>
        <Banner />
        <section className="bg-bkg text-content mx-auto flex flex-col items-center px-20 lg:max-w-[1500px]">
          <NavBar />
          <Category />
          <BackToTop />
        </section>

        {children}

        <Footer />

      </body>
    </html>
  )
}
