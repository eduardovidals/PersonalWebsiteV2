import { styled, Typography } from '@mui/material'

export const HeaderContainer = styled('header')(({ theme }) => `
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  flex-shrink: 0;
  padding: 0 10px;
  background-color: ${theme.palette.mode === 'light' ? theme.palette.primary.main : '#272727'};
  color: ${theme.palette.common.white};
  z-index: 2;
  overflow: hidden;
`)

export const HeaderLeftContainer = styled('div')`
  display: flex;
  align-items: center;
  overflow: hidden;
`

export const HeaderLogo = styled('img')(({ theme }) => `
    height: 40px;
  object-fit: contain;
  // color: ${theme.palette.text.primary};
`)

export const HeaderTitle = styled(Typography)`
  display: none;
  font-weight: bold;
  margin-left: 10px;

  @media (min-width: 300px) {
    display: flex;
  }
`

export const HeaderNavContainer = styled('div')`
  display: none;

  @media (min-width: 700px) {
    display: flex;
  }
`

export const HeaderThemeContainer = styled('div')`
  display: flex;

  @media (min-width: 700px) {
    display: none;
  }
`
