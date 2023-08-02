import { ReactNode } from 'react'
import { FooterContent } from './styles'

interface FooterProps {
  children: ReactNode
}

export function Footer({ children }: FooterProps) {
  return <FooterContent>{children}</FooterContent>
}
