import { ProjectData } from '@/app/projects/page'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function ProjectComponent({
  project,
}: {
  project: ProjectData
}) {
  return (
    <a
      href={project.url}
      className="transition-colors group hover:transition-none relative flex gap-2 bg-background-muted/60 hover:bg-background-muted p-2 rounded-[16px] overflow-hidden">
      <div className="relative z-1 size-18 shrink-0">
        <img
          src={project.logoURL}
          alt={`${project.name} Logo`}
          className="relative size-18 aspect-square rounded-[8px]"
        />
      </div>
      <div className="relative z-2 flex flex-col justify-center h-18">
        <h3 className="transition-colors scroll-m-20 text-brand group-hover:text-primary text-2xl font-semibold font-sans-heading tracking-tight">
          {project.name}
        </h3>
        <p className="transition-colors ml-0.5 leading-4 text-brand/70 group-hover:text-primary/80">
          {project.description}
        </p>
      </div>
      <div className="absolute top-2 right-2">
        <div className="transition-colors p-0.5 group-hover:bg-brand/10 rounded-sm">
          <ArrowUpRight className="h-5 w-5 text-brand" />
        </div>
      </div>
    </a>
  )
}
