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
  url: string
  logoURL: string
}

export const projects: ProjectData[] = [
  {
    name: 'Trident',
    description:
      'A Minecraft mod made for MCC Island that shows multitude of useful information on-screen and has many QoL improvements',
    url: 'https://modrinth.com/mod/trident-mcci',
    logoURL: '/images/trident.png',
  },
  {
    name: 'Trident',
    description:
      'A Minecraft mod made for MCC Island that shows multitude of useful information on-screen and has many QoL improvements',
    url: 'https://modrinth.com/mod/trident-mcci',
    logoURL: '/images/car.jpg',
  },
  {
    name: 'Trident',
    description:
      'A Minecraft mod made for MCC Island that shows multitude of useful information on-screen and has many QoL improvements',
    url: 'https://modrinth.com/mod/trident-mcci',
    logoURL: '/images/biomebattle.png',
  },
  {
    name: 'Trident',
    description:
      'A Minecraft mod made for MCC Island that shows multitude of useful information on-screen and has many QoL improvements',
    url: 'https://modrinth.com/mod/trident-mcci',
    logoURL: '/images/mountains.jpg',
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
          <Projects />
        </div>
      </div>
    </div>
  )
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Projects = () => {
  const { data, error, isLoading } = useSWR(
    'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en',
    fetcher
  )
  return (
    // <div className="grid gap-2">
    //   {projects.map((project, index) => (
    //     <ProjectComponent key={index} project={project} />
    //   ))}
    // </div>
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
