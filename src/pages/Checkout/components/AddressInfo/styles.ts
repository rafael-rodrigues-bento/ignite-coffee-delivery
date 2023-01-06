import styled from "styled-components";

export const AddressInfoContainer = styled.div`
  background: ${({ theme }) => theme["base-card"]};
  padding: 4rem;
  border-radius: 6px;
  margin-bottom: 1.2rem;
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 3.2rem;
  

  >svg {
    color: ${({ theme }) => theme["yellow-dark"]};
  }

   > div span {
    color: red;
    line-height: 130%;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  > div p {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${({ theme }) => theme["base-text"]};
  }
`