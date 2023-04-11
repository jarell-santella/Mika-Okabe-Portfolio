import * as React from "react"
import type { HeadFC } from "gatsby"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import { StyledSketchesContainer } from "../components/styles/SketchesPage.styled"
import MasonryLayout from "../components/MasonryLayout"
import ClickableImage from "../components/ClickableImage"
import imageOne from "../images/placeholders/1.85x1placeholder.png"
import imageTwo from "../images/placeholders/1x1placeholder.png"
import imageThree from "../images/placeholders/2x1placeholder.png"
import imageFour from "../images/placeholders/3x2placeholder.png"
import imageFive from "../images/placeholders/4x3placeholder.png"
import imageSix from "../images/placeholders/5x4placeholder.png"
import imageSeven from "../images/placeholders/14x10placeholder.png"
import imageEight from "../images/placeholders/16x9placeholder.png"
import imageNine from "../images/placeholders/16x10placeholder.png"

const images = [
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
  imageEight,
  imageNine,
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
