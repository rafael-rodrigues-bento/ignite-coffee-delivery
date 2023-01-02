import { ReactNode } from 'react'
import { InfoContainer, SpanContainer, BACKGROUND_COLOR } from './style'

interface InfoProps {
  icon: ReactNode
  text: string
  bgIcon: keyof typeof BACKGROUND_COLOR
}

export function Info({ icon, text, bgIcon = 'purple' }: InfoProps) {
  return (
    <InfoContainer>
      <SpanContainer bgIcon={bgIcon}>{icon}</SpanContainer>
      <p>{text}</p>
    </InfoContainer>
  )
}
