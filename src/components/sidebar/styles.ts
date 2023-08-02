import styled from 'styled-components'

export const ContainerSidebar = styled.div`
  .menuIcon {
    .iconMenu {
      color: #ffff;
      font-size: 30px;
      font-weight: 700;
      position: absolute;
      left: 24px;
      top: 30px;
      line-height: 60px;
      cursor: pointer;

      &:hover {
        transition: all 0.3s linear;
        color: #7d5fff;
      }
      &:active {
        transition: all linear 0.3s ease;
        transform: scale(0.95);
      }
    }
  }
  #check {
    display: none;
  }

  #check:checked ~ .sidebar_menu {
    left: 0;
  }
  .btn_close {
    position: absolute;
    font-size: 25px;
    color: #fff;
    line-height: 60px;
    left: 210px;
    top: 12px;
    cursor: pointer;
    &:hover {
      transition: all linear 0.3s ease;
      color: #ff4757;
    }
    &:active {
      transition: all linear 0.3s ease;
      transform: scale(0.95);
    }
  }
`

export const SidebarMenu = styled.div`
  z-index: 1;
  background: #282828;
  height: 100vh;
  width: 260px;
  position: fixed;
  overflow: hidden;
  left: -260px;
  transition: all 0.3s linear;
`
export const CloseButton = styled.div`
  position: absolute;
  font-size: 25px;
  color: #fff;
  line-height: 60px;
  left: 210px;
  top: 12px;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease;
    color: #ff4757;
  }
`
export const SidebarTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border: 0.1rem solid rgba(28, 28, 28, 0.1);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  .profile {
    height: 80px;
    width: 80px;
    color: #fff;

    &:hover {
      transition: 0.2s ease-in;
      color: #7d5fff;
    }
  }
  p {
    color: #fff;
    text-decoration: none;
  }
`
