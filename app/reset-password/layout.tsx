import { Suspense } from "react"

import "@/styles/styles.css";

export const metadata = {
  title: 'Reset Password',
  description: 'Reset your password',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#d2d62e]">
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
