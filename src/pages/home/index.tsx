import { Spinner } from '@/components'
import { MovieCarousel } from '@/components/common/movie-carousel/MovieCarousel'
import { GENRE_IDS } from '@/constants/api'
import { useGenreMovieList, useUpcomingList } from '@/hooks/useMovieList'

import HeroBanner from './components/HeroBanner'
import HotAndNewCarousel from './components/HotAndNewCarousel'
import RankingCarousel from './components/RankingCarousel'
import { HOME_SECTION_TITLES } from './constants/title'
export default function HomePage() {
  const { data: horrorMovies } = useGenreMovieList(GENRE_IDS.HORROR)
  const { data: romanceMovies } = useGenreMovieList(GENRE_IDS.ROMANCE)
  const { data: actionMovies } = useGenreMovieList(GENRE_IDS.ACTION)

  const { data: upcoming, error, isLoading } = useUpcomingList()

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }
  if (error) {
    return <div>에러가 발생했습니다.</div>
  }

  return (
    <main className="flex flex-col">
      <HeroBanner />

      <HotAndNewCarousel />
      <RankingCarousel />
      <MovieCarousel
        title={HOME_SECTION_TITLES.UPCOMING}
        movies={upcoming?.results ?? []}
        showBadge
      />
      <MovieCarousel
        title={HOME_SECTION_TITLES.HORROR}
        movies={horrorMovies?.results ?? []}
      />
      <MovieCarousel
        title={HOME_SECTION_TITLES.ROMANCE}
        movies={romanceMovies?.results ?? []}
      />
      <MovieCarousel
        title={HOME_SECTION_TITLES.ACTION}
        movies={actionMovies?.results ?? []}
      />
    </main>
  )
}
