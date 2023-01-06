import { CartItemContainer, ItemDetails } from "./styles";

import { FiTrash } from 'react-icons/fi'
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi'

import coffeeImg from '../../../../../public/coffees-imgs/american.svg'

export function CartItem() {
  return (
    <CartItemContainer>
      <div>
        <img src={coffeeImg} alt="" />
      </div>

      <ItemDetails>
        <div className="details-itens">
        <p>Expresso Tradicional</p>
          <div className="quantity-buttons">
            <div className="quantity">
              <button><HiOutlineMinusSm size={14} /></button>
              <span>1</span>
              <button><HiOutlinePlusSm size={14} /></button>
            </div>
            <button><FiTrash />Remover</button>
          </div>
        </div>
        <strong>R$ 9,90</strong>
      </ItemDetails>
    </CartItemContainer>
  )
}