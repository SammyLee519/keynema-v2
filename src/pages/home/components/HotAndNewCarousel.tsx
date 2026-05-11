import { useNavigate } from 'react-router-dom'

import filmStrip from '@/assets/subtract.png'
import { CarouselNavButton, SectionTitle, Spinner } from '@/components'
import { PAGE_PADDING_X, ROUTE_PATH, ROUTES } from '@/constants'
import { useCarousel } from '@/hooks'
import { usePopularList } from '@/hooks/useMovieList'
import { getStatusBadge } from '@/utils/badge'

import { HOME_SECTION_TITLES } from '../constants/title'
import HotAndNewCard from './HotAndNewCard'

export default function HotAndNewCarousel() {
  const { data, error, isLoading } = usePopularList()
  const popularMovies = data?.results ?? []

  const navigate = useNavigate()
  const { emblaRef, canScrollPrev, canScrollNext, goToPrev, goToNext } =
    useCarousel({
      options: { loop: false },
    })

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }
  if (error) {
    ;<div>에러가 발생했습니다.</div>
  }

  return (
    <>
      <SectionTitle
        title={HOME_SECTION_TITLES.HOT_AND_NEW}
        onMoreClick={() => navigate(ROUTES.HOME)}
        className="mt-25 px-25"
      />

      <section className="relative mt-3 py-8">
        <img
          src={filmStrip}
          alt="필름배경"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain opacity-40"
        />

        <div className="relative z-10 mt-1">
          <div
            className="overflow-hidden"
            ref={emblaRef}
            style={{ paddingLeft: PAGE_PADDING_X }}
          >
            <div className="flex gap-5">
              {popularMovies.map((movie) => (
                <HotAndNewCard
                  key={movie.id}
                  backdropPath={movie.backdrop_path}
                  title={movie.title}
                  badge={getStatusBadge(movie.release_date)}
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
        </div>
      </section>
    </>
  )
}
