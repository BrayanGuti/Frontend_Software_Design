import { useState } from 'react'

interface RegisterData {
  email: string
  firstName: string
  lastName: string
  password: string
}

interface UseRegisterUserResult {
  registerUser: (data: RegisterData) => Promise<void>
  loading: boolean
  error: string | null
  success: boolean
}

export function useRegisterUser(): UseRegisterUserResult {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const registerUser = async (data: RegisterData) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          password_hash: data.password,
          account_status: 'active',
      }),
      })

      if (!response.ok) {
        throw new Error('No se pudo registrar el usuario.')
      }

      setSuccess(true)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Ocurrió un error desconocido.')
      } else {
        setError('Ocurrió un error desconocido.')
      }
    } finally {
      setLoading(false)
    }
  }

  return { registerUser, loading, error, success }
}
