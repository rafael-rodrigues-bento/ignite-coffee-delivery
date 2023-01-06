import { CartItensContainer, CheckoutContainer } from "./styles";

import { useForm } from 'react-hook-form'
import { AddressInfo } from "./components/AddressInfo";
import { Payment } from "./components/Payment";
import { CoffeeSelected } from "./components/CoffeeSelected";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h1>Complete o seu pedido</h1>
        <AddressInfo />
        <Payment />
      </div>
      <CartItensContainer>
        <h1>Cafés selecionados</h1>
        <CoffeeSelected />
      </CartItensContainer>
    </CheckoutContainer>
    
  )
}