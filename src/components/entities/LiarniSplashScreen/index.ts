import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LiarniSplashScreenContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #11181d;
  color: #e6e6e6;
`

export const LiarniSplashScreenMotionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
`

export const LiarniSplashScreenTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;

  p {
    font-size: 4.5rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    padding: 0;
  }
`

export const LiarniSplashScreenLoader = styled.div`
  width: 120px;
  height: 40%;
`
