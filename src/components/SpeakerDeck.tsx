import * as React from "react"
import {
  StyledDiv,
  StyledTitle,
  StyledIFrame,
} from "./styles/SpeakerDeck.styled"

interface SpeakerDeckProps {
  title: string
  src: string
}

const SpeakerDeck = ({ title, src }: SpeakerDeckProps): React.JSX.Element => {
  return (
    <StyledDiv>
      <StyledTitle>{title}</StyledTitle>
      <StyledIFrame src={src} allow="fullscreen"></StyledIFrame>
    </StyledDiv>
  )
}

export default SpeakerDeck
