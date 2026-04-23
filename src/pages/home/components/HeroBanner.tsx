import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/constants'
import { useCarousel } from '@/hooks'
import { MOCK_MOVIES } from '@/mocks/movie'
import { cn } from '@/utils/cn'

// TODO: API 연결 예정

export default function HeroBanner() {
  const navigate = useNavigate()
  const { emblaRef, selectedIndex, goToPrev, goToNext, scrollTo } = useCarousel(
    {
      options: {
        loop: false,
        align: 'center',
        duration: 25,
        containScroll: false,
      },
      plugins: [
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ],
    }
  )

  return (
    <section className="relative top-5 w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2">
          {MOCK_MOVIES.map((movie, index) => {
            const isActive = selectedIndex === index

            const cardStyle = isActive
              ? 'scale-100 blur-none opacity-100'
              : 'scale-90 opacity-50'

            return (
              <div
                key={movie.id}
                onClick={() => navigate(ROUTES.MOVIE_DETAIL)}
                className={cn(
                  'relative aspect-16/7 w-[1254px] shrink-0 overflow-hidden rounded-4xl transition-all',
                  cardStyle
                )}
              >
                <img
                  src={movie.backdrop_path}
                  alt={movie.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/64 to-transparent" />

                {isActive && (
                  <div className="absolute bottom-10 left-10">
                    <h2 className="mb-1 text-5xl font-bold text-white md:mb-3">
                      {movie.title}
                    </h2>
                    <h3 className="max-w-[55%] text-base text-white italic">
                      {movie.overview}
                    </h3>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      {/* 이전/다음 버튼 */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-5 -translate-y-1/2 text-white hover:text-primary"
      >
        <ChevronLeftIcon size={100} strokeWidth={1} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-5 -translate-y-1/2 text-white hover:text-primary"
      >
        <ChevronRightIcon size={100} strokeWidth={1} />
      </button>

      {/* 닷 인디케이터 */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {MOCK_MOVIES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              'rounded-full transition-all duration-300',
              selectedIndex === index
                ? 'h-2 w-4 bg-primary'
                : 'h-2 w-2 bg-gray-400'
            )}
          />
        ))}
      </div>
    </section>
  )
}
