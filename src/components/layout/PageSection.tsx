import { cn } from '@/utils/cn'

export default function PageSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('mt-17 px-[225px]', className)}>{children}</div>
}
