import { NavLink, useLocation } from 'react-router-dom'
import { SMenuSp, Snav, SnavBg, StyledNavlink, Sul } from './Header.styles.js'
import { useTheme } from 'styled-components'
import { useMemo, useState } from 'react'
import logo from '/logo.webp'

const Header = () => {
  const location = useLocation()
  const theme = useTheme()

  const [open, setOpen] = useState(false)

  const textColor = useMemo(() => {
    return location.pathname === '/' ? '#fff' : theme.colors.mainColor
  }, [location.pathname])

  const onSetOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Snav>
        <StyledNavlink
          style={{
            color: textColor,
          }}
          to="/"
        >
          <img src={logo} alt="" />
        </StyledNavlink>
        <Sul>
          <li>
            <StyledNavlink
              textColor={textColor}
              style={{
                color: textColor,
              }}
              to="/works"
              end
            >
              Works
            </StyledNavlink>
          </li>
          <li>
            <StyledNavlink
              textColor={textColor}
              style={{
                color: textColor,
              }}
              to="/about"
            >
              About
            </StyledNavlink>
          </li>
          <li>
            <StyledNavlink
              textColor={textColor}
              style={{
                color: textColor,
              }}
              to="#contact"
              end
            >
              Contact
            </StyledNavlink>
          </li>
        </Sul>
        <button
          className={`menu-open ${open ? 'isOpen' : ''}`}
          onClick={onSetOpen}
        >
          <div>
            <span></span>
            <span></span>
          </div>
        </button>
      </Snav>
      <SnavBg className={open ? 'isOpen' : ''}></SnavBg>

      <SMenuSp className={open ? 'isOpen' : ''}>
        <ul className="menu__list-sp">
          <li>
            <NavLink to="/works" onClick={onSetOpen} end>
              Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={onSetOpen}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="#contact" onClick={onSetOpen} end>
              Contact
            </NavLink>
          </li>
        </ul>
      </SMenuSp>
    </>
  )
}

export default Header
