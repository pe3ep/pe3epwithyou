'use client'
import HomepageText from '@/components/homepage-text'
import { Globe } from '@/components/ui/globe'
import { motion, Variants } from 'motion/react'

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden p-4 pt-20">
      <main className="relative z-20">
        <div className="grid w-full place-content-center gap-8 p-4 py-16">
          <div className="z-3 grid place-content-center">
            <motion.h2
              variants={delayedVariant()}
              initial="hidden"
              animate="visible"
              className="text-brand font-fancy scroll-m-20 text-center text-3xl tracking-tighter italic">
              Hi, my name is
            </motion.h2>
            <motion.h1
              variants={delayedVariant(0.2)}
              initial="hidden"
              animate="visible"
              className="text-brand font-sans-heading scroll-m-20 text-center text-6xl font-semibold tracking-tighter text-balance">
              Andrew
            </motion.h1>
          </div>
          <div className="animate-delayed-in relative grid max-w-xl place-items-center gap-4">
            <div className="bg-background absolute -inset-3 z-2 blur-xl" />
            <div className="bg-background absolute inset-0 z-2 blur-xl" />
            <HomepageText />
          </div>
        </div>
      </main>
      <motion.footer
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.8,
            type: 'spring',
            visualDuration: 1.25,
            bounce: 0,
          },
        }}
        className="fixed right-0 bottom-0 left-0 z-1 flex w-full -translate-y-8 justify-center sm:translate-y-[50%]">
        <Globe />
      </motion.footer>
      <div className="animate-delayed-in fixed right-0 bottom-0 left-0 z-2 flex w-full items-center justify-center p-3">
        <div className="relative flex items-center justify-center">
          <div className="bg-background absolute -inset-3 blur-xl" />
          <div className="bg-background absolute inset-0 blur-xl" />
          <p className="text-brand relative text-center">© 2025 Pe3epWithYou</p>
        </div>
      </div>
    </div>
  )
}

function delayedVariant(delay: number = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      filter: 'blur(3px)',
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: delay,
        type: 'spring',
        visualDuration: 0.4,
        bounce: 0.5,
      },
    },
  }
}
