import styled, { keyframes } from 'styled-components'

export const textAnimation = keyframes`
  from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-100%);
    }
`

export const scrollLine = keyframes`
 0%{
        transform:scaleX(0);
    }
    50%{
        transform: scaleX(1);
    }
    100%{
        transform: translateX(-150px);
    }
`
export const spreadCircle = keyframes`
 0%{
        transform:scale(0.3);
        opacity: 1;
        
    }
    50%{
        transform: scale(1);
        opacity: 1;
    }
    100%{
        transform: scale(1.3);
        opacity: 0.6;
    }
`

export const Smainvisual = styled.div`
  width: 100vw;
  height: 100svh;
  position: fixed;
  top: 0;
  padding-top: 100vh;
  overflow: hidden;

  & .bg-drop {
    width: 25vw;
    height: 25vw;
    position: absolute;
    top: 25%;
    left: 37%;
    animation-name: ${spreadCircle};
    animation-duration: 3s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;

    &:nth-last-of-type(1) {
      top: 30%;
      left: 85%;
      width: 25vw;
      height: 25vw;
      animation-delay: 1s;
    }
    &:nth-last-of-type(2) {
      top: -10%;
      left: -10%;
      width: 25vw;
      height: 25vw;
      animation-delay: 1.8s;
    }
  }

  & .bg-circle {
    position: absolute;
  }
  & .grad1 {
    width: 40vw;
    top: -10%;
    left: 0%;
  }
  & .grad2 {
    width: 40vw;
    top: 45%;
    left: 70%;
  }
  & .grad3 {
    width: 25vw;
    top: 10%;
    left: 30%;
  }
  & .grad4 {
    width: 40vw;
    top: -20%;
    left: 70%;
  }
  & .blur1 {
    width: 20vw;
    top: 30%;
    left: 65%;
  }
  & .blur2 {
    width: 20vw;
    top: 40%;
    left: 20%;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    & .bg-drop {
      width: 45vw;
      height: 45vw;
      top: 40%;
      left: 30%;

      &:nth-last-of-type(1) {
        top: -5%;
        left: 50%;
        width: 55vw;
        height: 55vw;
      }
      &:nth-last-of-type(2) {
        top: 70%;
        left: -10%;
        width: 35vw;
        height: 35vw;
      }
    }
    & .grad1 {
      width: 80vw;
      top: 0;
      left: 0%;
    }
    & .grad2 {
      width: 80vw;
      top: 60%;
      left: 35%;
    }
    & .grad3 {
      width: 60vw;
      top: 25%;
      left: 5%;
    }
    & .grad4 {
      top: 25%;
      left: 52%;
      width: 85vw;
    }
    & .blur1 {
      width: 35vw;
      top: 50%;
    }
    & .blur2 {
      width: 30vw;
    }
  }

  & .container {
    width: 40vw;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    margin: auto;
    text-align: center;

    & h1 {
      width: 35vw;
      margin: 0 auto;
    }
    span {
      font-size: 55px;
      font-family: ${({ theme }) => theme.fonts.enFont};
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
      letter-spacing: 0.05em;
      line-height: 1;
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      width: 60vw;
      & h1 {
        width: 60vw;
      }
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      width: 80vw;

      & h1 {
        width: 80vw;
      }

      span {
        font-size: 35px;
      }
    }
  }

  & .bg-letter {
    display: flex;
    width: 45vw;
    overflow-x: hidden;
    position: absolute;
    top: 400px;
    right: 0%;
    transform: translateY(-50%) rotate(90deg);
    -webkit-transform: translateY(-50%) rotate(90deg);

    & span {
      font-size: 10rem;
      font-weight: 500;
      opacity: 0.7;
      color: transparent;
      -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};

      animation-name: ${textAnimation};
      animation-duration: 12s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      top: 50%;
      right: -310px;
      width: 120vw;
      & span {
        font-size: 13rem;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      top: 60%;
      right: -410px;
      width: 880px;

      & span {
        font-size: 8rem;
      }
    }
  }
`

export const Sscroll = styled.div`
  width: 200px;
  height: 30px;
  position: absolute;
  bottom: 11%;
  left: 5%;
  transform: rotate(270deg);
  overflow-x: hidden;
  text-align: right;

  & p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.mainColor};
    letter-spacing: 0.15em;
    text-align: right;
    font-weight: lighter;
  }
  & span {
    width: 150px;
    height: 1px;
    display: block;
    background-color: ${({ theme }) => theme.colors.mainColor};
    transform-origin: right;
    position: absolute;
    right: 30%;
    bottom: 50%;
    animation-name: ${scrollLine};
    animation-duration: 3s;
    animation-timing-function: cubic-bezier(0.605, 0.335, 0.92, 0.245);
    animation-iteration-count: infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    bottom: 9%;
    left: -5%;
  }
`
