import * as React from "react"
import type { HeadFC } from "gatsby"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import { StyledSketchesContainer } from "../components/styles/SketchesPage.styled"
import MasonryLayout from "../components/MasonryLayout"
import ClickableImage from "../components/ClickableImage"
import ImageOne from "../images/placeholders/1.85x1placeholder.png"
import ImageTwo from "../images/placeholders/1x1placeholder.png"
import ImageThree from "../images/placeholders/2x1placeholder.png"
import ImageFour from "../images/placeholders/3x2placeholder.png"
import ImageFive from "../images/placeholders/4x3placeholder.png"
import ImageSix from "../images/placeholders/5x4placeholder.png"
import ImageSeven from "../images/placeholders/14x10placeholder.png"
import ImageEight from "../images/placeholders/16x9placeholder.png"
import ImageNine from "../images/placeholders/16x10placeholder.png"

const images = [
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
  ImageSix,
  ImageSeven,
  ImageEight,
  ImageNine,
]

const SketchesPage = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledSketchesContainer>
        <MasonryLayout columnWidth={300} spacing={10}>
          {images.map((image, index) => (
            <ClickableImage key={index} src={image} alt={`Sketch ${index}`} />
          ))}
        </MasonryLayout>
      </StyledSketchesContainer>
    </>
  )
}

export default SketchesPage

export const Head: HeadFC = () => <title>Mika's Portfolio</title>
