import { useInView } from 'react-intersection-observer'
import bg from '../../assets/images/about-img2.png'
import img from '../../assets/images/about-page-img.png'
import gitIcon from '../../assets/images/github-mark-w.png'
import { Sabout } from './About.styles'
import { useEffect } from 'react'
import { theme } from '../../styles/theme'
import drop from '../../assets/images/drop-line-w.webp'
import Button from '../button/Button'
import { NavLink, useNavigate } from 'react-router'
import FadeinSection from '../../lib/FadeinSection'

const About = ({ setCurrentColor }) => {
  const navigate = useNavigate()
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setCurrentColor(theme.colors.aboutBg)
    }
  }, [inView])
  return (
    <>
      <Sabout className="about" ref={ref}>
        <div className="side-nav">About</div>
        <div className="side-line"></div>
        <div className="inner-section">
          <div className="about__container">
            <div className="about__img">
              <img className="bg-img" src={bg} alt="" />
              <FadeinSection>
                <img className="about-img" src={img} alt="" />
              </FadeinSection>
            </div>

            <div className="about__contents">
              <FadeinSection>
                <h2 className="main-title" style={{ color: '#fff' }}>
                  Who I Am
                </h2>
                <h3 style={{ color: '#fff' }} className="ja-title">
                  私について
                </h3>
              </FadeinSection>
              <FadeinSection>
                <p className="text">若井　咲 -Wakai Sho</p>
              </FadeinSection>
              <FadeinSection>
                <p>
                  1997年8月生。京都府出身。同志社大学を卒業後、
                  Webマーケティング事業を行うベンチャー企業に入社。約３年間、
                  SNS運用やWeb制作業務に携わる。Web制作の実装を通して、
                  より高度なWebアプリの開発に携わりたいと考え、現在は退社し独学にて学習中。
                </p>
              </FadeinSection>
              <NavLink
                to="https://github.com/showakai"
                target="_blank"
                className="github-btn"
                rel="noopener noreferrer"
              >
                <img src={gitIcon} alt="githubアイコン" />
              </NavLink>
              <Button
                onclick={() => navigate('/about')}
                margin="50px 0 0"
                color="white"
              >
                more
              </Button>
            </div>
          </div>
        </div>

        <img className="bg-drop" src={drop} alt="" />
      </Sabout>
    </>
  )
}

export default About
