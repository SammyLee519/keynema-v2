import { useEffect } from 'react'

import { supabase } from '@/lib/supabaseClient'

import { useAuthStore } from '../store/authStore'

export const useAuth = () => {
  const { user, setUser } = useAuthStore()
  const setIsLoading = useAuthStore((state) => state.setIsLoading)

  useEffect(() => {
    // 앱 시작 시 현재 로그인 상태 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    // 로그인/로그아웃 상태 변화
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [setUser, setIsLoading])

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    })
  }

  const signInWithEmail = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
  }

  const signUpWithEmail = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password })

    if (error) throw error
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()

      if (error) {
        throw error
      }

      return { success: true }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('로그아웃 실패:', error)

      return {
        success: false,
        error,
      }
    }
  }

  return { user, signInWithGoogle, signInWithEmail, signUpWithEmail, signOut }
}
