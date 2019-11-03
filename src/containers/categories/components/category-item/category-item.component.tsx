import * as React from 'react'
import { useDrop } from 'react-dnd'
import { Wrapper } from './category-item.styles'

interface CategoryItemProp {
  category: {
    id: string
  }
  activeCategory: string
  onClick: () => void
  onDrop: (noteId: string) => void
}

export const CategoryItem: React.FunctionComponent<CategoryItemProp> = ({
  category,
  activeCategory,
  onClick,
  onDrop
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'Note',
    drop: (note) => onDrop((note as any).noteId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })
  return (
    <Wrapper
      ref={drop}
      active={category.id === activeCategory}
      isOver={isOver}
      onClick={onClick}
    >
      {category.id}
    </Wrapper>
  )
}
