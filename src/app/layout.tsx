import Navbar from '@/components/navbar'
import type { Metadata } from 'next'
import { Geist_Mono, Inter, Neuton, Public_Sans } from 'next/font/google'
import './globals.css'

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

const title = 'pe3epwithyou'
const description = 'Developer, designer, student'

export const metadata: Metadata = {
  title: title,
  description: description,
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: `@pe3epwithyou`,
    images: [
      'https://49e2bk54lp.ufs.sh/f/a93u8F6e4NvWnvLHPwBqmGfErJMPeDqjS0VhXR82Kyiuw3H1',
    ],
  },
  openGraph: {
    type: 'website',
    title: title,
    description: description,
    url: 'https://pe3epwithyou.vercel.app',
    siteName: title,
    images: [
      {
        url: 'https://49e2bk54lp.ufs.sh/f/a93u8F6e4NvWnvLHPwBqmGfErJMPeDqjS0VhXR82Kyiuw3H1',
        width: 1440,
        height: 900,
      },
    ],
    locale: 'en_US',
  },
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
