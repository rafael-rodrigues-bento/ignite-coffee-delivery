import { Info } from '../../components/Info'
import { HomeContainer, InfoListContainer, SloganContainer } from './styles'

import { BsFillCartFill } from 'react-icons/bs'
import { RiTimerFill } from 'react-icons/ri'
import { FiCoffee, FiPackage } from 'react-icons/fi'

import coffeeSloganImg from '../../assets/coffeeSlogan.svg'

export function Home() {
  return (
    <HomeContainer>
      <SloganContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <InfoListContainer>
            <Info
              icon={<BsFillCartFill size={16} />}
              text="Compra simples e segura"
            />
            <Info
              icon={<RiTimerFill size={16} />}
              text="Entrega rápida e rastreada"
            />
            <Info
              icon={<FiPackage size={16} />}
              text="Embalagem mantém o café intacto"
            />
            <Info
              icon={<FiCoffee size={16} />}
              text="O café chega fresquinho até você"
            />
          </InfoListContainer>
        </div>

        <img src={coffeeSloganImg} alt="Imagem de um copo de café" />
      </SloganContainer>
    </HomeContainer>
  )
}
