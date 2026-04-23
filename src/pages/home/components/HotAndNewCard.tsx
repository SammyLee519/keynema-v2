type HotAndNewCardProps = {
  backdropPath: string
  title: string
  badge: string
}

export default function HotAndNewCard({
  backdropPath,
  title,
  badge,
}: HotAndNewCardProps) {
  return (
    <div className="relative h-[325px] w-[560px] shrink-0 overflow-hidden rounded-lg">
      <img
        src={backdropPath}
        alt={title}
        className="h-full w-full object-cover"
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
