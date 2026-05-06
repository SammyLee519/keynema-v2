import { useState } from 'react'

import { StarRating } from '@/components'

type SelectStarProps = {
  onClick: (value: number) => void
}

export default function SelectStar({ onClick }: SelectStarProps) {
  const [rating, setRating] = useState(0)

  const handleStarClick = (userRating: number) => {
    onClick(userRating)
    setRating(userRating)
  }

  return (
    <div className="flex flex-col items-center gap-3 py-20">
      <p className="text-body text-white/70">별점을 선택해주세요.</p>
      <StarRating size={44} value={rating} onChange={handleStarClick} />
    </div>
  )
}
