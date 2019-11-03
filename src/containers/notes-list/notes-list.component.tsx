import * as React from 'react'
import { get, map, filter, includes } from 'lodash'
import moment from 'moment'
import { Wrapper } from './notes-list.styles'
import { FooterButton } from '../../components/footer-button'
import { Note } from './components'
import { useContext } from 'react'
import { State } from '../../store'
import { Modal, Search } from '../../components'
import { useState } from 'react'
import { CreateNoteForm } from './components/create-note-form'
import { useQuery, useMutation } from 'react-apollo'
import { DELETE_NOTE, GET_NOTES } from '../../gql'

export const NotesList = () => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const { state, dispatch } = useContext(State.context)
  const { activeNote, activeCategory, search } = state
  const { data } = useQuery(GET_NOTES, {
    variables: {
      userId: state.userId
    }
  })
  const [ deleteNote ] = useMutation(DELETE_NOTE)
  let notes = get(data, 'getNotes', [])
  if (activeCategory !== 'All') {
    notes = filter(notes, (note) => note.categoryId === activeCategory)
  }
  if (search) {
    notes = filter(notes, (note) => includes(note.title, search))
  }
  const closeModal = () => setModalIsOpen(false)
  return (
    <Wrapper>
      <Search />
      {map(notes, (note) => (
        <Note
          key={note.noteId}
          noteId={note.noteId}
          onClick={() => dispatch(State.actions.setActiveNote(note.noteId))}
          onDelete={(id) => {
            deleteNote({
              variables: {
                noteId: id,
                userId: state.userId,
              },
              refetchQueries: ['GetNotes']
            })
          }}
          active={note.noteId === activeNote}
          title={note.title}
          categoryId={note.categoryId}
          time={moment(parseInt(note.updatedAt)).format('YYYY-MM-DD')}
        />
      ))}
      <FooterButton
        onClick={() => setModalIsOpen(true)}
      >
        Add Note
      </FooterButton>
      <Modal
        title="New note"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <CreateNoteForm
          onClose={closeModal}
        />
      </Modal>
    </Wrapper>
  )
}
