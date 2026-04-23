import HeroBanner from './components/HeroBanner'
import HotAndNewCarousel from './components/HotAndNewCarousel'

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroBanner />

      <HotAndNewCarousel />
    </main>
  )
}
