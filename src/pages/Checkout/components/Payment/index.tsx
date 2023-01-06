import { Header, MethodPaymentContainer, PaymentContainer } from "./styles";

import { BsCurrencyDollar } from 'react-icons/bs'

import { BsCreditCard2Front, BsBank, BsCash } from 'react-icons/bs'


export function Payment() {
  return (
    <PaymentContainer>
       <Header>
          <BsCurrencyDollar size={22}/>
        <div>
          <span>Endereço de entrega</span>
          <p>Informe o endereço onde deseja receber o seu pedido</p>
        </div>
      </Header>

      <MethodPaymentContainer>
        <input type="radio" name="methodPayment" id="creditCard" />
        <label htmlFor="creditCard"><BsCreditCard2Front size={12}/> Cartão de crédito</label>


        <input type="radio" name="methodPayment" id="debitCard" />
        <label htmlFor="debitCard"><BsBank size={12}/> Cartão de débito</label>

        <input type="radio" name="methodPayment" id="cash" />
        <label htmlFor="cash"><BsCash size={12}/> dinheiro</label>

      </MethodPaymentContainer>
    </PaymentContainer>
  )
}