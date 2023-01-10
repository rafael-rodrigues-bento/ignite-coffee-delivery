import { createContext } from "react";

interface CoffeeProps {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
  quantity: number
}

interface CartItemQuantity {
  cartItemId: number
  type: 'increase' | 'decrease'
}

interface CartContextType {
  cartItems: number
  cartQuantity: number
  cartItem: CoffeeProps[]
  addCoffeeToCart: (data: CoffeeProps) => void
  cartItemQuantity: () => void
  removeItemFromCart: (cartItemId: number) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)
