import styled from "styled-components"
import { Link } from "gatsby-plugin-react-i18next"
import { MenuRounded, CloseRounded } from "@mui/icons-material"

export const StyledDiv = styled.div<{ showMenu: boolean }>`
  /* Box model properties */
  width: 100%;
  max-width: 1230px;
  max-height: 150px;
  margin: 0px auto 20px auto;

  /* Positional properties */
  position: sticky;
  top: -90px;
  z-index: 1;

  /* Color properties */
  background-color: #FFFFFF;

  /* Selectors */
  & ~ * {
    max-width: 1230px;
  }

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
  /* Positional properties */
  position: absolute;
  text-align: center;

  /* Typography properties */
  font-size: 50px;
  font-family: courier, courier new, serif;

  /* Color properties */
  color: #000000;
`

export const StyledIconBarContainer = styled.div`
  /* Box model properties */
  margin: auto 10px auto auto;

  /* Layout properties */
  display: flex;

  /* Positional properties */
  float: right;
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

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Layout properties */
    display: none;
  }
`

export const StyledMenuIconContainer = styled.div`
  /* Box model properties */
  margin: auto auto auto 10px;

  /* Layout properties */
  display: none;

  /* Positional properties */
  float: left;

  /* User interface properties */
  cursor: pointer;

  /* Selectors */
  & svg {
    /* Box model properties */
    width: 40px;
    height: 40px;

    /* Media queries */
    @media only screen and (max-width: 175px) {
      /* Box model properties */
      width: 30px;
      height: 30px;
    }
  }

  /* Media queries */
  @media only screen and (max-width: 800px) {
    /* Layout properties */
    display: flex;
  }
`

export const StyledMenuIcon = styled(MenuRounded)`
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

export const StyledCloseIcon = styled(CloseRounded)`
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

export const StyledMobileWebsiteTitle = styled.h2`
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
    width: 65px;
  }

  @media only screen and (max-width: 175px) {
    /* Box model properties */
    width: 50px;

    /* Typography properties */
    font-size: 15px;
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

  /* Media queries */
  @media only screen and (max-width: 250px) {
    /* Typography properties */
    font-size: 20px;
  }
`

export const StyledMobileIconBarContainer = styled.div`
  /* Box model properties */
  margin: 15px auto;
`
