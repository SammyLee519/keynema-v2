import { StarIcon } from 'lucide-react'
import { useState } from 'react'

type StarRatingProps = {
  value?: number
  readOnly?: boolean
  size?: number
  onChange?: (rating: number) => void
}

export function StarRating({
  value = 0,
  readOnly = false,
  size = 32,
  onChange,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0)

  const calculateRating = (e: React.MouseEvent, starIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const hasRatingfromPointer = x < rect.width / 2

    return hasRatingfromPointer ? starIndex + 0.5 : starIndex + 1
  }

  const handleStarClick = (e: React.MouseEvent, starIndex: number) => {
    if (readOnly || !onChange) return
    onChange(calculateRating(e, starIndex))
  }

  const handleMove = (e: React.MouseEvent, starIndex: number) => {
    if (readOnly) return
    setHoverRating(calculateRating(e, starIndex))
  }

  const getStarValue = (starIndex: number) => {
    const isHovering = hoverRating !== 0
    const activeRating = isHovering ? hoverRating : value

    if (starIndex >= activeRating) return 0
    if (starIndex + 1 <= activeRating) return 1

    return activeRating - starIndex
  }

  const TOTAL_STARS = 5

  return (
    <div className="flex" onMouseLeave={() => setHoverRating(0)}>
      {Array.from({ length: TOTAL_STARS }, (_, i) => i).map((starIndex) => {
        const starValue = getStarValue(starIndex) // 0, 0.5, 1

        return (
          <div
            key={starIndex}
            className="relative cursor-pointer"
            onClick={(e) => handleStarClick(e, starIndex)}
            onMouseMove={(e) => handleMove(e, starIndex)}
          >
            {/* 빈 별 (배경) */}
            <StarIcon size={size} className="text-gray-600" strokeWidth={1} />
            {/* 채워진 별 (오버레이) */}
            <div
              className="absolute inset-0 overflow-hidden text-primary"
              style={{ width: `${starValue * 100}%` }}
            >
              <StarIcon size={size} className="fill-primary text-primary" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
