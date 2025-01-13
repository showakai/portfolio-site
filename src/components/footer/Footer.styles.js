import styled, { keyframes } from 'styled-components'
import buttonAccent from '../../assets/images/water-circle.webp'

export const textAnimation = keyframes`
  from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-100%);
    }
`

export const ScontactButton = styled.button`
  font-size: 45px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  background-color: transparent;
  position: relative;
  margin-left: 15vw;
  padding-right: 150px;
  height: 2em;
  letter-spacing: -0.05em;
  overflow-y: hidden;
  overflow-x: visible;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.enFont};

  & span {
    padding-block: 0.3em;
    display: block;
    transition: all 0.2s ease-in-out;
  }

  & .footer__email-box {
    height: auto;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  &:after {
    content: '';
    display: block;
    width: 1em;
    height: 1em;
    position: absolute;
    top: 15%;
    right: 15%;
    background: url(/arrow-w.png) no-repeat center/contain;
    transition: all 0.3s;
  }
  &:before {
    content: '';
    display: block;
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    top: 5%;
    right: 10%;
    background: url(${buttonAccent}) no-repeat center/contain;
    transition: all 0.7s;
  }

  &:hover::before {
    transform: scale(1.2);
  }
  &:hover span {
    transform: translateY(-100%);
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-left: 0;
    font-size: 25px;
    padding-right: 70px;
  }
`

export const ScontactTitle = styled.h2.attrs({ className: 'main-title' })`
  && {
    color: ${({ theme }) => theme.colors.lightBlue};
    text-align: left;
    font-family: ${({ theme }) => theme.fonts.enFont};

    margin-bottom: 0;
  }
`

export const Sfooter = styled.div`
  background-color: ${({ theme }) => theme.colors.aboutBg};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 7vh;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-top: 50px;
  }
  & .bg-letter-f {
    display: flex;
    width: 100vw;
    font-weight: lighter;
    overflow-x: hidden;
    position: absolute;
    top: 5%;
    right: 0%;
    /* left: calc(50% - 50vw); */
    transform: translateY(-50%);

    & span {
      font-size: 3rem;
      font-weight: 900;
      opacity: 0.4;
      color: ${({ theme }) => theme.colors.skillBg};
      white-space: nowrap;

      animation-name: ${textAnimation};
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  }

  .footer {
    &__content {
      padding: 20px 0;
      background-color: ${({ theme }) => theme.colors.aboutBg};
      text-align: center;

      border-top: 0.7px solid ${({ theme }) => theme.colors.white};
    }
  }
`

export const Scontact = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: center;
  max-width: 1190px;
  padding-block: 30px;
  padding-bottom: 30px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.maiColor};

  & .text-box h3 {
    font-size: 2em;
    font-family: ${({ theme }) => theme.fonts.enFont};
  }

  & img {
    width: 6em;
    margin-left: 1px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: block;
    text-align: left;
  }
`
