import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { MOCK_MOVIES } from '@/mocks/movie'
import { cn } from '@/utils/cn'

// TODO: API 연결 예정

export default function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1, duration: 20 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const goToPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const goToNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap()

      setSelectedIndex(index)

      // 마지막 슬라이드면 첫 번째로
      if (index === MOCK_MOVIES.length - 1) {
        setTimeout(() => {
          emblaApi.scrollTo(0)
        }, 4000)
      }
    }

    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative top-16 w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {MOCK_MOVIES.map((movie, index) => {
            const isActive = selectedIndex === index

            const cardStyle = isActive
              ? 'scale-100 blur-none opacity-100'
              : 'scale-[0.82] blur-sm opacity-60 blur-sm'

            return (
              <div
                key={movie.id}
                className={cn(
                  'relative aspect-16/7 w-[1254px] shrink-0 overflow-hidden rounded-4xl transition-all duration-300',
                  cardStyle
                )}
              >
                <img
                  src={movie.backdropPath}
                  alt={movie.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/64 to-transparent" />

                {isActive && (
                  <div className="absolute bottom-10 left-10">
                    <h3 className="font-medium text-2xl text-white italic">
                      {movie.tagline}
                    </h3>
                    <h2 className="text-whilte text-[60px] font-bold">
                      {movie.title}
                    </h2>
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
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              'rounded-full transition-all duration-300',
              selectedIndex === index
                ? 'h-2 w-4 bg-primary'
                : 'h-2 w-2 bg-gray-400'
            )}
          />
        ))}
      </div>
    </div>
  )
}
