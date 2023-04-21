import { Link } from "gatsby"
import styled from "styled-components"

export const StyledDiv = styled.div<{ showMenu: boolean }>`
  /* Box model properties */
  width: 100%;
  max-height: 150px;
  margin-bottom: 20px;

  /* Positional properties */
  position: sticky;
  top: -90px;
  z-index: 1;

  /* Color properties */
  background-color: #FFFFFF;

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Box model properties */
    max-height: ${(props) => (props.showMenu ? "100vh" : "60px")};

    /* Positional properties */
    top: 0px;
  }
`

export const StyledWebsiteTitleBar = styled.div`
  /* Box model properties */
  height: 90px;

  /* Layout properties */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Layout properties */
    display: none;
  }
`

export const StyledWebsiteTitle = styled.h1`
  /* Layout properties */
  text-align: center;

  /* Typography properties */
  font-size: 50px;
  font-family: courier, courier new, serif;

  /* Color properties */
  color: #000000;
`

export const StyledPagesBar = styled.div`
  /* Box model properties */
  height: 60px;

  /* Layout properties */
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledLink = styled(Link)`
  /* Box model properties */
  margin: auto 30px;

  /* Layout properties */
  text-align: center;

  /* Typography properties */
  font-size: 25px;
  font-family: courier, courier new, serif;
  text-decoration: none;

  /* Color properties */
  color: #000000;

  /* Selectors */
  &:hover {
    /* Color properties */
    color: #9090FF;
  }

  &:active {
    /* Color properties */
    color: #CCCCFF;
  }

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Layout properties */
    display: none;
  }
`

export const StyledMenuIconContainer = styled.div`
  /* Box model properties */
  margin: 10px auto 10px 10px;

  /* Layout properties */
  display: none;

  /* Positional properties */
  float: left;

  /* User interface properties */
  cursor: pointer;

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Layout properties */
    display: flex;
  }
`

export const StyledMobileWebsiteTitle = styled.h2`
  /* Box model properties */
  padding-bottom: 2px;

  /* Layout properties */
  display: none;

  /* Positional properties */
  position: absolute;
  text-align: center;

  /* Typography properties */
  font-weight: normal;
  font-size: 40px;
  font-family: courier, courier new, serif;

  /* Color properties */
  color: #000000;

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Layout properties */
    display: block;
  }

  @media only screen and (max-width: 375px) {
    /* Typography properties */
    font-size: 30px;
  }

  @media only screen and (max-width: 310px) {
    /* Typography proprties */
    font-size: 20px;
  }

  @media only screen and (max-width: 250px) {
    /* Box model properties */
    width: 90px;
  }

  @media only screen and (max-width: 175px) {
    /* Visibility properties */
    visibility: hidden;
  }
`

export const StyledMobileLinksContainer = styled.div<{ showMenu: boolean }>`
  /* Box model properties */
  width: 100%;
  height: ${(props) => (props.showMenu ? "calc(100vh - 60px)" : "0vh")};
  padding-top: 10vh;
  overflow: hidden;

  /* Layout properties */
  display: none;
  align-items: center;
  flex-direction: column;

  /* Positional properties */
  position: absolute;

  /* Color properties */
  background-color: #FFFFFF;

  /* Visibility properties */
  visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};

  /* Animation and transition properties */
  transition: height 0.4s ease-in-out, visibility 0.4s;

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Layout properties */
    display: flex;
  }
`

export const StyledMobileLink = styled(Link)`
  /* Box model properties */
  margin: 15px auto;

  /* Positional properties */
  text-align: center;

  /* Typography properties */
  font-size: 25px;
  font-family: courier, courier new, serif;
  text-decoration: none;

  /* Color properties */
  color: #000000;

  /* Selectors */
  &:hover {
    /* Color properties */
    color: #9090FF;
  }

  &:active {
    /* Color properties */
    color: #CCCCFF;
  }
`
