'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const SLIDES = [
  { src: '/images/steamcleaning.jpg', alt: 'Steam cleaning in progress', caption: 'Carpet steam cleaning' },
  { src: '/images/mattress.jpg', alt: 'Mattress steam cleaning in progress',                    caption: 'Mattress sanitising' },
  { src: '/images/tile.jpg',    alt: 'Hot water extraction in action',                       caption: 'Tile & grout restoration' },
  { src: '/images/upholstery.jpg',   alt: 'Deep clean results on upholstery fibres',                  caption: 'Upholstery steam cleaning' },
  { src: '/images/couch.jpg',   alt: 'Fresh clean couch after treatment',                   caption: 'Couch Steam cleaning' },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(i => (i + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent(i => (i - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const slide = SLIDES[current]

  return (
    <div className="hero-media">
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        style={{ objectFit: 'cover' }}
        priority={current === 0}
      />
      <span className="hero-caption">{slide.caption}</span>
      <button className="hero-prev" type="button" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="hero-next" type="button" onClick={next} aria-label="Next slide">›</button>
      <div className="hero-dots" role="tablist" aria-label="Service slides">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' is-active' : ''}`}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}
