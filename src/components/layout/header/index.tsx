import { Link } from 'react-router-dom'

import logo from '@/assets/keynema.svg'
import { NAV_ITEMS, ROUTES } from '@/constants'

import HeaderUser from './HeaderUser'

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 flex h-18 items-center justify-between px-[100px]">
      <div className="flex gap-20">
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="keynema-logo" width={128} height={50} />
        </Link>
        <nav>
          <ul className="flex items-center justify-center gap-20 font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className="hover:text-primary">
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <HeaderUser />
    </header>
  )
}
