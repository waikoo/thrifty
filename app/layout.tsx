import type { Metadata } from "next";
import "../styles/styles.css";
import { Header, ThemeToggler } from "./components";
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
      <body className="h-screen bg-bkg text-content flex flex-col">
        <Header />
        <main className="mt-5">{children}</main>
        <footer className="mt-auto">
          <Suspense fallback={null}> <ThemeToggler /> </Suspense>
        </footer>
      </body>
    </html>
  );
}
