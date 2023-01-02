import { ReactNode } from 'react'
import { InfoContainer } from './style'

interface InfoProps {
  icon: ReactNode
  text: string
}

export function Info({ icon, text }: InfoProps) {
  return (
    <InfoContainer>
      <span>{icon}</span>
      <p>{text}</p>
    </InfoContainer>
  )
}
