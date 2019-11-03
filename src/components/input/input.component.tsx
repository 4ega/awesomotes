import React from 'react'
import { BaseInput } from './input.styles'

export const Input = ({ field, form, ...props }: any) => {
  return <BaseInput {...field} {...props} />
}
