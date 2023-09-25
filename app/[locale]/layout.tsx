import { dir } from 'i18next'
import { locales } from '../i18n/settings'
import { Banner, ThemeToggler } from '../components'
import { Suspense } from 'react'
import "../../styles/styles.css";
import { Navigation } from '../components/navigation';
import LanguagePicker from '../components/LanguagePicker';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type RootLayoutProps = {
  children: React.ReactNode,
  params: {
    locale: string,
  }
}

export default function RootLayout({
  children,
  params: {
    locale,
  }
}: RootLayoutProps) {

  return (
    <html lang={locale} dir={dir(locale)}>
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
