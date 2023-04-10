import styled from "styled-components"

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledMasonryItem = styled.div<{ spacing: number }>`
  width: 100%;
  margin-bottom: ${(props) => props.spacing}px;

  & > *:first-child {
    width: 100%;
    height: 100%;
    display: block;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`

export const StyledMasonryColumn = styled.div<{
  columnWidth: number
  spacing: number
}>`
  width: ${(props) => props.columnWidth}px;
  display: flex;
  margin: ${(props) => props.spacing}px ${(props) => props.spacing / 2}px;
  align-items: center;
  flex-direction: column;

  &:first-child {
    margin-left: ${(props) => props.spacing}px;
  }

  &:last-child {
    margin-right: ${(props) => props.spacing}px;
  }
`
