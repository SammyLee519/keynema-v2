import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '@/constants/router'
import {
  HomePage,
  LoginPage,
  MovieDetailPage,
  MyPage,
  NotFoundPage,
  SearchPage,
} from '@/pages'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.SEARCH,
    element: <SearchPage />,
  },
  {
    path: ROUTES.MOVIE_DETAIL,
    element: <MovieDetailPage />,
  },
  {
    path: ROUTES.MY_PAGE,
    element: <MyPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
