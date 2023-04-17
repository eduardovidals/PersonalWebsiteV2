import React from 'react'
import { AppContainer } from 'App.styles'
import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from 'components/layout/Header/Header'
import NotFound from 'views/NotFound/NotFound'
import Main from 'components/layout/Main/Main'
import Home from 'views/Home/Home'
import NavMobile from 'components/layout/NavMobile/NavMobile'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import theme from 'utils/theme'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
    return
  },
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <CssBaseline />
          <NavMobile />
          <Header />
          <Main>
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </Main>
        </AppContainer>
      </BrowserRouter>
    </Provider>
  )
}

function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme({mode})}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ToggleColorMode
