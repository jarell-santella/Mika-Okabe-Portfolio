import styled from "styled-components"

export const StyledDiv = styled.div`
  /* Layout properties */
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const StyledVideo = styled.video<{
  width?: string
  height?: string
}>`
  /* Box model properties */
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
`

export const StyledParagraph = styled.p`
  /* Positional properties */
  text-align: center;

  /* Typography properties */
  font-size: 15px;
  font-family: courier, courier new, serif;

  /* Color properties */
  color: #000000;
`
