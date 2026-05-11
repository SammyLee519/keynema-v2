export const API_DETAIL_PATH = (movie_id: number) => ({
  DETAIL: `/movie/${movie_id}`,
  CREDITS: `/movie/${movie_id}/credits`,
  IMAGES: `/movie/${movie_id}/images`,
  WATCH_PROVIDERS: `/movie/${movie_id}/watch/providers`,
  SIMILARL: `/movie/${movie_id}/similar`,
})

export const API_LIST_PATH = {
  POPULAR: '/movie/popular',
  TOP_RATED: '/movie/top_rated',
  NOW_PLAYING: '/movie/now_playing',
  UPCOMING: '/movie/upcoming',
  DISCOVER: '/discover/movie',
}

export const GENRE_IDS = {
  ACTION: 28,
  HORROR: 27,
  ROMANCE: 10749,
  COMEDY: 35,
  DRAMA: 18,
  SF: 878,
  ANIMATION: 16,
} as const
