import React, { useEffect } from "react"
import { graphql, HeadFC, navigate } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { SEO } from "../components/SEO"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import { StyledText } from "../components/styles/404Page.styled"

const NotFoundPage = () => {
  const { language } = useI18next()

  useEffect(() => {
    const desiredPath = language === "en" ? "/404.html/" : "/jp/404.html/"
    if (window.location.pathname !== desiredPath) {
      navigate(desiredPath)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledText>
        <Trans>sorry_text</Trans>
      </StyledText>
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <SEO pathname="/404.html" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { in: ["common", "404"] } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
