import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import { SEO } from "../components/SEO"
import { GlobalStyle } from "../components/styles/GlobalStyles.styled"
import NavBar from "../components/NavBar"
import {
  StyledMediaContainer,
  StyledBreak,
} from "../components/styles/PersonalPage.styled"
import MasonryLayout from "../components/MasonryLayout"
import VideoCard from "../components/VideoCard"
import ClickableImage from "../components/ClickableImage"
import personal1 from "../images/personal1.png"
import personal2 from "../images/personal2.png"
import personal3 from "../images/personal3.png"
import personal4 from "../images/personal4.png"
import personal5 from "../images/personal5.png"

const videos = [
  {
    src: "https://assets.mikaokabe.com/ascend-film.mp4",
    description:
      "UCLA 2020 Thesis Film: Director, Storyboard Artist, Designer, Animator, and Editor.",
  },
  {
    src: "https://assets.mikaokabe.com/storm-patrol-film-01.mp4",
    description:
      "Hawai'i Storm Patrol for the State of Hawaii Department of Transportation: Storyboard Artist, Background Artist, and Assets Creator.",
  },
]
const images = [personal1, personal2, personal3, personal4, personal5]

const PersonalPage = (): React.JSX.Element => {
  const { t } = useI18next()

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledMediaContainer>
        <MasonryLayout columnWidth={400} spacing={15}>
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              src={video.src}
              description={t(video.description)}
              width="100%"
            />
          ))}
        </MasonryLayout>
        <StyledBreak />
        <MasonryLayout columnWidth={400} spacing={15}>
          {images.map((image, index) => (
            <ClickableImage
              key={index}
              src={image}
              alt={`Personal media ${index}`}
            />
          ))}
        </MasonryLayout>
      </StyledMediaContainer>
    </>
  )
}

export default PersonalPage

export const Head: HeadFC = () => <SEO title="Personal" pathname="/personal" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["common", "personal"] }
      }
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
