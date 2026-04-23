import { useNavigate } from 'react-router-dom'

import { CarouselNavButton, MovieCard, SectionTitle } from '@/components'
import { PAGE_PADDING_X, ROUTES } from '@/constants'
import { useCarousel } from '@/hooks'
import { MOCK_MOVIES } from '@/mocks/movie'
import { getStatusBadge } from '@/utils/badge'

import { HOME_SECTION_TITLES } from '../constants'

export default function UpcomingCarousel() {
  const navigate = useNavigate()
  const { emblaRef, canScrollPrev, canScrollNext, goToPrev, goToNext } =
    useCarousel({
      options: { loop: false },
    })

  return (
    <section>
      <div className="mt-5 px-25">
        <SectionTitle
          title={HOME_SECTION_TITLES.UPCOMING}
          onMoreClick={() => navigate(ROUTES.HOME)}
        />
      </div>

      <div className="relative mt-5">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          style={{ paddingLeft: PAGE_PADDING_X }}
        >
          <div className="flex gap-5">
            {MOCK_MOVIES.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                badge={getStatusBadge(movie.release_date)}
                onClick={() => navigate(ROUTES.MOVIE_DETAIL)}
                className="h-[300px] w-[200px] shrink-0"
              />
            ))}
          </div>
        </div>

        <CarouselNavButton
          onClick={goToPrev}
          direction="prev"
          disabled={!canScrollPrev}
          className="absolute top-1/2 left-20 z-20 -translate-y-1/2"
        />
        <CarouselNavButton
          onClick={goToNext}
          direction="next"
          disabled={!canScrollNext}
          className="absolute top-1/2 right-5 z-20 -translate-y-1/2"
        />
      </div>
    </section>
  )
}
