import { HomeContainer } from 'views/Home/Home.styles'
import { IParallax } from '@react-spring/parallax'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Glados from 'views/Home/Glados/Glados'
import { OrbitControls } from '@react-three/drei'
import { degToRad } from 'three/src/math/MathUtils'

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function Home() {
  const parallax = useRef<IParallax>(null!)

  return (
    <HomeContainer>
      {/* -15, 0, -1: glados */}
      {/* <Canvas dpr={[1, 2]} shadows camera={{ position: [-15, 0, -1], near: 0.1, far: 1000 }}> */}
      {/*   <ambientLight intensity={0.5} /> */}
      {/*   /!* <primitive object={new THREE.AxesHelper(40)} /> *!/ */}
      {/*   <OrbitControls /> */}
      {/*   <Glados position={[-13, -2, -1]} /> */}
      {/*   /!* <Glados position={[-1, -1.1, 0]} rotation={[0, degToRad(20), 0]} /> *!/ */}
      {/* </Canvas> */}
      {/* <Parallax ref={parallax} pages={3} style={{ display: 'flex' }}> */}
      {/*   <ParallaxLayer offset={0} speed={0} factor={3} */}
      {/*                  style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} /> */}

      {/*   <ParallaxLayer offset={0} speed={0} onClick={() => parallax.current.scrollTo(1)}> */}
      {/*     <HomeWelcomeContainer id={'home'}> */}
      {/*       <HomeSectionTitle variant={'h2'} sx={{ fontWeight: 500 }}> Hey, I'm Eduardo. </HomeSectionTitle> */}
      {/*     </HomeWelcomeContainer> */}
      {/*   </ParallaxLayer> */}

      {/*   <ParallaxLayer offset={1} speed={0.5} onClick={() => parallax.current.scrollTo(2)}> */}
      {/*     <HomeAboutMeRoundedContainer id={'about'}/> */}
      {/*   </ParallaxLayer> */}

      {/*   <ParallaxLayer offset={1} speed={0.5} style={{pointerEvents: 'none'}}> */}
      {/*     <HomeAboutMeTextContainer> */}
      {/*       <HomeSectionTitle variant={'h2'} sx={{ fontWeight: 500 }}> About me. </HomeSectionTitle> */}
      {/*       <HomeAboutMeText> */}
      {/*         I am currently working as a Software Engineer Intern at Prudential. I am also the Director of the Software */}
      {/*         Development Club at NJCU, where we help students gain an insight of modern technologies and best */}
      {/*         practices. In the future, I aspire to become a full-time Software Engineer and gain many relevant */}
      {/*         skills to become a great asset to big-tech companies. */}
      {/*         <br /> */}
      {/*         <br /> */}
      {/*         P.S. I also love running! */}
      {/*         <br /> */}
      {/*         <br /> */}
      {/*         Scroll down to check out my technical skills and personal projects! 😊 */}
      {/*       </HomeAboutMeText> */}
      {/*     </HomeAboutMeTextContainer> */}
      {/*   </ParallaxLayer> */}

      {/*   <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} onClick={() => parallax.current.scrollTo(0)}/> */}

      {/*   /!* <ParallaxLayer offset={1} speed={1} style={{ pointerEvents: 'none' }}> *!/ */}
      {/*   /!*   <img src={Images.reactLogo} style={{ width: '15%', marginLeft: '80%' }} /> *!/ */}
      {/*   /!* </ParallaxLayer> *!/ */}

      {/*   /!* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} /> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} /> *!/ */}
      {/*   /!* </ParallaxLayer> *!/ */}

      {/*   /!* <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} /> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} /> *!/ */}
      {/*   /!* </ParallaxLayer> *!/ */}

      {/*   /!* <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} /> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} /> *!/ */}
      {/*   /!* </ParallaxLayer> *!/ */}

      {/*   /!* <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} /> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} /> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} /> *!/ */}
      {/*   /!* </ParallaxLayer> *!/ */}

      {/*   /!* <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} /> *!/ */}
      {/*   /!*   <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} /> *!/ */}
      {/*   /!* </ParallaxLayer> *!/ */}

      {/*   /!* <ParallaxLayer *!/ */}
      {/*   /!*   offset={2.5} *!/ */}
      {/*   /!*   speed={-0.4} *!/ */}
      {/*   /!*   style={{ *!/ */}
      {/*   /!*     display: 'flex', *!/ */}
      {/*   /!*     alignItems: 'center', *!/ */}
      {/*   /!*     justifyContent: 'center', *!/ */}
      {/*   /!*     pointerEvents: 'none', *!/ */}
      {/*   /!*   }}> *!/ */}
      {/*   /!*   <img src={url('earth')} style={{ width: '60%' }} /> *!/ */}
      {/*   /!* </ParallaxLayer> *!/ */}

      {/*   /!* <ParallaxLayer *!/ */}
      {/*   /!*   offset={2} *!/ */}
      {/*   /!*   speed={-0.3} *!/ */}
      {/*   /!*   style={{ *!/ */}
      {/*   /!*     backgroundSize: '80%', *!/ */}
      {/*   /!*     backgroundPosition: 'center', *!/ */}
      {/*   /!*     backgroundImage: url('clients', true), *!/ */}
      {/*   /!*   }} *!/ */}
      {/*   /!* /> *!/ */}

      {/*   /!* <ParallaxLayer *!/ */}
      {/*   /!*   offset={2} *!/ */}
      {/*   /!*   speed={0} *!/ */}
      {/*   /!*   style={{ *!/ */}
      {/*   /!*     display: 'flex', *!/ */}
      {/*   /!*     alignItems: 'center', *!/ */}
      {/*   /!*     justifyContent: 'center', *!/ */}
      {/*   /!*   }} *!/ */}
      {/*   /!*   onClick={() => parallax.current.scrollTo(0)}> *!/ */}
      {/*   /!*   <img src={url('clients-main')} style={{ width: '40%' }} /> *!/ */}
      {/*   /!* </ParallaxLayer> *!/ */}
      {/* </Parallax> */}

    </HomeContainer>
  )
}

export default Home
