'use client'

import { cn } from '@/lib/utils'
import { PlusIcon } from 'lucide-react'
import React from 'react'

export type ProjectData = {
  name: string
  description: string
  icon_small: string
  icon: string
  link: string
  screenshots?: {
    src: string
    caption: string
  }[]
}

interface ProjectGridProps {
  projects: ProjectData[]
  size: [number, number]
}

export default function ProjectGrid({ projects, size, ...props }: ProjectGridProps & React.ComponentProps<'div'>) {
  const totalCells = size[0] * size[1]
  return (
    <div className="flex w-full justify-center">
      <div
        className={`grid`}
        style={{
          gridTemplateColumns: `repeat(${size[0]},1.25rem)`,
          gridTemplateRows: `repeat(${size[1]},1.25rem)`,
        }}
        {...props}>
        {Array.from({ length: totalCells }, (_, index) => (
          <PlusIcon
            key={index}
            className={cn(
              'text-brand/60 hover:text-brand size-5 transition-colors duration-[2000ms] hover:duration-0',
              index % 2 == 0 ? 'text-brand/40' : '',
            )}
          />
        ))}
      </div>
    </div>
  )
}
