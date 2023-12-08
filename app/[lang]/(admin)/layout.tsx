import { Inter } from 'next/font/google';
import { Banner, Logo } from "@/app/components/navigation";
import { themeSettings } from '@/app/components/data';
import "@/styles/styles.css";
import { LayoutAddNew, LayoutSearchId, PublishChanges } from '@/app/components/admin';
import { IconAccount } from '@/app/components/navigation/icons';

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

  return (
    <html data-theme={themeSettings.DEFAULT_THEME} className={inter.className}>
      <head className={inter.className} />
      <body className={`bg-bkg ${inter.className}`}>
        <Banner />
        <section className="bg-bkg text-content mx-auto flex h-[80vh] max-w-[1600px] flex-col items-center px-20 lg:max-w-[1500px]">

          <nav className="flex w-full items-center justify-between pt-6">
            <div className="w-[50%]">
              <LayoutAddNew params={params} />
            </div>

            <div className="flex w-[50%] items-center">
              <LayoutSearchId />

              <div className="ml-auto flex items-center gap-2">
                <IconAccount />
                <span>ADMIN</span>
              </div>

            </div>
          </nav>

          <main className="flex w-full">
            {children}
          </main>

        </section>

        <footer className="mx-auto grid max-w-[1600px] grid-cols-3 items-center px-20 lg:max-w-[1500px]">
          <span className="text-bold text-content underline underline-offset-2">SELECT</span>
          <Logo />
          <PublishChanges className="border-content border-2" />
        </footer>
      </body>
    </html>
  )
}

