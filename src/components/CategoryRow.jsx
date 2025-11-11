import { Music, Theater, Clapperboard, Gamepad2 } from 'lucide-react'

const categories = [
  { icon: Clapperboard, label: 'Movies', color: 'from-rose-500 to-rose-600' },
  { icon: Music, label: 'Concerts', color: 'from-violet-500 to-fuchsia-600' },
  { icon: Theater, label: 'Plays', color: 'from-emerald-500 to-green-600' },
  { icon: Gamepad2, label: 'Activities', color: 'from-blue-500 to-sky-600' }
]

export default function CategoryRow() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((c) => (
          <button
            key={c.label}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.color} p-[1px] shadow`}
          >
            <div className="rounded-[1rem] bg-white/90 p-4 flex items-center gap-3">
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-inner`}
                aria-hidden>
                <c.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-gray-800">{c.label}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
