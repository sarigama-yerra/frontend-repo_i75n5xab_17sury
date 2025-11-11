import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryRow from './components/CategoryRow'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <CategoryRow />
        <Carousel title="Recommended Movies" />
        <Carousel title="Live Events Around You" />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-3xl bg-gradient-to-br from-rose-500 to-blue-600 p-[1px] shadow-lg">
            <div className="rounded-[1.4rem] bg-white/90 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Unlock premium experiences</h3>
                <p className="mt-2 text-gray-600 max-w-xl">Get early access to bookings, exclusive offers, and handpicked recommendations tailored to your vibe.</p>
              </div>
              <button className="rounded-full bg-rose-600 text-white px-6 py-3 font-semibold shadow hover:bg-rose-700 transition">Join ShowMate+</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
