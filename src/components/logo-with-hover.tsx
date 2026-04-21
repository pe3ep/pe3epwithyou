'use client'
import Link from 'next/link'
import FloatingCards from './floating-cards'
import { Pointer } from './ui/pointer'

export default function LogoWithHover() {
  return (
    <Link className="relative" href="/">
      <LogoComponent className="mt-0.5 h-9" />
      <Pointer>
        <FloatingCards
          stagger={0.26}
          cards={[
            {
              img: '/images/car.jpg',
              alt: 'delorian',
              width: 135,
              height: 101,
            },
            { img: '/images/sky.jpg', alt: 'sky', width: 135, height: 135 },
            {
              img: '/images/mountains.jpg',
              alt: 'mountains',
              width: 135,
              height: 135,
            },
          ]}
        />
      </Pointer>
    </Link>
  )
}

import * as React from 'react'

const LogoComponent = (props: React.ComponentProps<'svg'>) => (
  <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.56 60.82" {...props}>
    <g fill="currentColor" data-name="Layer 1">
      <path d="M26.11 20.35c-.95-.08-1.9-.16-2.85-.25v8.34c.95.15 1.9.3 2.85.43 3.39.47 5.09-.83 5.09-3.75s-1.7-4.5-5.09-4.76Z" />
      <path d="M47.15 7.04C42.43 2.61 36.27.36 28.85.33 22.39.29 16.09.23 10.15.15L0 0v48.7l5.54 2.76a85.18 85.18 0 0 0 15.01 5.79l12.7 3.57V49.11c5.08-.23 9.69-1.94 13.41-4.97 3.6-2.96 7.9-8.57 7.9-18.49s-4.03-15.44-7.41-18.6Zm-6.84 29.37c-2.83 2.32-6.68 3.24-11.52 2.46-1.85-.3-3.69-.66-5.54-1.07v9.84A74.954 74.954 0 0 1 10 42.52V10.15c6.26.09 12.53.15 18.79.18 4.85.02 8.69 1.35 11.52 4s4.25 6.46 4.25 11.31-1.42 8.44-4.25 10.76Z" />
    </g>
  </svg>
)
