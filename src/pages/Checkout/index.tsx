import { CheckoutContainer } from "./styles";

import { useForm } from 'react-hook-form'
import { AddressInfo } from "./components/AddressInfo";
import { Payment } from "./components/Payment";

export function Checkout() {
  return (
    <CheckoutContainer>
      <h1>Complete o seu pedido</h1>
      <AddressInfo />
      <Payment />
    </CheckoutContainer>
  )
}