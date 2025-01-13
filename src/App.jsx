import {
  Routes,
  Route,
  BrowserRouter as Router,
  ScrollRestoration,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/Global.styles'
import Header from './components/header/Header'

import { theme } from './styles/theme'
import Footer from './components/footer/Footer'
import WorkDetail from './components/workDetail/WorkDetail'
import { RouterProvider } from 'react-router'
import routesLink from './routesLink'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={routesLink} />
      </ThemeProvider>
    </>
  )
}

export default App
