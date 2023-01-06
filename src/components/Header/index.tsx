import { NavLink } from 'react-router-dom'
import { HeaderContainer, LocalizationContainer } from './styles'

import logoImg from '../../assets/delivery-logo.svg'

import { HiLocationMarker } from 'react-icons/hi'

import { FaShoppingCart } from 'react-icons/fa'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} alt="" /> 
      </NavLink>

      <nav>
        <LocalizationContainer>
          <HiLocationMarker size={22} />
          <p> Porto Alegre, RS</p>
        </LocalizationContainer>

        <NavLink to="/checkout">
          <FaShoppingCart size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
