import styled from 'styled-components'

export const BACKGROUND_COLOR = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  gray: 'base-text',
  purple: 'purple',
} as const
interface IconColorProps {
  bgIcon: keyof typeof BACKGROUND_COLOR
}

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  p {
    line-height: 130%;
    color: ${({ theme }) => theme['base-text']};
  }
`
export const SpanContainer = styled.span<IconColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 1000px;
  background-color: ${(props) => props.theme[BACKGROUND_COLOR[props.bgIcon]]};
  color: ${({ theme }) => theme.white};
`
