import React from 'react'
import { INavMenuItem } from 'components/lib/NavMenu/types/interfaces'
import { Menu, MenuItem, PopoverOrigin } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { NavMenuItemLink } from '../NavMenuItem/NavMenuItem.styles'


interface NavNestedMenuItemProps {
  onClick: any,
  item: INavMenuItem
}

function NavNestedMenuItem(props: NavNestedMenuItemProps) {
  const { onClick, item } = props

  const anchorOrigin: PopoverOrigin = {
    vertical: 'top',
    horizontal: 'left',
  }

  const transformOrigin: PopoverOrigin = {
    vertical: 'top',
    horizontal: 'right',
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const hasChildrenItems = item.menuItems && item.menuItems.length
  const isLeafNode = !hasChildrenItems

  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation()
    if (isLeafNode) {
      onClick()
    }
  }

  return (
    <MenuItem disableRipple onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleClose}
              style={{ padding: 0 }}>
      {/* Only type 'simple' will be processed for menu items */}
      {
        item.type === 'simple' &&
        <NavMenuItemLink to={item.url ?? ''} style={{ padding: '6px 13px' }}>
          {item.title}
          {hasChildrenItems && <ArrowRightIcon />}
        </NavMenuItemLink>
      }

      {/* if there's children items, then render an additional nav menu item */}
      {
        hasChildrenItems &&
        // "pointerEvents: none" to prevent invisible Popover wrapper div to capture mouse events
        <Menu style={{ pointerEvents: 'none' }} anchorEl={anchorEl} open={open}
              anchorOrigin={anchorOrigin} transformOrigin={transformOrigin}>
          {/* reset pointer event here so that the menu items could receive mouse events */}
          <div style={{ pointerEvents: 'auto' }}>
            {
              item.menuItems && item.menuItems.map((nestedItem, index) => {
                return (
                  <NavNestedMenuItem key={`menu-${index}`} onClick={onClick} item={nestedItem} />
                )
              })
            }
          </div>
        </Menu>
      }
    </MenuItem>
  )
}

export default NavNestedMenuItem
