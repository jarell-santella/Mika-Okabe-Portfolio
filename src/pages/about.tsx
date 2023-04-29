import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { useTranslation } from "../hooks/useTranslation"
import { SEO } from "../components/SEO"
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
  StyledLinkedInIcon,
  StyledYouTubeIcon,
  StyledSpan,
} from "../components/styles/AboutPage.styled"
import jpAboutLocales from "../../locales/jp/about.json"
import bioIcon from "../images/placeholders/1x1placeholder.png"

const AboutPage = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledLayoutGrid>
        <StyledImg src={bioIcon} alt="Image representation of Mika" />
        <StyledParagraph>
          <Trans>bio_text</Trans>
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
          <StyledLink
            href="https://www.linkedin.com/in/mikaokabe/"
            target="_blank"
          >
            <StyledLinkedInIcon />
            <StyledSpan>
              <Trans>mikaokabe</Trans>
            </StyledSpan>
          </StyledLink>
          <StyledLink
            href="https://www.youtube.com/@wishterias"
            target="_blank"
          >
            <StyledYouTubeIcon />
            <StyledSpan>@wishterias</StyledSpan>
          </StyledLink>
        </StyledLinksGrid>
      </StyledLayoutGrid>
    </>
  )
}

export default AboutPage

export const Head: HeadFC = () => {
  const t = useTranslation(jpAboutLocales)

  return <SEO pathname="/about" keywords={t("mika,okabe,mika okabe")} />
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { in: ["common", "about"] } }
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
