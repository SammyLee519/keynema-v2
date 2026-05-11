import { API_DETAIL_PATH } from '@/constants/api'
import {
  type TMDBImages,
  type TMDBMovieCredits,
  type TMDBMovieDetail,
  type TMDBWatchProviders,
} from '@/types/tmdb'

import { fetchMovieData } from './fetch'

export const getMovieDetail = (movieId: number) =>
  fetchMovieData<TMDBMovieDetail>(API_DETAIL_PATH(movieId).DETAIL)

export const getMovieCredits = (movieId: number) =>
  fetchMovieData<TMDBMovieCredits>(API_DETAIL_PATH(movieId).CREDITS)

export const getMovieImages = (movieId: number) =>
  fetchMovieData<TMDBImages>(API_DETAIL_PATH(movieId).IMAGES)

export const getMovieWatchProviders = (movieId: number) =>
  fetchMovieData<TMDBWatchProviders>(API_DETAIL_PATH(movieId).WATCH_PROVIDERS)

export const getSimilarMovies = (movieId: number) =>
  fetchMovieData<TMDBWatchProviders>(API_DETAIL_PATH(movieId).SIMILARL)
