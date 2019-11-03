import * as React from 'react'
import { useQuery, useMutation } from 'react-apollo'
import { useContext } from 'react'
import { State } from '../../store'
import { GET_NOTES, UPDATE_NOTE } from '../../gql'
import { get, find, includes, debounce } from 'lodash'
import { MdEditor } from './components/md-editor/md-editor.component'
import { Wrapper } from './editor.styles'

export const Editor = () => {
  const { state: { activeNote, activeCategory, userId } } = useContext(State.context)
  const { data } = useQuery(GET_NOTES, {
    variables: {
      userId,
    }
  })
  const [ createNote ] = useMutation(UPDATE_NOTE)
  const note = find(
    get(data, 'getNotes'),
    note => note.noteId === activeNote && includes(['All', note.categoryId], activeCategory)
  )
  const update = debounce((text) => createNote({
    variables:{
      note: {
        noteId: note.noteId,
        userId,
        updatedAt: Date.now(),
        text: encodeURIComponent(text),
      }
    }
  }), 500)

  const key = get(note, 'noteId', 0)
  let text = get(note, 'text')
  if (text) {
    text = decodeURIComponent(text)
  }

  return (
    <Wrapper>
      {note ? (
        <MdEditor
          key={key}
          initialText={text}
          updateNote={update}
        />
      ) : null}
    </Wrapper>
  )
}
