export const QUERY_KEYS = {
  movie: {
    all: ['movie'] as const,
    detail: (id: number) => ['movie', id, 'detail'] as const,
    credits: (id: number) => ['movie', id, 'credits'] as const,
    images: (id: number) => ['movie', id, 'images'] as const,
    watchProviders: (id: number) => ['movie', id, 'watchProviders'] as const,
    similar: (id: number) => ['movie', id, 'similar'] as const,
  },
  movieList: {
    popular: ['movieList', 'popular'] as const,
    topRated: ['movieList', 'topRated'] as const,
    nowPlaying: ['movieList', 'nowPlaying'] as const,
    upcoming: ['movieList', 'upcoming'] as const,
    genre: (genreId: number) => ['movieList', 'genre', genreId],
  },
}
