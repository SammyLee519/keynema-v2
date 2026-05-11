import type { TMDBMovieCredits, TMDBMovieDetail } from '@/types/tmdb'

import PageSection from '@/components/layout/PageSection'
import { getTMDBImageUrl } from '@/utils/getTMDBImageUrl'

type MovieInfoProps = {
  detail: TMDBMovieDetail
  credits?: TMDBMovieCredits
}

export default function MovieInfo({ detail, credits }: MovieInfoProps) {
  const { poster_path, title, production_countries, overview } = detail
  const crew = credits?.crew ?? []
  const cast = credits?.cast ?? []

  const directors =
    crew
      .filter((c) => c.job === 'Director')
      .map((c) => c.name)
      .join(', ') || '정보 없음'

  const castList =
    cast
      .slice(0, 5)
      .map((c) => c.name)
      .join(', ') || '정보 없음'
  const countries = production_countries.map((c) => c.name).join(', ')

  const infoItems = [
    { label: '감독', value: directors },
    { label: '출연', value: castList },
    { label: '국가', value: countries },
  ]

  return (
    <PageSection>
      <div className="flex w-full gap-10">
        {/* 포스터 */}
        <img
          src={getTMDBImageUrl(poster_path)}
          alt={title}
          loading="lazy"
          className="h-[496px] w-[337px] shrink-0 rounded-lg object-cover"
        />

        {/* 정보 */}
        <div className="flex flex-1 flex-col gap-3">
          {infoItems.map(({ label, value }) => (
            <div key={label} className="flex gap-3 text-xsmall">
              <span className="min-w-15 font-bold">{label}</span>
              <span className="flex-1 text-white/80">{value}</span>
            </div>
          ))}

          <hr className="my-5 border-white/30" />

          <p className="text-small leading-relaxed text-white/80">{overview}</p>
        </div>
      </div>
    </PageSection>
  )
}
