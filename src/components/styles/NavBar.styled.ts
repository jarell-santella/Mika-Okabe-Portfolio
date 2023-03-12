import { Link } from "gatsby"
import styled from "styled-components"

export const StyledDiv = styled.div<{ extended: boolean }>`
  width: 100%;
  max-height: 150px;
  margin-bottom: 20px;
  position: sticky;
  top: -90px;
  background-color: white;

  @media only screen and (max-width: 800px) {
    max-height: ${props => (props.extended ? "100vh" : "60px")};
    top: 0px;
  }
`

export const StyledWebsiteTitleBar = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`

export const StyledWebsiteTitle = styled.h1`
  margin-left: 13px;
  margin-right: 13px;
  font-size: 50px;
  font-family: courier, courier new, serif;
  text-align: center;
  color: black;
`


export const StyledPagesBar = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledLink = styled(Link)`
  font-size: 25px;
  font-family: courier, courier new, serif;
  text-align: center;
  text-decoration: none;
  color: black;
  margin-left: 30px;
  margin-right: 30px;

  &:hover {
    color: #9090FF;
  }

  &:active {
    color: #CCCCFF;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`

export const StyledMenuIconContainer = styled.div`
  display: none;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: auto;
  float: left;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    display: flex;
  }
`

export const StyledMobileWebsiteTitle = styled.h2`
  display: none;
  position: absolute;
  margin: auto;
  padding-bottom: 2px;
  float: center;
  font-size: 40px;
  font-weight: 400;
  font-family: courier, courier new, serif;
  text-align: center;
  color: black;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    display: flex;
  }

  @media only screen and (max-width: 525px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 325px) {
    width: 190px;
  }

  @media only screen and (max-width: 230px) {
    visibility: hidden;
  }
`

export const StyledMobileLinksContainer = styled.div<{ extended: boolean }>`
  width: 100%;
  height: ${props => (props.extended ? "calc(100vh - 60px)" : "0vh")};
  display: flex;
  padding-top: 10vh;
  position: absolute;
  visibility: ${(props) => (props.extended ? "visible" : "hidden")};
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  background-color: white;
  transition: height 0.4s ease-in-out, visibility 0.4s;

  @media only screen and (min-width: 800px) {
    display: none;
  }
`

export const StyledMobileLink = styled(Link)`
  font-size: 25px;
  font-family: courier, courier new, serif;
  text-align: center;
  text-decoration: none;
  color: black;
  margin-top: 15px;
  margin-bottom: 15px;

  &:hover {
    color: #9090FF;
  }

  &:active {
    color: #CCCCFF;
  }
`