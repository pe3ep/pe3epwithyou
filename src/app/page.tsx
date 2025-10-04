import HomepageText from '@/components/homepage-text'
import LogoWithHover from '@/components/logo-with-hover'
import { GitHub } from '@/components/logos/github'
import { Instagram } from '@/components/logos/instagram'
import { Twitch } from '@/components/logos/twitch'
import { Twitter } from '@/components/logos/twitter'
import { Button } from '@/components/ui/button'
import { Globe } from '@/components/ui/globe'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const links = [
    {
      url: 'https://github.com/pe3ep',
      name: 'Github',
      icon: <GitHub className="size-5" />,
    },
    {
      url: 'https://x.com/pe3epwithyou',
      name: 'Twitter',
      icon: <Twitter className="size-5" />,
    },
    {
      url: 'https://www.instagram.com/pe3epwithyou/',
      name: 'Instagram',
      icon: <Instagram className="size-5" />,
    },
    {
      url: 'https://twitch.tv/pe3epwithyou',
      name: 'Twitch',
      icon: <Twitch className="size-5" />,
    },
  ]

  return (
    <div className="p-4 h-screen relative overflow-hidden">
      <header className="relative z-30 bg-brand text-background p-3 rounded-2xl">
        <div className="relative w-full flex justify-between items-center">
          <LogoWithHover />
          <div className="flex items-center gap-1">
            {links.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button variant={'secondary'} size={'icon-lg'} asChild>
                    <a href={item.url}>{item.icon}</a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-1 pr-2.5">
                  <p>{item.name}</p>
                  <ArrowRight className="h-3 w-3" />
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </header>
      <main className="relative z-20">
        <div className="w-full h-64 grid place-content-center gap-8">
          <div className="grid place-content-center">
            <h2 className="scroll-m-20 text-brand text-center text-3xl font-fancy italic tracking-tighter">
              Hi, my name is
            </h2>
            <h1 className="scroll-m-20 text-brand text-center text-6xl font-semibold font-sans-heading tracking-tight text-balance">
              Andrew
            </h1>
          </div>
          <div className="grid place-items-center max-w-xl gap-4">
            <HomepageText />
          </div>
        </div>
      </main>
      <footer className="absolute z-1 w-full bottom-0 translate-y-[50%] left-0 right-0 flex justify-center">
        <Globe />
      </footer>
    </div>
  )
}
