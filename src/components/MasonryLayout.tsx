import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import {
  StyledDiv,
  StyledMasonryColumn,
  StyledMasonryItem,
} from "./styles/MasonryLayout.styled"

interface MasonryLayoutProps {
  children: React.ReactNode
  columnWidth: number
  spacing: number
}

const MasonryLayout = ({
  children,
  columnWidth,
  spacing,
}: MasonryLayoutProps) => {
  const [numColumns, setNumColumns] = useState<number>(0)
  const [columns, setColumns] = useState<React.ReactNode[][]>([[]])

  const containerRef = useRef<HTMLDivElement>(null)

  const updateNumColumns = () => {
    const container = containerRef.current
    if (!container) return
    const containerWidth = container.clientWidth
    console.log(containerWidth)
    const newNumColumns = Math.floor(containerWidth / (columnWidth + spacing))
    containerWidth / (newNumColumns * (columnWidth + spacing) + spacing) >= 1
      ? setNumColumns(newNumColumns)
      : setNumColumns(newNumColumns - 1)
  }

  useEffect(() => {
    window.addEventListener("resize", updateNumColumns)
    return () => {
      window.removeEventListener("resize", updateNumColumns)
    }
  }, [])

  useLayoutEffect(() => {
    updateNumColumns()
  }, [columnWidth, spacing])

  useLayoutEffect(() => {
    const childrenArray = React.Children.toArray(children)
    if (numColumns <= 0) {
      setColumns([[]])
    } else if (numColumns === 1) {
      setColumns([childrenArray])
    } else if (numColumns === childrenArray.length) {
      setColumns(childrenArray.map((element) => [element]))
    } else {
      const result: React.ReactNode[][] = Array.from(
        { length: numColumns },
        () => []
      )
      for (let i = 0; i < childrenArray.length; i++) {
        result[i % numColumns].push(childrenArray[i])
      }
      setColumns(result)
    }
  }, [children, numColumns])

  return (
    <StyledDiv ref={containerRef}>
      {columns.map((column, columnIndex) => (
        <StyledMasonryColumn
          key={columnIndex}
          columnWidth={columnWidth}
          spacing={spacing}
        >
          {column.map((element, elementIndex) => (
            <StyledMasonryItem key={elementIndex} spacing={spacing}>
              {element}
            </StyledMasonryItem>
          ))}
        </StyledMasonryColumn>
      ))}
    </StyledDiv>
  )
}

export default MasonryLayout
