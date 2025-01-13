import styled from 'styled-components'
import arrowW from '/arrow-w.png'
import arrowB from '/arrow-b.webp'

const Sbutton = styled.button`
  color: ${({ color }) => color || '#fff'};
  background: transparent;
  padding: 16px 20px;
  text-align: center;
  border: 1px solid ${({ color }) => color || '#fff'};
  display: block;
  border-radius: 30px;
  margin: ${({ margin }) => margin || '50px auto 0'};
  width: 300px;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 0.01em;
  position: relative;
  font-weight: 500;

  transition: all 0.5s;

  &:after {
    content: '';
    display: block;
    width: 1em;
    height: 1em;
    position: absolute;
    top: 35%;
    right: 10%;
    background-image: ${({ color }) =>
      color === 'white' ? `url(${arrowW})` : ` url(${arrowB})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &:hover {
    transform: scale(1.1);
  }
`

const Button = ({ children, margin, onclick, color }) => {
  return (
    <Sbutton color={color} margin={margin} onClick={onclick}>
      {children}
    </Sbutton>
  )
}

export default Button
