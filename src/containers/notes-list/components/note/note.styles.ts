import styled from 'styled-components'

export const Wrapper = styled.div<{active: boolean}>`
  position: relative;
  padding: 0.8rem 1.6rem;
  cursor: ${({ active }) => active ? 'auto' : 'pointer'};
  background: transparent;
  background: ${({ active }) => active ? '#c3963d' : 'transparent'};
  transition: background-color 300ms ease;
  
  &:hover {
    background: #4c5357;
  }
  
  &:hover {
    background: ${({ active }) => active ? '#d7aa3e' : '#4c5357'};
  }
`
export const Title = styled.div`
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
  font-weight: bold;
`
export const Time = styled.div`
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
`
export const Group = styled.div`
  font-size: 1.2rem;
`
export const Delete = styled.div`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem; 
  font-size: 2rem;
  cursor: pointer;
  
  svg {
    transition: fill 300ms;
  }
  
  svg:hover {
    fill: tomato;
  }
`
