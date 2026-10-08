import { Link } from 'react-router-dom'

import { Button } from '@/components/common/button/Button'
import { ROUTES } from '@/constants'
import { useAuth } from '@/hooks/useAuth'

export function ProfileMenu() {
  const { signOut } = useAuth()

  const handleLogoutClick = async () => {
    await signOut()
  }

  return (
    <div className="w-60 overflow-hidden rounded-xl border border-white/30 bg-black/80 shadow-xl backdrop-blur-xl">
      {/* 프로필 */}
      <div className="hover:bg-primary-main flex items-center justify-between border-b border-white/30 px-4 py-4 transition-colors">
        <div className="flex items-center gap-3">
          {/* 프로필 이미지 */}
          <div className="h-9 w-9 rounded-full bg-white/40" />

          {/* 닉네임 */}
          <span className="text-sm text-white">닉네임</span>
        </div>

        <span className="text-lg text-white/70">›</span>
      </div>

      {/* 메뉴 */}
      <div className="p-2">
        <Link
          to={ROUTES.MY_PAGE}
          className="hover:bg-primary-main block rounded-md px-3 py-2 text-white/80 transition-colors hover:text-primary"
        >
          마이페이지
        </Link>

        <Button
          variant="text"
          onClick={handleLogoutClick}
          className="hover:bg-primary-main w-full justify-start rounded-md px-3 py-2 text-sm text-white"
        >
          로그아웃
        </Button>
      </div>
    </div>
  )
}
