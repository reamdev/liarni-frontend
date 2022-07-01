import styled from 'styled-components'
import { MainLayoutContentContainerProps } from 'main-layout-entity-components'

export * from './OptionMenu'

export * from './MainContent'

export const MainLayoutContentContainer = styled.div<MainLayoutContentContainerProps>`
  /* width: calc(100% - ${({ optionHeight, rightAsideHeight }) => optionHeight + rightAsideHeight}px); */
  width: 600px;
  /* padding: 0 20px; */
`

export const MainRigthAsideContainer = styled.div`
  width: 300px;
  padding: 0 20px;
  padding-top: 10px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);

  > div {
    > div {
      > div {
        > input, textarea {
          color: #e6e8e9;
        }

        > fieldset {
          border-color: rgba(230, 232, 233, 0.23);
        }
      }
    }

    > button {
      border-radius: 0px 5px 5px 0px;
      border-right: none;
      background-color: #e6e8e9;
    }
  }
`