import { Link } from 'react-router-dom'

import { AuthInput, Button, GoogleIcon } from '@/components'
import { ROUTES } from '@/constants'
import { useLogin } from '@/hooks/useLogin'

export default function LoginForm() {
  const {
    email,
    password,
    error,
    loading,
    handleEmailChange,
    handlePasswordChange,
    handleLoginSubmit,
    handleSocialButton,
  } = useLogin()

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-bold text-white">로그인</h1>
      <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5">
        <AuthInput
          type="email"
          placeholder="이메일"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <AuthInput
          type="password"
          placeholder="비밀번호"
          showPasswordToggle
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button variant="primary" isLoading={loading} className="p-2">
          로그인
        </Button>
        {error && <p>{error}</p>}
        <div className="flex items-center gap-3 text-sm text-white/40">
          <div className="h-px flex-1 bg-white/20" />
          <span>또는</span>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        {/* Google 로그인 */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => handleSocialButton('google')}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            aria-label="Google 로그인"
          >
            <GoogleIcon />
          </button>
        </div>
      </form>

      <p className="mt-5 text-center text-sm text-white/60">
        아직 계정이 없으신가요?{' '}
        <Link
          to={ROUTES.SIGNUP}
          className="font-semibold text-primary no-underline hover:underline"
        >
          회원가입
        </Link>
      </p>
    </div>
  )
}
