import ThemeToggler from "@/app/components/ThemeToggler";
import { themeSettings } from "@/app/components/data/theme";
import { Banner } from "@/app/components/generic";
import { LanguagePicker, Navigation } from "@/app/components/navigation";
import "@/styles/styles.css";
import { Suspense } from "react";

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
  console.log(lang, category)
  return (
    <html data-theme={themeSettings.DEFAULT_THEME}>
      <head />
      <body className="relative bg-bkg">
        <Banner />
        <section className="h-screen bg-bkg text-content flex flex-col px-10">
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
