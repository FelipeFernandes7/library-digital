import { CardContent } from './styles'

interface PaymentCardProps {
  text: string
  icon: JSX.Element
}

export function PaymentCard({ text, icon }: PaymentCardProps) {
  return (
    <CardContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.5rem',
          background: 'transparent',
          borderRadius: '1.875rem',
          color: '#7d5fff',
        }}
      >
        {icon}
      </div>
      <span>{text}</span>
    </CardContent>
  )
}
