export const MOCK_EMOTIONS = [
  { emoji: '🤩', description: '최고예요', count: 42 },
  { emoji: '😢', description: '감동이에요', count: 28 },
  { emoji: '😂', description: '재밌어요', count: 15 },
  { emoji: '😱', description: '긴장돼요', count: 10 },
  { emoji: '😴', description: '지루해요', count: 5 },
]

export const MOCK_REVIEWS = [
  {
    id: 233,
    username: 'kadiu8****',
    rating: 5,
    comment:
      '로버트 패티슨의 1인 2역은 신의 한수다. 호불호는 갈릴 지언정 극장에서 봐야하는 작품이다.',
    created_at: '2025-04-01T10:00:00Z',
  },
  {
    id: 12,
    username: 'rbhgsd****',
    rating: 4,
    comment:
      '우리나라의 누군가가 계속 떠오르는 악역들. 또 한번 이 시대를 관통하는 봉감독만의 우화극.',
    created_at: '2025-04-02T12:00:00Z',
  },
  {
    id: 64,
    username: 'iokku****',
    rating: 5,
    comment:
      '생각치 못한 슬픔과 감동이 공존한 영화. 2시간이 너무 재미있게 지나갔다.',
    created_at: '2025-04-03T09:00:00Z',
  },
]

export type Emotions = (typeof MOCK_EMOTIONS)[number]
export type MovieReviews = (typeof MOCK_REVIEWS)[number]
