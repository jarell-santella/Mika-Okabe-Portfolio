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
import sketchesZelda1 from "../images/sketches_zelda1.png"
import sketches1 from "../images/sketches1.jpg"
import sketches2 from "../images/sketches2.jpg"
import sketches3 from "../images/sketches3.jpg"
import sketches4 from "../images/sketches4.jpg"
import sketches5 from "../images/sketches5.jpg"

const images = [
  sketchesZelda1,
  sketches1,
  sketches2,
  sketches3,
  sketches4,
  sketches5,
]

const SketchesPage = (): React.JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledSketchesContainer>
        <MasonryLayout columnWidth={400} spacing={10}>
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

  return (
    <SEO
      title="Sketches"
      pathname="/sketches"
      keywords={t("sketches,sketch book")}
    />
  )
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
