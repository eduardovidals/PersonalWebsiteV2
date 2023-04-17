import { styled } from '@mui/material'
import { HashLink } from 'react-router-hash-link';

export const NavMenuItemContainer = styled('div')`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const NavMenuItemLink = styled(HashLink)(({theme}) => `
  display: flex;
  text-decoration: none;
  color: ${theme.palette.common.white};
  padding: 8px 13px;
  font-size: 0.9rem;
`)

export const NavMenuTitleContainer = styled('p')`
  display: flex;
  flex: 1;
`

export const NavMenuItemDropdownText = styled('p')(({theme}) => `
  display: flex;
  text-decoration: none;
  color: ${theme.palette.common.white};
  padding: 8px 13px;
  flex: 1;
  font-size: 0.9rem;
`);
