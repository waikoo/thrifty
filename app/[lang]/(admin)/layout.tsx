import { Inter } from 'next/font/google';
import { Banner, NavBar } from "@/app/components/navigation";
import { themeSettings } from '@/app/components/data';
import "@/styles/styles.css";
import { StatusBar, StatusImages } from '@/app/components/admin';

type RootLayoutProps = {
  children: React.ReactNode
  params: { [key: string]: string | string[] | undefined }
}

const inter = Inter({ subsets: ['latin'], display: 'swap' })
export const metadata = {
  title: 'Admin - Thrifty',
  description: 'Admin panel',
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  console.log(params)

  return (
    <html data-theme={themeSettings.DEFAULT_THEME} className={inter.className}>
      <head className={inter.className} />
      <body className={`bg-bkg ${inter.className}`}>
        <Banner />
        <section className="bg-bkg text-content mx-auto flex h-screen max-w-[1600px] flex-col items-center px-20 lg:max-w-[1500px]">
          <NavBar isAdmin params={params} />

          <main className="mt-6 flex w-full flex-col items-center">
            {children}
          </main>

        </section>

        <footer>
          <StatusBar>
            {/* <StatusImages /> */}
          </StatusBar>

        </footer>
      </body>
    </html>
  )
}

