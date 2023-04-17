import {
  HomeAboutMeRoundedContainer,
  HomeAboutMeText, HomeAboutMeTextContainer,
  HomeContainer, HomeSectionTitle,
  HomeWelcomeContainer,
} from 'views/Home/Home.styles'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Glados from 'views/Home/Glados/Glados'
import { OrbitControls } from '@react-three/drei'
import { degToRad } from 'three/src/math/MathUtils'
import Images from 'utils/Images'

function Home() {
  const parallax = useRef<IParallax>(null!)

  return (
    <HomeContainer>

    </HomeContainer>
  )
}

export default Home
