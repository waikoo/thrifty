import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WithClientWrapper from "./components/WithClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thrifty",
  description: "Maybe this be",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <WithClientWrapper>
          {/* <Header>
            <ThemeToggler clickHandler={clickHandler} />
            <Banner />
          </Header> */}
          {children}
        </WithClientWrapper>
      </body>
    </html>
  );
}
