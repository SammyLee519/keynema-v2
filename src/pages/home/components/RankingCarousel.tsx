import { useNavigate } from 'react-router-dom'

import { CarouselNavButton, SectionTitle, Spinner } from '@/components'
import { PAGE_PADDING_X, ROUTE_PATH, ROUTES } from '@/constants'
import { useCarousel } from '@/hooks'
import { useTopRatedList } from '@/hooks/useMovieList'

import { HOME_SECTION_TITLES } from '../constants/title'
import RankingCard from './RankingCard'

export default function RankingCarousel() {
  const { data, error, isLoading } = useTopRatedList()
  const topRatedMovies = data?.results ?? []

  const navigate = useNavigate()
  const { emblaRef, canScrollPrev, canScrollNext, goToPrev, goToNext } =
    useCarousel({ options: { loop: false } })

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
    <>
      <SectionTitle
        title={HOME_SECTION_TITLES.TOP_RANKING}
        onMoreClick={() => navigate(ROUTES.HOME)}
        className="mt-section px-25"
      />

      <section className="relative">
        <div className="overflow-hidden pl-layout" ref={emblaRef}>
          <div className="flex gap-7">
            {topRatedMovies.slice(0, 10).map((movie, index) => (
              <RankingCard
                key={movie.id}
                rank={index + 1}
                posterPath={movie.poster_path}
                title={movie.title}
                onClick={() => navigate(ROUTE_PATH.movieDetail(movie.id))}
              />
            ))}
          </div>
        </div>

        <CarouselNavButton
          onClick={goToPrev}
          direction="prev"
          disabled={!canScrollPrev}
          className="absolute top-1/2 z-20 -translate-y-1/2"
          style={{ left: PAGE_PADDING_X - 24 }}
        />
        <CarouselNavButton
          onClick={goToNext}
          direction="next"
          disabled={!canScrollNext}
          className="absolute top-1/2 right-5 z-20 -translate-y-1/2"
        />
      </section>
    </>
  )
}
