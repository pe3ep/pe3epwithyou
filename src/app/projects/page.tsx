'use client'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { ArchiveX, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import useSWR from 'swr'

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

export const projects: ProjectData[] = [
  {
    name: 'Trident',
    description:
      'A Minecraft mod made for MCC Island that shows multitude of useful information on-screen and has many QoL improvements',
    icon: '/images/trident.png',
    icon_small: '/images/trident.png',
    link: 'https://modrinth.com/project/trident-mcci/',
    screenshots: [
      {
        src: '/images/debug.jpg',
        caption: 'Debug image',
      },
    ],
  },
  {
    name: 'MCCI Hub',
    description:
      'A website made for MCC Island that allows players to view their stats, see the best players in the world, activity of their friends, and much more.',
    icon: '/images/trident.png',
    icon_small: '/images/trident.png',
    link: 'https://mccihub.net/',
    screenshots: [
      {
        src: '/images/debug.jpg',
        caption: 'Debug image',
      },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="p-4 pt-20 animate-in fade-in-0 duration-300">
      <div className="max-w-3xl mx-auto w-full py-4">
        <Link
          href="/"
          className="ml-1 text-brand/85 py-1 hover:text-brand font-medium inline-flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <h1 className="mb-4 mt-2 scroll-m-20 text-brand text-5xl font-semibold font-sans-heading tracking-tighter">
          Projects
        </h1>
        <div className="grid gap-4 px-0.5">
          <p className="leading-5">
            This is a list of project's that I've worked on over the past years.
            This page may include projects that are still being worked on
          </p>
          <EmptyProjects />
        </div>
      </div>
    </div>
  )
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const EmptyProjects = () => {
  const { data, error, isLoading } = useSWR(
    'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en',
    fetcher
  )
  return (
    <Empty className="border rounded-2xl border-dashed border-brand">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ArchiveX className="size-10 text-brand" />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyTitle className="text-brand text-xl">
        This page is being worked on
      </EmptyTitle>
      <EmptyDescription className="text-primary/85 leading-5">
        {isLoading ? (
          'Loading...'
        ) : (
          <span>Random fact: {data?.text ?? 'Useless fact'}</span>
        )}
      </EmptyDescription>
    </Empty>
  )
}
