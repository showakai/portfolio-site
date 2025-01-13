import { SmainTitle, Sskills } from './Skills.styled'
import icon1 from '../../assets/images/skills-icon1.png'
import icon2 from '../../assets/images/skills-icon2.png'
import icon3 from '../../assets/images/skills-icon3.png'
import icon4 from '../../assets/images/skills-icon4.png'
import icon5 from '../../assets/images/skills-icon5.png'
import icon6 from '../../assets/images/skills-icon6.png'
import icon7 from '../../assets/images/skills-icon7.png'
import { SkillChart } from './SkillChart'
import { useEffect } from 'react'
import Vivus from 'vivus'
import { useInView } from 'react-intersection-observer'
import { theme } from '../../styles/theme'
import { SkillChartDesign } from './SkillChartDesign'
import FadeinSection from '../../lib/FadeinSection'

const Skills = ({ setCurrentColor }) => {
  const skills = [
    { tool: 'illustrator', ability: 50, icon: icon1 },
    { tool: 'photoshop', ability: 50, icon: icon2 },
    { tool: 'Figma', ability: 50, icon: icon3 },
    { tool: 'VScode', ability: 50, icon: icon4 },
    { tool: 'HTML/CSS', ability: 50, icon: icon5 },
    { tool: 'Javascript', ability: 50, icon: icon6 },
    { tool: 'React', ability: 50, icon: icon7 },
    { tool: 'Typescript', ability: 50, icon: icon7 },
  ]

  const { ref, inView } = useInView({
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      setCurrentColor(theme.colors.skillBg)
    }
  }, [inView])

  useEffect(() => {
    new Vivus(
      'skill-line',
      {
        type: 'delayed',
        duration: 100,
        pathTimingFunction: Vivus.EASE_IN,
        animationTimingFunction: Vivus.EASE_IN,
        reverseStack: true,
      },
      () => {
        console.log('Animation complete!')
      },
    )
  }, [])

  return (
    <Sskills className="skills" ref={ref}>
      <div className="side-nav">Skills</div>
      <div className="side-line"></div>
      <div className="inner-section">
        <div className="skills__title-box">
          <FadeinSection>
            <SmainTitle className="main-title">Skills</SmainTitle>
            <h3 style={{ color: '#fff' }} className="ja-title">
              できること
            </h3>
          </FadeinSection>
        </div>

        <FadeinSection>
          <p className="skills__title">Web Development</p>
          <p className="skills__read">
            コーポレートサイトからECサイト、Wordpressのテーマ構築等の経験があります。
            <br />
            Reactを使用したWebアプリケーションの開発にも挑戦しています。
          </p>
        </FadeinSection>
        <FadeinSection dir="up">
          <div className="skills__contents">
            <svg
              id="skill-line"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 308.41 694.05"
            >
              <defs></defs>
              <g id="background">
                <path
                  className="cls-1"
                  d="M3.82,692.95H1.69V.5h2.13v692.45ZM2.69,691.95h.13V1.5h-.13v690.45Z"
                />
                <path
                  className="cls-1"
                  d="M307.91,207.63H2.25v-2.21h305.66v2.21ZM3.25,206.63h303.66v-.21H3.25v.21Z"
                />
                <path
                  className="cls-1"
                  d="M306.16,693.55H.5v-2.21h305.66v2.21ZM1.5,692.55h303.66v-.21H1.5v.21Z"
                />
              </g>
            </svg>

            <SkillChart />
          </div>
        </FadeinSection>
        <FadeinSection>
          <p className="skills__title">Web Design</p>
          <p className="skills__read">
            illustrator,photoshopなどのツールを用いて、Instagramのコンテンツ制作、運用を行なっていました。企画からデザインまで一通りの経験があります。
          </p>
        </FadeinSection>
        <FadeinSection dir="up">
          <div className="skills__contents">
            <svg
              id="skill-line-design"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 148.15 252.05"
            >
              <defs></defs>
              <g id="background">
                <path
                  className="cls-1"
                  d="M147.9,251.8H.25V.25h.5v251.05h147.15v.5Z"
                />
              </g>
            </svg>

            <SkillChartDesign />
          </div>
        </FadeinSection>
      </div>
    </Sskills>
  )
}

export default Skills
