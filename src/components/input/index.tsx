import { InputHTMLAttributes } from 'react'
import {
  FieldValues,
  useFormContext,
  UseFormRegister,
  FieldError,
} from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  type?: string
  registerOptions?: Parameters<UseFormRegister<FieldValues>>[1]
  error: FieldError | undefined
}

export function Input({
  label,
  name,
  type,
  registerOptions,
  error,
  ...rest
}: InputProps) {
  const { register } = useFormContext<FieldValues>()

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        type={type}
        id={name}
        {...register(name, registerOptions)}
      />
      {error && <p>{error.message}</p>}
    </div>
  )
}

export default Input
