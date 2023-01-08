import { FormContainer, InputWrapper } from "./styles";

import { useFormContext } from 'react-hook-form'

export function Form() {
  const { register } = useFormContext();

  return (
    <FormContainer>
      <InputWrapper>
        <input 
          type="number" 
          id="cep" 
          placeholder="CEP" 
          {...register('cep')}  
        />
      </InputWrapper>
      <InputWrapper>
        <input 
          type="text" 
          id="street" 
          placeholder="Rua"
          {...register('street')}
        />
      </InputWrapper>
      <InputWrapper>
        <input 
          type="number"
          id="number" 
          placeholder="Número" 
          {...register('number')}
        />
        <input 
          type="text"
          id="Complement" 
          placeholder="Complemento" 
          {...register('complement')}
        />
      </InputWrapper>
      <InputWrapper>
        <input 
          type="text"
          id="district" 
          placeholder="Bairro" 
          {...register('district')}
        />
        <input
          type="text"
          id="city" 
          placeholder="Cidade" 
          {...register('city')}
        />
        <input 
          type="text" 
          id="uf" 
          placeholder="UF" 
          {...register('uf')}
        />
      </InputWrapper>
    </FormContainer>
  )
}