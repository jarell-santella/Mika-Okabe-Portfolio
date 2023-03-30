import React, { useState, useEffect } from "react"
import {
  StyledDiv,
  StyledWebsiteTitleBar,
  StyledWebsiteTitle,
  StyledPagesBar,
  StyledLink,
  StyledMenuIconContainer,
  StyledMobileWebsiteTitle,
  StyledMobileLinksContainer,
  StyledMobileLink,
} from "./styles/NavBar.styled"
import MenuIcon from "../images/hambmenu120.png"
import CloseIcon from "../images/xicon120.png"

const pages = [
  {
    title: "STORY",
    route: "/",
  },
  {
    title: "SKETCHES",
    route: "/sketches",
  },
  {
    title: "PERSONAL",
    route: "/personal",
  },
  {
    title: "ABOUT",
    route: "/about",
  },
]

const websiteTitle = "MIKA OKABE"

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setShowMenu(false)
      }
    }

    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
      window.scrollTo(0, scrollPosition)
    }
  }, [showMenu])

  return (
    <StyledDiv showMenu={showMenu}>
      <StyledWebsiteTitleBar>
        <StyledWebsiteTitle>{websiteTitle}</StyledWebsiteTitle>
      </StyledWebsiteTitleBar>
      <StyledPagesBar>
        {pages.map((page) => (
          <StyledLink key={page.route} to={page.route}>
            {page.title}
          </StyledLink>
        ))}
        <StyledMenuIconContainer>
          <img
            src={showMenu ? CloseIcon : MenuIcon}
            width={40}
            height={40}
            onClick={() => {
              setShowMenu((curr) => !curr)
            }}
          />
        </StyledMenuIconContainer>
        <StyledMobileWebsiteTitle>{websiteTitle}</StyledMobileWebsiteTitle>
      </StyledPagesBar>
      <StyledMobileLinksContainer showMenu={showMenu}>
        {pages.map((page) => (
          <StyledMobileLink key={page.route} to={page.route}>
            {page.title}
          </StyledMobileLink>
        ))}
      </StyledMobileLinksContainer>
    </StyledDiv>
  )
}

export default NavBar
