declare module 'modals-ui-component' {
  import { Dispatch, ReactNode, SetStateAction } from 'react'

  export type DefaultModalProps = {
    widthModal?: number;
    heightModal?: number;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
  }

  export type ModalContainerProps = {
    width?: number;
    height?: number;
  }
}