import { Drawer, styled } from '@mui/material'
import { HashLink } from 'react-router-hash-link'

export const NavMobileDrawer = styled(Drawer)`
  margin-top: 20px;
`
export const NavMobileContainer = styled('nav')`
  width: 250px;
`

export const NavMobileItem = styled(HashLink)`
  color: inherit;
  text-decoration: none;
  flex: 1;
`
