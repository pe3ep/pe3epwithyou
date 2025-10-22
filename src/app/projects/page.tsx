'use client'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
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
    <div className="animate-in fade-in-0 p-4 pt-20 duration-300">
      <main className="mx-auto w-full max-w-3xl py-4">
        <Link href="/" className="text-brand/85 hover:text-brand ml-1 inline-flex items-center gap-1 py-1 font-medium">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <h1 className="text-brand font-sans-heading mt-2 mb-4 scroll-m-20 text-5xl font-semibold tracking-tighter">
          Projects
        </h1>
        <div className="grid gap-4 px-0.5">
          <p className="leading-5">
            This is a list of project's that I've worked on over the past years. This page may include projects that are
            still being worked on
          </p>
          <EmptyProjects />
        </div>
      </main>
    </div>
  )
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const EmptyProjects = () => {
  const { data, error, isLoading } = useSWR('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en', fetcher)
  return (
    <Empty className="border-brand rounded-2xl border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ArchiveX className="text-brand size-10" />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyTitle className="text-brand text-xl">This page is being worked on</EmptyTitle>
      <EmptyDescription className="text-primary/85 leading-5">
        {isLoading ? 'Loading...' : <span>Random fact: {data?.text ?? 'Useless fact'}</span>}
      </EmptyDescription>
    </Empty>
  )
}
