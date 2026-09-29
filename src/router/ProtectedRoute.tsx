import { type ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { Spinner } from '@/components'
import { ROUTES } from '@/constants'
import { useAuthStore } from '@/store/authStore'

type ProtectedRouteProps = {
  children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuthStore()
  const location = useLocation()

  if (isLoading) return <Spinner />
  if (!user) {
    return (
      <Navigate to={ROUTES.LOGIN} state={{ from: location.pathname }} replace />
    )
  }

  return children
}
