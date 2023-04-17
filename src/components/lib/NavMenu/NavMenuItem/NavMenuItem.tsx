import React from 'react'
import { IconButton, Menu, MenuItem, PopoverOrigin, Tooltip, useTheme } from '@mui/material'
import { INavMenuItem } from 'components/lib/NavMenu/types/interfaces'
import {
  NavMenuItemContainer,
  NavMenuItemDropdownText,
  NavMenuItemLink,
} from 'components/lib/NavMenu/NavMenuItem/NavMenuItem.styles'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import NavNestedMenuItem from 'components/lib/NavMenu/NavNestedMenuItem/NavNestedMenuItem'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { ColorModeContext } from 'App'

interface NavMenuItemProps {
  menuItem: INavMenuItem,
  depthLevel: number
}

function NavMenuItem(props: NavMenuItemProps) {
  const { menuItem, depthLevel } = props

  const anchorOrigin: PopoverOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  }

  const transformOrigin: PopoverOrigin = {
    vertical: 'top',
    horizontal: 'center',
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const hasChildrenItems = menuItem.menuItems && menuItem.menuItems.length;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const handleClick = (event: React.MouseEvent<HTMLLIElement | HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleItemClick = () => {
    setAnchorEl(null)
  }

  const renderItem = (menuItem: INavMenuItem) => {
    const { menuItems } = menuItem

    // Render first layer of nav menu component
    const renderParentNodes = (menuItem: INavMenuItem) => {
      switch (menuItem.type) {
        case 'simple': {
          return (
            <>
              {
                menuItem.menuItems && menuItem.menuItems.length ?
                  <NavMenuItemDropdownText>
                    {menuItem.title}
                  </NavMenuItemDropdownText>
                  :
                  <NavMenuItemLink to={`${menuItem.url || ''}`}>
                    {menuItem.title}
                  </NavMenuItemLink>
              }
            </>
          )
        }
        case 'theme': {
          return (
            <>
              {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </>
          )
        }
      }
    }

    return (
      <>
        {/* Render parent nodes (or top level) before rendering nav menus */}
        <NavMenuItemContainer onClick={handleClick}>
          {renderParentNodes(menuItem)}

          {
            menuItem.menuItems && menuItem.menuItems.length &&
            <ArrowDropDownIcon style={{ transform: open ? 'rotate(180deg)' : '', transition: 'transform 500ms' }} />
          }
        </NavMenuItemContainer>

        {/* If the parent nodes have menu items, then render the nav menus using recursion */}
        {
          menuItem.menuItems && menuItem.menuItems.length &&
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
                MenuListProps={{ onMouseLeave: handleClose }}>
            {menuItems && menuItems.map((item, index) => {
              return (
                <NavNestedMenuItem key={`menu-${depthLevel}-${index}`} onClick={handleItemClick} item={item} />
              )
            })}
          </Menu>}
      </>
    )
  }

  const renderItemContainer = (menuItem: INavMenuItem) => {
    switch(menuItem.type){
      case 'theme': {
        return (
          <Tooltip title='Toggle Dark/Light Mode' arrow>
            <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
              {renderItem(menuItem)}
            </IconButton>
          </Tooltip>
        )
      }
      default: {
        return (
          <MenuItem style={{padding: 0, borderRadius: '5px'}}>
            {renderItem(menuItem)}
          </MenuItem>
        )
      }
    }
  }

  return (
    <>
      {renderItemContainer(menuItem)}
    </>
  )
}

export default NavMenuItem
