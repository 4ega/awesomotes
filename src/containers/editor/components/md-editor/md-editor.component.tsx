import ForEditor from 'for-editor'
import * as React from 'react'
import { useState } from 'react'

export const MdEditor = ({ initialText, updateNote }: any) => {
  const [ currentText, setCurrentText ] = useState(initialText)
  return (
    <ForEditor
      placeholder="Start typing here"
      onChange={(text) => {
        setCurrentText(text)
        updateNote(text)
      }}
      value={currentText || ''}
    />
  )
}
