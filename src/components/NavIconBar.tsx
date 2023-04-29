import * as React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import {
  StyledDiv,
  StyledLink,
  StyledLanguageLink,
} from "./styles/NavIconBar.styled"
import {
  EmailOutlined,
  Instagram,
  LinkedIn,
  YouTube,
  Translate,
} from "@mui/icons-material"

interface NavIconBarProps {
  iconWidth: number
  iconHeight: number
  iconSpacing: number
}

const NavIconBar = ({
  iconWidth,
  iconHeight,
  iconSpacing,
}: NavIconBarProps) => {
  const { language, defaultLanguage, originalPath } = useI18next()

  return (
    <StyledDiv
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      iconSpacing={iconSpacing}
    >
      <StyledLink href="mailto:mikaokabe@gmail.com">
        <EmailOutlined />
      </StyledLink>
      <StyledLink href="https://instagram.com/wishterias" target="_blank">
        <Instagram />
      </StyledLink>
      <StyledLink href="https://www.linkedin.com/in/mikaokabe/" target="_blank">
        <LinkedIn />
      </StyledLink>
      <StyledLink href="https://www.youtube.com/@wishterias" target="_blank">
        <YouTube />
      </StyledLink>
      <StyledLanguageLink
        to={originalPath === "/404/" ? "/404.html/" : originalPath}
        language={language === defaultLanguage ? "jp" : "en"}
      >
        <Translate />
      </StyledLanguageLink>
    </StyledDiv>
  )
}

export default NavIconBar
