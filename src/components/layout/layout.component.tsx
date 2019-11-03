import * as React from 'react'
import { Wrapper, Header, Row, GlobalStyle } from './layout.styles'

export const Layout: React.FunctionComponent = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Header>
      Awesomotes
    </Header>
    <Row>
      {children}
    </Row>
  </Wrapper>
)
