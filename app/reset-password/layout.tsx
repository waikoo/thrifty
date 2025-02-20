import { Suspense } from "react"

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
      <body>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
