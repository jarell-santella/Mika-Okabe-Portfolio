import styled from "styled-components"

export const StyledDiv = styled.div`
  width: 90vw;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`

export const SpeakerDeckTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 25px;
  font-family: courier, courier new, serif;
`

export const SpeakerDeckIFrame = styled.iframe`
  width: 100%;
  height: calc(90vw / (16/9));
  display: block;
  border: 0px;
  credentialless: true;
  loading: lazy;
`
