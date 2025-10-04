'use client'

import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from 'motion/react'

import { cn } from '@/lib/utils'

/**
 * A custom pointer component that displays an animated cursor.
 * Add this as a child to any component to enable a custom pointer when hovering.
 * You can pass custom children to render as the pointer.
 *
 * @component
 * @param {HTMLMotionProps<"div">} props - The component props
 */
export function Pointer({
  className,
  style,
  children,
  ...props
}: HTMLMotionProps<'div'>): React.ReactNode {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const offset = 16

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      // Get the parent element directly from the ref
      const parentElement = containerRef.current.parentElement

      if (parentElement) {
        // Add event listeners to parent
        const handleMouseMove = (e: MouseEvent) => {
          x.set(e.clientX + offset)
          y.set(e.clientY + offset)
        }

        const handleMouseEnter = (e: MouseEvent) => {
          x.set(e.clientX + offset)
          y.set(e.clientY + offset)
          setIsActive(true)
        }

        const handleMouseLeave = () => {
          setIsActive(false)
        }

        parentElement.addEventListener('mousemove', handleMouseMove)
        parentElement.addEventListener('mouseenter', handleMouseEnter)
        parentElement.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          parentElement.style.cursor = ''
          parentElement.removeEventListener('mousemove', handleMouseMove)
          parentElement.removeEventListener('mouseenter', handleMouseEnter)
          parentElement.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }
  }, [x, y])

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="pointer-events-none fixed z-50 transform-[translate(-50%,-50%)] origin-top-left"
            style={{
              top: y,
              left: x,
              ...style,
            }}
            initial={{
              scale: 1,
              opacity: 0,
              filter: 'blur(0px)',
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 0,
              },
            }}
            exit={{
              scale: 0.5,
              opacity: 0,
              transition: {
                ease: 'easeIn',
                duration: 0.3,
              },
              filter: 'blur(16px)',
            }}
            {...props}>
            {children || (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  'rotate-[-70deg] stroke-white text-black',
                  className
                )}>
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
