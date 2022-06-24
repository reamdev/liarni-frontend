import styled from 'styled-components'
import { Grid } from '@mui/material'

export const RightComponentGrid = styled(Grid)`
  order: 2;
  background-color: #11181d;

  @media all and (max-width: 768px) {
    order: 1;
  }
`

export const RightComponentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 90%;
  }
`

export const LoginButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 20px 0;
  }

  button {
    width: 90%;
  }
`

export const LoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  > div {
    width: 90%;
    margin-bottom: 1rem;

    > label {
      background-color: #11181d;
      color: #e6e8e9;
      padding: 0 2px;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  > button {
    width: 90%;
  }
`

export const LoginFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  > button {
    width: 90%;
  }
`

export const LoginSloganContainer = styled.div`
  width: 50%;
  margin-bottom: 25px;

  svg {
    width: 100px;
    height: 100px;
    margin-left: -16px;
  }

  h2 {
    color: #e6e8e9;
    margin-bottom: 20px;
    font-weight: 800;
  }

  h3 {
    color: #e6e8e9;
    font-weight: 800;
  }
`
export const FormsTitleContainer = styled.div`
  width: 100%;
  text-align: center;

  > h2 {
    font-size: 1.75rem;
  }
`

export const RegisterInputsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;

  > div {
    width: 45%;

    > label {
      color: #e6e8e9;
    }
  }

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const RegisterDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  > button {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`

export const RegisterFormContainer = styled.form`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
