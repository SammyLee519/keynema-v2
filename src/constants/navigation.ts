export const NAV_ITEMS = [
  {
    label: "KEYNEMA's Pick",
    path: '/pick',
    subItems: [
      { label: '오늘의 추천 영화', path: '/pick/today' },
      { label: '오늘의  랭킹', path: '/pick/ranking' },
      { label: "오늘의 KEYNE's 베스트컬렉션", path: '/pick/best' },
    ],
  },
  {
    label: '커뮤니티',
    path: '/community',
    subItems: [
      { label: 'KEYNEMA 라운지', path: '/community/lounge' },
      { label: 'KEYNEMA 리뷰', path: '/community/review' },
      { label: '요즘 뜨는 콘텐츠', path: '/community/trending' },
    ],
  },
  {
    label: '나의 KEYNEMA',
    path: '/my',
    subItems: [
      { label: '내 라운지', path: '/my/lounge' },
      { label: '마이페이지', path: '/my/page' },
    ],
  },
]
