import { Info } from "../../components/Info";
import { DeliveryInformationContainer, MainContainer, SuccessContainer } from "./style";

import { FiMapPin } from 'react-icons/fi'
import { MdTimer } from 'react-icons/md'
import { BsCurrencyDollar } from 'react-icons/bs'

import successImg from '../../assets/success.svg'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu!Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <MainContainer>
        <DeliveryInformationContainer>
          <Info icon={<FiMapPin/>} bgIcon="purple" title="Entrega em Rua João Daniel Martinelli, 102" subtitle="Farrapos - Porto Alegre"/>
          <Info icon={<MdTimer/>}bgIcon="yellow" title="Previsão de entrega" subtitle="20 min - 30 min"/>
          <Info icon={<BsCurrencyDollar/>}bgIcon="yellowDark" title="Pagamento na entrega" subtitle="Cartão de crédito"/>
        </DeliveryInformationContainer>
          <img src={successImg} alt="Desenho de um rapaz dirigindo uma motocicleta" />
      </MainContainer>
    </SuccessContainer>
  )
}