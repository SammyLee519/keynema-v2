import { cn } from '@/utils/cn'

type GlassContentBoxProps = {
  children: React.ReactNode
  className?: string
}

export function GlassContentBox({ children, className }: GlassContentBoxProps) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col gap-3 rounded-xl px-10 py-8',
        'border border-[rgba(108,117,133,0.5)] backdrop-blur-[10px] md:border-none',
        "before:absolute before:inset-0 before:content-['']",
        'before:-z-10 before:rounded-xl before:bg-[linear-gradient(-350deg,#ff1a66_0%,#353a42_32%)] before:opacity-30',
        className
      )}
    >
      {children}
    </div>
  )
}
