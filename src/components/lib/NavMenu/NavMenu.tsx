import React from 'react'
import { NavMenuContainer } from 'components/lib/NavMenu/NavMenu.styles'
import { INavMenuItem } from 'components/lib/NavMenu/types/interfaces'
import NavMenuItem from 'components/lib/NavMenu/NavMenuItem/NavMenuItem'
import { IconButton, Tooltip, useTheme } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from 'App'

interface NavMenuProps {
  menuItems: INavMenuItem[]
}

function NavMenu(props: NavMenuProps) {
  const { menuItems } = props;
  return (
    <NavMenuContainer>
      {
        menuItems.map((menuItem, index) => {
          const depthLevel = 0;

          return (
            <NavMenuItem key={`nav-item-${index}`} menuItem={menuItem} depthLevel={depthLevel}/>
          )
        })
      }
    </NavMenuContainer>
  )
}

export default NavMenu
