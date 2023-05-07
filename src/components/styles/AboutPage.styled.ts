import styled from "styled-components"

export const StyledLayoutGrid = styled.div`
  /* Box model properties */
  width: 90%;
  margin: 20px auto;

  /* Layout properties */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
`

export const StyledImg = styled.img`
  /* Box model properties */
  width: calc(100% - 20px);
  max-width: 350px;
  margin: 10px;

  /* Layout properties */
  justify-self: end;

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Box model properties */
    margin: 10px auto;

    /* Layout properties */
    grid-column: 1 / -1;
  }
`

export const StyledParagraph = styled.p`
  /* Box model properties */
  width: calc(100% - 20px);
  max-width: 350px;
  margin: 10px;

  /* Typography properties */
  font-size: 12px;
  font-family: courier, courier new, serif;

  /* Color properties */
  color: #000000;

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Box model properties */
    margin: 10px auto;

    /* Layout properties */
    grid-column: 1 / -1;
  }
`

export const StyledLinksGrid = styled.div`
  /* Box model properties */
  margin: 10px auto;

  /* Layout properties */
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
  grid-column: 1 / -1;
  align-items: center;

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Layout properties */
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 420px) {
    /* Layout properties */
    grid-template-columns: auto;
  }

  @media only screen and (max-width: 240px) {
    /* Layout properties */
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
  }

  @media only screen and (max-width: 200px) {
    /* Layout properties */
    grid-template-columns: auto auto;
  }
`

export const StyledLink = styled.a`
  /* Typography properties */
  font-size: 15px;
  font-family: courier, courier new, serif;
  text-decoration: none;

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

  & svg {
    /* Box model properties */
    width: 25px;
    height: 25px;
    margin-right: 10px;

    /* Layout properties */
    vertical-align: -25%;

    /* Media queries */
    @media only screen and (max-width: 240px) {
      /* Box model properties */
      margin: 0px;
    }
  }
`

export const StyledSpan = styled.span`
  /* Media queries */
  @media only screen and (max-width: 240px) {
    /* Layout properties */
    display: none;
  }
`
