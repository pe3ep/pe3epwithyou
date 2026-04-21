'use client'
import { motion, Variants } from 'motion/react'
import React from 'react'
import { preload } from 'react-dom'

type FloatingCardsProps = {
  cards: FloatingCard[]
  stagger?: number
}

export type FloatingCard = {
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
        filter: { type: 'tween', ease: 'easeOut', duration: 0.2, staggerChildren: stagger },
        opacity: { type: 'tween', ease: 'easeOut', duration: 0.1, staggerChildren: stagger },
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

export default function FloatingCards({ cards, stagger = 0.2 }: FloatingCardsProps) {
  const firstCard = cards[0]

  if (firstCard) {
    preload(firstCard.img, {
      as: 'image',
      fetchPriority: 'high',
    })
  }

  return (
    <motion.div
      className="relative h-64 w-64"
      variants={AppearVariants(stagger)}
      initial="hidden"
      animate="visible"
      exit="exit">
      {cards.map((card, index) => (
        <Card
          key={card.img}
          img={card.img}
          alt={card.alt}
          index={index}
          height={card.height}
          width={card.width}
          priority={index === 0}
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
  priority,
}: {
  img: string
  alt: string
  width: number
  height: number
  index: number
  priority?: boolean
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
      className="absolute overflow-hidden border border-neutral-200 shadow-xl shadow-stone-950/25 outline-[0.5px] outline-black/40">
      <img
        src={img}
        alt={alt}
        width={width}
        height={height}
        fetchPriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </motion.div>
  )
}
