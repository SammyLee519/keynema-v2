import { useQuery } from '@tanstack/react-query'

import {
  getMoviesByGenre,
  getNowPlayingMovieList,
  getPopularMovieList,
  getTopRagedMovieList,
  getUpcomingMovieList,
} from '@/api/movie-list'
import { QUERY_KEYS } from '@/constants/queryKey'

export const useUpcomingList = () =>
  useQuery({
    queryKey: QUERY_KEYS.movieList.upcoming,
    queryFn: getUpcomingMovieList,
  })

export const useNowPlayingList = () =>
  useQuery({
    queryKey: QUERY_KEYS.movieList.nowPlaying,
    queryFn: getNowPlayingMovieList,
  })

export const useTopRatedList = () =>
  useQuery({
    queryKey: QUERY_KEYS.movieList.topRated,
    queryFn: getTopRagedMovieList,
  })

export const usePopularList = () =>
  useQuery({
    queryKey: QUERY_KEYS.movieList.popular,
    queryFn: getPopularMovieList,
  })

export const useGenreMovieList = (genreId: number) =>
  useQuery({
    queryKey: QUERY_KEYS.movieList.genre(genreId),
    queryFn: () => getMoviesByGenre(genreId),
  })
