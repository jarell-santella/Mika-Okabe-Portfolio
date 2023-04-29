import styled from "styled-components"

export const StyledDiv = styled.div`
  /* Layout properties */
  display: flex;
  justify-content: center;
`

export const StyledMasonryItem = styled.div<{ spacing: number }>`
  /* Box model properties */
  width: 100%;
  margin-bottom: ${(props) => props.spacing}px;

  /* Selectors */
  & > *:first-child {
    /* Box model properties */
    width: 100%;
    height: 100%;
    
    /* Layout properties */
    display: block;
  }

  &:last-child {
    /* Layout properties */
    margin-bottom: 0px;
  }
`

export const StyledMasonryColumn = styled.div<{
  columnWidth: number
  spacing: number
}>`
  /* Box model properties */
  max-width: ${(props) => props.columnWidth}px;
  margin-right: ${(props) => props.spacing}px;

  /* Layout properties */
  display: flex;
  align-items: center;
  flex-direction: column;

  /* Selectors */
  &:last-child {
    /* Box model properties */
    margin-right: 0px;
  }
`
