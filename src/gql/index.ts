import gql from 'graphql-tag'

export const GET_CATEGORIES = gql`
  query GetCategories($id: String!) {
    getCategories(id: $id) {
      id
    }
  }
`
export const CREATE_CATEGORY = gql`
  mutation CreateCategory($id: String!, $categories: [String]!) {
    createCategory(id: $id, categories: $categories) {
      id
    }
  }
`
export const GET_NOTES = gql`
  query GetNotes($userId: String!, $categoryId: String) {
    getNotes(userId: $userId, categoryId: $categoryId) {
      noteId
      categoryId
      text
      title
      updatedAt
    }
  }
`
export const CREATE_NOTE = gql`
  mutation CreateNote(
    $noteId: String!,
    $userId: String!,
    $categoryId: String!,
    $title: String!,
    $updatedAt: String!,
  ) {
    createNote (note: {
      noteId: $noteId,
      userId: $userId,
      categoryId: $categoryId,
      title: $title,
      updatedAt: $updatedAt
    }) {
      noteId
      categoryId
      text
      title
      updatedAt
    }
  }
`
export const UPDATE_NOTE = gql`
  mutation UpdateNote($note: iNote!) {
    updateNote(note: $note) {
      categoryId
      noteId
      text
      title
      updatedAt
    }
  }
`
export const UPDATE_NOTE_CATEGORY = gql`
  mutation UpdateNoteCategory($noteId: String!, $userId: String!, $categoryId: String!) {
    updateNoteCategory(noteId: $noteId, userId: $userId, categoryId: $categoryId) {
      categoryId
      noteId
      text
      title
      updatedAt
    }
  }
`
export const DELETE_NOTE = gql`
  mutation DeleteNote($userId: String!, $noteId: String!) {
    deleteNote(userId: $userId, noteId: $noteId) {
      deleted
      noteId
    }
  }
`
