import * as React from "react"
import {
  StyledDiv,
  StyledVideo,
  StyledParagraph,
} from "./styles/VideoCard.styled"

interface VideoCardProps {
  src: string
  description: string
  width?: string
  height?: string
  poster?: string
  preload?: string
}

const VideoCard = ({
  src,
  description,
  width,
  height,
  poster,
  preload,
}: VideoCardProps): React.JSX.Element => {
  return (
    <StyledDiv>
      <StyledVideo
        controls
        controlsList="nodownload"
        width={width}
        height={height}
        poster={poster}
        preload={preload}
      >
        <source src={poster ? src : `${src}#t=0.001`} type="video/mp4" />
      </StyledVideo>
      <StyledParagraph>{description}</StyledParagraph>
    </StyledDiv>
  )
}

export default VideoCard
