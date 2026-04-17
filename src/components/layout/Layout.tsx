import { Outlet } from 'react-router-dom'

import { HEADER_HEIGHT } from '@/constants'

import Footer from './Footer'
import Header from './header'

export default function Layout() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: HEADER_HEIGHT }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
