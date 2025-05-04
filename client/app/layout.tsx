import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Real or AI?',
  description: 'A research project on AI-generated image detection',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
