import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import { map, get, defaultTo } from 'lodash'
import { State } from '../../store'
import { CREATE_CATEGORY, GET_CATEGORIES, UPDATE_NOTE_CATEGORY } from '../../gql'
import { FooterButton, Modal } from '../../components'
import { CreateCategoryForm } from './components/create-category-form'
import { CategoryItem } from './components/category-item'
import { Wrapper } from './categories.styles'

export const Categories = () => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const { state: { activeCategory, userId }, dispatch } = useContext(State.context)
  const { data, loading } = useQuery(GET_CATEGORIES, {
    variables: {
      id: userId,
    }
  })
  const [ createCategory ] = useMutation(CREATE_CATEGORY)
  const [ updateNote ] = useMutation(UPDATE_NOTE_CATEGORY)
  const closeModal = () => setModalIsOpen(false)

  useEffect(() => {
    if (data && data.getCategories === null && !loading) {
      createCategory({
        variables: {
          id: userId,
          categories: ['Notes'],
        },
        refetchQueries: ['GetCategories']
      })
    }
  }, [data, loading, createCategory, userId])

  const categories = defaultTo(get(data, 'getCategories'), [])

  return (
    <Wrapper>
      {!loading && map([{id: 'All'}, ...categories], (category) => (
        <CategoryItem
          key={category.id}
          activeCategory={activeCategory}
          category={category}
          onClick={() => {
            dispatch(State.actions.setActiveCategory(category.id))
          }}
          onDrop={(noteId) => {
            updateNote({
              variables: {
                noteId,
                userId,
                categoryId: category.id,
              }
            })
          }}
        />
      ))}
      <FooterButton
        onClick={() => setModalIsOpen(true)}
      >
        New Category
      </FooterButton>
      <Modal
        title="Create Category"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <CreateCategoryForm
          onClose={closeModal}
        />
      </Modal>
    </Wrapper>
  )
}
