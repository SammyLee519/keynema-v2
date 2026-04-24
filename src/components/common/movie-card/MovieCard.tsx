import { StarIcon } from 'lucide-react'

import fallback from '@/assets/fallback.png'
import { cn } from '@/utils/cn'

type MovieCardProps = {
  title: string
  posterPath: string
  rating?: number
  badge?: string
  onClick?: () => void
  className?: string
}

export function MovieCard({
  title,
  posterPath,
  rating,
  badge,
  onClick,
  className,
}: MovieCardProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = fallback
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        'group relative cursor-pointer overflow-hidden rounded-md',
        className
      )}
    >
      <img
        src={posterPath}
        alt={title}
        className="block h-full w-full object-cover"
        loading="lazy"
        onError={handleError}
      />

      {/* 호버 오버레이 */}
      <div className="absolute inset-0 flex items-end bg-black/50 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="line-clamp-2 font-semibold text-sm text-white">{title}</p>
      </div>

      {/* 상태뱃지 */}
      {badge && (
        <div className="absolute top-2 left-2 rounded bg-bg-base/80 px-2 py-1.5 font-medium text-xs text-white">
          {badge}
        </div>
      )}

      {/* 별점 뱃지 */}
      {rating !== undefined && (
        <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1">
          <StarIcon size={12} className="fill-primary text-primary" />
          <span className="font-semibold text-xs text-white">{rating}</span>
        </div>
      )}
    </div>
  )
}
