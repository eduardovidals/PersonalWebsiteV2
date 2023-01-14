import React from 'react'
import { INavMenuItem } from 'components/lib/NavMenu/types/interfaces'
import { Menu, MenuItem, PopoverOrigin } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { NavMenuTitleContainer } from '../NavMenuItem/NavMenuItem.styles'
import { Link } from 'react-router-dom'


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

  const handleMouseEnter = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: React.MouseEvent<any>) => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<any>) => {
    event.stopPropagation()
    if (isLeafNode) {
      onClick()
    }
  }

  return (
    <MenuItem
      disableRipple
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleClose}
    >
      <Link to={{hash: 'dsd', pathname: ''}}>
        {item.type === 'simple' ? item.title : ''}
        {hasChildrenItems && <ArrowRightIcon />}
      </Link>
      {
        hasChildrenItems &&
        // "pointerEvents: none" to prevent invisible Popover wrapper div to capture mouse events
        <Menu
          style={{ pointerEvents: 'none' }} anchorEl={anchorEl} open={open}
          anchorOrigin={anchorOrigin} transformOrigin={transformOrigin}
        >
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
