import * as React from "react"
import type { HeadFC } from "gatsby"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import SpeakerDeck from "../components/SpeakerDeck"

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

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      {speakerDecks.map(speakerDeck => (
        <SpeakerDeck key={speakerDeck.src} title={speakerDeck.title} src={speakerDeck.src}/>
      ))}
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mika's Portfolio</title>
