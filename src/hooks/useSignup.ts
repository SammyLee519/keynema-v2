import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/constants'
import { supabase } from '@/lib/supabaseClient'
import {
  type SignupFormValues,
  signupSchema,
} from '@/lib/validations/authSchema'
import { showToast } from '@/utils/toast'

export const useSignup = () => {
  const [form, setForm] = useState<SignupFormValues>({
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const navigate = useNavigate()

  const handleChange = <T extends keyof SignupFormValues>(
    field: T,
    value: SignupFormValues[T]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = signupSchema.safeParse(form)

    if (!result.success) {
      showToast.error('아이디 또는 비밀번호를 확인해주세요.')

      return
    }

    try {
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      })

      if (error) throw error

      showToast.success('회원가입이 완료되었습니다.')
      navigate(ROUTES.HOME)
    } catch (error) {
      showToast.error('회원가입에 실패했습니다.')
    }
  }

  return {
    form,
    handleChange,
    handleSignupSubmit,
  }
}
