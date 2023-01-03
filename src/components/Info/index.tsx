import { ReactNode } from 'react'
import { InfoContainer, IconContainer, TextContainer, BACKGROUND_COLOR } from './style'

interface InfoProps {
  icon: ReactNode
  title: string
  bgIcon: keyof typeof BACKGROUND_COLOR
  subtitle?: string
}

export function Info({ icon, title, bgIcon = 'purple', subtitle="" }: InfoProps) {
  return (
    <InfoContainer>
      <IconContainer bgIcon={bgIcon}>{icon}</IconContainer>
      <TextContainer>
        <p>{title}</p>
        <strong>{subtitle}</strong>
      </TextContainer>
      
    </InfoContainer>
  )
}
