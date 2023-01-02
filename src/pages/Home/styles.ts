import styled from 'styled-components'

export const HomeContainer = styled.div`
  h3 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const SloganContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5.6rem;
  margin-top: 9.4rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 4.8rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-title']};
  }

  h2 {
    font-weight: normal;
    font-size: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-top: 1.6rem;
  }

  img {
    width: 50%;
  }
`

export const InfoListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 6.6rem;
  gap: 2rem;
`
export const GridCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
`
