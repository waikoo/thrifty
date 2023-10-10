import ThemeToggler from "@/app/components/ThemeToggler";
import { themeSettings } from "@/app/components/data/theme";
import { Banner } from "@/app/components/generic";
import { LanguagePicker, Navigation } from "@/app/components/navigation";
import "@/styles/styles.css";
import { Suspense } from "react";

export const metadata = {
  title: 'Thrifty'
}

type RootLayoutProps = {
  children: React.ReactNode,
  params: {
    lang: string,
    category: string
  }
}

export default function RootLayout({ children, params }: RootLayoutProps) {

  return (
    <html data-theme={themeSettings.DEFAULT_THEME}>
      <head />
      <body className="relative bg-bkg">
        <Banner />
        <section className="h-screen bg-bkg text-content flex flex-col px-10">
          <LanguagePicker params={params} />
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
