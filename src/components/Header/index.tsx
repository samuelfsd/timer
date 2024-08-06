import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>Temporizador</span>
      <nav>
        <NavLink to="/" title="Temporizador">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/historico" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
