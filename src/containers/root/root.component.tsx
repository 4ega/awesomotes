import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Layout } from '../../components'
import { Editor } from '../editor'
import { Categories } from '../categories'
import { NotesList } from '../notes-list'
import { useEffect, useReducer } from 'react'
import { State } from '../../store'
import AWSAppSyncClient, { AUTH_TYPE, defaultDataIdFromObject } from 'aws-appsync/lib'
import { CONFIG } from '../../aws-config'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import uuidv4 from 'uuid/v4'

const client = new AWSAppSyncClient({
  url: CONFIG.url,
  region: CONFIG.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: CONFIG.apiKey,
  },
  disableOffline: true,
  cacheOptions: {
    dataIdFromObject: (object) => {
      switch (object.__typename) {
        case 'Note': {
          return (object as any).noteId
        }
        default: return defaultDataIdFromObject(object)
      }
    },
  },
})

export const Root = () => {
  const [state, dispatch] = useReducer(State.reducer, State.defaultState)

  useEffect(() => {
    let userId = localStorage.getItem('userId')
    if (!userId) {
      userId = uuidv4()
      localStorage.setItem('userId', userId)
    }
    dispatch(State.actions.setUser(userId))
  }, [state.userId])

  if (!state.userId) {
      return null
  }

  return (
    <ApolloProvider client={client}>
      <State.context.Provider value={{ state, dispatch }}>
        <DndProvider backend={HTML5Backend}>
          <Layout>
            <Categories />
            <NotesList />
            <Editor/>
          </Layout>
        </DndProvider>
      </State.context.Provider>
    </ApolloProvider>
  )
}
