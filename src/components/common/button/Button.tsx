import { cva, type VariantProps } from 'class-variance-authority'

import { Spinner } from '@/components'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center transition-all duration-200 disabled-opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-text-primary rounded-md hover:bg-primary-hover active:scale-95 disabled:bg-gray-400 disabled:hover:bg-gray-400',
        secondary: 'bg-bg-input rounded-md hover:bg-bg-input-focus',
        outline:
          'border border-gray-400 text-gray-400 rounded-md hover:border-primary hover:text-primary disabled:border-gray-400 disabled:text-gray-400',
        pill: 'rounded-pill border border-border-subtle text-text-secondary hover:border-primary hover:text-text-primary data-[active=true]:bg-primary data-[active=true]:border-primary data-[active=true]:text-text-primary data-[active=true]:font-semibold disabled:border-gray-400 disabled:text-gray-400',
        text: 'text-text-secondary hover:text-primary gap-1 disabled:text-gray-400',
        ghost:
          'text-text-secondary hover:text-primary hover:scale-110 active:scale-95 disabled:text-gray-400',
      },
      size: {
        sm: 'text-xsmall px-3 py-0.5 rounded-sm',
        md: 'text-small px-4 py-1',
        lg: 'text-[24px] px-6 py-1',
      },
    },
    compoundVariants: [
      {
        variant: ['text', 'ghost'],
        size: ['sm', 'md', 'lg'],
        class: 'px-0 py-0',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean
  }

export function Button({
  variant,
  size,
  isLoading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
