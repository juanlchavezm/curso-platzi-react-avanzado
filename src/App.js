import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Router } from '@reach/router'
import Context from './Context'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) => (
            isAuth
              ? <Router>
                <User path='/user' />
                <Favs path='/favs' />
                </Router>
              : <Router>
                <NotRegisteredUser path='/user' />
                <NotRegisteredUser path='/favs' />
                </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
