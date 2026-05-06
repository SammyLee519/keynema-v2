import { useNavigate } from 'react-router-dom'

import { Button, GlassContentBox, StarRating } from '@/components'
import PageSection from '@/components/layout/PageSection'
import { ROUTES } from '@/constants'
import { MOCK_EMOTIONS, MOCK_REVIEWS } from '@/mocks/review'
import { showToast } from '@/utils/toast'

import EmotionChart from './EmotionChart'
import ReviewCard from './ReviewCard'
import SelectStar from './SelectStar'

type MovieRatingProps = {
  voteAverage?: number | null
}

export default function MovieRating({ voteAverage }: MovieRatingProps) {
  const normalizedVoteAverage = voteAverage ?? 0
  const currentRating = normalizedVoteAverage.toFixed(1)
  const averageRating = voteAverage ? Math.round(voteAverage / 2) : 0
  const navigate = useNavigate()

  // TODO: Auth구현 후 변경 예정
  const isLoggedIn = false
  const renderStarSection = () => {
    if (!isLoggedIn) {
      return (
        <div className="flex justify-center py-20 text-white/70">
          <Button variant="text" onClick={() => navigate(ROUTES.LOGIN)}>
            로그인
          </Button>
          <p>하고 평점을 남겨보세요!</p>
        </div>
      )
    }

    return <SelectStar onClick={handleStarSubmit} />
  }

  // TODO: 평점 저장 로직 구현 예정
  const handleStarSubmit = (value: number) => {
    showToast.success('평점이 저장되었습니다.')
    console.log(value)
  }

  return (
    <PageSection>
      <div className="flex gap-5">
        <GlassContentBox>
          <h3 className="flex flex-col font-semibold text-body text-white/70">
            실관람객평점
          </h3>

          <div className="flex flex-col items-center gap-2 bg-gray-900 px-50 py-8">
            <p className="text-3xl font-bold">
              <span className="text-white">{currentRating}</span>
              <span className="text-body text-white/50"> /10</span>
            </p>
            <StarRating readOnly value={averageRating} />
          </div>
        </GlassContentBox>

        <EmotionChart emotion={MOCK_EMOTIONS} />
      </div>

      {renderStarSection()}

      <div>
        <ReviewCard reviews={MOCK_REVIEWS} />
      </div>
    </PageSection>
  )
}
