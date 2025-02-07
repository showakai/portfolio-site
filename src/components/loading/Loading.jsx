import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import drop from '../../assets/images/drop-line.png'
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
        opacity: 1;
    }
`
export const ballScale = keyframes`
0%{
    transform: scale(0);
    opacity: 1;

  }
100%
  {
    transform: scale(1);
    opacity: 0
  }`

const Sloading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.workBg};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1.5s ease-in-out;
  position: relative;
  z-index: 1000;
  text-align: center;

  p {
    font-size: 3.3rem;
    text-align: center;
    letter-spacing: 0.05em;

    color: ${({ theme }) => theme.colors.bgWhite};
    font-weight: 100;
  }
  img {
    position: absolute;
    display: block;
    top: 50%;
    left: 40%;
    margin: 0 auto;
    width: 20vw;
    height: 8vw;
    animation-name: ${spreadCircle};
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      left: 15%;
      width: 250px;
      height: 80px;
    }
    p {
      transform: translateX(5px);
    }
  }

  &.hide {
    opacity: 0;
  }
`

const Loading = () => {
  const [isHide, setIsHide] = useState(false)

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setIsHide(true)
  //     }, 1000)

  //     return () => {
  //       clearTimeout(timer)
  //     }
  //   }, [])

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsHide(true)
    })
    return () => {
      window.removeEventListener('load', () => setIsHide(true))
    }
  })

  return (
    <Sloading className={`loading-screen ${isHide ? 'hide' : ''}`}>
      <p>loading</p>
      {/* <div className="drop-random">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <img src={drop} alt="" />
    </Sloading>
  )
}

export default Loading
