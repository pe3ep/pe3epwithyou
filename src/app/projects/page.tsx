import { ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Projects that I've worked on",
}

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
        <h1 className="mb-4 scroll-m-20 text-brand text-5xl font-fancy tracking-tight text-balance">
          Projects
        </h1>
        <div className="px-0.5">
          <p className="leading-5">
            This is a list of project's that I've worked on over the past years.
            This page may include projects that are still being worked on
          </p>
        </div>
      </div>
    </div>
  )
}
