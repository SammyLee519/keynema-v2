import type { Tab } from '@/components'

export const DETAIL_TABS: Tab<DetailTabValue>[] = [
  { value: 'info', label: '기본정보' },
  { value: 'rating', label: '평점' },
  { value: 'ott', label: 'OTT정보' },
  { value: 'spoiler', label: '스포일러' },
]

export const DETAIL_TAB_VALUES = {
  INFO: 'info',
  RATING: 'rating',
  OTT: 'ott',
  SPOILER: 'spoiler',
} as const

export type DetailTabValue =
  (typeof DETAIL_TAB_VALUES)[keyof typeof DETAIL_TAB_VALUES]
