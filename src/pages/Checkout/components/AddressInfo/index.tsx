import { AddressInfoContainer, Header } from "./styles";

import { FiMapPin } from 'react-icons/fi'
import { Form } from "../Form";

export function AddressInfo() {
  return (
    <AddressInfoContainer>
      <Header>
          <FiMapPin size={22}/>
        <div>
          <span>Endereço de entrega</span>
          <p>Informe o endereço onde deseja receber o seu pedido</p>
        </div>
      </Header>

      <Form />
    </AddressInfoContainer>
  )
}