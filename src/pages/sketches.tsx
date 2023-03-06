import * as React from "react"
import type { HeadFC } from "gatsby"
import NavBar from "../components/NavBar"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"

const SketchesPage = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <h1 style={{margin: "0px"}}>Welcome to the SKETCHES tab</h1>
    </>
  )
}

export default SketchesPage

export const Head: HeadFC = () => <title>Mika's Portfolio</title>