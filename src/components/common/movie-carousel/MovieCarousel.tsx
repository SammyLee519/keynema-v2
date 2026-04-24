import { useNavigate } from 'react-router-dom'

import { PAGE_PADDING_X, ROUTES } from '@/constants'
import { useCarousel } from '@/hooks'
import { getStatusBadge } from '@/utils/badge'

import { CarouselNavButton } from '../carousel-nav/CarouselNav'
import { MovieCard } from '../movie-card/MovieCard'
import { SectionTitle } from '../section-title/SectionTitle'

type Movie = {
  id: number
  title: string
  poster_path: string
  release_date: string
}

type MovieCarouselProps = {
  title: string
  movies: Movie[]
  showBadge?: boolean
}

export function MovieCarousel({
  title,
  movies,
  showBadge = false,
}: MovieCarouselProps) {
  const navigate = useNavigate()
  const { emblaRef, canScrollPrev, canScrollNext, goToPrev, goToNext } =
    useCarousel({
      options: { loop: false },
    })

  return (
    <section>
      <div className="mt-10 px-25">
        <SectionTitle title={title} onMoreClick={() => navigate(ROUTES.HOME)} />
      </div>

      <div className="relative mt-2">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          style={{ paddingLeft: PAGE_PADDING_X }}
        >
          <div className="flex gap-5">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                badge={
                  showBadge ? getStatusBadge(movie.release_date) : undefined
                }
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
