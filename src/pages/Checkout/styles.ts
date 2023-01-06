import styled from "styled-components";

export const CheckoutContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-bottom: 1.5rem;
  }
`