/* eslint-disable react-refresh/only-export-components */
// src/router/index.tsx
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { PageLoader } from '@/components'
import Layout from '@/components/layout/Layout'
import { ROUTES } from '@/constants'

import { ProtectedRoute } from './ProtectedRoute'

const DevPage = lazy(() => import('@/pages/DevPage'))
const HomePage = lazy(() => import('@/pages/home'))
const AuthPage = lazy(() => import('@/pages/auth'))
const SearchPage = lazy(() => import('@/pages/SearchPage'))
const MovieDetailPage = lazy(() => import('@/pages/movie-details'))
const MyPage = lazy(() => import('@/pages/MyPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage.tsx'))

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
)

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      ...(import.meta.env.DEV
        ? [{ path: 'dev', element: withSuspense(DevPage) }]
        : []),
      { path: ROUTES.SEARCH, element: withSuspense(SearchPage) },
      { path: ROUTES.MOVIE_DETAIL, element: withSuspense(MovieDetailPage) },
      {
        path: ROUTES.MY_PAGE,
        element: <ProtectedRoute>{withSuspense(MyPage)}</ProtectedRoute>,
      },
    ],
  },
  {
    path: ROUTES.LOGIN,
    element: (
      <Suspense fallback={<PageLoader />}>
        <AuthPage mode="login" />
      </Suspense>
    ),
  },
  {
    path: ROUTES.SIGNUP,
    element: (
      <Suspense fallback={<PageLoader />}>
        <AuthPage mode="signup" />
      </Suspense>
    ),
  },
  { path: '*', element: withSuspense(NotFoundPage) },
])
