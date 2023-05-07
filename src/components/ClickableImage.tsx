import React, { useState, useEffect, useRef } from "react"
import {
  StyledImg,
  StyledBackground,
  StyledImgModal,
  StyledCloseIcon,
} from "./styles/ClickableImage.styled"

interface ClickableImageProps {
  src: string
  alt: string
  width?: string
  height?: string
}

const ClickableImage = ({
  src,
  alt,
  width,
  height,
}: ClickableImageProps): React.JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showCursor, setShowCursor] = useState<boolean>(true)
  const [widthLongest, setWidthLongest] = useState<boolean>(true)

  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible")
  }, [showModal])

  const handleSettingWidthLongest = () => {
    if (!imageRef.current) return
    const image = imageRef.current
    if (image.naturalWidth >= image.naturalHeight) {
      const scaleFactor = (window.innerWidth * 0.8) / image.naturalWidth
      image.naturalHeight * scaleFactor >= window.innerHeight * 0.8
        ? setWidthLongest(false)
        : setWidthLongest(true)
    } else {
      const scaleFactor = (window.innerHeight * 0.8) / image.naturalHeight
      image.naturalWidth * scaleFactor >= window.innerWidth * 0.8
        ? setWidthLongest(true)
        : setWidthLongest(false)
    }
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined

    const handleMouseMove = () => {
      setShowCursor(true)

      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = undefined
      }

      timeoutId = setTimeout(() => {
        setShowCursor(false)
      }, 4000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleSettingWidthLongest)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleSettingWidthLongest)
    }
  }, [])

  return (
    <>
      <StyledImg
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => {
          setShowModal(true)
        }}
        onLoad={() => {
          handleSettingWidthLongest()
        }}
        showCursor={showCursor}
      />
      <StyledBackground
        showModal={showModal}
        onClick={() => {
          setShowModal(false)
        }}
      >
        <StyledImgModal
          src={src}
          alt={alt}
          onClick={(event) => {
            event.stopPropagation()
          }}
          widthLongest={widthLongest}
        />
        <StyledCloseIcon
          onClick={() => {
            setShowModal(false)
          }}
        />
      </StyledBackground>
    </>
  )
}

export default ClickableImage
