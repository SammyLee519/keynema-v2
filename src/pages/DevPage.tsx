import { useState } from 'react'

import posterPath from '@/assets/poster-1.png'
import profileImage from '@/assets/profile_image.png'
import {
  Avatar,
  Button,
  Input,
  MovieCard,
  StarRating,
  TabMenu,
} from '@/components'
import { showToast } from '@/utils/toast'

const TAB_ITEM = [
  { value: 'info', label: '기본정보' },
  { value: 'rating', label: '평점' },
  { value: 'ott', label: 'OTT정보' },
  { value: 'spoiler', label: '스포일러' },
]

const MOVIE_ITEM = [
  { title: '악마는 프라다를 입는다', posterPath: posterPath, rating: 4.7 },
]

export default function DevPage() {
  const [starValue, setStarValue] = useState(0)
  const [tab, setTab] = useState(TAB_ITEM[0].value)
  const [query, setQuery] = useState('')

  return (
    <div className="flex flex-col gap-8 p-10">
      <section className="flex flex-col gap-3">
        <h2>Button variants</h2>
        <div className="flex gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="text">더보기</Button>
          <Button variant="pill" data-active="true">
            액션
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Button sizes</h2>
        <div className="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Button states</h2>
        <div className="flex gap-3">
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>StarRating</h2>
        <div className="flex flex-col gap-3">
          {/* 인터랙티브 */}
          <StarRating
            value={starValue}
            readOnly={false}
            onChange={setStarValue}
          />

          {/* readOnly */}
          <StarRating value={3.5} readOnly onChange={setStarValue} />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Avatar</h2>
        <div className="flex items-center gap-3">
          <Avatar src={profileImage} />
          <Avatar />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>TabMenu</h2>
        <TabMenu tabs={TAB_ITEM} value={tab} onValueChange={setTab} />
      </section>

      <section className="flex flex-col gap-3">
        <h2>Input</h2>
        <div className="flex gap-5">
          <Input
            variant="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClear={() => setQuery('')}
            placeholder="제목, 영화, 장르"
          />
          <Input
            variant="underline"
            placeholder="이름을 입력하세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClear={() => setQuery('')}
          />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Toast</h2>
        <div className="flex gap-3">
          <Button onClick={() => showToast.success('성공!')}>Success</Button>
          <Button variant="outline" onClick={() => showToast.error('실패!')}>
            Error
          </Button>
          <Button variant="ghost" onClick={() => showToast.info('알림!')}>
            Info
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>MovieCard</h2>
        <div className="flex items-start gap-4">
          {MOVIE_ITEM.map((movie) => (
            <MovieCard
              key={movie.title}
              title={movie.title}
              posterPath={movie.posterPath}
              rating={movie.rating}
              className="h-[387px] w-[270px]"
            />
          ))}
        </div>
      </section>
    </div>
  )
}
