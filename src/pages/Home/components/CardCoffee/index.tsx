import { CardCoffeeContainer, CartContainer, TagsContainer } from './style'
import { BsFillCartFill } from 'react-icons/bs'
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi'

import { FormatPrice } from '../../../../utils/formatPrice'

interface CardCoffeeProps {
  imgUrl: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function CardCoffee({
  imgUrl,
  tags,
  name,
  description,
  price,
}: CardCoffeeProps) {
  return (
    <CardCoffeeContainer>
      <img src={`coffees-imgs/${imgUrl}`} alt="" />

      <TagsContainer>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagsContainer>

      <h2>{name}</h2>

      <p>{description}</p>

      <CartContainer>
        <div className="price-coffee">
          <span>R$</span>
          <strong>{FormatPrice(price)}</strong>
        </div>

        <div className="amount-coffee">
          <button>
            <HiOutlineMinusSm size={16} />
          </button>
          <p>1</p>
          <button>
            <HiOutlinePlusSm size={16} />
          </button>
        </div>

        <div className="button-add-cart">
          <BsFillCartFill />
        </div>
      </CartContainer>
    </CardCoffeeContainer>
  )
}
