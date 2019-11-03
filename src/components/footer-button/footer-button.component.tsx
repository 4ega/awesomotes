import React from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { Wrapper } from './footer-button.styles'

export const FooterButton: React.FunctionComponent<{onClick: any}> = ({
  onClick,
  children
}) => (
  <Wrapper onClick={onClick}>
    <IoIosAddCircle
      style={{
        fontSize: '1.8rem',
        marginRight: '0.4rem'
      }}
    />
    {children}
  </Wrapper>
)
