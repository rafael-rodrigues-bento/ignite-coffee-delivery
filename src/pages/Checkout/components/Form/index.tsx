import { FormContainer, InputWrapper } from "./styles";

export function Form() {
  return (
    <FormContainer>
      <InputWrapper>
        <input type="number" name="cep" id="cep" placeholder="CEP" />
      </InputWrapper>
      <InputWrapper>
        <input type="text" name="street" id="street" placeholder="Rua"/>
      </InputWrapper>
      <InputWrapper>
        <input type="number" name="number" id="number" placeholder="Número" />
        <input type="text" name="Complement" id="Complement" placeholder="Complemento" />
      </InputWrapper>
      <InputWrapper>
        <input type="text" name="district" id="district" placeholder="Bairro" />
        <input type="text" name="city" id="city" placeholder="Cidade" />
        <input type="text" name="uf" id="uf" placeholder="UF" />
      </InputWrapper>
    </FormContainer>
  )
}