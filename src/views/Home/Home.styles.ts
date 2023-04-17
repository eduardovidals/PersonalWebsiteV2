import { styled, Typography } from '@mui/material'
import { ParallaxLayer } from '@react-spring/parallax'

export const HomeContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  flex: 1;
  margin-top: -70px;  
`

export const HomeWelcomeContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
`

export const HomeSection = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HomeSectionTitle = styled(Typography)`
  text-align: center;
  background: -webkit-linear-gradient(left, #42a5f5, #14b8a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const HomeAboutMeRoundedContainer = styled('div')`
  background-color: #805E73;
  width: 175vw;
  height: 150vh;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  margin-top: -150px;
`

export const HomeAboutMeTextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-align: center;
`

export const HomeAboutMeText = styled(Typography)`
  font-size: 0.8rem;
  max-width: 95%;
  color: white;
  
  @media (min-width: 35em) {
    max-width: 500px;
  }
  @media (min-width: 47em) {
    max-width: 700px;
    font-size: 1.1rem;
  }
`
