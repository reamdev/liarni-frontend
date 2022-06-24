declare module 'login-buttons' {
  export type ModalSize = 30 | 40

  export interface LoginButtonsProps {
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSize: React.Dispatch<React.SetStateAction<ModalSize>>,
  }
}
