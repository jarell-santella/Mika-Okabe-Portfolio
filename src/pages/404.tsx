import * as React from "react"
import type { HeadFC } from "gatsby"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import { StyledText } from "../components/styles/404Page.styled"

const NotFoundPage = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledText>
        Sorry, we could not find what you were looking for.
      </StyledText>
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Mika's Portfolio</title>
