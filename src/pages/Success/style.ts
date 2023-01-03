import styled from "styled-components";

export const SuccessContainer = styled.div`
  > h1 {
    margin-top: 8rem;
    margin-bottom: 0.8rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3.2rem,;
    line-height: 130%;
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  > p {
    font-size: 20px;
    line-height: 130%;
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-bottom: 4rem;
  }
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DeliveryInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 4rem;
  border: 1px solid ${({ theme }) => theme.purple};
  border-radius: 6px 36px;
`