import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  color: rgba(0,0,0,.6);
  padding: .8rem 1.6rem .8rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  border-radius: .28571429rem;
  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
  user-select: none;
  transition: all 300ms;
  
  &:hover {
    color: white;
    background: #659bf8;
  }
`
