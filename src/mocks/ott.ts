import type { TMDBWatchProviders } from '@/types/tmdb'

export const MOCK_OTT: TMDBWatchProviders = {
  id: 11,
  results: {
    KR: {
      link: 'https://www.themoviedb.org/movie/550-fight-club/watch?locale=KR',
      flatrate: [
        {
          logo_path: '/emthp39XA2YScoYL1p0sdbAH2WA.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video',
        },
        {
          logo_path: '/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg',
          provider_id: 337,
          provider_name: 'Disney Plus',
        },
      ],
      buy: [
        {
          logo_path: '/2ioan5BX5L9tz4fIGU93blTeFhv.jpg',
          provider_id: 356,
          provider_name: 'wavve',
        },
        {
          logo_path: '/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg',
          provider_id: 3,
          provider_name: 'Google Play Movies',
        },
      ],
    },
  },
}
