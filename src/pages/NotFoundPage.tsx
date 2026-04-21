import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components'
import { ROUTES } from '@/constants'

export default function NotFound() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (!query.trim()) return
    navigate(`/search?q=${query}`)
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="bg-gradient-overlay pointer-events-none absolute inset-0 opacity-20" />

      {/* 404 */}
      <h1 className="animate-fadeInUp mb-4 translate-y-4 font-extrabold text-banner text-primary opacity-0">
        404
      </h1>

      {/* 제목 */}
      <h2 className="animate-fadeInUp mb-3 translate-y-4 font-semibold text-title opacity-0 delay-100">
        존재하지 않는 영화입니다
      </h2>

      {/* 설명 */}
      <p className="animate-fadeInUp mb-10 translate-y-4 text-small text-text-secondary opacity-0 delay-200">
        찾으시는 페이지가 사라졌거나 존재하지 않습니다.
        <br />
        원하는 영화를 검색해보세요.
      </p>

      {/* 검색 */}
      <div className="animate-fadeInUp mb-6 flex w-full max-w-md translate-y-4 items-center gap-2 opacity-0 delay-300">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="영화 제목을 검색하세요"
          className="h-[var(--btn-height)] flex-1 rounded-md bg-bg-input px-4 text-small transition-all duration-200 outline-none focus:scale-[1.02] focus:bg-bg-input-focus"
        />
        <Button variant="primary" onClick={handleSearch}>
          검색
        </Button>
      </div>

      {/* 버튼 */}
      <div className="animate-fadeInUp flex translate-y-4 gap-3 opacity-0 delay-400">
        <Button onClick={() => navigate(ROUTES.HOME)} variant="primary">
          홈으로
        </Button>

        <Button onClick={() => navigate(-1)} variant="secondary">
          뒤로가기
        </Button>
      </div>

      <div className="pointer-events-none absolute bottom-0 h-40 w-full bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  )
}
