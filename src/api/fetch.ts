export const TMDB_BASE_URL = 'https://api.themoviedb.org/3'

export const fetchMovieData = async <T>(
  endpoint: string,
  extraParams = {}
): Promise<T> => {
  const params = new URLSearchParams({ language: 'ko-KR', ...extraParams })
  const url = `${TMDB_BASE_URL}${endpoint}?${params}`

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`)
  }
  const data: T = await response.json()

  return data
}
