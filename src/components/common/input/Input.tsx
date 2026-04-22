import { Search, X } from 'lucide-react'
import { type InputHTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

type InputProps = {
  variant?: 'search' | 'underline'
  onClear?: () => void
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input({
  variant = 'search',
  onClear,
  className,
  ...props
}: InputProps) {
  const hasValue = Boolean(props.value)

  if (variant === 'underline') {
    return (
      <div className="relative flex items-center">
        <input
          type="text"
          className={cn(
            'w-full border-b border-white bg-transparent text-white outline-none',
            'text-sm placeholder:text-gray-400 md:text-xl',
            hasValue && 'pr-6',
            className
          )}
          {...props}
        />
        {hasValue && onClear && (
          <X
            size={16}
            className="absolute right-0 cursor-pointer text-primary"
            onClick={onClear}
          />
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex max-w-72 items-center gap-2 rounded-md border px-4 py-2 transition-colors',
        'border-border-subtle bg-transparent',
        'md:border-border-subtle md:bg-bg-input',
        'focus-within:border-white md:focus-within:bg-bg-input-focus',
        className
      )}
    >
      <input
        type="text"
        className="flex-1 bg-transparent text-xs text-white outline-none placeholder:text-text-placeholder md:text-base"
        {...props}
      />
      {hasValue && onClear && (
        <X
          size={16}
          className="shrink-0 cursor-pointer text-white"
          onClick={onClear}
        />
      )}
      <Search size={18} className="shrink-0 text-text-placeholder" />
    </div>
  )
}
