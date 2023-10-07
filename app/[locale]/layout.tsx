import { dir } from 'i18next'
import { Suspense } from 'react'
import { locales } from '../i18n/settings'
import "@/styles/styles.css";
import { Banner, ThemeToggler, LanguagePicker } from '../components'
import { Navigation } from '../components/navigation';
import { themeSettings } from '../components/data';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type RootLayoutProps = {
  children: React.ReactNode,
  params: {
    locale: string,
  }
}

export const metadata = {
  title: 'Thrifty'
}

export default function RootLayout({
  children,
  params: {
    locale,
  }
}: RootLayoutProps) {

  return (
    <html lang={locale} dir={dir(locale)} data-theme={themeSettings.DEFAULT_THEME}>
      <head />
      <body className="relative bg-bkg">
        <Banner />
        <section className="h-screen bg-bkg text-content flex flex-col px-10">
          <LanguagePicker />
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
