import { CircleUserRoundIcon, MenuIcon } from 'lucide-react'

import { Button } from '@/components'

type HeaderProps = {
  onMenuToggle: () => void
}

export default function HeaderUser({ onMenuToggle }: HeaderProps) {
  // TODO: supabase Auth 셋팅 후 변경 예정
  const isLoggedIn = false

  return (
    <div className="flex items-center gap-3">
      {isLoggedIn ? (
        <CircleUserRoundIcon size={24} />
      ) : (
        <Button variant="text" className="font-medium text-base">
          로그인
        </Button>
      )}
      <Button variant="ghost" onClick={onMenuToggle}>
        <MenuIcon size={24} />
      </Button>
    </div>
  )
}
