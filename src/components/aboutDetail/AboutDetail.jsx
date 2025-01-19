import { SAboutDetail } from './AboutDetail.styles'
import img from '../../assets/images/about-page-img2.png'
import { useEffect } from 'react'
import Vivus from 'vivus'
import gsap from 'gsap'
import _ScrollTrigger, { ScrollTrigger } from 'gsap/ScrollTrigger'
import FadeinSection from '../../lib/FadeinSection'
import gradCircle1 from '../../assets/images/grad-circle1v2.webp'

const AboutDetail = () => {
  const isMobile = window.innerWidth <= 430
  console.log(isMobile)

  useEffect(() => {
    const images = document.querySelectorAll('img')
    const handleImageLoad = () => {
      ScrollTrigger.refresh() // 全リソースが読み込まれた後に再計算
    }

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad()
      } else {
        img.addEventListener('load', handleImageLoad)
      }
    })

    return () => {
      images.forEach((img) => img.removeEventListener('load', handleImageLoad))
    }
  }, [])

  useEffect(() => {
    const animation = gsap.to('.career__inner', {
      x: isMobile ? '-900px' : '-90%',

      scrollTrigger: {
        trigger: '.career',
        start: 'top top',
        end: isMobile ? '+=950px' : 'bottom top',
        scrub: true,
        pin: true,
      },
    })
    ScrollTrigger.refresh()

    return () => {
      animation.scrollTrigger.kill()
      animation.kill()
    }
  }, [])

  useEffect(() => {
    if (!isMobile) {
      new Vivus(
        'strength-circle',
        {
          type: 'delayed',

          duration: 100,
          pathTimingFunction: Vivus.EASE,
          animationTimingFunction: Vivus.EASE_IN,
          reverseStack: false,
        },
        () => {
          console.log('Animation complete!')
        },
      )
    } else if (isMobile) {
      const svgIds = [
        'strength-circle-sp1',
        'strength-circle-sp2',
        'strength-circle-sp3',
      ]

      svgIds.forEach((id) => {
        new Vivus(id, {
          type: 'delayed',
          duration: 100,
          pathTimingFunction: Vivus.EASE,
          animationTimingFunction: Vivus.EASE_IN,
          reverseStack: false,
        })
      })
    }
  }, [])

  return (
    <SAboutDetail>
      <div className="inner-section">
        <FadeinSection>
          <h2 className="main-title" style={{ textAlign: 'center' }}>
            Who I Am
          </h2>
          <h3 className="ja-title" style={{ textAlign: 'center' }}>
            私について
          </h3>
        </FadeinSection>

        <div className="iam__container">
          {/* <img className="iam__bg-img" src={bg} alt="" /> */}
          <FadeinSection dir="up">
            <div className="iam__img">
              <img src={img} alt="" />
              <img className="iam__bg" src={gradCircle1} alt="" />
            </div>
          </FadeinSection>
        </div>

        <p className="iam__name">若井　咲 -Wakai Sho</p>
        <p className="iam__introduction">
          大学を卒業後、Webマーケティング事業に従事。Web制作にてフロントエンドとしての経験を積み、現在は独学にてReactやNext.jsを学習しています。SNS運用を通して培ったマーケティングの知識や、トレンドのキャッチアップ力、情報収集力を活かして、Webを通じて新しい体験を生み出していきたいです。
        </p>

        <FadeinSection>
          <h3 className="main-title">Strength</h3>
          <h3 className="ja-title">私の強み</h3>
        </FadeinSection>

        <div className="iam__strength">
          <div className="iam__strength-container">
            <div className="iam__strength-box">
              <h3 className="strength__title">向上心</h3>
              <h4 className="strength__subtitle">ambition</h4>
              <p className="strength__text">
                常により自分の成長につながる方向を模索しています。
              </p>
            </div>
            <div className="iam__strength-box">
              <h3 className="strength__title">継続力</h3>
              <h4 className="strength__subtitle">highly-motivated</h4>
              <p className="strength__text">
                先にあるゴールを楽しみに、毎日コツコツ取り組むことが得意です。
              </p>
            </div>
            <div className="iam__strength-box">
              <h3 className="strength__title">好奇心</h3>
              <h4 className="strength__subtitle">curiosity</h4>
              <p className="strength__text">
                自分の「好き」に対して努力を惜しまず追求します。
              </p>
            </div>
          </div>
          <div className="circle-box">
            <svg
              id="strength-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1082.87 384.83"
            >
              <defs></defs>
              <g id="background">
                <path
                  className="cls-1"
                  d="M384.71,192.42c0,106.2-86.09,192.29-192.29,192.29S.13,298.61.13,192.42,86.22.13,192.42.13s192.29,86.09,192.29,192.29Z"
                />
                <path
                  className="cls-1"
                  d="M728.27,192.42c0,106.2-86.09,192.29-192.29,192.29s-192.29-86.09-192.29-192.29S429.78.13,535.98.13s192.29,86.09,192.29,192.29Z"
                />
                <path
                  className="cls-1"
                  d="M1082.75,192.42c0,106.2-86.09,192.29-192.29,192.29s-192.29-86.09-192.29-192.29S784.26.13,890.46.13s192.29,86.09,192.29,192.29Z"
                />
              </g>
            </svg>
          </div>
          <div className="svg-box-sp">
            <svg
              id="strength-circle-sp1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 381.42 381.43"
            >
              <defs></defs>
              <g>
                <path
                  className="cls-1"
                  d="M190.71.25C85.69.25.25,85.69.25,190.71s85.44,190.46,190.46,190.46,190.46-85.44,190.46-190.46S295.73.25,190.71.25Z"
                />
              </g>
            </svg>
            <svg
              id="strength-circle-sp2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 381.42 381.43"
            >
              <defs></defs>
              <g>
                <path
                  className="cls-1"
                  d="M190.71.25C85.69.25.25,85.69.25,190.71s85.44,190.46,190.46,190.46,190.46-85.44,190.46-190.46S295.73.25,190.71.25Z"
                />
              </g>
            </svg>

            <svg
              id="strength-circle-sp3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 381.42 381.43"
            >
              <defs></defs>
              <g>
                <path
                  className="cls-1"
                  d="M190.71.25C85.69.25.25,85.69.25,190.71s85.44,190.46,190.46,190.46,190.46-85.44,190.46-190.46S295.73.25,190.71.25Z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="career">
        <div className="inner-section">
          <FadeinSection>
            <h2 className="main-title">Biography</h2>
            <h3 className="ja-title">エンジニアを目指すまで</h3>
          </FadeinSection>
          <div className="career__outer">
            <div className="career__container">
              <div className="career__inner">
                <ul className="career__list">
                  <li>
                    <FadeinSection dir="up">
                      <time>1997.08</time>
                      <p className="text">学生時代</p>
                    </FadeinSection>

                    <span className="dot"></span>
                    <FadeinSection dir="up">
                      <p className="text">
                        京都府に生まれる。学生時代は英語と世界史が大好きで、特に世界史は毎日世界地図を眺めるほど楽しんでいた得意科目。
                      </p>
                    </FadeinSection>
                  </li>
                  <li>
                    <FadeinSection dir="up">
                      <time>2016.04</time>
                      <p className="text">大学入学</p>
                    </FadeinSection>

                    <span className="dot"></span>
                    <FadeinSection dir="up">
                      <p className="text">
                        同志社大学文学部入学。
                        アメリカ史を専攻し、黒人女性の権利向上を研究。3年次に休学し、カナダ語学留学や、キューバ縦断を経験する。
                      </p>
                    </FadeinSection>
                  </li>
                  <li>
                    <FadeinSection dir="up">
                      <time>2021.6</time>
                      <p className="text">Webマーケティングの企業に就職</p>
                    </FadeinSection>
                    <span className="dot"></span>
                    <FadeinSection dir="up">
                      <p className="text">
                        大学卒業後、Webマーケティング事業を行う会社にて、Instagramの企画運用及び、Web制作に従事する。
                      </p>
                    </FadeinSection>
                  </li>
                  <li>
                    <FadeinSection dir="up">
                      <time>Now</time>
                      <p className="text">フロントエンド技術を学習中</p>
                    </FadeinSection>

                    <span className="dot"></span>
                    <FadeinSection dir="up">
                      <p className="text">
                        Web制作に携わる中で、エンジニアの仕事を突き詰めたいと思い退職。フロントエンドエンジニアとして、Javascripを中心にReact、Next.jsなど独学で学習中。
                      </p>
                    </FadeinSection>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SAboutDetail>
  )
}

export default AboutDetail
