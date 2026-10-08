import { CircleUserRoundIcon, MenuIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components'
import { ROUTES } from '@/constants'
import { useAuth } from '@/hooks/useAuth'

import { ProfileMenu } from './ProfileMenu'

type HeaderProps = {
  onMenuToggle: () => void
}

export default function HeaderUser({ onMenuToggle }: HeaderProps) {
  const { user } = useAuth()

  return (
    <div className="flex items-center gap-3">
      {user ? (
        <div className="group relative">
          <CircleUserRoundIcon size={26} className="cursor-pointer" />
          <div className="absolute top-full right-0 z-100 hidden pt-2 group-hover:block">
            <ProfileMenu />
          </div>
        </div>
      ) : (
        <Link
          to={ROUTES.LOGIN}
          className="font-medium text-base hover:text-primary"
        >
          로그인
        </Link>
      )}
      <Button variant="ghost" onClick={onMenuToggle}>
        <MenuIcon size={24} />
      </Button>
    </div>
  )
}
