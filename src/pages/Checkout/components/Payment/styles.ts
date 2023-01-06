import styled from "styled-components";

export const PaymentContainer = styled.div`
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
    color: ${({ theme }) => theme["purple"]};
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

export const MethodPaymentContainer = styled.div`
  display: flex;
    input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;

    &:checked + label {
      background: ${({ theme }) => theme["purple-light"]};
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: rem;
    padding: 1.6rem 2.8rem;
    background: ${({ theme }) => theme["base-button"]};

   font-size: 1.2rem;
   line-height: 160%;
   color: ${({ theme }) => theme["base-text"]};
  text-transform: uppercase;
  }

`