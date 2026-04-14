/* eslint-disable react-refresh/only-export-components */
// src/router/index.tsx
import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

import { PageLoader } from '@/components'
import { ROUTES } from '@/constants'

const DevPage = lazy(() => import('@/pages/DevPage'))
const HomePage = lazy(() => import('@/pages/HomePage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const SearchPage = lazy(() => import('@/pages/SearchPage'))
const MovieDetailPage = lazy(() => import('@/pages/MovieDetailPage'))
const MyPage = lazy(() => import('@/pages/MyPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
)

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Outlet />, // 나중에 Layout으로 교체
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: 'dev', element: withSuspense(DevPage) },
      { path: ROUTES.SEARCH, element: withSuspense(SearchPage) },
      { path: ROUTES.MOVIE_DETAIL, element: withSuspense(MovieDetailPage) },
      { path: ROUTES.MY_PAGE, element: withSuspense(MyPage) },
    ],
  },
  { path: ROUTES.LOGIN, element: withSuspense(LoginPage) },
  { path: '*', element: withSuspense(NotFoundPage) },
])
