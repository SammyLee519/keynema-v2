import type { Provider } from '@supabase/supabase-js'

import { type ChangeEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ROUTES } from '@/constants'
import { supabase } from '@/lib/supabaseClient'
import { loginSchema } from '@/lib/validations/authSchema'
import { showToast } from '@/utils/toast'

export const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  const fromOrigin = location.state?.from || ROUTES.HOME

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = loginSchema.safeParse({ email, password })

    if (!result.success) {
      showToast.error(result.error.issues[0].message)
      setError(result.error.issues[0].message)

      return
    }

    setLoading(true)
    setError('')

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      navigate(fromOrigin, { replace: true })
    } catch {
      showToast.error('로그인에 실패했습니다.')
      setError('아이디 또는 비밀번호가 올바르지 않습니다.')
    } finally {
      setLoading(false)
    }
  }

  const handleSocialButton = async (provider: Provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}${fromOrigin}`,
        },
      })

      if (error) throw error
    } catch {
      setError('에러가 발생했습니다.')
    }
  }

  return {
    email,
    password,
    error,
    loading,
    handleEmailChange,
    handlePasswordChange,
    handleLoginSubmit,
    handleSocialButton,
  }
}
