import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Projects that I've worked on",
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
