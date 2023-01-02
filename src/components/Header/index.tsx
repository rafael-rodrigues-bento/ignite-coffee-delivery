import { NavLink } from 'react-router-dom'
import { HeaderContainer, LocalizationContainer } from './styles'

import logoImg from '../../assets/delivery-logo.svg'

import { HiLocationMarker } from 'react-icons/hi'

import { FaShoppingCart } from 'react-icons/fa'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <nav>
        <LocalizationContainer>
          <HiLocationMarker size={22} />
          <p> Porto Alegre, RS</p>
        </LocalizationContainer>

        <NavLink to="/">
          <FaShoppingCart size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
