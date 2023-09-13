import type { Metadata } from "next";
import "../styles/styles.css";
import WithClientWrapper from "./components/WithClientWrapper";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thrifty",
  description: "Maybe this be",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen dark">
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
