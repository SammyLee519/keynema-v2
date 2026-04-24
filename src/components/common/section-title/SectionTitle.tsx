import { ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components'
import { cn } from '@/utils/cn'

type SectionTitleProps = {
  title: string
  onMoreClick?: () => void
  className?: string
}

export function SectionTitle({
  title,
  onMoreClick,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      {onMoreClick && (
        <div className="flex items-center gap-1">
          <Button variant="text" size="sm" onClick={onMoreClick}>
            더보기
          </Button>
          <ChevronRightIcon size={12} strokeWidth={1} />
        </div>
      )}
    </div>
  )
}
