import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import { SEO } from "../components/SEO"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import { StyledMediaContainer } from "../components/styles/PersonalPage.styled"
import MasonryLayout from "../components/MasonryLayout"
import ClickableImage from "../components/ClickableImage"
import personal1 from "../images/personal1.png"
import personal2 from "../images/personal2.png"
import personal3 from "../images/personal3.png"

const media = [personal1, personal2, personal3]

const PersonalPage = (): React.JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledMediaContainer>
        <MasonryLayout columnWidth={400} spacing={15}>
          <video controls controlsList="nodownload">
            <source
              // src={`${ascendFilm}#t=0.001`}
              src={"https://assets.mikaokabe.com/ascend-film.mp4#t=0.001"}
              type="video/mp4"
            />
          </video>
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
