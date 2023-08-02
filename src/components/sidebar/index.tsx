import { RiAccountCircleFill } from 'react-icons/ri'
import { MdOutlineMenu } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { Navbar } from '../navbar'
import {
  CloseButton,
  ContainerSidebar,
  SidebarMenu,
  SidebarTitle,
} from './styles'

export function Sidebar() {
  return (
    <ContainerSidebar>
      <input type="checkbox" id="check" />
      <div className="menuIcon">
        <label htmlFor="check">
          <MdOutlineMenu className="iconMenu" />
        </label>
      </div>
      <SidebarMenu className="sidebar_menu">
        <SidebarTitle>
          <a href="/">
            <RiAccountCircleFill className="profile" />
          </a>
          <p>Seja bem Vindo</p>
          <CloseButton className="btn_close">
            <label htmlFor="check">
              <IoMdClose className="iconClose" />
            </label>
          </CloseButton>
        </SidebarTitle>
        <Navbar />
      </SidebarMenu>
    </ContainerSidebar>
  )
}
