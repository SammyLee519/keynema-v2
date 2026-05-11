import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Button, GlassContentBox } from '@/components'
import PageSection from '@/components/layout/PageSection'

type MovieSpoilerProps = {
  backdropPath: string
  title: string
  tagline: string
  overview: string
}

export default function MovieSpoiler({
  backdropPath,
  title,
  tagline,
  overview,
}: MovieSpoilerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleSpoiler = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <PageSection>
      <div className="h-125 w-full overflow-hidden">
        <img
          src={backdropPath}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      {tagline && (
        <blockquote className="py-10 text-3xl font-extralight italic">
          “{tagline}”
        </blockquote>
      )}
      <h3 className="py-5 text-banner font-bold">🎬 {title} 스포일러</h3>
      <div>
        <Button
          variant="text"
          onClick={handleToggleSpoiler}
          className="pb-5"
          aria-expanded={isOpen}
          aria-controls="movie-spoiler-content"
        >
          <ChevronDown
            size={14}
            aria-hidden
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
          <p className="text-xs">이 영화의 스포일러를 원하시면 눌러주세요.</p>
        </Button>
      </div>

      {isOpen && (
        <GlassContentBox>
          <div className="leading-relaxed text-white/80">
            {overview} {/* 나중에 fetchSpoilerSummary() 결과로 교체 */}
          </div>
        </GlassContentBox>
      )}
    </PageSection>
  )
}
