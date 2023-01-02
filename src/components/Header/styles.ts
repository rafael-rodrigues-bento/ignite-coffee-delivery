import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  margin-block: 3.2rem;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme['yellow-dark']};
      background: ${({ theme }) => theme['yellow-light']};
      padding: 0.8rem;
      border-radius: 6px;
    }
  }
`

export const LocalizationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
  font-size: 1.4rem;
  line-height: 130%;
`
