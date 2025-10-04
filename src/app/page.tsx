'use client'
import HomepageText from '@/components/homepage-text'
import { Globe } from '@/components/ui/globe'
import { motion, Variants } from 'motion/react'

export default function Home() {
  return (
    <div className="p-4 pt-20 h-screen relative overflow-hidden">
      <main className="relative z-20">
        <div className="w-full p-4 py-16 grid place-content-center gap-8">
          <div className="z-3 grid place-content-center">
            <motion.h2
              variants={delayedVariant()}
              initial="hidden"
              animate="visible"
              className="scroll-m-20 text-brand text-center text-3xl font-fancy italic tracking-tighter">
              Hi, my name is
            </motion.h2>
            <motion.h1
              variants={delayedVariant(0.2)}
              initial="hidden"
              animate="visible"
              className="scroll-m-20 text-brand text-center text-6xl font-semibold font-sans-heading tracking-tight text-balance">
              Andrew
            </motion.h1>
          </div>
          <div className="relative grid place-items-center max-w-xl gap-4 animate-delayed-in">
            <div className="absolute z-2 -inset-3 bg-background blur-xl" />
            <div className="absolute z-2 inset-0 bg-background blur-xl" />
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
        className="fixed z-1 w-full bottom-0 -translate-y-8 sm:translate-y-[50%] left-0 right-0 flex justify-center">
        <Globe />
      </motion.footer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
        className="fixed z-2 bottom-0 left-0 right-0 w-full flex justify-center items-center p-3">
        <div className="relative flex justify-center items-center">
          <div className="absolute -inset-3 bg-background blur-xl" />
          <div className="absolute inset-0 bg-background blur-xl" />
          <p className="relative text-brand text-center">© 2025 Pe3epWithYou</p>
        </div>
      </motion.div>
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
