import { styled } from 'styled-components'

export const NavbarMenu = styled.nav`
  z-index: -1;
  position: absolute;
  top: 5rem;
  width: 100%;

  ul {
    margin-top: 6rem;
  }
`
export const List = styled.li`
  display: flex;
  align-items: center;
  margin: 0.313rem;
  padding: 0.75rem;
  border-radius: 0.313rem;
  gap: 0.5rem;
  transition: 0.3s;
  border: 0.1rem solid rgba(28, 28, 28, 0.1);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  .icon,
  .iconFire {
    color: #ffffff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    transition: 0.3s ease;
    background: #fff;
    a {
      color: #7d5fff;
    }
    cursor: pointer;

    .icon {
      color: #7d5fff;
    }
    .iconFire {
      color: #ff4757;
    }
  }
`
