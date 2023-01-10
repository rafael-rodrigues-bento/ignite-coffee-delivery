import { CardCoffeeContainer, CartContainer, TagsContainer } from './style'
import { BsFillCartFill } from 'react-icons/bs'
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi'

import { FormatPrice } from '../../../../utils/formatPrice'
import { useState } from 'react'

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
  const [quantity, setQuantity] = useState(1)

  function handleIncrementQuantity() {
    setQuantity(prevState => prevState + 1)
  }

  function handleDecrementQuantity() {
    if(quantity <= 1) {
      alert('Mínimo de 1 item para efetuar o pedido!')
    } else {
      setQuantity(prevState => prevState -1)
    }
  }

  function handleAddProductToCart() {
    
  }

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
          <button onClick={handleDecrementQuantity}>
            <HiOutlineMinusSm size={16} />
          </button>
          <p>{quantity}</p>
          <button onClick={handleIncrementQuantity}>
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
