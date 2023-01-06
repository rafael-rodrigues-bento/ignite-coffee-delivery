import styled from 'styled-components'

export const FormContainer = styled.div`

`

export const InputWrapper = styled.div`
  > input {
    padding: 1.2rem;
    border-radius: 4px;
    border: none;
    background: ${({theme}) => theme['base-button']};
    color: ${({theme}) => theme['base-label']};
    font-size: 1.4rem;
    line-height: 130%;
    margin-bottom: 2rem;
  }

  > input + input {
    margin-left: 1.2rem;
  }

  &:nth-child(2) > input {
    width: 100%;
  }

`