import styled from "styled-components";

export const CoffeeSelectedContainer = styled.div`
  background: ${({ theme }) => theme["base-card"]};
  padding: 4rem;
  border-radius: 6px 44px;
  margin-bottom: 1.2rem;
`

export const SubmitContainer = styled.div`
  margin-top: 2.4rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    > p {
      line-height: 130%;
      color: ${({ theme }) => theme["base-text"]};
    }

    > strong {
      font-size: 20px;
      line-height: 130%;
      color: ${({ theme }) => theme["base-subtitle"]};
    }
  }

  > button {
      display: flex;
      justify-content: center;
      background: ${({ theme }) => theme.yellow};
      border-radius: 6px;
      border: none;
      width: 100%;
      margin-top: 3.6rem;
      padding-block: 1.2rem;
      font-size: 14px;
      line-height: 160%;

      cursor: pointer;

      color: ${({ theme }) => theme.white};

      transition: background 0.2s;

      &:hover {
        background: ${({ theme }) => theme["yellow-dark"]};
      }
    }
`