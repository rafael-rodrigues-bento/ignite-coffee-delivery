import { CartItem } from '../CartItem'
import { CoffeeSelectedContainer, SubmitContainer } from './styles'

export function CoffeeSelected() {
  return (
    <CoffeeSelectedContainer>
      <CartItem />
      <CartItem />
      
      <SubmitContainer>
        <div>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </div>

        <button>CONFIRMAR PEDIDO</button>
      </SubmitContainer>
    </CoffeeSelectedContainer>
  )
}