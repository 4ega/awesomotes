import * as React from 'react'
import ReactModal from 'react-modal'
import { Title } from './modal.styles'

interface ModalProps {
  title: string
  isOpen: boolean
  onRequestClose: () => any
}

export const Modal: React.FunctionComponent<ModalProps> = ({
  isOpen,
  title,
  onRequestClose,
  children
}) => (
  <ReactModal
    style={{
      content: {
        width: '40rem',
        left: '50%',
        bottom: 'auto',
        marginLeft: '-20rem',
      },
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.75)',
      }
    }}
    isOpen={isOpen}
    closeTimeoutMS={300}
    onRequestClose={onRequestClose}
  >
    <Title>{title}</Title>
    {children}
  </ReactModal>
)
