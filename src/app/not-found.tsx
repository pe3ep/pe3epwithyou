'use client'
import { InlineLink } from '@/components/homepage-text'
import { motion } from 'motion/react'
import React from 'react'

export default function FourOhFour() {
  let ref = React.useRef<HTMLDivElement>(null)
  return (
    <div className="p-4 pt-20 h-screen">
      <div ref={ref} className="grid place-content-center h-full gap-4">
        <motion.div
          drag
          dragConstraints={ref}
          initial={{
            filter: 'drop-shadow(0 25px 25px rgb(255 0 0 / 0))',
          }}
          animate={{
            filter: 'drop-shadow(0 25px 25px rgb(255 0 0 / 0))',
          }}
          whileDrag={{
            scale: 1.05,
            filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.5))',
          }}
          whileTap={{
            scale: 0.95,
            cursor: 'grabbing',
          }}
          className="hover:cursor-grab grid place-content-center">
          <h1 className="text-6xl font-sans-heading font-semibold tracking-tighter text-brand">
            404
          </h1>
        </motion.div>
        <span>
          Page not found,{' '}
          <InlineLink
            href="/"
            cards={[
              {
                img: '/images/sky.jpg',
                alt: 'sky',
                height: 108,
                width: 108,
              },
              {
                img: '/images/mountains.jpg',
                alt: 'mountains',
                height: 120,
                width: 120,
              },
            ]}>
            go back?
          </InlineLink>
        </span>
      </div>
    </div>
  )
}
