import { FALLBACK_IMAGE } from '@/constants/image'
import { TMDB_IMAGE_BASE_URL, TMDB_IMAGE_SIZE } from '@/constants/tmdbImg'

type ImageSize = (typeof TMDB_IMAGE_SIZE)[keyof typeof TMDB_IMAGE_SIZE]

export const getTMDBImageUrl = (
  path: string | null | undefined,
  size: ImageSize = TMDB_IMAGE_SIZE.POSTER
): string => {
  if (!path) return FALLBACK_IMAGE
  if (path.startsWith('http')) return path

  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`
}
