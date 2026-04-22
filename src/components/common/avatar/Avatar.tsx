import { UserCircle2Icon } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/utils/cn'

type AvatarProps = {
  src?: string
  alt?: string
  className?: string
}

export function Avatar({ src, alt = '프로필이미지', className }: AvatarProps) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <UserCircle2Icon
        strokeWidth={1}
        className={cn('h-9 w-9 text-gray-400', className)}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={cn('h-8 w-8 rounded-full object-cover', className)}
    />
  )
}
