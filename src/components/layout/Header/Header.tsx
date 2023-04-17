import {
  HeaderContainer,
  HeaderLeftContainer,
  HeaderLogo,
  HeaderNavContainer, HeaderThemeContainer,
} from 'components/layout/Header/Header.styles'
import { ButtonBase, IconButton, Tooltip, useTheme } from '@mui/material'
import React from 'react'
import { ColorModeContext } from 'App'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { showDrawer } from 'store/slices/drawer/drawer.slice'
import logo from 'assets/images/logo1.png'
import { Link } from 'react-router-dom'
import NavMenu from 'components/lib/NavMenu/NavMenu'
import { menuItems } from 'components/layout/Header/menuItems'


function Header() {
  const colorMode = React.useContext(ColorModeContext)
  const theme = useTheme()

  const open = useAppSelector(state => state.drawer)
  const dispatch = useAppDispatch()

  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <Tooltip title={'Show Menu'} arrow>
          <IconButton color='inherit' onClick={() => dispatch(showDrawer(!open))}>
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        </Tooltip>
        <ButtonBase style={{ padding: '6px 13px', borderRadius: '5px', overflow: 'hidden' }}>
          <Link to={'/'} style={{textDecoration: 'none'}}>
            <HeaderLogo src={logo} />
          </Link>
          {/* <HeaderTitle variant={'h6'} noWrap> Eduardo Vidals </HeaderTitle> */}
        </ButtonBase>
      </HeaderLeftContainer>

      <HeaderNavContainer>
        <NavMenu menuItems={menuItems}/>
      </HeaderNavContainer>

      {/* Used for mobile rendering of theme */}
      <HeaderThemeContainer>
        {
          <Tooltip title={'Toggle Dark/Light Mode'} arrow>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
              {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>
        }
      </HeaderThemeContainer>
    </HeaderContainer>
  )
}

export default Header
