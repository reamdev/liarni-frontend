import styled from 'styled-components'
import { OptionsContainerProps } from 'main-layout-entity-components'

export const OptionLogoContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: tomato;

    svg {
      width: 50px;
      height: 50px;
      fill: #e6e8e9;
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const OptionLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  > a {
    width: 100%;
    display: flex;
    align-items: center;
    color: #0c0c0c;
    padding: 10px 15px;
    margin: 5px 0;
    text-decoration: none;
    border-radius: 25px;
    transition: all 0.3s ease-in-out;
    color: #e6e8e9;

    svg {
      width: 25px;
      height: 25px;
      margin-right: 8px;
      background-color: transparent;
    }

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`

export const OptionsContainer = styled.div<OptionsContainerProps>`
  width: 100%;
  display: flex;
  height: calc(100% - ${(({ logoHeight, userHeight }) => logoHeight + userHeight)}px);
  flex-direction: column;
`

export const OptionUserOptionsContainer = styled.div`
  &.show {
    display: block;
  }

  display: none;
  position: absolute;
  width: 250px;
  height: 50px;
  top: calc(82%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5 ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  button {
    width: 100%;
    height: 100%;
  }
`

export const OptionUserContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease-in-out;

  > div {
    background-color: transparent;

    &:first-of-type {
      width: 40px;
    }

    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      width: calc(100% - 40px - 20px);
      padding: 0 10px;

      > span {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.5);

        &:first-of-type {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 1);
        }
      }
    }

    &:nth-of-type(3) {
      width: 20px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      > svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`

export const OptionMenuContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 10px 15px;
  overflow: hidden;
  overflow-y: scroll;
`

export const NewPostOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  > h3 {
    color: #e6e8e9;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > div {
      &:nth-of-type(2) {
        width: 88%;

        > div {
          textarea {
            color: #e6e8e9;
          }

          &::before {
            border-color: rgba(230, 232, 233, 0.23);
          }
        }
      }
    }
  }

  button {
    width: 100%;
    margin: 20px 0;
    align-self: flex-end;
  }
`
