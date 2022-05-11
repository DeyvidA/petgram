import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Router } from 'react-router'
import { Detail } from './pages/Detail'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Route>
          <Home path='/' />
          <Detail path='/detail/:id' />
        </Route>
      )}
    </div>
  )
}
