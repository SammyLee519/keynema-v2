import type { TMDBImages, TMDBMovieDetail } from '@/types/tmdb'

import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdbImg'

export const MOCK_DETAIL: TMDBMovieDetail = {
  id: 11,
  title: 'Star Wars',
  overview: 'Princess Leia is captured and held hostage...',
  poster_path: `${TMDB_IMAGE_BASE_URL}/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg`,
  backdrop_path: `${TMDB_IMAGE_BASE_URL}/w1280/2w4xG178RpB4MDAIfTkqAuSJzec.jpg`,
  release_date: '1977-05-25',
  runtime: 121,
  vote_average: 8.2,
  genres: [
    { id: 12, name: 'Adventure' },
    { id: 28, name: 'Action' },
    { id: 878, name: 'Science Fiction' },
  ],
  production_countries: [{ name: 'United States of America' }],
  tagline: 'A long time ago in a galaxy far, far away...',
}

export const MOCK_CREDITS = {
  cast: [
    {
      id: 819,
      name: 'Edward Norton',
      character: 'The Narrator',
      profile_path: '/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg',
      order: 0,
    },
    {
      id: 287,
      name: 'Brad Pitt',
      character: 'Tyler Durden',
      profile_path: '/huV2cdcolEUwJy37QvH914vup7d.jpg',
      order: 1,
    },
    {
      id: 1283,
      name: 'Helena Bonham Carter',
      character: 'Marla Singer',
      profile_path: '/DDeITcCpnBd0CkAIRPhggy9bt5.jpg',
      order: 2,
    },
    {
      id: 7470,
      name: 'Meat Loaf',
      character: 'Robert "Bob" Paulson',
      profile_path: '/7gKLR1u46OB8WJ6m06LemNBCMx6.jpg',
      order: 3,
    },
    {
      id: 7499,
      name: 'Jared Leto',
      character: 'Angel Face',
      profile_path: '/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg',
      order: 4,
    },
  ],
  crew: [
    {
      id: 7467,
      name: 'David Fincher',
      job: 'Director',
      department: 'Directing',
      profile_path: '/tpEczFclQZeKAiCeKZZ0adRvtfz.jpg',
    },
  ],
}

export const MOCK_IMAGES: TMDBImages = {
  backdrops: [
    {
      aspect_ratio: 1.778,
      height: 1080,
      file_path: '/yUiXA68FfQeA8cRBhd0Ao0jIRZt.jpg',
      width: 1920,
    },
    {
      aspect_ratio: 1.778,
      height: 1152,
      file_path: '/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg',
      width: 2048,
    },
    {
      aspect_ratio: 1.778,
      height: 1080,
      file_path: '/3H94YlnYWVLKQKEnfTBKvrCmHmt.jpg',
      width: 1920,
    },
    {
      aspect_ratio: 1.778,
      height: 1080,
      file_path: '/2w4xG178RpB4MDAIfTkqAuSJzec.jpg',
      width: 1920,
    },
  ],
  posters: [
    {
      aspect_ratio: 1.778,
      height: 1080,
      file_path: '/yUiXA68FfQeA8cRBhd0Ao0jIRZt.jpg',
      width: 1920,
    },
    {
      aspect_ratio: 1.778,
      height: 1152,
      file_path: '/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg',
      width: 2048,
    },
    {
      aspect_ratio: 1.778,
      height: 1080,
      file_path: '/3H94YlnYWVLKQKEnfTBKvrCmHmt.jpg',
      width: 1920,
    },
    {
      aspect_ratio: 1.778,
      height: 1080,
      file_path: '/2w4xG178RpB4MDAIfTkqAuSJzec.jpg',
      width: 1920,
    },
  ],
  logos: [
    {
      aspect_ratio: 1.778,
      height: 1080,
      file_path: '/yUiXA68FfQeA8cRBhd0Ao0jIRZt.jpg',
      width: 1920,
    },
    {
      aspect_ratio: 1.778,
      height: 1152,
      file_path: '/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg',
      width: 2048,
    },
    {
      aspect_ratio: 1.778,
      height: 1080,
      file_path: '/3H94YlnYWVLKQKEnfTBKvrCmHmt.jpg',
      width: 1920,
    },
    {
      aspect_ratio: 1.778,
      height: 1080,
      file_path: '/2w4xG178RpB4MDAIfTkqAuSJzec.jpg',
      width: 1920,
    },
  ],
}
