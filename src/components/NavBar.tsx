import React, { useState, useEffect } from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import NavIconBar from "../components/NavIconBar"
import {
  StyledDiv,
  StyledWebsiteTitleBar,
  StyledWebsiteTitle,
  StyledIconBarContainer,
  StyledPagesBar,
  StyledLink,
  StyledMenuIconContainer,
  StyledImg,
  StyledMobileWebsiteTitle,
  StyledMobileLinksContainer,
  StyledMobileLink,
  StyledMobileIconBarContainer,
} from "./styles/NavBar.styled"
import menuIcon from "../images/hambmenu120.png"
import closeIcon from "../images/xicon120.png"

const pages = [
  {
    title: "Story",
    route: "/",
  },
  {
    title: "Sketches",
    route: "/sketches",
  },
  {
    title: "Personal",
    route: "/personal",
  },
  {
    title: "About",
    route: "/about",
  },
]

const websiteTitle = "Mika Okabe"

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const { t, language } = useI18next()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setShowMenu(false)
      }
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY)
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
        <StyledWebsiteTitle>{t(websiteTitle).toUpperCase()}</StyledWebsiteTitle>
        <StyledIconBarContainer>
          <NavIconBar iconWidth={25} iconHeight={25} iconSpacing={10} />
        </StyledIconBarContainer>
      </StyledWebsiteTitleBar>
      <StyledPagesBar>
        {pages.map((page) => (
          <StyledLink key={page.route} to={page.route} language={language}>
            {t(page.title).toUpperCase()}
          </StyledLink>
        ))}
        <StyledMenuIconContainer>
          <StyledImg
            src={showMenu ? closeIcon : menuIcon}
            onClick={() => {
              setShowMenu((curr) => !curr)
            }}
          />
        </StyledMenuIconContainer>
        <StyledMobileWebsiteTitle>{t(websiteTitle)}</StyledMobileWebsiteTitle>
      </StyledPagesBar>
      <StyledMobileLinksContainer showMenu={showMenu}>
        {pages.map((page) => (
          <StyledMobileLink
            key={page.route}
            to={page.route}
            language={language}
          >
            {t(page.title).toUpperCase()}
          </StyledMobileLink>
        ))}
        <StyledMobileIconBarContainer>
          <NavIconBar iconWidth={25} iconHeight={25} iconSpacing={10} />
        </StyledMobileIconBarContainer>
      </StyledMobileLinksContainer>
    </StyledDiv>
  )
}

export default NavBar
