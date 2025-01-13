import {
  Smainvisual,
  Sscroll,
  textAnimation,
  scrollLine,
} from './Mainvisual.styles'
import topCopy from '../../assets/images/top-copy.png'
import drop from '../../assets/images/drop-line.png'
import gradCircle1 from '../../assets/images/grad-circle1-2.webp'
import gradCircle2 from '../../assets/images/grad-circle2.webp'
import gradCircle3 from '../../assets/images/grad-circle3.webp'
import gradCircle4 from '../../assets/images/grad-circle4.webp'
import blurCircle1 from '../../assets/images/blur-circle1.webp'
import blurCircle2 from '../../assets/images/blur-circle2.webp'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)
const Mainvisual = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        tl.kill()
      },
    })

    tl.fromTo(
      'h1',
      { opacity: 0, filter: 'blur(20px)' },
      { opacity: 1, filter: 'blur(0px)', duration: 1.5, delay: 0.5 },
    )

    // circles.forEach((circle) => {
    //   tl.fromTo(
    //     circle,
    //     {
    //       opacity: 0,
    //     },

    //     {
    //       opacity: 1,
    //       duration: 0.5,
    //     },
    //   )
    // })

    return () => tl.kill()
  }, [])

  useEffect(() => {
    const animations = [
      gsap.fromTo(
        '.grad2, .grad4',
        { x: 0, opacity: 1 },
        {
          x: 300,
          opacity: 0.2,

          scrollTrigger: {
            trigger: '.mv-trigger',
            start: 'top 10%',
            end: 'bottom top',
            scrub: true,
          },
        },
      ),
      gsap.fromTo(
        '.grad1, .grad3',
        { x: 0, opacity: 1 },
        {
          x: -350,
          opacity: 0.2,
          scrollTrigger: {
            trigger: '.mv-trigger',
            start: 'top 10%',
            end: 'bottom top',
            scrub: true,
          },
        },
      ),
      gsap.fromTo(
        '.blur1, .blur2',
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: '.mv-trigger',
            start: 'top 10%',
            end: 'bottom top',
            scrub: true,
          },
        },
      ),
    ]

    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger.kill()
        animation.kill()
      })
    }
  }, [])

  return (
    <Smainvisual className="mv-trigger">
      <img
        className="bg-circle grad1"
        src={gradCircle1}
        alt="背景グラデーション1"
      />
      <img
        className="bg-circle grad2"
        src={gradCircle2}
        alt="背景グラデーション2"
      />
      <img
        className="bg-circle grad3"
        src={gradCircle3}
        alt="背景グラデーション3"
      />
      <img
        className="bg-circle grad4"
        src={gradCircle4}
        alt="背景グラデーション4"
      />
      <img className="bg-circle blur1" src={blurCircle1} alt="背景ぼかし1" />
      <img className="bg-circle blur2" src={blurCircle2} alt="背景ぼかし2" />
      <img className="bg-drop" src={drop} alt="背景波紋" />
      <img className="bg-drop" src={drop} alt="背景波紋" />
      <img className="bg-drop" src={drop} alt="背景波紋" />
      <div className="bg-letter">
        <span>Welcome</span>
        <span>Welcome</span>
        <span>Welcome</span>
        <span>Welcome</span>
      </div>

      <div className="bg-object"></div>
      <div className="container">
        <h1>
          <img src={topCopy} alt="トップテキスト" />
          <span>Portfolio</span>
        </h1>
      </div>

      <Sscroll>
        <span className="scroll-line"></span>
        <p>scroll</p>
      </Sscroll>
    </Smainvisual>
  )
}

export default Mainvisual
