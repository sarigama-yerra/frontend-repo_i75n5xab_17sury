import { useState } from 'react'
import { Film, MapPin, Menu, Search, User } from 'lucide-react'

export default function Navbar() {
  const [query, setQuery] = useState('')

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-primary">
              <Film className="h-6 w-6 text-rose-600" />
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-gray-900">Show</span>
                <span className="text-rose-600">Mate</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 ml-6 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Mumbai</span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies, events, plays and more"
                className="w-full rounded-full bg-gray-100/80 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white shadow-inner"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-rose-700 transition">
              <User className="h-4 w-4" /> Sign in
            </button>
            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies, events and more"
              className="w-full rounded-full bg-gray-100 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
