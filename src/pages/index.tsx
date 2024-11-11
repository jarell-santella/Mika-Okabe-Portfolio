import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useLanguage } from "../hooks/useLanguage"
import { getTranslation } from "../utils/translationHelpers"
import { SEO } from "../components/SEO"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import SpeakerDeck from "../components/SpeakerDeck"
import enIndexLocales from "../../locales/en/index.json"
import jpIndexLocales from "../../locales/jp/index.json"

const speakerDecks = [
  {
    title: "Come and Get It",
    src: "https://speakerdeck.com/player/d5d71859a92d4c4dbffd7cebd0daa859",
  },
  {
    title: "Here, Kitty!",
    src: "https://speakerdeck.com/player/134a56d93b6344acaaf7c8051fd54b0b",
  },
  {
    title: "Kintsugi",
    src: "https://speakerdeck.com/player/189bb68bd52046b4be58277e0bedf42f",
  },
  {
    title: "Heart Takes",
    src: "https://speakerdeck.com/player/39307f175da6475d9d1f8ae4bbca682b",
  },
]

const IndexPage = (): React.JSX.Element => {
  const { t } = useI18next()

  return (
    <>
      <GlobalStyle />
      <NavBar />
      {speakerDecks.map((speakerDeck) => (
        <SpeakerDeck
          key={speakerDeck.src}
          title={t(speakerDeck.title)}
          src={speakerDeck.src}
        />
      ))}
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  const { title, siteUrl } = useSiteMetadata()

  const language = useLanguage(
    typeof window !== "undefined" ? window.location.href : undefined
  )
  const t = getTranslation(language === "en" ? enIndexLocales : jpIndexLocales)

  return (
    <SEO title="Story" keywords={t("speakerdeck")}>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: title,
          url: siteUrl,
        })}
      </script>
    </SEO>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { in: ["common", "index"] } }
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
