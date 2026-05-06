type OTTCardProps = {
  name: string
  logoPath: string
  price?: string
  href: string
}

export default function OTTCard({ name, logoPath, price, href }: OTTCardProps) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-20">
          <div>
            <img
              src={logoPath}
              alt={name}
              className="h-15 w-15 rounded-md object-contain"
            />
          </div>
          {price && <span className="text-xsmall text-white/70">{price}</span>}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-white/50 px-11 py-3 text-xsmall transition-colors hover:bg-white/10"
        >
          바로가기
        </a>
      </div>
    </div>
  )
}
