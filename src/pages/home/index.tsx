import { MovieCarousel } from '@/components/common/movie-carousel/MovieCarousel'
import { MOCK_MOVIES } from '@/mocks/movie'

import HeroBanner from './components/HeroBanner'
import HotAndNewCarousel from './components/HotAndNewCarousel'
import { HOME_SECTION_TITLES } from './constants/title'
export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroBanner />

      <HotAndNewCarousel />
      <MovieCarousel
        title={HOME_SECTION_TITLES.UPCOMING}
        movies={MOCK_MOVIES}
        showBadge
      />
      <MovieCarousel title={HOME_SECTION_TITLES.HORROR} movies={MOCK_MOVIES} />
      <MovieCarousel title={HOME_SECTION_TITLES.ROMANCE} movies={MOCK_MOVIES} />
      <MovieCarousel title={HOME_SECTION_TITLES.ACTION} movies={MOCK_MOVIES} />
    </main>
  )
}
