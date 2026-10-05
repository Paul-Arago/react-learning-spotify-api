import { createContext, useContext, type ReactNode } from 'react'

type AuthContextType = {
  login: () => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const login = async () => {
    window.location.href = 'http://127.0.0.1:8000/login'
  }

  const logout = () => {
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider')
  }

  return context
}