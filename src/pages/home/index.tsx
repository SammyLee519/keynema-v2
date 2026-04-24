import HeroBanner from './components/HeroBanner'
import HotAndNewCarousel from './components/HotAndNewCarousel'
import UpcomingCarousel from './components/UpcommingCarousel'

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroBanner />

      <HotAndNewCarousel />
      <UpcomingCarousel />
    </main>
  )
}
