import { Inter } from 'next/font/google';
import { Banner } from "@/app/components/navigation";
import { themeSettings } from '@/app/components/data';
import "@/styles/styles.css";

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
        {children}
      </body>
    </html >
  )
}

