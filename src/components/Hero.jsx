import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,63,94,0.25),rgba(59,130,246,0.15))]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Discover movies, events and experiences near you
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-gray-600 text-lg"
            >
              ShowMate brings the best of entertainment to your city. Book tickets instantly and never miss out.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 flex items-center gap-3"
            >
              <button className="rounded-full bg-rose-600 text-white px-6 py-3 font-semibold shadow hover:bg-rose-700 transition">
                Explore Now
              </button>
              <button className="rounded-full bg-white text-gray-900 px-6 py-3 font-semibold shadow border border-gray-200 hover:bg-gray-50 transition">
                Upcoming Releases
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-rose-500 to-blue-500 p-1 shadow-lg">
              <div className="h-full w-full rounded-[1rem] bg-white/90 grid grid-cols-3 gap-2 p-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-gray-100 animate-pulse" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
              <p className="text-sm font-semibold">Trending This Week</p>
              <p className="text-xs text-gray-500">Movies · Events · Plays</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
