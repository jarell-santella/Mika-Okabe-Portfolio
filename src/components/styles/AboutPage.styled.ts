import styled from "styled-components"

export const StyledLayoutGrid = styled.div`
  width: 90vw;
  display: grid;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 20px;
`

export const StyledImg = styled.img`
  width: calc(100% - 20px);
  max-width: 350px;
  margin: 10px;
  justify-self: end;

  @media only screen and (max-width: 800px) {
    grid-column: 1 / -1;
    margin-left: auto;
    margin-right: auto;
  }
`

export const StyledParagraph = styled.p`
  width: calc(100% - 20px);
  max-width: 350px;
  margin: 10px;
  font-size: 12px;
  font-family: courier, courier new, serif;
  color: black;

  @media only screen and (max-width: 800px) {
    grid-column: 1 / -1;
    margin-left: auto;
    margin-right: auto;
  }
`

export const StyledLinksGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  grid-column: 1 / -1;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`

export const StyledLink = styled.a`
  font-size: 15px;
  font-family: courier, courier new, serif;
  text-decoration: none;
  color: black;

  &:hover {
    color: #9090FF;
  }

  &:active {
    color: #CCCCFF;
  }
`
