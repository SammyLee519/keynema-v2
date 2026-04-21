import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { HEADER_HEIGHT } from '@/constants'

import Footer from './footer'
import Header from './header'
import SideMenu from './sidemenu'

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <Header onMenuToggle={() => setIsMenuOpen((prev) => !prev)} />
      <main style={{ paddingTop: HEADER_HEIGHT }}>
        <Outlet />
      </main>
      <Footer />
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  )
}
