import {
  MdOutlineFormatListBulleted,
  MdShoppingCart,
  MdLocalFireDepartment,
} from 'react-icons/md'
import { RiAccountCircleFill } from 'react-icons/ri'
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { List, NavbarMenu } from './styles'

export function Navbar() {
  return (
    <NavbarMenu>
      <ul>
        <List>
          <MdOutlineFormatListBulleted className="icon" />
          <Link to="/products">Lista de Produtos</Link>
        </List>
        <List>
          <AiOutlineStar className="icon" />
          <Link to="/favorite">Lista de Favoritos</Link>
        </List>
        <List>
          <MdShoppingCart className="icon" />
          <Link to="/cart">Meu Carrinho</Link>
        </List>
        <List>
          <RiAccountCircleFill className="icon" />
          <Link to="/account">Minha Conta</Link>
        </List>
        <List>
          <MdLocalFireDepartment className="iconFire" />
          <Link to="/burn">Torra Livros</Link>
        </List>
      </ul>
    </NavbarMenu>
  )
}
