import * as React from 'react'

// actions
enum ActionsTypes {
  SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY',
  SET_ACTIVE_NOTE = 'SET_ACTIVE_NOTE',
  SET_SEARCH = 'SET_SEARCH',
  SET_USER = 'SET_USER',
}

const setActiveCategory = (payload: string) => ({
  type: ActionsTypes.SET_ACTIVE_CATEGORY,
  payload
})

const setActiveNote = (payload: string) => ({
  type: ActionsTypes.SET_ACTIVE_NOTE,
  payload
})

const setSearch = (payload: string) => ({
  type: ActionsTypes.SET_SEARCH,
  payload
})

const setUser = (payload: string) => ({
  type: ActionsTypes.SET_USER,
  payload
})

interface Action {
  type: ActionsTypes
  payload: any
}

interface iState {
  activeCategory: string
  activeNote: string
  search: string
  userId: string
}

// reducer
const defaultState: iState = {
  activeCategory: 'All',
  activeNote: '',
  search: '',
  userId: '',
}

const stateReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.SET_ACTIVE_CATEGORY: {
      return {
        ...state,
        activeCategory: action.payload
      }
    }
    case ActionsTypes.SET_ACTIVE_NOTE: {
      return {
        ...state,
        activeNote: action.payload
      }
    }
    case ActionsTypes.SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      }
    }
    case ActionsTypes.SET_USER: {
      return {
        ...state,
        userId: action.payload
      }
    }
    default: return state
  }
}

interface ContextInterface {
  state: iState
  dispatch: any
}

export const State = {
  actions: {
    setActiveCategory,
    setActiveNote,
    setSearch,
    setUser,
  },
  reducer: stateReducer,
  context: React.createContext({} as ContextInterface),
  defaultState,
}
