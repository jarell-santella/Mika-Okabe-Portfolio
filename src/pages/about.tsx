import * as React from "react"
import type { HeadFC } from "gatsby"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import {
  StyledLayoutGrid,
  StyledImg,
  StyledParagraph,
  StyledLinksGrid,
  StyledLink,
  StyledEmailIcon,
  StyledInstagramIcon,
  StyledSpan,
} from "../components/styles/AboutPage.styled"
import bioIcon from "../images/placeholders/1x1placeholder.png"

const AboutPage = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledLayoutGrid>
        <StyledImg src={bioIcon} alt="Image representation of Mika" />
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          euismod ex. Duis mollis metus nunc, ac fringilla risus vestibulum in.
          Integer purus massa, maximus ut purus vel, varius mattis neque.
          Maecenas ultrices, erat at pharetra suscipit, risus ipsum iaculis
          magna, quis faucibus nibh neque sed nisl. Aliquam cursus ex nibh, vel
          varius tortor dictum eget. Quisque fermentum placerat sapien, ac
          consequat ipsum volutpat a. Nullam tempus sagittis risus, a accumsan
          ipsum cursus vitae. Nulla et nisl est. Maecenas venenatis malesuada
          rutrum. Ut hendrerit lacus risus, sed gravida nulla mollis id.
        </StyledParagraph>
        <StyledLinksGrid>
          <StyledLink href="mailto:mikaokabe@gmail.com">
            <StyledEmailIcon />
            <StyledSpan>mikaokabe@gmail.com</StyledSpan>
          </StyledLink>
          <StyledLink href="https://instagram.com/wishterias" target="_blank">
            <StyledInstagramIcon />
            <StyledSpan>@wishterias</StyledSpan>
          </StyledLink>
        </StyledLinksGrid>
      </StyledLayoutGrid>
    </>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>Mika's Portfolio</title>
