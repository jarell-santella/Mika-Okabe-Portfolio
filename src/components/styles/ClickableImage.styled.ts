import styled from "styled-components"
import { Close } from "@mui/icons-material"

export const StyledImg = styled.img<{
  width?: string
  height?: string
  showCursor: boolean
}>`
  /* Box model properties */
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};

  /* Animation and transition properties */
  transition: transform 0.2s ease-in-out;

  /* User interface properties */
  cursor: ${(props) => (props.showCursor ? "pointer" : "none")};

  /* Selectors */
  &:hover {
    /* Transformation properties */
    transform: scale(1.05);
  }
`

export const StyledBackground = styled.div<{ showModal: boolean }>`
  /* Box model properties */
  width: 100%;
  height: 100%;

  /* Layout properties */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Positional properties */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  /* Color properties */
  background-color: rgba(0, 0, 0, 0.9);

  /* Visibility properties */
  opacity: ${(props) => (props.showModal ? 1 : 0)};
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};

  /* Animation and transition properties */
  transition: visibility 0.2s, opacity 0.2s ease-in-out;
`

export const StyledImgModal = styled.img<{ widthLongest: boolean }>`
  /* Box model properties */
  width: ${(props) => (props.widthLongest ? "80%" : "auto")};
  height: ${(props) => (props.widthLongest ? "auto" : "80%")};
`

export const StyledCloseIcon = styled(Close)`
  /* Box model properties */
  width: 20px;
  height: 20px;
  margin: 10px;

  /* Positional properties */
  position: absolute;
  top: 0;
  right: 0;

  /* Color properties */
  color: #FFFFFF;

  /* Visibility properties */
  opacity: 0.75;

  /* User interface properties */
  cursor: pointer;

  /* Selectors */
  &:hover {
    /* Visibility properties */
    opacity: 0.9;
  }

  &:active {
    /* Visibility properties */
    opacity: 1;
  }
`
