import { ArrowRight } from 'lucide-react'
import LogoWithHover from './logo-with-hover'
import { GitHub } from './logos/github'
import { Instagram } from './logos/instagram'
import { Twitch } from './logos/twitch'
import { Twitter } from './logos/twitter'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

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

export default function Navbar() {
  return (
    <div className="fixed z-50 top-0 w-full p-4">
      <header className="relative bg-brand text-background p-3 rounded-2xl">
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
    </div>
  )
}
