import styled, { keyframes } from 'styled-components'

export const spreadCircle = keyframes`
 0%{
        transform:scale(0.3);
        opacity: 0.3;
        
    }
    50%{
        transform: scale(1);
        opacity: 1;
    }
    100%{
        transform: scale(1.3);
        opacity: 0.2;
    }
    `

export const Sabout = styled.section`
  padding-bottom: 250px;
  padding-top: 200px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-bottom: 150px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-bottom: 100px;
    overflow: hidden;
    padding-top: 120px;
  }

  & .side-nav {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    transform: rotate(270deg);
    transform-origin: left;
    position: absolute;
    top: 10%;
    left: 3%;
  }
  & .side-line {
    width: 600px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: rotate(90deg);
    transform-origin: left;
    position: absolute;
    top: 15%;
    left: 3%;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    & .side-line,
    & .side-nav {
      display: none;
      /* width: 800px;
      left: 5%;
      height: 0.5px;
    } */
    }
  }

  & .bg-drop {
    position: absolute;
    bottom: -10%;
    right: -10%;
    width: 30vw;
    height: 30vw;
    animation-name: ${spreadCircle};
    animation-duration: 3s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      width: 40vw;
      height: 40vw;
      bottom: 0%;
    }
  }

  .about {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      gap: max(5vw, 100px);

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        display: block;
      }
    }

    &__img {
      flex-basis: 40%;

      img.about-img {
        width: max(350px, 20vw);
        z-index: 2;
        position: relative;
      }

      img.bg-img {
        width: 30%;
        position: absolute;
        top: 22%;
        left: 0%;

        z-index: 0;
        @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
          width: 20%;
          top: 17%;
          left: 20%;
        }
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
        img.about-img {
          width: 28vw;
          z-index: 2;
          position: relative;
        }
        img.bg-img {
          width: 50%;
          left: -20%;
        }
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        text-align: center;
        img.about-img {
          width: 60vw;
        }
        img.bg-img {
          width: 100%;
          height: 320px;
          left: 0;
          top: -2%;

          object-fit: cover;
          object-position: top;
        }
      }
    }

    &__contents {
      width: 50%;
      font-size: 1.5rem;
      font-family: 'Noto sans jp';
      color: ${({ theme }) => theme.colors.white};
      letter-spacing: 0.05em;
      @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
        width: 50%;
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        width: 100%;
      }

      p {
        line-height: 2.4;

        &.text {
          margin-block: 50px 30px;
          font-size: 1.1em;
          font-weight: bold;
          font-family: 'Noto sans jp';
        }
      }
    }
  }

  .github-btn {
    background: transparent;
    border: none;
    width: 2.5rem;
    cursor: pointer;
    margin-top: 20px;
    display: block;
  }
`
