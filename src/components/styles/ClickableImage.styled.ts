import styled from "styled-components"
import { Close } from "@mui/icons-material"

export const StyledImage = styled.img<{
  width?: string
  height?: string
  showCursor: boolean
}>`
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  transition: transform 0.2s ease-in-out;
  cursor: ${(props) => (props.showCursor ? "pointer" : "none")};

  &:hover {
    transform: scale(1.05);
  }
`

export const StyledBackground = styled.div<{ showModal: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;
  opacity: ${(props) => (props.showModal ? 1 : 0)};
  transition: visibility 0.2s, opacity 0.2s ease-in-out;
`

export const StyledImageModal = styled.img<{ widthLongest: boolean }>`
  width: ${(props) => (props.widthLongest ? "80%" : "auto")};
  height: ${(props) => (props.widthLongest ? "auto" : "80%")};
`

export const StyledCloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
  margin: 10px;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.75;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 1;
  }
`
