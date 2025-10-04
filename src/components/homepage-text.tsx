'use client'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import FloatingCards, { FloatingCard } from './floating-cards'
import { Pointer } from './ui/pointer'

export default function HomepageText() {
  return (
    <div>
      <span className="leading-5 [&:not(:first-child)]:mt-6 inline-block">
        I am a{' '}
        <InlineLink
          href="/"
          cards={[
            {
              img: '/images/car.jpg',
              alt: 'delorian',
              width: 135,
              height: 101,
            },
            { img: '/images/sky.jpg', alt: 'sky', width: 135, height: 135 },
            {
              img: '/images/mountains.jpg',
              alt: 'mountains',
              width: 135,
              height: 135,
            },
          ]}>
          developer
          <ArrowUpRight className="h-4 w-4" />
        </InlineLink>
      </span>
      <span className="leading-5 [&:not(:first-child)]:mt-6">
        , designer and a university student. I've been coding ever since I was
        11 years old. In my free time I enjoy to play videogames and working
        out.
      </span>
    </div>
  )
}

const InlineLink = ({
  href,
  children,
  cards,
}: {
  href: string
  children?: React.ReactNode
  cards: FloatingCard[]
}) => {
  return (
    <span className="relative">
      <Link
        href={href}
        className="text-brand font-medium inline-flex items-center gap-0.5">
        {children}
      </Link>
      <Pointer>
        <FloatingCards stagger={0.26} cards={cards} />
      </Pointer>
    </span>
  )
}
