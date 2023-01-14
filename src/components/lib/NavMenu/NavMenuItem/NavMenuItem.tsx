import React from 'react'
import { Menu, MenuItem, PopoverOrigin } from '@mui/material'
import { INavMenuItem } from 'components/lib/NavMenu/types/interfaces'
import { NavMenuItemContainer, NavMenuItemLink } from 'components/lib/NavMenu/NavMenuItem/NavMenuItem.styles'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import NavNestedMenuItem from 'components/lib/NavMenu/NavNestedMenuItem/NavNestedMenuItem'

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const hasChildrenItems = menuItem.menuItems && menuItem.menuItems.length


  const handleClick = (event: React.MouseEvent<any>) => {
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

    return (
      <>
        <NavMenuItemContainer onClick={handleClick} style={{ paddingRight: hasChildrenItems ? '5px' : '13px' }}>
          {menuItem.type !== 'image' &&
            <NavMenuItemLink to={`#${menuItem.url || ''}`}>
              {menuItem.title}
            </NavMenuItemLink>
          }
          {
            menuItem.menuItems && menuItem.menuItems.length &&
            <ArrowDropDownIcon style={{
              transform: open ? 'rotate(180deg)' : '', transition: 'transform 500ms',
            }} />
          }
        </NavMenuItemContainer>

        {
          menuItem.menuItems && menuItem.menuItems.length &&
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
                MenuListProps={{
                  onMouseLeave: handleClose,
                }}
          >
            {menuItems && menuItems.map((item, index) => {
              return (
                <NavNestedMenuItem key={`menu-${depthLevel}-${index}`} onClick={handleItemClick} item={item} />
              )
            })}
          </Menu>}
      </>
    )
  }

  return (
    <MenuItem style={{ padding: 0, borderRadius: '5px' }}>
      {renderItem(menuItem)}
    </MenuItem>
  )
}

export default NavMenuItem
