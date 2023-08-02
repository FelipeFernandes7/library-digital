import { ReactNode } from 'react'
import { Body } from './styles'

interface BackgroundProps {
  children: ReactNode
}
export function Background({ children }: BackgroundProps) {
  return <Body>{children}</Body>
}
