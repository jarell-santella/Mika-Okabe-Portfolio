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
  StyledMobileLink
} from "./styles/NavBar.styled"
import menuIcon from "../images/hambmenu120.png"
import closeIcon from "../images/xicon120.png"

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

const websiteTitle = "MIKA'S PORTFOLIO"

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const getStyledLinks = (type: string) => {
    if (type === "normal") {
      return (pages.map(page => (
        <StyledLink key={page.route} to={page.route}>{page.title}</StyledLink>
      )))
    } else if (type === "mobile") {
      return (pages.map(page => (
        <StyledMobileLink key={page.route} to={page.route}>{page.title}</StyledMobileLink>
      )))
    }
  }

  const handleResize = () => {
    if (window.innerWidth > 800) {
      setShowMenu(false)
    }
  }

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
      window.scrollTo(0, scrollPosition)
    }
  }, [showMenu])

  return (
    <StyledDiv className={showMenu ? "extended-menu" : "normal-menu"} extended={showMenu}>
      <StyledWebsiteTitleBar>
        <StyledWebsiteTitle>{websiteTitle}</StyledWebsiteTitle>
      </StyledWebsiteTitleBar>
      <StyledPagesBar>
        {getStyledLinks("normal")}
        <StyledMenuIconContainer>
          <img src={showMenu ? closeIcon : menuIcon} width={40} height={40} onClick={() => { setShowMenu((curr) => !curr) }} />
        </StyledMenuIconContainer>
        <StyledMobileWebsiteTitle>{websiteTitle}</StyledMobileWebsiteTitle>
      </StyledPagesBar>
      <StyledMobileLinksContainer id="mobile-links-container" extended={showMenu}>
        {getStyledLinks("mobile")}
      </StyledMobileLinksContainer>
    </StyledDiv>
  )
}

export default NavBar
