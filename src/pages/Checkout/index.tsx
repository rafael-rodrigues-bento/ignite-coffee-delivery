import { CartItensContainer, CheckoutContainer } from "./styles";

import { useForm, FormProvider } from 'react-hook-form'
import { AddressInfo } from "./components/AddressInfo";
import { Payment } from "./components/Payment";
import { CoffeeSelected } from "./components/CoffeeSelected";

import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Informe um Cep"),
  street: zod.string().min(1, "Informe a sua Rua"),
  number: zod.string().min(1, "Informe o seu Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o seu Bairro"),
  city: zod.string().min(1, "Informe a sua Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  methodPayment: zod.string().min(1, "Informe o método de pagamento")
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const newOrder = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });

  const { handleSubmit, reset } = newOrder

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(data)
    reset()
  }

  return (
    <CheckoutContainer>
      <FormProvider {...newOrder} >
        <form onSubmit={handleSubmit(handleCreateNewOrder)}>
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