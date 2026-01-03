import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Øxfile - Secure File Sharing',
  description: 'Secure, encrypted, and self-destructing file sharing. Client-side encryption. Zero logs.',
  icons: {
    icon: '/0x-file.ico',
    shortcut: '/0x-file.ico',
    apple: '/0x-file.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
