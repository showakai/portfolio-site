import styled from 'styled-components'
import About from '../components/about/About'
import Mainvisual from '../components/mainvisual/Mainvisual'
import Skills from '../components/skills/Skills'
import Work from '../components/Work/Work'
import bgImg from '../assets/images/bgImg.png'
import { useState } from 'react'

import { theme } from '../styles/theme'

const SBackground = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -10;
`
const SBackgroundChange = styled.div`
  width: 100vw;
  background-image: none;
  transition: all 1s;
  z-index: 2;
  position: relative;
`

const Home = () => {
  const [currentColor, setCurrentColor] = useState(theme.colors.workBg)
  //   const [currentSection, setCurrentSection] = useState(null)

  //   const sections = [1, 2, 3].map((section) => {
  //     const { ref, inview } = useInView({
  //       threshold: 0.5,
  //       onChange: (inview) => {
  //         if (inview) {
  //           setCurrentSection(section)
  //         }
  //       },
  //     })

  //     return { ref, inview, section }
  //   })

  return (
    <div className="home">
      <SBackground>
        <Mainvisual />
        <Work />
      </SBackground>
      <SBackgroundChange style={{ backgroundColor: currentColor }}>
        <Skills setCurrentColor={setCurrentColor} />
        <About setCurrentColor={setCurrentColor} />
      </SBackgroundChange>
    </div>
  )
}

export default Home
