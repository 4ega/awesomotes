import React, { useContext } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Input, Wrapper } from './search.styles'
import { State } from '../../store'

export const Search = () => {
  const { dispatch } = useContext(State.context)

  return (
    <Wrapper>
      <IoIosSearch />
      <Input
        onChange={(e) => dispatch(State.actions.setSearch(e.target.value))}
      />
    </Wrapper>
  )
}
