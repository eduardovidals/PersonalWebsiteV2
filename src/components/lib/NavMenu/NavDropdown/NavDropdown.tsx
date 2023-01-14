import React from 'react'
import { Menu, PopoverOrigin } from '@mui/material'
import { INavMenuItem } from 'components/lib/NavMenu/types/interfaces'
import NavMenuItem from 'components/lib/NavMenu/NavMenuItem/NavMenuItem'

interface NavDropdownProps {
  open: boolean,
  anchorEl: any,
  menuItems: INavMenuItem[],
  handleClose: () => void,
  depthLevel: number
}

function NavDropdown(props: NavDropdownProps) {
  const { open, anchorEl, menuItems, depthLevel, handleClose } = props

  const anchorOrigin: PopoverOrigin = depthLevel === 0 ? {
    vertical: 'bottom',
    horizontal: 'center',
  } : {
    vertical: 'top',
    horizontal: 'left',
  }

  const transformOrigin: PopoverOrigin = depthLevel === 0 ? {
    vertical: 'top',
    horizontal: 'center',
  } : {
    vertical: 'top',
    horizontal: 'right',
  }

  return (
    <Menu anchorEl={anchorEl} open={open} anchorOrigin={anchorOrigin}
          style={{ pointerEvents: depthLevel === 0 ? 'auto' : 'none' }} transformOrigin={transformOrigin}
          MenuListProps={{
            style: { padding: 0 },
            onMouseLeave: handleClose,
          }}>
      {depthLevel === 0 ?
        menuItems.map((menuItem, index) => {
          return (
            <NavMenuItem key={`menu-${depthLevel}-${index}`} menuItem={menuItem} depthLevel={depthLevel + 1} />
          )
        })
        :
        <div style={{ pointerEvents: 'auto' }}>
          {
            menuItems.map((menuItem, index) => {
              return (
                <NavMenuItem key={`menu-${depthLevel}-${index}`} menuItem={menuItem} depthLevel={depthLevel + 1} />
              )
            })
          }
        </div>
      }
    </Menu>
  )
}

export default NavDropdown
