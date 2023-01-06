import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  padding-bottom: 3.2rem;
  margin-top: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};

   img {
    height: 6.4rem;
    margin-right: 2rem;
  }
`

export const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;

  .quantity-buttons {
    display: flex;
    margin-right: 7.3rem;
  }

  button {
    border: none;
    background: ${({ theme }) => theme['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem;
    font-size: 12px;
    line-height: 160%;
    color: ${({ theme }) => theme["base-text"]};
    transition: background 0.2s;

    > svg {
      color: ${({ theme }) => theme.purple};
    }

    &:hover {
      background: #ff261b;
      color: black;
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-right: 0.8rem;
    background: ${({ theme }) => theme['base-button']};
    border-radius: 6px;

    > button {
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.purple};
      font-size: 3rem;
      cursor: pointer;
    }

    span {
      line-height: 130%;
      color: ${({ theme }) => theme["base-subtitle"]};
     
    }
  }

  p {
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: 130%;
  }
`