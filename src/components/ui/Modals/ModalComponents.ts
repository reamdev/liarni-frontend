import styled from 'styled-components'
import { ModalContainerProps } from 'modals-ui-component'

export const ModalContainer = styled.div<ModalContainerProps>`
  width: ${(props) => props.width ? props.width : 60}%;
  min-height: ${(props) => props.height ? props.height : 50}%;
  max-height: 90%;
  background-color: #11181d;
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.5 ease;
  position: relative;

  > #default-modal-close-btn {
    position: absolute;
    top: 10px;
    right: 10px;

    > svg {
      width: 20px;
      height: 20px;
      fill: #e6e8e9;
    }

    &:hover {
      transform: scale(1.08);
    }

    &:active {
      transform: scale(1);
    }
  }
`
