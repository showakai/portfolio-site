import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import Footer from '../components/footer/Footer'
import Loading from '../components/loading/Loading'
import styled from 'styled-components'

const ShomeScreen = styled.div`
  opacity: 0;
  transition: all 2s;

  &.fade {
    opacity: 1;
  }
`

const Layout = () => {
  const [isFade, setIsFade] = useState(false)
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(location.pathname === '/')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        setIsFade(true)
      }, 100)
    }, 1800)
    window.scrollTo(0, 0)
    return () => clearTimeout(timer)
  })
  return (
    <>
      <ScrollRestoration />
      {isLoading ? (
        <Loading />
      ) : (
        <ShomeScreen className={`top-screen ${isFade ? 'fade' : ''}`}>
          <Header />
          <Outlet />
          <Footer />
        </ShomeScreen>
      )}
    </>
  )
}

export default Layout
