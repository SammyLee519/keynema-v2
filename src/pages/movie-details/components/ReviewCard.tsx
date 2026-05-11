import type { MovieReviews } from '@/mocks/review'

import { StarRating } from '@/components'

type ReviewCardProps = {
  reviews: MovieReviews[]
}

export default function ReviewCard({ reviews }: ReviewCardProps) {
  if (reviews.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-12 text-white/50">
        <p>아직 작성된 리뷰가 없습니다.</p>
        <p className="text-sm">첫 번째 리뷰를 남겨보세요!</p>
      </div>
    )
  }

  return (
    <div>
      <h3 className="mb-4 font-semibold text-body text-white/70">
        실관람객 한줄평
      </h3>
      <div className="flex flex-col gap-3">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="flex gap-1">
              <span>{review.username}</span>
              <StarRating size={16} value={review.rating} readOnly />
            </div>
            <p className="text-xsmall">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
