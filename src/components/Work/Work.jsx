import { useLocation, useNavigate } from 'react-router'
import image1 from '../../assets/images/card-img1v2.webp'
import image2 from '../../assets/images/card-img2v2.webp'
import image3 from '../../assets/images/card-img3v2.webp'
import image4 from '../../assets/images/card-img4v2.webp'
import image5 from '../../assets/images/card-img6v2.webp'
import image6 from '../../assets/images/card-img5v2.webp'
import gradCircle3 from '../../assets/images/grad-circle3v2.webp'
import gradCircle1 from '../../assets/images/grad-circle1v2.webp'

import Button from '../button/Button'
import { Swork, Sbutton, StyledCard } from './work.styles'

import { useTheme } from 'styled-components'
import FadeinSection from '../../lib/FadeinSection'
import { useInView } from 'react-intersection-observer'
import { forwardRef } from 'react'

//Workリストを個別にフェードインする
const Scard = forwardRef((props, ref) => {
  return <StyledCard ref={ref} {...props} />
})

const Work = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const worksData = {
    title: [
      '株式会社FANMA',
      'ポートフォリオ',
      '株式会社izanow',
      'SeasideHotel',
      '家計簿アプリ',
      'Weatherアプリ',
    ],
    text: [
      '人材紹介会社コーポレートサイト',
      '私自身のポートフォリオ用サイト',
      '化粧品を扱う会社のコーポレートサイト',
      '【架空】海辺のリゾートホテルのサイト',
      '毎月の収支を記録できる家計簿アプリ',
      '世界の天気が検索できるシンプルなアプリ',
    ],
    image: [image1, image2, image3, image4, image5, image6],
    path: [
      'fanma',
      'portfolio',
      'izanow',
      'seasideHotel',
      'householdApp',
      'weatherApp',
    ],
    type: [
      ['Website', 'HTML/CSS', 'Javascript'],
      ['Website', 'React', 'Javascript'],
      ['Website', 'HTML/CSS', 'Javascript'],
      ['Website', 'HTML/CSS', 'Javascript'],
      ['WebApp', 'Typescript', 'React'],
      ['WebApp', 'Typescript', 'React'],
    ],
  }

  const works = worksData.title.map((title, i) => ({
    title: title,
    image: worksData.image[i],
    path: worksData.path[i],
    type: worksData.type[i],
    text: worksData.text[i],
  }))
  const isTopPage = location.pathname === '/'

  const typeBgColor = {
    Website: theme.colors.websiteColor,
    WebApp: theme.colors.webappColor,
    Javascript: theme.colors.jsColor,
    'HTML/CSS': theme.colors.htmlColor,
    React: theme.colors.reactColor,
    Typescript: theme.colors.tsColor,
  }

  return (
    <>
      <Swork
        style={{
          backgroundColor: isTopPage ? 'transparent' : theme.colors.bgWhite,
          paddingTop: isTopPage ? `calc(100vh + 100px)` : '130px',
        }}
      >
        <div className="side" style={{ display: isTopPage ? 'block' : 'none' }}>
          <div className="side-nav">Work</div>
          <div className="side-dot"></div>
          <div className="side-line"></div>
        </div>
        <div className="inner-section">
          <FadeinSection>
            <h2
              style={{ color: isTopPage ? '#fff' : theme.colors.mainColor }}
              className="main-title"
            >
              Works
              <img className="bg-drop" src={gradCircle1} alt="" />
            </h2>

            <h3
              style={{ color: isTopPage ? '#fff' : theme.colors.mainColor }}
              className="ja-title"
            >
              制作したもの
            </h3>
          </FadeinSection>

          <div className="work__contents">
            {works.map((work, index) => {
              const { ref, inView } = useInView({
                threshold: 0.1,
                triggerOnce: true,
              })

              return (
                <Scard
                  ref={ref}
                  className={`work__card fadeup ${inView ? 'visible' : ''}`}
                  key={work.title}
                  style={{
                    transitionDelay: `${index * 0.2}s`, // 遅延を設定
                  }}
                >
                  <div className="work__card-inner">
                    <button
                      className="work__card-button"
                      onClick={() =>
                        navigate(
                          isTopPage ? `/works/${work.path}` : `${work.path}`,
                        )
                      }
                    >
                      <div
                        className="work__img-box"
                        style={{
                          borderColor: isTopPage
                            ? theme.colors.mainColor
                            : 'transparent',
                        }}
                      >
                        <img src={work.image} alt="" />
                      </div>
                    </button>
                    <p className="work__type">
                      {work.type.map((type, i) => (
                        <span
                          key={i}
                          style={{ backgroundColor: typeBgColor[type] }}
                        >
                          {type}
                        </span>
                      ))}
                    </p>
                    <div className="work__text-box">
                      <div className="work__text">
                        <h3 className="card__title">{work.title}</h3>
                        <p className="work__sub-text">{work.text}</p>
                      </div>

                      <Sbutton
                        onClick={() =>
                          navigate(
                            isTopPage ? `/works/${work.path}` : `${work.path}`,
                          )
                        }
                      >
                        view
                      </Sbutton>
                    </div>
                  </div>
                </Scard>
              )
            })}
            <img className="bg-circle grad3" src={gradCircle3} alt="" />
          </div>
          <Button
            color={theme.colors.mainColor}
            onclick={() => navigate(isTopPage ? '/works' : '/')}
          >
            {isTopPage ? 'More' : 'Topへ戻る'}
          </Button>
        </div>
      </Swork>
    </>
  )
}

export default Work
