import { NavLink } from 'react-router'
import styled from 'styled-components'

export const Snav = styled.nav`
  width: 100vw;
  height: 70px;
  background: transparent;
  padding: 15px 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;

  justify-content: space-between;
  align-items: center;

  & img {
    width: 2.5em;
  }
  & .menu-open {
    border: none;
    background-color: transparent;

    display: none;

    div {
      width: 40px;
      height: 40px;
      position: relative;
      border-radius: 50%;
      transition: all 0.8s;

      span {
        display: block;
        height: 0.8px;
        width: 60%;
        position: absolute;
        right: 10px;
        top: 16px;
        transition: all 0.8s;
        background-color: ${({ theme }) => theme.colors.white};

        &:nth-last-of-type(1) {
          top: 24px;
          width: 40%;
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      display: block;

      z-index: 105;
      &.isOpen {
        span {
          transform: rotate(-45deg);
          transform-origin: right;
          color: ${({ theme }) => theme.colors.white}!important;
          top: 11px;

          &:nth-last-of-type(1) {
            transform: rotate(45deg);
            width: 60%;

            top: 28px;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-inline: 20px;
  }
`

export const SnavBg = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: block;
    width: 2000px;
    height: 2000px;
    transform-origin: center;
    transform: scale(0.02);
    border-radius: 50%;
    z-index: 10;
    margin-right: -1000px;
    margin-top: -1000px;
    background-color: ${({ theme }) => theme.colors.skillBg};
    position: fixed;
    top: 35px;

    right: 40px;
    transition: all 0.7s cubic-bezier(0.76, 0, 0.42, 1.2);

    &.isOpen {
      transform-origin: center;
      transform: scale(1);
    }
  }
`

export const Sul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 100px;
  font-family: ${({ theme }) => theme.fonts.enFont};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: none;
  }
  & li {
    list-style: none;
  }

  /* & a {
    text-decoration: none;
    color: ${({ theme, color }) => color || theme.colors.white};
    font-size: 1.5rem;
    font-weight: lighter;
  } */
`

export const StyledNavlink = styled(NavLink).attrs(({ textColor }) => ({
  style: { color: textColor }, // textColorをスタイルとして渡す
  textColor: undefined, // textColorをDOMから除外
}))`
  text-decoration: none;
  color: ${({ theme, textcolor }) => textcolor || theme.colors.white};
  font-size: 1.9rem;
  font-weight: 200;
  position: relative;
  letter-spacing: 0.05em;
  mix-blend-mode: difference;

  &::before {
    opacity: 0.8;
    background-color: ${({ style }) => style.color};
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -5px;
    margin: auto;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: transform 0.3s;
  }
  &:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
`

export const SMenuSp = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100vw;
    height: 100vh;
    /* background-color: ${({ theme }) => theme.colors.mainColor}; */
    color: ${({ theme }) => theme.colors.white};
    position: fixed;
    top: 0px;
    right: 0px;
    padding: 100px 30px;
    z-index: 50;
    display: flex;

    opacity: 0;

    border-bottom-left-radius: 600px;
    transform: translateX(-100%);

    transition: all 0.3s 0s cubic-bezier(0.76, 0, 0.42, 1.2);
    transition: opacity 0.3s 0s cubic-bezier(0.76, 0, 0.42, 1.2);

    ul {
      list-style: none;

      li {
        margin-bottom: 20px;
        transform: translateY(20px);
        opacity: 0;
        backdrop-filter: blur(20px);
      }

      li a {
        font-size: 3rem;
        text-decoration: none;

        color: ${({ theme }) => theme.colors.white};
      }
    }

    &.isOpen {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      opacity: 1;
      transform: translateX(0);

      border-bottom-left-radius: 0px;
      transition: all 2s 0.5s cubic-bezier(0.76, 0, 0.42, 1.2);
      transition: opacity 0.3s 0.5s cubic-bezier(0.76, 0, 0.42, 1.2);

      ul {
        transition: all 1s 1s cubic-bezier(0.76, 0, 0.42, 1.2);

        li {
          transform: translateY(0);
          opacity: 1;
          backdrop-filter: blur(0px);
        }
      }
    }
  }
`
