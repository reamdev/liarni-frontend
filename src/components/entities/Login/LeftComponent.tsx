import styled from 'styled-components'
import { Grid } from '@mui/material'

export const LeftComponentGrid = styled(Grid)`
  order: 1;

  @media all and (max-width: 768px) {
    order: 2;
  }
`

export const LeftComponentContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(./assets/img/login-background.webp);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  svg {
    z-index: 2;
  }

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
  }
`
