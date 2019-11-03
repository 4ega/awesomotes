import React from 'react'
import { Wrapper, Title, Group, Time, Delete } from './note.styles'
import { IoIosCloseCircle } from 'react-icons/io'
import { useDrag } from 'react-dnd'

interface NoteProps {
  noteId: string
  title: string
  categoryId: string
  time: string
  active: boolean
  onClick: any
  onDelete: (id: string) => void
}

export const Note = ({ title, categoryId, time, onClick, active, onDelete, noteId }: NoteProps) => {
  const [, drag] = useDrag({
    item: { noteId, type: 'Note' },
  })
  return (
    <Wrapper
      ref={drag}
      onClick={onClick}
      active={active}
    >
      <Title>{title}</Title>
      <Time>{time}</Time>
      <Group>{categoryId}</Group>
      <Delete onClick={(event) => {
        event.stopPropagation()
        onDelete(noteId)
      }}><IoIosCloseCircle /></Delete>
    </Wrapper>
  )
}
