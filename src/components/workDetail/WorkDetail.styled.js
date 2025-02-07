import styled from 'styled-components'

export const SWorkDetail = styled.section`
  background-color: ${({ theme }) => theme.colors.bgWhite};

  .text-box {
    text-align: center;
  }
  h2 {
    font-size: 3.4rem;
    font-weight: 400;
    padding: 15px 0;
    color: ${({ theme }) => theme.colors.mainColor};
  }
  p.sub-title {
    font-size: 15px;
  }
  a {
    font-size: 1.4rem;
    text-decoration: none;

    cursor: pointer;
    padding: 15px 10px;
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.mainColor};

    border-radius: 30px;
    margin-top: 30px;
    display: inline-block;
    width: 200px;
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.mainColor};
      color: ${({ theme }) => theme.colors.bgWhite};
    }
  }
  .img-box {
    text-align: center;
    margin-top: 10px;

    & img {
      width: 60%;
      margin-top: 40px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    h2 {
      font-size: 2.4rem;
    }
    p.sub-title {
      font-size: 1.5rem;
      font-weight: 400;
    }
    .img-box {
      & img {
        width: 100%;
        margin-block: 20px;
      }
    }
  }

  dl {
    color: ${({ theme }) => theme.colors.mainTitle};

    font-size: 14px;
    width: 60%;
    margin: 80px auto;
    font-family: ${({ theme }) => theme.fonts.jaFont};

    & div {
      margin-bottom: 80px;
      display: flex;

      gap: 120px;
    }
    & dt {
      font-weight: bold;
      margin: 0;
      flex-shrink: 0;
      width: 15%;
    }

    & dd {
      margin: 0;
      color: #333;
      line-height: 1.8;
      & p {
        margin-bottom: 20px;
      }
    }
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 1.5rem;
      margin: 0;
      width: 100%;

      & div {
        display: block;
        margin-bottom: 50px;
      }
      & dt {
        margin-bottom: 12px;
        width: 100%;
      }
    }
  }
`
