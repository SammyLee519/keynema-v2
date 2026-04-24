import fallback from '@/assets/fallback.png'

type HotAndNewCardProps = {
  backdropPath: string
  title: string
  badge: string
  onClick: () => void
}

export default function HotAndNewCard({
  backdropPath,
  title,
  badge,
  onClick,
}: HotAndNewCardProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = fallback
  }

  return (
    <div
      onClick={onClick}
      className="relative h-[280px] w-[458px] shrink-0 overflow-hidden rounded-lg"
    >
      <img
        src={backdropPath}
        alt={title}
        className="h-full w-full object-cover"
        onError={handleError}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute top-4 left-4 rounded bg-bg-base/80 px-2 py-1.5 font-medium text-xs text-white">
        {badge}
      </div>
      <div className="absolute bottom-6 left-6">
        <h3 className="font-semibold text-3xl leading-tight text-white">
          {title}
        </h3>
      </div>
    </div>
  )
}
