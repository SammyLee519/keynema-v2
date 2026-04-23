export const getStatusBadge = (release: string) => {
  const today = new Date()
  const releaseDate = new Date(release)
  const diffDate = Math.ceil(
    (releaseDate.getTime() - today.getTime()) / (1000 * 60 * 24)
  )

  if (diffDate > 0) return `D-${diffDate}`
  if (diffDate > -90) return '상영중'

  return '재개봉'
}
