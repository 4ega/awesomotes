import * as React from 'react'
import { map } from 'lodash'
import { Formik, Form, Field } from 'formik'
import { Input, Button, Select } from '../../../../components'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { CREATE_NOTE, GET_CATEGORIES } from '../../../../gql'
import uuidv4 from 'uuid/v4'
import { useContext } from 'react'
import { State } from '../../../../store'

interface CreateNoteFormComponent {
  onClose: () => void
}

export const CreateNoteForm: React.FunctionComponent<CreateNoteFormComponent> = ({ onClose }) => {
  const { state: { userId } } = useContext(State.context)
  const getCategories = useQuery(GET_CATEGORIES, {
    variables: {
      id: userId,
    }
  })
  const [ createNote ] = useMutation(CREATE_NOTE)

  return (
    <Formik
      initialValues={{
        title: '',
        categoryId: null,
      }}
      onSubmit={(values) => (
        createNote({
          variables: {
            noteId: uuidv4(),
            userId,
            updatedAt: Date.now(),
            categoryId: values.categoryId,
            title: values.title,
          },
          refetchQueries: ['GetNotes']
        }).then(onClose)
      )}
    >
      {() => (
        <Form>
          <Field
            type="text"
            name="title"
            placeholder="Category Name"
            component={Input}
          />
          <Field
            as={Select}
            name="categoryId"
          >
            <option >None</option>
            {map(getCategories.data.getCategories, (category) => (
              <option value={category.id}>{category.id}</option>
            ))}
          </Field>
          <div>
            <Button
              disabled={getCategories.loading}
              type="submit"
            >
              Create
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
