import type { Metadata } from "next";
import "../styles/styles.css";
import { Header, ThemeToggler, Banner } from "./components";
import { ReactNode } from "react";

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
      <body className="h-screen dark">
        {/* <Header> */}
        <ThemeToggler />
        {/* <Banner />  */}
        {/* </Header> */}
        {children}
      </body>
    </html>
  );
}
