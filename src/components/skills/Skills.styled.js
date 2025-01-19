import styled, { keyframes } from 'styled-components'
import icon1 from '../../assets/images/skills-icon1.png'
import icon2 from '../../assets/images/skills-icon2.png'
import icon3 from '../../assets/images/skills-icon3.png'
import icon4 from '../../assets/images/skills-icon4.png'
import icon5 from '../../assets/images/skills-icon5.png'
import icon6 from '../../assets/images/skills-icon6.png'
import icon7 from '../../assets/images/skills-icon7.png'
import gradCircle3 from '../../assets/images/grad-circle3.webp'

export const draw = keyframes`
    from{
        stroke-dashoffset: 700;
    }
      to{
        stroke-dashoffset: 0;
      }
    `

export const Sskills = styled.section`
  /* background: ${({ theme }) => theme.colors.skillBg}; */
  border-radius: 30px;
  position: relative;
  font-family: 'futura-pt';
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 140px;
  & .skills__title-box {
    position: sticky;
    top: 20%;
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      position: relative;
    }
  }

  & p.skills__read {
    font-size: 1.5rem;
    margin-bottom: 40px;
    line-height: 2;
    letter-spacing: 0.05em;
    margin-left: min(20vw, 300px);
    font-family: 'Noto Sans JP';
  }

  & p.skills__title {
    margin-block: 80px 20px;
    font-size: 3.5rem;
    margin-left: min(20vw, 300px);
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    & p.skills__read,
    & p.skills__title {
      margin-left: 0;
    }
    & p.skills__title {
      margin-block: 15px;

      font-size: 2.5rem;
    }
  }

  & .side-nav {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    transform: rotate(270deg);
    transform-origin: left;
    position: absolute;
    top: 190px;
    left: 3%;
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      display: none;
    }
  }
  & .side-line {
    width: 1020px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: rotate(90deg);
    transform-origin: left;
    position: absolute;
    top: 210px;

    left: 3%;
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      display: none;
    }
  }

  .skills {
    &__contents {
      flex-basis: 50%;
      margin-left: 6vw;
      width: 100%;
      display: flex;
      align-items: start;
      margin-left: min(20vw, 300px);
      position: relative;

      & svg#skill-line {
        height: 250px;
      }

      & svg#skill-line path {
        stroke-width: 1;
        stroke: #fff;
        fill: none;
      }
      & svg#skill-line-design {
        height: 125px;
      }

      & svg#skill-line-design path {
        stroke-width: 4;
        stroke: #fff;
        fill: none;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        margin-left: 0;
        display: block;
        & svg {
          display: none;
        }
      }
    }
  }
`

export const SmainTitle = styled.h2.attrs({ className: 'main-title' })`
  && {
    text-align: left;
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    z-index: 0;
    position: sticky;
    top: 10%;
    &::before {
      content: '';
      width: 3em;
      height: 3em;
      position: absolute;
      top: 0px;
      left: -30px;
      transform: rotate(160deg);
      background-image: url(${gradCircle3});
      background-size: contain;
      z-index: -1;
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      position: relative;
      &::before {
        width: 2em;
        height: 2em;
        top: 0px;
        left: -30px;
        z-index: -1;
      }
    }
  }
`
