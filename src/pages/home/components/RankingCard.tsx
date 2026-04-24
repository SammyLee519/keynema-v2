import { RANKING_OFFSET } from '../constants/rankingOffset'

type RankingCardProps = {
  rank: number
  posterPath: string
  title: string
  onClick?: () => void
}

export default function RankingCard({
  rank,
  posterPath,
  title,
  onClick,
}: RankingCardProps) {
  const offset = RANKING_OFFSET[rank] ?? -50

  return (
    <div
      onClick={onClick}
      className="relative h-[240px] w-[240px] shrink-0 cursor-pointer overflow-hidden"
    >
      {/* 숫자 */}
      <span
        className="absolute bottom-0 left-0 text-[240px] leading-none font-bold italic select-none"
        style={{
          WebkitTextStroke: '3px white',
          color: 'transparent',
        }}
      >
        {rank}
      </span>

      {/* 포스터 */}
      <img
        src={posterPath}
        alt={title}
        loading="lazy"
        className="absolute bottom-4 z-10 h-[200px] w-[140px] rounded-md object-cover shadow-lg"
        style={{ left: `calc(100% + ${offset}px)` }}
      />
    </div>
  )
}
