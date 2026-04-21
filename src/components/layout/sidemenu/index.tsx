import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import logo from '@/assets/keynema.svg'
import { Button } from '@/components/common/button/Button'
import { NAV_ITEMS, ROUTES } from '@/constants'
import { cn } from '@/utils/cn'

type SideMemuProps = {
  isOpen: boolean
  onClose: () => void
}

export default function SideMenu({ isOpen, onClose }: SideMemuProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (path: string) => {
    navigate(path)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        tabIndex={0}
        role="button"
        aria-label="메뉴닫기"
      />
      <div className="fixed top-0 right-0 left-0 z-50 bg-black/20 px-25 pt-6 pb-16 backdrop-blur-md">
        <Link to={ROUTES.HOME} onClick={onClose}>
          <img src={logo} alt="keynema-logo" width={128} height={50} />
        </Link>
        <Button
          variant="ghost"
          onClick={onClose}
          className="absolute top-5 right-25"
        >
          <X size={28} />
        </Button>

        <nav className="relative mt-40 flex gap-30">
          <div
            className="absolute right-0 left-0 mt-10 border-b border-white/40"
            style={{ top: 0 }}
          />
          {NAV_ITEMS.map((item) => (
            <div key={item.path} className="flex flex-col">
              <span
                className={cn(
                  'cursor-pointer border-b-2 border-transparent pb-1 text-3xl font-bold text-white transition-colors',
                  'z-50 hover:border-primary hover:text-primary'
                )}
              >
                {item.label}
              </span>
              <ul className="flex flex-col gap-1">
                {item.subItems?.map((sub) => (
                  <li key={sub.path}>
                    <Button
                      variant="text"
                      onClick={() => handleNavigate(sub.path)}
                      className={cn(
                        'px-2 py-3 text-left text-lg transition-colors hover:text-primary',
                        location.pathname === sub.path
                          ? 'font-semibold text-primary'
                          : 'text-white'
                      )}
                    >
                      {sub.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}
