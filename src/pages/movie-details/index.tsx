import { useState } from 'react'

import { TabMenu } from '@/components'
import { TMDB_IMAGE_SIZE } from '@/constants/tmdbImg'
import { MOCK_CREDITS, MOCK_DETAIL, MOCK_IMAGES } from '@/mocks/detail'
import { MOCK_OTT } from '@/mocks/ott'
import { MOCK_SPOILER_SUMMARY } from '@/mocks/spoiler'
import { getStatusBadge } from '@/utils/badge'
import { getTMDBImageUrl } from '@/utils/getTMDBImageUrl'

import MovieInfo from './components/MovieInfo'
import MovieOTT from './components/MovieOTT'
import MovieRating from './components/MovieRating'
import MovieSpoiler from './components/MovieSpoiler'
import {
  DETAIL_TAB_VALUES,
  DETAIL_TABS,
  type DetailTabValue,
} from './constants'

export default function MovieDetailPage() {
  // TODO: API 연결 예정
  const detail = MOCK_DETAIL
  const credits = MOCK_CREDITS
  const providers = MOCK_OTT
  const images = MOCK_IMAGES
  const summary = MOCK_SPOILER_SUMMARY

  const {
    title,
    release_date,
    runtime,
    genres,
    production_countries,
    backdrop_path,
    vote_average,
    tagline,
  } = detail

  const [activeTab, setActiveTab] = useState<DetailTabValue>(
    DETAIL_TAB_VALUES.INFO
  )

  const genreNames = genres.map((g) => g.name).join(', ')
  const countryNames = production_countries.map((c) => c.name).join(', ')
  const spoilerBackdropPath = getTMDBImageUrl(
    images.backdrops.at(1)?.file_path ?? images.backdrops[0]?.file_path,
    TMDB_IMAGE_SIZE.BACKDROP
  )

  const renderTab = () => {
    switch (activeTab) {
      case DETAIL_TAB_VALUES.INFO:
        return <MovieInfo detail={detail} credits={credits} />
      case DETAIL_TAB_VALUES.RATING:
        return <MovieRating voteAverage={vote_average} />
      case DETAIL_TAB_VALUES.OTT:
        return <MovieOTT provider={providers} />
      case DETAIL_TAB_VALUES.SPOILER:
        return (
          <MovieSpoiler
            backdropPath={spoilerBackdropPath}
            title={title}
            tagline={tagline}
            overview={summary}
          />
        )
      default:
        return null
    }
  }

  const status = getStatusBadge(release_date)

  return (
    <div className="w-full text-white">
      {/* 배너 */}
      <div className="relative h-[717px] w-full overflow-hidden">
        <img
          src={getTMDBImageUrl(backdrop_path, TMDB_IMAGE_SIZE.BACKDROP)}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-36 left-55 flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h1 className="text-7xl font-bold">{title}</h1>
            <div className="font-medium text-lg">{status}</div>
          </div>

          <span className="text-2xl text-white/85">{release_date}</span>

          <div className="flex gap-6 text-2xl text-white/85">
            <span>{runtime}분</span>
            <span>{genreNames}</span>
            <span>{countryNames}</span>
          </div>
        </div>
      </div>

      {/* 탭 */}
      <div className="mt-25 pl-tab">
        <TabMenu<DetailTabValue>
          tabs={DETAIL_TABS}
          value={activeTab}
          onValueChange={setActiveTab}
        />
      </div>

      {/* 탭 컨텐츠 */}
      {renderTab()}
    </div>
  )
}
