import { CartItensContainer, CheckoutContainer } from "./styles";

import { useForm, FormProvider } from 'react-hook-form'
import { AddressInfo } from "./components/AddressInfo";
import { Payment } from "./components/Payment";
import { CoffeeSelected } from "./components/CoffeeSelected";

export function Checkout() {
  const methods = useForm();
  const { handleSubmit } = useForm();

  function handleCreateNewOrder(data: any) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(handleCreateNewOrder)}>
          <div>
            <h1>Complete o seu pedido</h1>
            <AddressInfo />
            <Payment />
          </div>
          <CartItensContainer>
            <h1>Cafés selecionados</h1>
            <CoffeeSelected />
          </CartItensContainer>
        </form>
      </FormProvider>
    </CheckoutContainer>
    
  )
}