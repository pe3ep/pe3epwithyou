import type { Metadata } from 'next'
import { Public_Sans, Neuton, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
})

const neuton = Neuton({
  variable: '--font-neuton',
  weight: ['200', '300', '400', '700', '800'],
  style: 'italic',
  subsets: ['latin'],
})

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'pe3epwithyou',
  description: 'My name is Andrew',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${publicSans.variable} ${neuton.variable} ${geistMono.variable} antialiased font-sans selection:bg-brand/20`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
