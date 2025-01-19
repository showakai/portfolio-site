import styled from 'styled-components'

export const SAboutDetail = styled.section`
  text-align: center;
  padding-block: 120px 0px;
  position: relative; /* 必要に応じて static に変更 */
  overflow: visible; /* hidden の場合は解除 */

  background-color: ${({ theme }) => theme.colors.bgWhite};
  .ja-title {
    margin-inline: 0;

    &::before {
      display: none;
    }
  }
  .inner-section {
    padding-bottom: 60px;
  }

  .iam {
    &__container {
      position: relative;
      z-index: 0;
    }
    &__img {
      width: 17vw;
      font-size: 0;
      box-shadow:
        2px 2px 10px #ccc,
        2px 2px 15px #ddd;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      position: relative;
      img {
        width: 100%;
      }
    }
    /* &__bg-img {
      width: 100%;
      position: absolute;
      height: 50vh;
      object-fit: cover;
      object-position: top;
      top: 0;
      left: 0;
      z-index: 0;
    } */

    &__bg {
      position: absolute;
      width: 30%;
      top: 50%;
      right: -50%;
      z-index: -1;
    }
    &__name {
      font-size: clamp(16px, 1.1vw, 20px);
      color: ${({ theme }) => theme.colors.mainColor};
      margin-bottom: 20px;
      font-weight: 600;
      margin-top: 48px;
    }

    &__introduction {
      font-size: clamp(15px, 1vw, 20px);
      color: ${({ theme }) => theme.colors.mainColor};
      text-align: left;
      margin-inline: auto;
      width: 50%;
      line-height: 2.5;
      padding-bottom: 150px;
    }

    &__strength {
      margin-inline: auto;
      position: relative;
      padding-block: 60px 280px;
      text-align: center;

      svg#strength-circle {
        position: absolute;
        width: 100%;
        top: 6%;
        left: 0%;
      }

      svg#strength-circle path {
        fill: none;
        stroke: ${({ theme }) => theme.colors.mainColor};
        stroke-width: 1px;
      }
      .svg-box-sp {
        display: none;
      }
    }
    &__strength-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 19%;
      padding-top: 90px;
    }
    &__strength-box {
      width: 150px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      &__strength {
        padding-bottom: 100px;
      }
      &__strength-container {
        align-items: flex-start;
        padding-top: 22px;
        gap: 12%;
      }
      &__bg {
        width: 28%;
        top: 70px;
        right: -70px;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      &__img {
        width: 70%;
      }
      &__bg {
        width: 60%;
        top: 140px;
        right: -70px;
      }
      &__introduction {
        width: 100%;
        line-height: 2;
      }
      &__strength {
        padding-bottom: 0;
        svg#strength-circle {
          display: none;
        }
        .svg-box-sp {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          vertical-align: middle;
          gap: 50px;
          position: absolute;
          left: 50%;
          top: 1%;
          transform: translateX(-50%);

          width: 250px;

          svg {
            path {
              fill: none;
              stroke: ${({ theme }) => theme.colors.mainColor};
              stroke-width: 1px;
            }
          }
        }
      }

      &__strength-container {
        display: block;
        padding-top: 25px;
      }

      &__strength-box {
        width: 100%;
        margin-bottom: 100px;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        &__strength-container {
          padding-top: 12px;
        }
        &__strength-box {
          width: 250px;
          margin-inline: auto;
          &:not(:nth-last-of-type(1)) {
            margin-bottom: 165px;
          }
        }
      }
    }
  }
  .strength {
    &__title {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.mainColor};
      font-weight: 500;
    }
    &__subtitle {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.subColor};
      font-weight: 200;
    }
    &__text {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.mainColor};
      font-weight: 400;
      margin-top: 10px;
      line-height: 2;
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      &__text {
        width: 60%;
        margin-inline: auto;
        line-height: 1.6;
        letter-spacing: 0.1em;
      }
    }
  }

  .career {
    background-color: ${({ theme }) => theme.colors.aboutBg};
    margin-inline: auto;
    overflow-x: hidden;

    padding-block: 100px;
    height: 100vh;
    overflow-y: hidden;
    margin-top: 0;
    .main-title {
      color: ${({ theme }) => theme.colors.white};
      text-align: center;
    }
    .ja-title {
      color: ${({ theme }) => theme.colors.white};
      text-align: center;
    }

    &__container {
      background-color: ${({ theme }) => theme.colors.aboutBg};
      padding: 100px 0 150px;
      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        padding-top: 80px;
        height: 100svh;
      }
    }

    &__inner {
      padding-left: 30px;
    }

    &__list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 120vw;
      max-width: 2200px;

      li {
        list-style: none;
        color: ${({ theme }) => theme.colors.white};
        text-align: left;
        width: calc((100% - 700px) / 4);
        font-size: clamp(15px, 1vw, 20px);
        letter-spacing: 0.05em;
        line-height: 2;

        time {
          font-size: clamp(14px, 0.8vw, 18px);
        }
        .text:nth-of-type(1) {
          max-height: 100px;
          height: 30px;
        }

        .dot {
          display: block;
          width: 10px;
          margin: 40px 0;
          height: 10px;
          background-color: ${({ theme }) => theme.colors.white};
          border-radius: 50%;
          position: relative;
          &::after {
            display: block;
            content: '';
            height: 0.5px;
            width: max(60vw, 768px);
            background-color: ${({ theme }) => theme.colors.white};
            position: absolute;
            top: 5px;
            left: 0;
          }
        }
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
        width: 150vw;

        li {
          width: calc((100% - 180px) / 4);
          .text:nth-of-type(1) {
            height: 30px;
          }
        }
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        width: 250vw;
        gap: 40px;
        max-height: 100svh;
        li {
          min-width: 250px;
        }
      }
    }
  }
`
