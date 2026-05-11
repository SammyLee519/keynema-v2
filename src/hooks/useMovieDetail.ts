import { useQuery } from '@tanstack/react-query'

import {
  getMovieCredits,
  getMovieDetail,
  getMovieImages,
  getMovieWatchProviders,
  getSimilarMovies,
} from '@/api/movie'
import { QUERY_KEYS } from '@/constants/queryKey'

export const useMovieDetail = (movieId: number) =>
  useQuery({
    queryKey: QUERY_KEYS.movie.detail(movieId),
    queryFn: () => getMovieDetail(movieId),
    enabled: !!movieId,
  })

export const useMovieCredit = (movieId: number) =>
  useQuery({
    queryKey: QUERY_KEYS.movie.credits(movieId),
    queryFn: () => getMovieCredits(movieId),
    enabled: !!movieId,
  })

export const useMovieImages = (movieId: number) =>
  useQuery({
    queryKey: QUERY_KEYS.movie.images(movieId),
    queryFn: () => getMovieImages(movieId),
    enabled: !!movieId,
  })

export const useMovieWatchProviders = (movieId: number) =>
  useQuery({
    queryKey: QUERY_KEYS.movie.watchProviders(movieId),
    queryFn: () => getMovieWatchProviders(movieId),
    enabled: !!movieId,
  })

export const useMovieSimilar = (movieId: number) =>
  useQuery({
    queryKey: QUERY_KEYS.movie.similar(movieId),
    queryFn: () => getSimilarMovies(movieId),
    enabled: !!movieId,
  })
