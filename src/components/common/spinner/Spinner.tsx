import { cn } from '@/utils/cn'

export function Spinner({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent',
        className
      )}
    />
  )
}
