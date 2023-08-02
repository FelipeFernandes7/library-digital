import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
export const HeaderContent = styled.header`
  width: 100%;
  padding: 2rem 2rem;
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.2);
`
export const Section = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`
export const LinkStyled = styled(Link)`
  display: inline-block;
  position: relative;
  color: #ffff;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.3rem;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #7d5fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
