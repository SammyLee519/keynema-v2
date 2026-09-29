import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

type AuthProps = {
  mode: 'login' | 'signup'
}

export default function AuthPage({ mode }: AuthProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101114] px-5 py-10">
      <div className="w-full max-w-100 rounded-xl bg-bg-card p-10 shadow-card max-sm:px-6 max-sm:py-8">
        {mode === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </main>
  )
}
