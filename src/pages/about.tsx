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
} from "../components/styles/AboutPage.styled"
import bioIcon from "../images/placeholders/1x1placeholder.png"
import { EmailOutlined, Instagram } from '@mui/icons-material'

const AboutPage = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledLayoutGrid>
        <StyledImg src={bioIcon} alt="Image representation of Mika" />
        <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel euismod ex. Duis mollis metus nunc, ac fringilla risus vestibulum in. Integer purus massa, maximus ut purus vel, varius mattis neque. Maecenas ultrices, erat at pharetra suscipit, risus ipsum iaculis magna, quis faucibus nibh neque sed nisl. Aliquam cursus ex nibh, vel varius tortor dictum eget. Quisque fermentum placerat sapien, ac consequat ipsum volutpat a. Nullam tempus sagittis risus, a accumsan ipsum cursus vitae. Nulla et nisl est. Maecenas venenatis malesuada rutrum. Ut hendrerit lacus risus, sed gravida nulla mollis id.</StyledParagraph>
        <StyledLinksGrid>
          <EmailOutlined />
          <StyledLink href="mailto:mikaokabe@gmail.com">mikaokabe@gmail.com</StyledLink>
          <Instagram />
          <StyledLink href="https://instagram.com/wishterias" target="_blank">@wishterias</StyledLink>
        </StyledLinksGrid>
      </StyledLayoutGrid>
    </>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>Mika's Portfolio</title>
