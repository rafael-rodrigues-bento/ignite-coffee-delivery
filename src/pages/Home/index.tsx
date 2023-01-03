import { Info } from '../../components/Info'
import {
  GridCoffee,
  HomeContainer,
  InfoListContainer,
  SloganContainer,
} from './styles'

import { BsFillCartFill } from 'react-icons/bs'
import { RiTimerFill } from 'react-icons/ri'
import { FiCoffee, FiPackage } from 'react-icons/fi'

import coffeeSloganImg from '../../assets/coffeeSlogan.svg'
import { CardCoffee } from './components/CardCoffee'

import { coffees } from '../../data/coffee'

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
              bgIcon="yellowDark"
              icon={<BsFillCartFill size={16} />}
              title="Compra simples e segura"
            />
            <Info
              bgIcon="yellow"
              icon={<RiTimerFill size={16} />}
              title="Entrega rápida e rastreada"
            />
            <Info
              bgIcon="gray"
              icon={<FiPackage size={16} />}
              title="Embalagem mantém o café intacto"
            />
            <Info
              bgIcon="purple"
              icon={<FiCoffee size={16} />}
              title="O café chega fresquinho até você"
            />
          </InfoListContainer>
        </div>

        <img src={coffeeSloganImg} alt="Imagem de um copo de café" />
      </SloganContainer>

      <h3>Nossos cafés</h3>

      <GridCoffee>
        {coffees.map((coffee) => {
          return (
            <CardCoffee
              imgUrl={coffee.imageUrl}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              tags={coffee.tags}
              key={coffee.id}
            />
          )
        })}
      </GridCoffee>
    </HomeContainer>
  )
}
