import type { Metadata } from "next";
import "../styles/styles.css";
import { Header, ThemeToggler, Banner } from "./components";
import { ReactNode, Suspense } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Thrifty",
  description: "E-commerce portfolio project using Next.js, TypeScript and Tailwind",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="h-screen bg-bkg text-content">
        {/* <Header> */}
        <Suspense fallback={null}>
          <ThemeToggler />
        </Suspense>

        {/* <Banner /> */}
        {/* </Header> */}
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
