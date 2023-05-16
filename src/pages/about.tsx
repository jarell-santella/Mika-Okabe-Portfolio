import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { useLanguage } from "../hooks/useLanguage"
import { getTranslation } from "../utils/translationHelpers"
import { SEO } from "../components/SEO"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import {
  StyledLayoutGrid,
  StyledImg,
  StyledParagraph,
  StyledLinksGrid,
  StyledLink,
  StyledSpan,
} from "../components/styles/AboutPage.styled"
import {
  EmailOutlined,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material"
import enAboutLocales from "../../locales/en/about.json"
import jpAboutLocales from "../../locales/jp/about.json"
import bioPicture from "../images/bio_picture.png"

const AboutPage = (): React.JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledLayoutGrid>
        <StyledImg src={bioPicture} alt="Image representation of Mika" />
        <StyledParagraph>
          <Trans>bio_text</Trans>
        </StyledParagraph>
        <StyledLinksGrid>
          <StyledLink href="mailto:mikaokabe@gmail.com">
            <EmailOutlined />
            <StyledSpan>mikaokabe@gmail.com</StyledSpan>
          </StyledLink>
          <StyledLink href="https://instagram.com/wishterias" target="_blank">
            <Instagram />
            <StyledSpan>@wishterias</StyledSpan>
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/mikaokabe"
            target="_blank"
          >
            <LinkedIn />
            <StyledSpan>
              <Trans>mikaokabe</Trans>
            </StyledSpan>
          </StyledLink>
          <StyledLink
            href="https://www.youtube.com/@wishterias"
            target="_blank"
          >
            <YouTube />
            <StyledSpan>@wishterias</StyledSpan>
          </StyledLink>
        </StyledLinksGrid>
      </StyledLayoutGrid>
    </>
  )
}

export default AboutPage

export const Head: HeadFC = () => {
  const language = useLanguage(
    typeof window !== "undefined" ? window.location.href : undefined
  )
  const t = getTranslation(language === "en" ? enAboutLocales : jpAboutLocales)

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
