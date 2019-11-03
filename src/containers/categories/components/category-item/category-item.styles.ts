import styled from 'styled-components'

export const Wrapper = styled.div<{ active: boolean, isOver: boolean }>`
  padding: 0.8rem 1.6rem;
  font-size: 1.4rem; 
  cursor: ${({ active }) => active ? 'auto' : 'pointer'};
  background: ${({ active, isOver }) => isOver ? '#d7aa3e' : active ? '#659bf8' : 'transparent'};
  transition: background-color 300ms ease;
  
  &:hover {
    background: ${({ active }) => active ? '#73afff' : '#4c5357'};
  }
`
