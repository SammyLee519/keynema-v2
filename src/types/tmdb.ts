export type TMDBMovieList = {
  date: {
    maximum: string
    minimum: string
  }
  page: number
  results: TMDBMovieListResponse[]
  total_pages: number
  total_results: number
}

export type TMDBMovieListResponse = {
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
}

export type TMDBMovieDetail = {
  id: number
  backdrop_path: string
  overview: string
  poster_path: string
  release_date: string
  runtime: number
  tagline: string
  title: string
  status?: string
  video?: boolean
  vote_average: number
  genres: Genre[]
  production_countries: ProductionCountry[]
}

export type ProductionCountry = {
  name: string
}

export type Genre = {
  id: number
  name: string
}

export type ProductionCompany = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type Cast = {
  id: number
  name: string
  profile_path: string
  character: string
  order: number
}

export type Crew = {
  id: number
  name: string
  department: string
  job: string
}

export type TMDBMovieCredits = {
  cast: Cast[]
  crew: Crew[]
}

// OTT
export type TMDBWatchProvider = {
  provider_id: number
  provider_name: string
  logo_path: string
}

export type TMDBWatchProviders = {
  id: number
  results: {
    KR?: {
      link: string
      flatrate?: TMDBWatchProvider[]
      buy?: TMDBWatchProvider[]
      rent?: TMDBWatchProvider[]
    }
  }
}

// Image
export type TMDBImagesItem = {
  aspect_ratio: number
  file_path: string
  width: number
  height: number
}

export type TMDBImages = {
  backdrops: TMDBImagesItem[]
  posters: TMDBImagesItem[]
  logos: TMDBImagesItem[]
}
