import { useNavigate } from 'react-router-dom'

import filmStrip from '@/assets/subtract.png'
import { CarouselNavButton, SectionTitle } from '@/components'
import { ROUTES } from '@/constants'
import { useCarousel } from '@/hooks'
import { MOCK_MOVIES } from '@/mocks/movie'
import { getStatusBadge } from '@/utils/badge'

import { HOME_SECTION_TITLES } from '../constants'
import HotAndNewCard from './HotAndNewCard'

export default function HotAndNewCarousel() {
  const navigate = useNavigate()
  const { emblaRef, canScrollPrev, canScrollNext, goToPrev, goToNext } =
    useCarousel({
      options: { loop: false },
    })

  return (
    <>
      <SectionTitle
        title={HOME_SECTION_TITLES.HOT_AND_NEW}
        onMoreClick={() => navigate(ROUTES.HOME)}
        className="mt-25 px-25"
      />

      <section className="relative py-8">
        <img
          src={filmStrip}
          alt="필름배경"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="relative left-25 z-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {MOCK_MOVIES.map((movie) => (
                <HotAndNewCard
                  key={movie.id}
                  backdropPath={movie.backdrop_path}
                  title={movie.title}
                  badge={getStatusBadge(movie.release_date)}
                />
              ))}
            </div>
          </div>

          {canScrollPrev && (
            <CarouselNavButton
              onClick={goToPrev}
              direction="prev"
              disabled={!canScrollPrev}
              className="absolute top-1/2 left-0 z-20 -translate-y-1/2"
            />
          )}
          {canScrollNext && (
            <CarouselNavButton
              onClick={goToNext}
              direction="next"
              disabled={!canScrollNext}
              className="absolute top-1/2 right-40 z-20 -translate-y-1/2"
            />
          )}
        </div>
      </section>
    </>
  )
}
