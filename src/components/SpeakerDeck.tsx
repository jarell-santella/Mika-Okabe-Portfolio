import * as React from "react"
import {
  StyledDiv,
  SpeakerDeckTitle,
  SpeakerDeckIFrame,
} from "./styles/SpeakerDeck.styled"

interface SpeakerDeckProps {
  title: string
  src: string
}

const SpeakerDeck = ({ title, src }: SpeakerDeckProps) => {
  return (
    <StyledDiv>
      <SpeakerDeckTitle>{title}</SpeakerDeckTitle>
      <SpeakerDeckIFrame src={src}></SpeakerDeckIFrame>
    </StyledDiv>
  )
}

export default SpeakerDeck
