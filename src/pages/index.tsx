import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import { useTranslation } from "../hooks/useTranslation"
import { SEO } from "../components/SEO"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import SpeakerDeck from "../components/SpeakerDeck"
import jpIndexLocales from "../../locales/jp/index.json"

const speakerDecks = [
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
  const t = useTranslation(jpIndexLocales)

  return <SEO keywords={t("speakerdeck")} />
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
