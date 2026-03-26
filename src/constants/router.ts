export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  MOVIE_DETAIL: '/movie/:id',
  MY_PAGE: '/my',
  LOGIN: '/login',
}

// 동적경로
export const ROUTE_PATH = {
  movieDetail: (id: string) => `/movie/${id}`,
}
