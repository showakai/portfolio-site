import styled from 'styled-components'

export const Swork = styled.section`
  padding-top: 130px;
  padding-bottom: 180px;
  position: relative;
  z-index: 9;

  .main-title {
    position: relative;
    z-index: 1;
  }

  & .side-nav {
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: 1.6rem;
    transform: rotate(270deg);
    transform-origin: left;
    position: absolute;
    top: 50%;
    left: 3%;
  }
  & .side-line {
    width: 850px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.mainColor};
    transform: rotate(90deg);
    transform-origin: left;
    position: absolute;
    top: 52%;
    left: 3%;

    &::after {
      width: 10px;
      height: 10px;
      position: sticky;
      top: 15%;
      border-radius: 50%;
      left: 2.5%;
      z-index: 10;
      background-color: black;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-top: 90px;
    padding-bottom: 100px;
    & .side-nav {
      /* top: 310px;
      left: 5%;
      font-size: 1.4rem; */
      display: none;
    }

    & .side-line {
      /* top: 330px;
      left: 5%;
      width: 2440px;
      height: 0.5px; */
      display: none;
    }
  }

  & .work__titlebox {
    position: relative;
    z-index: 2;
  }
  h2 {
    position: relative;
  }
  & .bg-drop {
    position: absolute;
    top: -30px;
    left: -50px;
    width: 3em;
    z-index: -1;
    transform: rotate(240deg);

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      top: 8%;
      left: -3%;

      width: 15vw;
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      top: -16%;
      left: -7%;

      width: 23vw;
    }
  }

  .work__contents {
    padding-top: 20px;
    width: 100%;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      display: block;
      padding-top: 10px;
      position: relative;
      z-index: 1;
    }
  }
  & .bg-circle.grad3 {
    position: absolute;
    top: 40%;
    right: -10%;
    width: 30vw;
    z-index: 1;
    transform: rotate(75deg);
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      top: 60%;
      left: -30%;
      width: 60vw;
    }
  }
`

export const StyledCard = styled.div`
  width: calc((100% - 80px) / 3);
  position: relative;
  z-index: 2;

  padding: 25px;
  padding-bottom: 30px;
  background-color: rgba(244, 248, 250, 0.8);
  transition: 0.6s;
  border-radius: 10px;
  box-shadow:
    1px 1px 5px rgba(150, 150, 150, 0.3),
    1px 1px 10px rgba(150, 150, 150, 0.2);

  h3 {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.textBlue};
    font-weight: 600;
    text-align: left;
    padding-bottom: 10px;
    font-family: 'Noto sans jp';
  }

  .work {
    &__img-box {
      /* border: 0.5px solid ${({ theme }) => theme.colors.mainColor}; */
      height: 230px;
      padding: 5px;
      object-fit: contain;
    }

    &__card-button {
      background: transparent;
      border: none;
      cursor: pointer;

      &:hover img {
        transform: scale(1.05);
        transition: 0.5s;
      }
    }

    &__text-box {
      display: flex;

      justify-content: space-between;
      align-items: flex-end;
      padding-top: 10px;
    }
    &__sub-text {
      font-size: 1.1rem;
      color: #999;
    }

    &__type {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.white};
      opacity: 1;
      padding-bottom: 5px;
      letter-spacing: 0.05em;

      span {
        display: inline-block;
        margin-right: 5px;
        padding: 5px 10px;

        border-radius: 40px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: calc((100% - 40px) / 2);
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
    padding-inline: 15px;
    margin-bottom: 30px;
    padding-top: 0;
    h3 {
      padding-bottom: 10px;
      font-size: 1.8rem;
      text-align: center;
    }

    .work {
      &__img-box {
        padding: 30px;
        padding-block: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      &__text-box {
        flex-direction: column;
        gap: 15px;
        align-items: center;
      }

      &__sub-text {
        font-size: 1.2rem;
      }
      &__type {
        text-align: center;
        font-size: 1.2rem;
        padding-bottom: 0;
      }
    }
  }
`

export const Sbutton = styled.button`
  /* border: 0.7px solid ${({ theme }) => theme.colors.mainColor}; */
  border: 1px solid #999;

  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textBlue};
  background: transparent;
  border-radius: 20px;
  font-weight: 300;
  width: 70px;
  padding: 10px 20px;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;

  /* &::before {
    content: '';
    width: 30px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.textBlue};
    display: block;
    position: absolute;
    top: 50%;
    left: -20px;
  } */

  &:hover {
    color: ${({ theme }) => theme.colors.bgWhite};
    background-color: ${({ theme }) => theme.colors.mainColor};
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-bottom: 15px;
    width: 75%;
  }
`
