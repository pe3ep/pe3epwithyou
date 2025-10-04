'use client'
import { motion, Variants } from 'motion/react'
import React from 'react'

type FloatingCardsProps = {
  cards: FloatingCard[]
  stagger?: number
}

type FloatingCard = {
  img: string
  alt: string
  width: number
  height: number
}

export const AppearVariants = (stagger: number = 0.2) => {
  const data: Variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      filter: 'blur(8px)',
    },
    visible: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.1,
        type: 'spring',
        visualDuration: 0.2,
        bounce: 0.35,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      filter: 'blur(8px)',
      transition: {
        ease: 'easeIn',
        duration: 0.1,
      },
    },
  }

  return data
}

export default function FloatingCards({
  cards,
  stagger = 0.2,
}: FloatingCardsProps) {
  return (
    <motion.div
      className="relative w-64 h-64"
      variants={AppearVariants(stagger)}
      initial="hidden"
      animate="visible"
      exit="exit">
      {cards.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          alt={card.alt}
          index={index}
          height={card.height}
          width={card.width}
        />
      ))}
    </motion.div>
  )
}

const Card = ({
  img,
  alt,
  width,
  height,
  index,
}: {
  img: string
  alt: string
  width: number
  height: number
  index: number
}) => {
  const offset = 16
  const rotation = 3

  return (
    <motion.div
      style={{
        borderRadius: 12,
        top: index * offset,
        left: index * offset,
        rotate: index % 2 ? index * rotation : index * -rotation,
      }}
      variants={AppearVariants()}
      className="absolute overflow-hidden shadow-xl shadow-stone-950/25 border border-stone-300 outline-[0.5px] outline-stone-900/20">
      <img src={img} alt={alt} width={width} height={height} />
    </motion.div>
  )
}
