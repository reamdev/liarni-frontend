import styled from 'styled-components'
import { MainLayoutContentContainerProps } from 'main-layout-entity-components'

export * from './OptionMenu'

export * from './MainContent'

export const MainLayoutContentContainer = styled.div<MainLayoutContentContainerProps>`
  width: calc(118% - ${({ optionHeight, rightAsideHeight }) => optionHeight + rightAsideHeight}px);
  padding: 0 10px;
`

export const MainRigthAsideContainer = styled.div`
  width: 300px;
  padding-top: 25px;

  input {
    color: #e6e8e9;
  }
`