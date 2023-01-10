import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 28rem;
  align-items: center;
  margin-top: 5.4rem;
  padding-inline: 2rem;
  border-radius: 6px 36px 6px 36px;

  background: ${({ theme }) => theme['base-card']};

  img {
    max-width: 12rem;
    margin-bottom: 1.2rem;
    margin-top: -2rem;
  }

  > h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 0.8rem;
  }

  > p {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-label']};
    margin-bottom: 3.3rem;
    text-align: center;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > span {
    background: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    padding: 0.4rem 0.8rem;
    border-radius: 100px;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;

  .price-coffee {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 130%;
    margin-right: 2.3rem;
    > span {
      font-size: 1.5rem;
    }
  }

  .amount-coffee {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-right: 0.8rem;
    background: ${({ theme }) => theme['base-button']};
    padding-inline: 0.9rem;
    border-radius: 6px;

    > button {
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.purple};
      font-size: 3rem;
      cursor: pointer;
    }

    > p {
      line-height: 130%;
      color: ${({ theme }) => theme['base-title']};
    }
  }

  .button-add-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 6px;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['purple-dark']};
    cursor: pointer;
  }
`
