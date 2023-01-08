import styled from "styled-components";

export const CheckoutContainer = styled.div`
  > form {
    display: grid;
    grid-template-columns: 65% 35%;
    gap: 3.2rem;
  }
 

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-bottom: 1.5rem;
  }
`

export const CartItensContainer = styled.div``