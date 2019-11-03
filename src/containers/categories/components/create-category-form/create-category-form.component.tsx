import React, { useContext } from 'react'
import { map } from 'lodash'
import { Formik, Form, Field } from 'formik'
import { useMutation, useQuery } from 'react-apollo'
import { CREATE_CATEGORY, GET_CATEGORIES } from '../../../../gql'
import { Input, Button } from '../../../../components'
import { State } from '../../../../store'

interface CreateCategoryFormProps {
  onClose: () => void
}

export const CreateCategoryForm: React.FunctionComponent<CreateCategoryFormProps> = ({ onClose }) => {
  const { state: { userId } } = useContext(State.context)
  const { data, loading } = useQuery(GET_CATEGORIES, {
    variables: {
      id: userId,
    }
  })
  const [ createCategory ] = useMutation(CREATE_CATEGORY)

  return (
    <Formik
      initialValues={{
        name: ''
      }}
      onSubmit={(values) => (
        createCategory({
          variables: {
            id: userId,
            categories: [
              ...map(data.getCategories, ({ id }: any) => id),
              values.name
            ]
          },
          refetchQueries: ['GetCategories']
        }).then(onClose)
      )}
    >
      {() => (
        <Form>
          <Field
            type="text"
            name="name"
            placeholder="Category Name"
            component={Input}
          />
          <Button disabled={loading} type="submit">Create</Button>
        </Form>
      )}
    </Formik>
  )
}
