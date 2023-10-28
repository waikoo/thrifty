import { Inter } from 'next/font/google';
import { Banner, NavBar } from "@/app/components/navigation";
import { themeSettings } from '@/app/components/data';
import "@/styles/styles.css";

type RootLayoutProps = {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'], display: 'swap' })
export const metadata = {
  title: 'Thrifty',
  description: 'An e-commerce store for second-hand clothing',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html data-theme={themeSettings.DEFAULT_THEME} className={inter.className}>
      <head className={inter.className} />
      <body className={`bg-bkg ${inter.className}`}>
        <Banner />
        <section className="bg-bkg text-content mx-auto flex h-screen max-w-[1600px] flex-col items-center px-20 lg:max-w-[1500px]">
          <NavBar isAdmin />

          <main className="mt-6 flex w-full flex-col items-center">
            {children}
          </main>

        </section>

      </body>
    </html>
  )
}

