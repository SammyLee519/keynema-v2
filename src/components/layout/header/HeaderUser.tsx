import { CircleUserRoundIcon } from 'lucide-react'

import { Button } from '@/components'

export default function HeaderUser() {
  // TODO: supabase Auth 셋팅 후 변경 예정
  const isLoggedIn = false

  return (
    <div>
      {isLoggedIn ? (
        <CircleUserRoundIcon size={24} />
      ) : (
        <Button variant="text" className="font-medium text-base">
          로그인
        </Button>
      )}
    </div>
  )
}
