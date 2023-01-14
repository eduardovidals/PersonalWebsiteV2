import React from 'react'
import { AppContainer } from 'App.styles'
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from 'components/layout/Header/Header'
import NotFound from 'views/NotFound/NotFound'
import Main from 'components/layout/Main/Main'
import Home from 'views/Home/Home'
import NavMobile from 'components/layout/NavMobile/NavMobile'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
    return;
  },
})

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <CssBaseline />
        <NavMobile/>
        <Header/>
        <Main>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Main>
      </AppContainer>
    </BrowserRouter>
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

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ToggleColorMode
