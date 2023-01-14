import { styled } from '@mui/material'
import { HashLink } from 'react-router-hash-link';

export const NavMenuItemContainer = styled('div')`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 6px 13px;
`

export const NavMenuItemLink = styled(HashLink)(({theme}) => `
  display: flex;
  text-decoration: none;
  color: ${theme.palette.common.white};
`)

export const NavMenuTitleContainer = styled('p')`
  display: flex;
  flex: 1;
`
