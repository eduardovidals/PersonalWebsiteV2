import { styled, Typography } from '@mui/material'

export const HeaderContainer = styled('header')<{ open: boolean }>(({ theme, open }) => `
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  flex-shrink: 0;
  padding: 0 10px;
  background-color: ${theme.palette.mode === 'light' ? theme.palette.primary.main : '#272727'};
  border-bottom: ${theme.palette.mode === 'dark' ? `1px solid ${theme.palette.grey['500']}` : ''};
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
`)

export const HeaderTitle = styled(Typography)`
  display: none;
  font-weight: bold;
  margin-left: 10px;

  @media (min-width: 300px) {
    display: flex;
  }
`
