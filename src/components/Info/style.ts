import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 1000px;
    background: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme.white};
  }

  p {
    line-height: 130%;
    color: ${({ theme }) => theme['base-text']};
  }
`
