import styled from "styled-components"
import { Link } from "gatsby-plugin-react-i18next"

export const StyledDiv = styled.div<{
  iconWidth: number
  iconHeight: number
  iconSpacing: number
}>`
  /* Layout properties */
  display: flex;

  /* Selectors */
  & > *:not(:last-child) {
    /* Box model properties */
    width: ${(props) => props.iconWidth}px;
    height: ${(props) => props.iconHeight}px;
    margin-right: ${(props) => props.iconSpacing}px;
  }

  & svg {
    /* Box model properties */
    width: ${(props) => props.iconWidth}px;
    height: ${(props) => props.iconHeight}px;
  }
`

export const StyledLink = styled.a`
  /* Color properties */
  color: #000000;

  /* Selectors */
  &:hover {
    /* Color properties */
    color: #9090ff;
  }

  &:active {
    /* Color properties */
    color: #ccccff;
  }
`

export const StyledLanguageLink = styled(Link)`
  /* Layout properties */
  display: flex;

  /* Color properties */
  color: #000000;

  /* Selectors */
  &:hover {
    /* Color properties */
    color: #9090ff;
  }

  &:active {
    /* Color properties */
    color: #ccccff;
  }
`
