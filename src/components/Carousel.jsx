import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ title }) {
  const ref = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const update = () => {
    const el = ref.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
  }

  useEffect(() => {
    update()
    const el = ref.current
    if (!el) return
    const onScroll = () => update()
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => ref.current?.scrollBy({ left: -320, behavior: 'smooth' })}
            disabled={!canScrollLeft}
            className="p-2 rounded-full border border-gray-200 bg-white shadow disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => ref.current?.scrollBy({ left: 320, behavior: 'smooth' })}
            disabled={!canScrollRight}
            className="p-2 rounded-full border border-gray-200 bg-white shadow disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div ref={ref} className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="min-w-[200px] snap-start">
            <div className="aspect-[2/3] rounded-xl bg-gray-200 shadow-inner overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500/${samplePosters[i % samplePosters.length]}`}
                alt="poster"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div className="mt-2">
              <p className="text-sm font-semibold">Sample Movie {i + 1}</p>
              <p className="text-xs text-gray-500">Action/Drama • 2h 12m</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const samplePosters = [
  'kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
  'rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
  '9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
  'qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  '6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
  'azIbQpeKKNF9r85lBSRrNnMK0Si.jpg'
]
