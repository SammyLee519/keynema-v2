import { TMDB_IMAGE_BASE_URL, TMDB_IMAGE_SIZE } from '@/constants/tmdbImg'

type ImageSize = (typeof TMDB_IMAGE_SIZE)[keyof typeof TMDB_IMAGE_SIZE]

export const getTMDBImageUrl = (
  path: string | null | undefined,
  size: ImageSize = TMDB_IMAGE_SIZE.POSTER
): string => {
  if (!path) return '/placeholder.jpg'
  if (path.startsWith('http')) return path // ← mock 대응

  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`
}
