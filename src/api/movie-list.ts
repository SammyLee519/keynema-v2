import type { TMDBMovieList } from '@/types/tmdb'

import { API_LIST_PATH } from '@/constants/api'

import { fetchMovieData } from './fetch'

export const getUpcomingMovieList = () =>
  fetchMovieData<TMDBMovieList>(API_LIST_PATH.UPCOMING)

export const getNowPlayingMovieList = () =>
  fetchMovieData<TMDBMovieList>(API_LIST_PATH.NOW_PLAYING)

export const getTopRagedMovieList = () =>
  fetchMovieData<TMDBMovieList>(API_LIST_PATH.TOP_RATED)

export const getPopularMovieList = () =>
  fetchMovieData<TMDBMovieList>(API_LIST_PATH.POPULAR)

export const getMoviesByGenre = (genreId: number) =>
  fetchMovieData<TMDBMovieList>(API_LIST_PATH.DISCOVER, {
    with_genres: genreId,
  })
