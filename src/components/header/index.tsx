import { HeaderContent, LinkStyled, Section } from './styles'

export function Header() {
  return (
    <HeaderContent>
      <Section>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/">Sobre</LinkStyled>
        <LinkStyled to="/">Contato</LinkStyled>
      </Section>
    </HeaderContent>
  )
}
