import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { cn } from '@/utils/cn'

type CarouselNavButtonProps = {
  onClick: () => void
  direction: 'prev' | 'next'
  className?: string
  disabled: boolean
  style?: React.CSSProperties
}

export function CarouselNavButton({
  onClick,
  direction,
  className,
  disabled,
  style,
}: CarouselNavButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded-full',
        'border border-white bg-white/20 transition-colors hover:bg-white/40',
        'disabled:cursor-not-allowed disabled:opacity-30',
        className
      )}
    >
      {direction === 'prev' ? (
        <ChevronLeftIcon size={32} strokeWidth={0.8} className="text-white" />
      ) : (
        <ChevronRightIcon size={32} strokeWidth={0.8} className="text-white" />
      )}
    </button>
  )
}
