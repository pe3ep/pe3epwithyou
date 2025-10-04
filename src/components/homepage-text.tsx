'use client'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import FloatingCards, { FloatingCard } from './floating-cards'
import { Pointer } from './ui/pointer'

export default function HomepageText() {
  return (
    <span className="text-center leading-5">
      <span className="leading-5 [&:not(:first-child)]:mt-6 inline-block">
        I am a{' '}
        <InlineLink
          href="/projects"
          cards={[
            {
              img: '/images/biomebattle.png',
              alt: 'Biome Battle',
              width: 125,
              height: 125,
            },
            {
              img: '/images/mccihub.png',
              alt: 'MCCI Hub',
              width: 133,
              height: 130,
            },
            {
              img: '/images/trident.png',
              alt: 'Trident',
              width: 120,
              height: 120,
            },
          ]}>
          developer
          <ArrowUpRight className="h-4 w-4" />
        </InlineLink>
        , designer and a{' '}
        <InlineLink
          href="#"
          cards={[
            {
              img: '/images/university/outside.jpg',
              alt: 'Outside',
              width: 162,
              height: 162,
            },
            {
              img: '/images/university/stairs.jpg',
              alt: 'Stairs',
              width: 160,
              height: 240,
            },
            {
              img: '/images/university/library.jpg',
              alt: 'Library',
              width: 202,
              height: 158,
            },
          ]}>
          university student
        </InlineLink>
        . I've been coding ever since I was 11 years old. In my free time I
        enjoy to self-improve and work on my passion projects.
      </span>
    </span>
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
    <span className="relative inline-block">
      <Link
        href={href}
        className="text-brand font-medium inline-flex items-center gap-0.5">
        {children}
      </Link>
      <Pointer>
        <FloatingCards stagger={0.33} cards={cards} />
      </Pointer>
    </span>
  )
}
