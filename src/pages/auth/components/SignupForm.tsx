import { Link } from 'react-router-dom'

import { AuthInput, Button } from '@/components'
import { ROUTES } from '@/constants'
import { useSignup } from '@/hooks/useSignup'

export default function SignupForm() {
  const { form, handleChange, handleSignupSubmit } = useSignup()

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-bold text-white">
        회원가입
      </h1>
      <form onSubmit={handleSignupSubmit} className="flex flex-col gap-5">
        <AuthInput
          type="email"
          placeholder="이메일"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />
        <AuthInput
          type="password"
          placeholder="비밀번호"
          showPasswordToggle
          value={form.password}
          onChange={(e) => handleChange('password', e.target.value)}
          required
        />

        <AuthInput
          type="password"
          placeholder="비밀번호 확인"
          showPasswordToggle
          value={form.passwordConfirm}
          onChange={(e) => handleChange('passwordConfirm', e.target.value)}
          required
        />
        <Button variant="primary" type="submit" className="mb-8 p-2">
          회원가입
        </Button>
      </form>

      <p className="mt-5 text-center text-sm text-white/60">
        이미 계정이 있으신가요?{' '}
        <Link to={ROUTES.LOGIN} className="font-bold hover:text-primary">
          로그인
        </Link>
      </p>
    </div>
  )
}
