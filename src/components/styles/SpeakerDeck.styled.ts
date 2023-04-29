import styled from "styled-components"

export const StyledDiv = styled.div`
  /* Box model properties */
  width: 90%;
  margin: 20px auto;
`

export const SpeakerDeckTitle = styled.h3`
  /* Box model properties */
  margin: 0px auto 10px;

  /* Typography properties */
  font-size: 25px;
  font-family: courier, courier new, serif;
`

export const SpeakerDeckIFrame = styled.iframe`
  /* Box model properties */
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0px;

  /* Layout properties */
  display: block;
`
