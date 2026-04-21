'use client'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import FloatingCards, { FloatingCard } from './floating-cards'
import { Pointer } from './ui/pointer'

export default function HomepageText() {
  return (
    <span className="relative z-3 text-center leading-5">
      <span className="inline-block leading-5 [&:not(:first-child)]:mt-6">
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
          ]}
          className="group">
          developer
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </InlineLink>
        , designer, and a music enthusiast. I've been coding ever since I was 11 years old. In my free time, I enjoy
        self-improvement and working on my passion projects.
      </span>
    </span>
  )
}

export const InlineLink = ({
  href,
  children,
  cards,
  className,
  ...props
}: {
  href: string
  children?: React.ReactNode
  cards: FloatingCard[]
} & React.ComponentProps<'span'>) => {
  return (
    <span className={cn('relative z-3 inline-block', className)} {...props}>
      <Link href={href} className="text-brand inline-flex items-center gap-0.5 font-medium">
        {children}
      </Link>
      <Pointer>
        <FloatingCards stagger={0.33} cards={cards} />
      </Pointer>
    </span>
  )
}
