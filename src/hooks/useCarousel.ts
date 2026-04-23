import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

type useCarouselProps = {
  options?: EmblaOptionsType
  plugins?: EmblaPluginType[]
}

export function useCarousel({ options, plugins }: useCarouselProps = {}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const goToPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const goToNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    const update = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    emblaApi.on('select', update)
    emblaApi.on('reInit', update)
    update()

    return () => {
      emblaApi.off('select', update)
      emblaApi.off('reInit', update)
    }
  }, [emblaApi])

  return {
    emblaRef,
    selectedIndex,
    canScrollPrev,
    canScrollNext,
    goToPrev,
    goToNext,
    scrollTo,
  }
}
