import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { ReactNode, createContext, useState, useEffect } from 'react'
import { auth } from '../services/firebase'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from 'react-hook-form'

interface AuthProviderProps {
  children: ReactNode
}

type AuthContextType = {
  user: UserProps | null
  signed: boolean
  loadingAuth: boolean
  handleInfoUser: ({ uid, name, email }: UserProps) => void
  onSubmit: (formData: FormData) => void
  register: UseFormRegister<{
    email: string
    password: string
  }>
  handleSubmit: UseFormHandleSubmit<
    {
      email: string
      password: string
    },
    undefined
  >

  errors: FieldErrors<{
    email: string
    password: string
  }>
}

interface UserProps {
  uid: string
  name: string | null
  email: string | null
}

const schema = z.object({
  email: z
    .string()
    .email('Insira um email válido')
    .nonempty('O campo email é obrigatório'),
  password: z.string().nonempty('O campo senha é obrigatório'),
})
type FormData = z.infer<typeof schema>

export const AuthContext = createContext({} as AuthContextType)
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null)
  const [loadingAuth, setLoadingAuth] = useState(true)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          name: user.displayName,
        })
        setLoadingAuth(false)
      } else {
        setUser(null)
        setLoadingAuth(false)
      }
    })

    return () => {
      unsub()
    }
  }, [])

  function handleInfoUser({ name, email, uid }: UserProps) {
    setUser({
      uid,
      name,
      email,
    })
  }

  function onSubmit(formData: FormData) {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        toast.success('Login efetuado com sucesso')

        navigate('/', { replace: true })
      })
      .catch((error) => {
        toast.error('Não foi possível realizar o login :(')
        console.log(error.message)
      })
  }
  useEffect(() => {
    async function handleLogout() {
      await signOut(auth)
    }
    handleLogout()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loadingAuth,
        errors,
        handleSubmit,
        register,
        handleInfoUser,
        onSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
