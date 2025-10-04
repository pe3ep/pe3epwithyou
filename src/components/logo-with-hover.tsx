'use client'
import FloatingCards from './floating-cards'
import { Pointer } from './ui/pointer'

export default function LogoWithHover() {
  return (
    <div className="relative">
      <img src="/pe3epwithyou.svg" alt="pe3epwithyou" className="h-10" />
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
    </div>
  )
}
