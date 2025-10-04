'use client'
import React from 'react'
import { Button } from './ui/button'
import FloatingCards from './floating-cards'
import { Pointer } from './ui/pointer'
import { AnimatePresence, motion } from 'motion/react'

export default function NavbarDock() {
  const [card, setCard] = React.useState<React.JSX.Element | null>()

  return (
    <div className="relative flex gap-2 items-center">
      {/* <motion.button
        onHoverStart={() =>
          setCard(
            <FloatingCards
              key={1}
              cards={[
                {
                  img: '/debug.png',
                  alt: 'test',
                },
              ]}
            />
          )
        }
        className="text-sm font-medium rounded-lg bg-primary h-9 px-4 py-2">
        Contact
      </motion.button>
      <motion.button
        onHoverStart={() =>
          setCard(
            <FloatingCards
              key={2}
              cards={[
                {
                  img: '/debug2.png',
                  alt: 'test',
                },
              ]}
            />
          )
        }
        className="text-sm font-medium rounded-lg bg-primary h-9 px-4 py-2">
        Contact
      </motion.button>
      <motion.button
        onHoverStart={() =>
          setCard(
            <FloatingCards
              key={3}
              cards={[
                {
                  img: '/debug3.png',
                  alt: 'test',
                },
                {
                  img: '/debug.png',
                  alt: 'test',
                },
                {
                  img: '/debug.png',
                  alt: 'test',
                },
              ]}
            />
          )
        }
        className="text-sm font-medium rounded-lg bg-primary h-9 px-4 py-2">
        Contact
      </motion.button>
      <Pointer>
        <AnimatePresence mode="wait">{card}</AnimatePresence>
      </Pointer> */}
    </div>
  )
}
