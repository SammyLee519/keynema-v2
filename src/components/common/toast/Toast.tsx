import { cn } from '@/utils/cn'

type ToastProps = {
  message: string
  variant?: 'success' | 'error' | 'info'
}

export function Toast({ message, variant = 'success' }: ToastProps) {
  const iconMap = {
    success: '✓',
    error: '!',
    info: 'i',
  }
  const colorMap = {
    success: 'text-success border border-success-border bg-success-bg',
    error: 'text-error border border-error-border bg-error-bg',
    info: 'text-info border border-info-border bg-info-bg',
  }

  return (
    <div
      className={cn(
        'flex w-80 items-center gap-2 rounded-md px-4 py-2 shadow-card backdrop-blur-sm',
        'animate-fadeInup',
        colorMap[variant]
      )}
    >
      <span className="text-sm">{iconMap[variant]}</span>
      <p className="font-medium text-sm">{message}</p>
    </div>
  )
}
