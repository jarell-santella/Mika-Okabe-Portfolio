import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import { useLanguage } from "../hooks/useLanguage"
import { getTranslation } from "../utils/translationHelpers"
import { SEO } from "../components/SEO"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import { StyledSketchesContainer } from "../components/styles/SketchesPage.styled"
import MasonryLayout from "../components/MasonryLayout"
import ClickableImage from "../components/ClickableImage"
import enSketchesLocales from "../../locales/en/sketches.json"
import jpSketchesLocales from "../../locales/jp/sketches.json"
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

const SketchesPage = (): React.JSX.Element => {
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

export const Head: HeadFC = () => {
  const language = useLanguage(
    typeof window !== "undefined" ? window.location.href : undefined
  )
  const t = getTranslation(
    language === "en" ? enSketchesLocales : jpSketchesLocales
  )

  return <SEO pathname="/sketches" keywords={t("sketches,sketch book")} />
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { eq: "common" } }
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
