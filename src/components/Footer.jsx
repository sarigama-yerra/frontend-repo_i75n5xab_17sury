import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200/70 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-extrabold"><span className="text-gray-900">Show</span><span className="text-rose-600">Mate</span></h4>
            <p className="mt-2 text-sm text-gray-600">Your companion for all things entertainment. Movies, events, and experiences at your fingertips.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800">Explore</p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>Movies</li>
                <li>Events</li>
                <li>Plays</li>
                <li>Sports</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Support</p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>Help & FAQ</li>
                <li>Contact</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Follow us</p>
            <div className="mt-3 flex gap-3">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><Instagram className="h-4 w-4" /></button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><Facebook className="h-4 w-4" /></button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><Twitter className="h-4 w-4" /></button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><Youtube className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} ShowMate. All rights reserved.</p>
      </div>
    </footer>
  )
}
