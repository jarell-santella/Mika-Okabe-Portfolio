import * as React from "react"
import type { HeadFC } from "gatsby"
import { SEO } from "../components/SEO"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import { StyledMediaContainer } from "../components/styles/PersonalPage.styled"
import MasonryLayout from "../components/MasonryLayout"
import ClickableImage from "../components/ClickableImage"
import imageOne from "../images/placeholders/16x10placeholder.png"
import imageTwo from "../images/placeholders/14x10placeholder.png"
import imageThree from "../images/placeholders/4x3placeholder.png"
import imageFour from "../images/placeholders/16x9placeholder.png"
import imageFive from "../images/placeholders/1.85x1placeholder.png"
import imageSix from "../images/placeholders/3x2placeholder.png"
import imageSeven from "../images/placeholders/2x1placeholder.png"
import imageEight from "../images/placeholders/1x1placeholder.png"
import imageNine from "../images/placeholders/5x4placeholder.png"

const media = [
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

const PersonalPage = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledMediaContainer>
        <MasonryLayout columnWidth={400} spacing={15}>
          {media.map((media, index) => (
            <ClickableImage
              key={index}
              src={media}
              alt={`Personal media ${index}`}
            />
          ))}
        </MasonryLayout>
      </StyledMediaContainer>
    </>
  )
}

export default PersonalPage

export const Head: HeadFC = () => <SEO pathname="/personal" />
