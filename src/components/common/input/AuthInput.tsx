import { Eye, EyeOff } from 'lucide-react'
import { type InputHTMLAttributes, useState } from 'react'

import { cn } from '@/utils/cn'

type AuthInputProps = {
  showPasswordToggle?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export function AuthInput({
  showPasswordToggle = false,
  className,
  type,
  ...props
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const InputType =
    showPasswordToggle && type === 'password'
      ? showPassword
        ? 'text'
        : 'password'
      : type

  return (
    <div className="relative">
      <input
        {...props}
        type={InputType}
        className={cn(
          'w-full rounded-md border border-white/20',
          'bg-white/10 px-3 py-3',
          'text-base text-white outline-none',
          'transition-all duration-300',
          'placeholder:text-white/40',
          'focus:border-primary',
          'focus:bg-white/15',
          showPasswordToggle && type === 'password' && 'pr-12',
          className
        )}
      />

      {showPasswordToggle && type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-white/50 hover:text-white"
          aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  )
}
